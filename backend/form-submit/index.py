import json
import os
import urllib.request
import urllib.parse
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Обработка заявок с формы сайта и отправка уведомлений в Telegram.
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
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('name', 'Не указано')
    phone = body_data.get('phone', 'Не указано')
    message = body_data.get('message', 'Нет сообщения')
    
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    print(f"Bot token exists: {bool(bot_token)}")
    print(f"Chat ID exists: {bool(chat_id)}")
    print(f"Form data: name={name}, phone={phone}")
    
    if not bot_token or not chat_id:
        print("ERROR: Telegram credentials not configured")
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True, 
                'message': 'Заявка принята! Мы свяжемся с вами в ближайшее время.',
                'note': 'Telegram notifications not configured'
            }),
            'isBase64Encoded': False
        }
    
    telegram_message = (
        f"🎭 Новая заявка на курс \"Перформанс-терапия\"\n\n"
        f"👤 Имя: {name}\n"
        f"📱 Телефон: {phone}\n"
        f"💬 Сообщение: {message}"
    )
    
    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': telegram_message
    }).encode()
    
    req = urllib.request.Request(url, data=data)
    
    try:
        print(f"Sending telegram message to chat_id: {chat_id}")
        with urllib.request.urlopen(req, timeout=10) as response:
            response_data = response.read()
            print(f"Telegram API response: {response_data.decode()}")
            
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Заявка отправлена!'}),
            'isBase64Encoded': False
        }
    except Exception as e:
        print(f"ERROR sending telegram message: {str(e)}")
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True, 
                'message': 'Заявка принята! Мы свяжемся с вами.',
                'error': str(e)
            }),
            'isBase64Encoded': False
        }