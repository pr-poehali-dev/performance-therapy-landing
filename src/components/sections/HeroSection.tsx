import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 rounded-full mb-3 md:mb-4 animate-pulse">
              <span className="text-primary font-semibold text-sm md:text-base">Психологический актёрский курс</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Решайте психологические задачи через <span className="text-primary">творчество</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              На курсе «Перформанс-терапия» мы прорабатываем психологические запросы через творческое самовыражение — 
              мягко, креативно и эффективно
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button size="lg" className="text-base md:text-lg px-6 md:px-8 hover:scale-105 transition-transform duration-300" asChild>
                <a href="#signup">Записаться на курс</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 hover:scale-105 transition-transform duration-300" asChild>
                <a href="#about">Узнать подробнее</a>
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/4bcfeacf-95c5-4147-a3d3-55655fc50ed7.jpg" 
              alt="Перформанс-терапия"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
