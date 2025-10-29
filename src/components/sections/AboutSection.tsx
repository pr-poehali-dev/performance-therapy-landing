import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12 animate-fade-in">Что такое перформанс-терапия?</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-in-left">
            <CardContent className="pt-6">
              <Icon name="Drama" className="text-primary mb-4" size={48} />
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">Творческий подход</h3>
              <p className="text-muted-foreground leading-relaxed">
                Мы объединяем психологию и актёрское мастерство. Вы создаёте персонажа, воплощаете его в образе, 
                проживаете его историю — и через это решаете собственные внутренние задачи
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-in-right">
            <CardContent className="pt-6">
              <Icon name="Heart" className="text-primary mb-4" size={48} />
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">Безопасная среда</h3>
              <p className="text-muted-foreground leading-relaxed">
                Занятия проходят в атмосфере доверия и поддержки. Здесь можно экспериментировать, ошибаться 
                и открывать новые грани себя без страха осуждения
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
            <Icon name="Users" className="text-primary mb-3" size={40} />
            <h4 className="font-semibold mb-2">Групповой формат</h4>
            <p className="text-sm text-muted-foreground">Работа в группе до 12 человек</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Icon name="Clock" className="text-primary mb-3" size={40} />
            <h4 className="font-semibold mb-2">Регулярные занятия</h4>
            <p className="text-sm text-muted-foreground">1 раз в неделю по 3 часа</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Icon name="Calendar" className="text-primary mb-3" size={40} />
            <h4 className="font-semibold mb-2">Длительность</h4>
            <p className="text-sm text-muted-foreground">3 месяца (12 занятий)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
