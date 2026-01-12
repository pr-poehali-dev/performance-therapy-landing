import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <>
      <footer className="py-6 md:py-10 px-4 bg-secondary/50 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-3">Перформанс-терапия</h3>
              <p className="text-lg md:text-xl text-foreground">
                Психологический актёрский курс для решения внутренних задач через творчество
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-xl md:text-2xl mb-3">Контакты</h4>
              <div className="space-y-2 text-lg md:text-xl">
                <div className="flex items-center gap-2 text-foreground">
                  <Icon name="Phone" className="w-4 h-4 md:w-5 md:h-5" />
                  <a href="tel:+79183111712" className="hover:text-primary transition-colors">+7 918 311 17 12</a>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:s_kuzikova@mail.ru" className="hover:text-primary transition-colors">s_kuzikova@mail.ru</a>
                </div>
                <div className="flex items-start gap-2 text-foreground">
                  <Icon name="MapPin" size={16} className="mt-0.5" />
                  <span>г. Краснодар, ул. Горького, 104, офис 26</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-xl md:text-2xl mb-3">Навигация</h4>
              <nav className="space-y-2 text-lg md:text-xl">
                <a href="#about" className="block text-foreground hover:text-primary transition-colors">О курсе</a>
                <a href="#program" className="block text-foreground hover:text-primary transition-colors">Программа</a>
                <a href="#teacher" className="block text-foreground hover:text-primary transition-colors">Педагог</a>
                <a href="#price" className="block text-foreground hover:text-primary transition-colors">Стоимость</a>
              </nav>
            </div>
          </div>
          
          <div className="pt-6 border-t space-y-4">
            <div className="text-center text-base md:text-lg text-foreground space-y-1">
              <p className="font-semibold">ИП Кузикова Светлана Алексеевна</p>
              <p>ОГРНИП: 318237500160591</p>
              <p>Адрес: г. Краснодар, ул. Горького, 104, офис 26</p>
              <p>Телефон: +7 918 311 17 12 | E-mail: s_kuzikova@mail.ru</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm md:text-base lg:text-lg px-2">
              <a href="/privacy" className="text-foreground hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="/offer" className="text-foreground hover:text-primary transition-colors">Публичная оферта</a>
              <a href="/consent" className="text-foreground hover:text-primary transition-colors">Согласие на обработку данных</a>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://vk.com/theatroterapy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border-2 border-primary/50 hover:border-primary bg-card/50 hover:bg-primary/10 text-foreground hover:text-primary rounded-lg transition-all duration-300 font-semibold text-base md:text-lg"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.81 14.39h-1.58c-.55 0-.72-.44-1.71-1.44-.86-.83-1.24-.94-1.46-.94-.3 0-.38.08-.38.47v1.32c0 .36-.11.57-1.06.57-1.59 0-3.36-.97-4.6-2.78-1.86-2.65-2.37-4.65-2.37-5.05 0-.22.08-.42.47-.42h1.58c.35 0 .48.16.62.54.72 2.09 1.93 3.92 2.43 3.92.19 0 .27-.09.27-.57v-2.2c-.06-1.01-.59-1.1-.59-1.46 0-.18.14-.35.38-.35h2.48c.3 0 .41.16.41.51v2.97c0 .3.14.41.22.41.19 0 .35-.11.7-.46 1.07-1.2 1.84-3.06 1.84-3.06.1-.22.27-.42.62-.42h1.58c.42 0 .51.22.42.51-.16.75-1.85 3.17-1.85 3.17-.16.26-.22.38 0 .68.16.22.7.68 1.06 1.09.65.75 1.15 1.38 1.29 1.82.13.44-.1.66-.53.66z"/>
                </svg>
                Психологический театр
              </a>
            </div>
            
            <p className="text-center text-sm text-muted-foreground">© 2018-2025 гг. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <a
        href="tel:+79183111712"
        className="fixed bottom-20 sm:bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Позвонить по телефону"
      >
        <Icon name="Phone" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </a>
    </>
  );
}