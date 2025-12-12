import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function PriceSection() {
  return (
    <section id="price" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12 animate-fade-in">Стоимость курса</h2>
        
        <Card className="border-4 border-primary shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 animate-scale-in">
          <CardContent className="pt-8 pb-8 px-6 md:px-12">
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 animate-pulse">
                <span className="text-primary font-bold">Полный курс</span>
              </div>
              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-heading font-bold text-muted-foreground line-through mr-4">36 000 ₽</span>
              </div>
              <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">15 000 ₽</div>
              <p className="text-muted-foreground text-lg">за весь курс</p>
              <p className="text-primary font-semibold mt-2">при бронировании до 25 декабря 2025 г.</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">3 месяца обучения (12 занятий)</p>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Занятия 1 раз в неделю по 3 часа</p>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Работа с профессиональным режиссёром и психологом</p>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Индивидуальный подход к каждому участнику</p>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Создание уникального персонажа и пьесы</p>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-lg">Выступление на сцене театра «Комильфо»</p>
              </div>
            </div>
            
            <Button size="lg" className="w-full text-lg hover:scale-105 transition-transform duration-300" asChild>
              <a href="#signup">Записаться на курс</a>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-muted-foreground">
          <p className="text-sm">Возможна оплата частями. Подробности уточняйте при записи.</p>
        </div>
      </div>
    </section>
  );
}