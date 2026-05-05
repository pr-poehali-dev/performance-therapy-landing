import json
import os
import urllib.request
import urllib.parse
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any

def send_telegram(bot_token: str, chat_id: str, message: str) -> None:
    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': message
    }).encode()
    req = urllib.request.Request(url, data=data)
    with urllib.request.urlopen(req, timeout=10) as response:
        print(f"Telegram API response: {response.read().decode()}")

def send_email(name: str, phone: str, message: str) -> None:
    smtp_password = os.environ.get('SMTP_PASSWORD')
    if not smtp_password:
        print("SMTP_PASSWORD not configured, skipping email")
        return

    sender = 's_kuzikova@mail.ru'
    recipient = 's_kuzikova@mail.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка на курс от {name}'
    msg['From'] = sender
    msg['To'] = recipient

    body = (
        f"Новая заявка на курс «Перформанс-терапия»\n\n"
        f"Имя: {name}\n"
        f"Телефон: {phone}\n"
        f"Сообщение: {message}"
    )
    msg.attach(MIMEText(body, 'plain', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(sender, smtp_password)
        server.sendmail(sender, recipient, msg.as_string())
        print(f"Email sent to {recipient}")

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Обработка заявок с формы сайта и отправка уведомлений в Telegram и на email.
    '''
    method: str = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }

    body_data = json.loads(event.get('body', '{}'))
    name = body_data.get('name', 'Не указано')
    phone = body_data.get('phone', 'Не указано')
    message = body_data.get('message', 'Нет сообщения')

    print(f"Form data: name={name}, phone={phone}")

    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')

    telegram_message = (
        f"🎭 Новая заявка на курс \"Перформанс-терапия\"\n\n"
        f"👤 Имя: {name}\n"
        f"📱 Телефон: {phone}\n"
        f"💬 Сообщение: {message}"
    )

    if bot_token and chat_id:
        try:
            print(f"Sending telegram message to chat_id: {chat_id}")
            send_telegram(bot_token, chat_id, telegram_message)
        except Exception as e:
            print(f"ERROR sending telegram: {str(e)}")

    try:
        send_email(name, phone, message)
    except Exception as e:
        print(f"ERROR sending email: {str(e)}")

    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'message': 'Заявка отправлена!'}),
        'isBase64Encoded': False
    }
