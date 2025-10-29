import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Consent() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              На главную
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8">Согласие на обработку персональных данных</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <section className="bg-secondary/30 p-6 rounded-lg border-l-4 border-primary">
            <p className="font-semibold text-foreground mb-4">«Настоящим я даю согласие на обработку персональных данных»</p>
            <p>Внося любые персональные данные в данную форму, вы даете согласие на обработку своих персональных данных.</p>
          </section>

          <p>Заполняя настоящую форму, в соответствии с требованиями статьи 9 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных», я подтверждаю свое согласие на обработку вносимых в форму моих персональных данных, лицом, оказывающим услуги на основании данной формы (далее Сайт), в том числе:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>фамилию, имя, отчество;</li>
            <li>контактный номер телефона;</li>
            <li>адрес электронной почты;</li>
          </ul>

          <p className="mt-6">Целью обработки персональных данных является оказание мне услуг на основании заполненной формы.</p>

          <p>Настоящее согласие действует бессрочно, срок хранения моих персональных данных не ограничен.</p>

          <p>Оставляю за собой право отозвать свое согласие посредством составления соответствующего письменного документа, который может быть направлен мной по почте <a href="mailto:s_kuzikova@mail.ru" className="text-primary hover:underline">s_kuzikova@mail.ru</a> заказным письмом с уведомлением о вручении либо вручен лично под расписку представителю автору проекта.</p>
        </div>
      </main>
    </div>
  );
}