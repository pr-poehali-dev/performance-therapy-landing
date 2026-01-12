import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  scrollToForm: () => void;
}

export default function HeroSection({ scrollToForm }: HeroSectionProps) {
  return (
    <section className="pt-28 md:pt-32 pb-8 md:pb-12 px-4 relative overflow-hidden min-h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/a5dabef9-cd10-4ae7-9bb9-1717bd3ffad3.jpg)'}} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/70" />
      <div className="absolute inset-0 bg-velvet-texture bg-[length:20px_20px] opacity-10" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center">
          <div className="animate-fade-in">
            <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-primary/20 border border-primary/50 rounded-full mb-4 md:mb-6 animate-shimmer bg-[length:200%_100%] bg-gold-shimmer leading-none">
              <span className="text-primary font-semibold text-base md:text-lg tracking-wider leading-none inline-block">✨ Психотерапевтический актёрский курс</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground mb-6 md:mb-8 leading-tight">
              Решайте психологические задачи через <span className="text-primary text-4xl sm:text-5xl md:text-7xl lg:text-8xl drop-shadow-[0_0_30px_rgba(255,215,0,0.6)]">творчество</span>
            </h2>
            <p className="text-2xl md:text-3xl text-foreground mb-6 md:mb-8 leading-relaxed font-medium max-w-4xl mx-auto">
              На курсе «Перформанс-терапия» мы прорабатываем психологические запросы через творческое самовыражение — 
              мягко, креативно и эффективно
            </p>
            <div className="mb-6 md:mb-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/50">
                <Icon name="CalendarCheck" className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-foreground font-semibold text-lg md:text-xl">Старт: 19 января 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full border border-red-500/50">
                <Icon name="Users" className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-foreground font-semibold text-base md:text-lg lg:text-xl whitespace-nowrap">Мест нет</span>
              </div>
            </div>
            <p className="text-center text-foreground mb-6 text-lg md:text-xl font-semibold max-w-3xl mx-auto bg-primary/10 py-3 px-6 rounded-lg border border-primary/30">
              Запись на следующий поток начнётся с июля 2026 года, старт нового курса в сентябре 2026 года
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center">
              <Button onClick={scrollToForm} size="lg" className="text-xl md:text-2xl px-8 md:px-10 py-4 sm:py-5 md:py-6 lg:py-7 hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/60 relative overflow-hidden group bg-gradient-to-r from-primary via-amber-500 to-primary">
                <span className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/cf40df2a-7a30-46cf-b5c3-0f732913d5a8.jpg')] bg-contain bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-300 mix-blend-overlay" />
                <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  <span className="text-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">🎭</span> Подать заявку
                </span>
              </Button>
              <Button size="lg" variant="outline" className="text-xl md:text-2xl px-8 md:px-10 py-4 sm:py-5 md:py-6 lg:py-7 hover:scale-105 transition-all duration-300 border-primary/50 hover:bg-primary/10" asChild>
                <a href="#about">Узнать подробнее</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}