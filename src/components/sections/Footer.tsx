import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 bg-secondary/50 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">Перформанс-терапия</h3>
            <p className="text-sm text-muted-foreground">
              Психологический актёрский курс для решения внутренних задач через творчество
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Контакты</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Phone" size={16} />
                <a href="tel:+79000000000" className="hover:text-primary transition-colors">+7 (900) 000-00-00</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@komilfo-theatre.ru" className="hover:text-primary transition-colors">info@komilfo-theatre.ru</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Навигация</h4>
            <nav className="space-y-2 text-sm">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">О курсе</a>
              <a href="#program" className="block text-muted-foreground hover:text-primary transition-colors">Программа</a>
              <a href="#teacher" className="block text-muted-foreground hover:text-primary transition-colors">Педагог</a>
              <a href="#price" className="block text-muted-foreground hover:text-primary transition-colors">Стоимость</a>
            </nav>
          </div>
        </div>
        
        <div className="pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 Театр «Комильфо». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
