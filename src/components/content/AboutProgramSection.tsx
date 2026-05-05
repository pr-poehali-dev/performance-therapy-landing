import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AboutProgramSection() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-10 md:py-14 px-4 bg-secondary/50 border-y-2 border-primary/30 relative">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:30px_30px] opacity-10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 animate-fade-in text-primary drop-shadow-lg">🎭 Что такое перформанс-терапия?</h2>
          
          <div className="max-w-4xl mx-auto text-center mb-12 space-y-3">
            <p className="text-foreground leading-relaxed text-xl md:text-2xl">
              Это уникальный арт-терапевтический курс актёрского мастерства. Это театротерапия - групповая психотерапия и индивидуальные сессии, направленные на проработку своих страхов перед публикой и детских травм, связанных с тем, что "закрывали рот" или жестко одергивали яркие проявления вовне
            </p>
            <p className="text-foreground leading-relaxed text-xl md:text-2xl">
              Перформанс (с англ. "выступление, показ") учит нас свободе самовыражения, помогает прожить невыраженные эмоции и расширить репертуар своих жизненных ролей
            </p>
          </div>

          <div className="mb-12 grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 bg-card/80 backdrop-blur-sm hover:scale-105">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Heart" className="text-primary flex-shrink-0 mt-1 w-6 h-6 md:w-8 md:h-8" />
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Для кого этот курс?</h3>
                </div>
                <p className="text-foreground leading-relaxed text-xl">
                  Программа для взрослых, которые хотят вспомнить о своих талантах и овладеть актерским мастерством «для жизни», проработав психологические барьеры и раскрыв свой потенциал
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Target" className="text-primary flex-shrink-0 mt-1 w-6 h-6 md:w-8 md:h-8" />
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Главная цель</h3>
                </div>
                <p className="text-foreground leading-relaxed text-xl">
                  Через творческое самовыражение мягко, креативно и эффективно проработать психологические запросы, найти и проявить скрытые грани личности
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-center text-primary">Как проходит работа</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="bg-primary text-primary-foreground w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg md:text-xl">
                    1
                  </div>
                  <h4 className="font-sans font-bold text-xl md:text-2xl tracking-wide">Поиск идеальной роли</h4>
                  <p className="text-foreground leading-relaxed text-xl">
                    С помощью специальных упражнений находим вашу идеальную роль — скрытые качества, которые нужно раскрыть для уверенности и успеха
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-primary text-primary-foreground w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg md:text-xl">
                    2
                  </div>
                  <h4 className="font-sans font-bold text-xl md:text-2xl tracking-wide">Создание персонажа</h4>
                  <p className="text-foreground leading-relaxed text-xl">
                    Создаём уникального персонажа для пьесы на основе вашего запроса. Пьеса пишется под конкретную группу и её участников
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-primary text-primary-foreground w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg md:text-xl">
                    3
                  </div>
                  <h4 className="font-sans font-bold text-xl md:text-2xl tracking-wide">Трансформация через игру</h4>
                  <p className="text-foreground leading-relaxed text-xl">
                    Проживая роль на сцене, развиваете недостающие качества и становитесь более уверенными, адаптивными и результативными
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-card/95 backdrop-blur rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 border-primary/30 hover:border-primary">
              <Icon name="Users" className="text-primary mb-4 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
              <h4 className="font-heading font-bold mb-3 text-xl md:text-2xl text-foreground">Групповой формат</h4>
              <p className="text-lg md:text-xl text-foreground font-medium">Работа в группе до 8 человек</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-card/95 backdrop-blur rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 border-primary/30 hover:border-primary" style={{ animationDelay: '0.1s' }}>
              <Icon name="Clock" className="text-primary mb-4 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
              <h4 className="font-heading font-bold mb-3 text-xl md:text-2xl text-foreground">Регулярные занятия</h4>
              <p className="text-lg md:text-xl text-foreground font-medium">2 раза в неделю по 2 часа</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-card/95 backdrop-blur rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 border-primary/30 hover:border-primary" style={{ animationDelay: '0.2s' }}>
              <Icon name="Calendar" className="text-primary mb-4 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
              <h4 className="font-heading font-bold mb-3 text-xl md:text-2xl text-foreground">Длительность</h4>
              <p className="text-lg md:text-xl text-foreground font-medium">4 месяца: 64 часа групповой терапии, 2 индивидуальных занятия, выпускной спектакль</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:40px_40px] opacity-10" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary drop-shadow-lg">Программа курса</h2>
          <p className="text-xl md:text-2xl text-center text-foreground/90 mb-12 max-w-3xl mx-auto">
            Путь от знакомства с собой до триумфа на сцене за 4 месяца
          </p>
          
          <div className="space-y-6">
            <Card className="border-2 border-primary/30 hover:shadow-xl transition-all duration-300 bg-card/95 backdrop-blur-sm hover:scale-[1.02]">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-xl md:text-2xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-primary">Знакомство и диагностика</h3>
                    <p className="text-xl text-foreground leading-relaxed mb-3">
                      Первые занятия посвящены созданию безопасной атмосферы в группе. Мы проводим психологическую диагностику через творческие упражнения, выявляем ваши запросы и цели
                    </p>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="text-base">2 занятия</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 hover:shadow-xl transition-all duration-300 bg-card/95 backdrop-blur-sm hover:scale-[1.02]">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-xl md:text-2xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-primary">Актёрский тренинг</h3>
                    <p className="text-xl text-foreground leading-relaxed mb-4">
                      Осваиваем базовые техники актёрского мастерства: работу с телом, голосом, эмоциями. Развиваем воображение и креативность через специальные упражнения
                    </p>
                    <ul className="space-y-2 mb-3">
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-base text-foreground">Техника речи и дикция</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-base text-foreground">Пластика и движение на сцене</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-base text-foreground">Эмоциональная выразительность</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-base text-foreground">Импровизация и спонтанность</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-base text-foreground">Вокалотерапия</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-base text-foreground">Танцевально-двигательная терапия</span>
                      </li>
                    </ul>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="text-base">8 занятий</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 hover:shadow-xl transition-all duration-300 bg-card/95 backdrop-blur-sm hover:scale-[1.02]">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-xl md:text-2xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-primary">Работа над ролью</h3>
                    <p className="text-xl text-foreground leading-relaxed mb-3">
                      Создание персонажа на основе вашего запроса. Погружение в роль, изучение характера, мотивации, особенностей поведения. Работа над текстом и подтекстом
                    </p>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="text-base">10 занятий</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 hover:shadow-xl transition-all duration-300 bg-card/95 backdrop-blur-sm hover:scale-[1.02]">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-xl md:text-2xl flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-primary">Репетиции и выступление</h3>
                    <p className="text-xl text-foreground leading-relaxed mb-4">
                      Репетиции спектакля, работа над сценами, взаимодействием с партнёрами. Финальное выступление перед зрителями — кульминация вашей трансформации
                    </p>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="text-base">4 групповых занятия + 3 индивидуальных</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block p-6 md:p-8 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary/40 rounded-2xl max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-primary">Итого 4 месяца</h3>
              <ul className="text-left space-y-2 text-lg md:text-xl text-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6" />
                  <span>64 часа групповой терапии</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6" />
                  <span>2 индивидуальных занятия</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6" />
                  <span>Выпускной спектакль</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}