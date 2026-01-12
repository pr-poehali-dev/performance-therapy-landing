import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import FAQSection from "@/components/sections/FAQSection";

interface ContentSectionsProps {
  handleEventClick: (date: string) => void;
  theaterPhotos: Array<{ url: string; alt: string }>;
  graduatePhotos: string[];
  reviews: Array<{ name: string; text: string; rating: number }>;
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
  toggleReview: (index: number) => void;
  expandedReviews: Record<number, boolean>;
  formData: {
    name: string;
    phone: string;
    message: string;
    consent: boolean;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    phone: string;
    message: string;
    consent: boolean;
  }>>;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
}

export default function ContentSections({
  handleEventClick,
  theaterPhotos,
  graduatePhotos,
  reviews,
  currentSlide,
  nextSlide,
  prevSlide,
  toggleReview,
  expandedReviews,
  formData,
  setFormData,
  handleSubmit,
  isSubmitting
}: ContentSectionsProps) {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-10 md:py-14 px-4 bg-secondary/50 border-y-2 border-primary/30 relative">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:30px_30px] opacity-10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 animate-fade-in text-primary drop-shadow-lg">🎭 Что такое перформанс-терапия?</h2>
          
          <div className="max-w-4xl mx-auto text-center mb-12 space-y-3">
            <p className="text-foreground leading-relaxed text-lg md:text-xl">
              Это уникальный арт-терапевтический курс актёрского мастерства. Это театротерапия - групповая психотерапия и индивидуальные сессии, направленные на проработку своих страхов перед публикой и детских травм, связанных с тем, что "закрывали рот" или жестко одергивали яркие проявления вовне
            </p>
            <p className="text-foreground leading-relaxed text-lg md:text-xl">
              Перформанс (с англ. "выступление, показ") учит нас свободе самовыражения, помогает прожить невыраженные эмоции и расширить репертуар своих жизненных ролей
            </p>
          </div>

          <div className="mb-12 grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/30 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 bg-card/80 backdrop-blur-sm hover:scale-105">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Heart" className="text-primary flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Для кого этот курс?</h3>
                </div>
                <p className="text-foreground leading-relaxed text-lg">
                  Программа для взрослых, которые хотят вспомнить о своих талантах и овладеть актерским мастерством «для жизни», проработав психологические барьеры и раскрыв свой потенциал
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Target" className="text-primary flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Главная цель</h3>
                </div>
                <p className="text-foreground leading-relaxed text-lg">
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
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h4 className="font-sans font-bold text-xl tracking-wide">Поиск идеальной роли</h4>
                  <p className="text-foreground leading-relaxed text-lg">
                    С помощью специальных упражнений находим вашу идеальную роль — скрытые качества, которые нужно раскрыть для уверенности и успеха
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h4 className="font-sans font-bold text-xl tracking-wide">Создание персонажа</h4>
                  <p className="text-foreground leading-relaxed text-lg">
                    Создаём уникального персонажа для пьесы на основе вашего запроса. Пьеса пишется под конкретную группу и её участников
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h4 className="font-sans font-bold text-xl tracking-wide">Трансформация через игру</h4>
                  <p className="text-foreground leading-relaxed text-lg">
                    Проживая роль на сцене, развиваете недостающие качества и становитесь более уверенными, адаптивными и результативными
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mb-8 p-6 md:p-8 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary/40 rounded-2xl text-center animate-pulse-slow">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Icon name="CalendarCheck" className="text-primary" size={32} />
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Старт курса</h3>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-foreground">19 января 2026 года</p>
            <p className="text-lg md:text-xl text-foreground/80 mt-2">Не упустите возможность начать свою трансформацию!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-card/95 backdrop-blur rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 border-primary/30 hover:border-primary">
              <Icon name="Users" className="text-primary mb-4" size={56} />
              <h4 className="font-heading font-bold mb-3 text-xl md:text-2xl text-foreground">Групповой формат</h4>
              <p className="text-lg md:text-xl text-foreground font-medium">Работа в группе до 10 человек</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-card/95 backdrop-blur rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 border-primary/30 hover:border-primary" style={{ animationDelay: '0.1s' }}>
              <Icon name="Clock" className="text-primary mb-4" size={56} />
              <h4 className="font-heading font-bold mb-3 text-xl md:text-2xl text-foreground">Регулярные занятия</h4>
              <p className="text-lg md:text-xl text-foreground font-medium">2 раза в неделю по 2 часа</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-card/95 backdrop-blur rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 border-primary/30 hover:border-primary" style={{ animationDelay: '0.2s' }}>
              <Icon name="Calendar" className="text-primary mb-4" size={56} />
              <h4 className="font-heading font-bold mb-3 text-xl md:text-2xl text-foreground">Длительность</h4>
              <p className="text-lg md:text-xl text-foreground font-medium">3 месяца (24 занятия)</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="text-base md:text-xl lg:text-2xl px-6 md:px-10 lg:px-12 py-5 md:py-6 lg:py-8 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/50 bg-gradient-to-r from-primary to-primary/80"
              onClick={() => handleEventClick('пробное занятие')}
              asChild
            >
              <a href="#signup">
                <Icon name="Calendar" className="mr-2" size={24} />
                <span className="hidden sm:inline">Записаться на пробное бесплатно</span>
                <span className="sm:hidden">Пробное бесплатно</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary/10 via-amber-500/10 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:40px_40px] opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-shimmer bg-[length:200%_100%]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-primary/30 border-2 border-primary rounded-full mb-4">
              <span className="text-lg font-bold text-primary">Уникальность подхода</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary drop-shadow-lg">
              Почему перформанс-терапия — это особенный опыт?
            </h2>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
              Это не просто театральные занятия и не классическая психотерапия. Это синтез искусства и психологии, где каждая роль — это шаг к вашей лучшей версии
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card/95 backdrop-blur border-2 border-primary/40 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] group">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-primary to-amber-500 p-4 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <Icon name="Sparkles" className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Индивидуальный подход</h3>
                </div>
                <ul className="space-y-4 text-lg text-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <span>Роли создаются специально под ваши запросы и особенности личности</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <span>Пьесы пишутся под конкретную группу, учитывая цели каждого участника</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <span>Баланс между групповой динамикой и индивидуальной трансформацией</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/95 backdrop-blur border-2 border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:scale-[1.02] group">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-primary p-4 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <Icon name="Brain" className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">Двойная экспертиза</h3>
                </div>
                <ul className="space-y-4 text-lg text-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                    <span>Режиссёр + психолог в одном лице — уникальная комбинация навыков</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                    <span>Работа с подсознанием через метафору и символизм театра</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                    <span>Безопасное пространство для экспериментов и самопознания</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/20 via-amber-500/20 to-primary/20 border-2 border-primary/50 backdrop-blur-sm">
            <CardContent className="pt-10 pb-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-primary to-amber-500 p-6 rounded-2xl shadow-xl">
                    <Icon name="Trophy" className="text-primary-foreground" size={56} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-primary">Результат, который остаётся с вами</h3>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    После завершения курса вы не просто получаете навыки актерского мастерства. Вы становитесь более уверенными в публичных выступлениях, легче адаптируетесь к новым ролям в жизни, умеете лучше понимать себя и других. Эти изменения остаются с вами навсегда
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-12 md:py-16 px-4 bg-secondary/50 border-y-2 border-primary/30 relative">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:30px_30px] opacity-10" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-primary drop-shadow-lg">Программа курса</h2>
          
          <div className="space-y-6">
            <Card className="border-2 border-primary/30 hover:shadow-xl transition-all duration-300 bg-card/95 backdrop-blur-sm hover:scale-[1.02]">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-primary">Знакомство и диагностика</h3>
                    <p className="text-lg text-foreground leading-relaxed mb-3">
                      Первые занятия посвящены созданию безопасной атмосферы в группе. Мы проводим психологическую диагностику через творческие упражнения, выявляем ваши запросы и цели
                    </p>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="text-base">4-6 занятий</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 hover:shadow-xl transition-all duration-300 bg-card/95 backdrop-blur-sm hover:scale-[1.02]">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-primary">Актёрский тренинг</h3>
                    <p className="text-lg text-foreground leading-relaxed mb-4">
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
                    </ul>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="text-base">6-8 занятий</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 hover:shadow-xl transition-all duration-300 bg-card/95 backdrop-blur-sm hover:scale-[1.02]">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-primary">Работа над ролью</h3>
                    <p className="text-lg text-foreground leading-relaxed mb-3">
                      Создание персонажа на основе вашего запроса. Погружение в роль, изучение характера, мотивации, особенностей поведения. Работа над текстом и подтекстом
                    </p>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="text-base">8-10 занятий</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 hover:shadow-xl transition-all duration-300 bg-card/95 backdrop-blur-sm hover:scale-[1.02]">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-primary">Репетиции и выступление</h3>
                    <p className="text-lg text-foreground leading-relaxed mb-4">
                      Репетиции спектакля, работа над сценами, взаимодействием с партнёрами. Финальное выступление перед зрителями — кульминация вашей трансформации
                    </p>
                    <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                      <p className="text-base text-foreground font-medium">
                        🎭 Итоговый показ спектакля для друзей и близких — возможность поделиться своими достижениями!
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/80 mt-3">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="text-base">4-6 занятий</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block p-6 md:p-8 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary/40 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-primary">Итого: 24 занятия за 3 месяца</h3>
              <p className="text-lg md:text-xl text-foreground">
                От первого знакомства до триумфа на сцене — полное погружение в искусство трансформации
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section id="teacher" className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:40px_40px] opacity-10" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-primary drop-shadow-lg">Ваш педагог</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Светлана Кузикова</h3>
              <div className="space-y-4 text-lg text-foreground">
                <p className="leading-relaxed">
                  Режиссёр театра Комильфо, психолог и преподаватель с уникальным опытом синтеза искусства и психологии
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="GraduationCap" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-primary">Образование и сертификация:</p>
                      <p>Высшее психологическое образование</p>
                      <p className="mt-1">Высшее театрально-режиссерское образование</p>
                      <p className="mt-1">Сертификация по гештальтерапии МГИ</p>
                      <p className="mt-1">Сертификация по арт-терапии и обучение в Германии (Фрайбург)</p>
                      <p className="mt-1">Член Российской арт-терапевтической ассоциации</p>
                      <p className="mt-1">Повышение квалификации по режиссуре, сценической речи и актерскому мастерству в ГИТИС и на курсе И.Я. Стависского</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Award" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-primary">Опыт работы:</p>
                      <p>Более 30 лет общего опыта</p>
                      <p className="mt-1">17 лет психологической практики</p>
                      <p className="mt-1">8 лет назад создала свой театр "Комильфо"</p>
                      <p className="mt-1">Автор уникальной методики перформанс-терапии</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Users" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-primary">Достижения:</p>
                      <p>Более 6000 учеников</p>
                      <p className="mt-1">20+ поставленных спектаклей</p>
                      <p className="mt-1">Победитель грантового конкурса Президентского Фонда культурных инициатив в 2026 году</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-amber-500 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
                <img 
                  src="https://cdn.poehali.dev/files/photo_2026-01-05_11-22-56.jpg" 
                  alt="Светлана Кузикова" 
                  className="relative w-full rounded-2xl shadow-2xl border-4 border-primary/30 group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-primary/10 via-amber-500/10 to-primary/10 border-2 border-primary/40 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <div className="text-center max-w-4xl mx-auto">
                <Icon name="Quote" className="text-primary mx-auto mb-4" size={40} />
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed italic mb-4">
                  "Театр — это волшебное пространство, где каждый может стать героем своей истории. Моя задача — помочь вам раскрыть те грани личности, которые откроют новые возможности в жизни"
                </blockquote>
                <p className="text-lg font-semibold text-primary">— Светлана Кузикова</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Graduates Section */}
      <section id="graduates" className="py-12 md:py-16 px-4 bg-secondary/50 border-y-2 border-primary/30 relative">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:30px_30px] opacity-10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary drop-shadow-lg">Наши выпускники</h2>
          <p className="text-xl md:text-2xl text-center text-foreground/90 mb-12 max-w-3xl mx-auto">
            Более 200 человек прошли путь трансформации через перформанс-терапию
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {graduatePhotos.map((photo, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-xl aspect-square border-2 border-primary/30 hover:border-primary transition-all duration-300"
              >
                <img 
                  src={photo} 
                  alt={`Выпускник ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-primary/30 bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={40} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <p className="text-lg text-foreground">Выпускников</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" className="text-primary" size={40} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-lg text-foreground">Спектаклей</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" className="text-primary" size={40} />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-lg text-foreground">Лет опыта</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Theater Photos Section */}
      <section id="photos" className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:40px_40px] opacity-10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary drop-shadow-lg">Атмосфера театра Комильфо</h2>
          <p className="text-xl md:text-2xl text-center text-foreground/90 mb-12 max-w-3xl mx-auto">
            Погрузитесь в мир творчества и магии сцены
          </p>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl">
              <img 
                src={theaterPhotos[currentSlide].url}
                alt={theaterPhotos[currentSlide].alt}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-lg md:text-xl font-medium text-center">
                  {theaterPhotos[currentSlide].alt}
                </p>
              </div>
            </div>

            <Button
              onClick={prevSlide}
              size="icon"
              variant="outline"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-primary/30 hover:border-primary w-12 h-12 rounded-full shadow-xl"
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>

            <Button
              onClick={nextSlide}
              size="icon"
              variant="outline"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-primary/30 hover:border-primary w-12 h-12 rounded-full shadow-xl"
            >
              <Icon name="ChevronRight" size={24} />
            </Button>

            <div className="flex justify-center gap-2 mt-6">
              {theaterPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {}}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary w-8' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Перейти к фото ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-12 md:py-16 px-4 bg-secondary/50 border-y-2 border-primary/30 relative">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:30px_30px] opacity-10" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary drop-shadow-lg">Отзывы выпускников</h2>
          <p className="text-xl md:text-2xl text-center text-foreground/90 mb-12 max-w-3xl mx-auto">
            Истории трансформации от людей, которые прошли этот путь
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 border-primary/30 bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-amber-500 fill-amber-500" size={20} />
                    ))}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-primary">{review.name}</h4>
                  <div className="relative">
                    <p className={`text-foreground leading-relaxed ${
                      expandedReviews[index] ? '' : 'line-clamp-4'
                    }`}>
                      {review.text}
                    </p>
                    {review.text.length > 200 && (
                      <button
                        onClick={() => toggleReview(index)}
                        className="text-primary hover:text-primary/80 font-medium mt-2 inline-flex items-center gap-1"
                      >
                        {expandedReviews[index] ? (
                          <>
                            Свернуть <Icon name="ChevronUp" size={16} />
                          </>
                        ) : (
                          <>
                            Читать полностью <Icon name="ChevronDown" size={16} />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price" className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary/10 via-amber-500/10 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:40px_40px] opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-shimmer bg-[length:200%_100%]" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary drop-shadow-lg">Стоимость обучения</h2>
          <p className="text-xl md:text-2xl text-center text-foreground/90 mb-12 max-w-3xl mx-auto">
            Инвестиция в себя, которая окупится многократно
          </p>
          
          <Card className="border-4 border-primary/40 bg-card/95 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-2xl mx-auto">
            <CardContent className="pt-10 pb-10">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-primary/20 border-2 border-primary rounded-full mb-4">
                  <span className="text-lg font-bold text-primary">Полный курс перформанс-терапии</span>
                </div>
                <div className="text-6xl md:text-7xl font-bold text-primary mb-2">30 000₽</div>
                <p className="text-xl text-foreground/80">за весь курс (3 месяца)</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">24 занятия по 2 часа</p>
                    <p className="text-sm text-foreground/70">48 часов практической работы</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Индивидуальная роль</p>
                    <p className="text-sm text-foreground/70">Созданная специально под вас</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Психологическая поддержка</p>
                    <p className="text-sm text-foreground/70">На протяжении всего курса</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Выступление на сцене</p>
                    <p className="text-sm text-foreground/70">Итоговый показ спектакля</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Все материалы включены</p>
                    <p className="text-sm text-foreground/70">Реквизит, костюмы, пьеса</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-amber-500/20 to-primary/20 border-2 border-amber-500/40 rounded-xl mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Gift" className="text-amber-500" size={32} />
                  <h3 className="text-2xl font-bold text-primary">Специальное предложение</h3>
                </div>
                <p className="text-lg text-foreground mb-2">
                  Первое пробное занятие — <span className="font-bold text-primary">БЕСПЛАТНО!</span>
                </p>
                <p className="text-base text-foreground/80">
                  Познакомьтесь с методикой, преподавателем и атмосферой курса без обязательств
                </p>
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="text-xl px-12 py-8 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/50 bg-gradient-to-r from-primary to-amber-500 w-full"
                  onClick={() => handleEventClick('пробное занятие')}
                  asChild
                >
                  <a href="#signup">
                    <Icon name="Calendar" className="mr-2" size={24} />
                    Записаться на бесплатное занятие
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-lg text-foreground/80">
              Возможна рассрочка платежа. Подробности уточняйте при записи
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="signup" className="py-12 md:py-16 px-4 bg-secondary/50 border-y-2 border-primary/30 relative">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:30px_30px] opacity-10" />
        <div className="container mx-auto max-w-2xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary drop-shadow-lg">Записаться на курс</h2>
          <p className="text-xl md:text-2xl text-center text-foreground/90 mb-12">
            Заполните форму, и мы свяжемся с вами в ближайшее время
          </p>
          
          <Card className="border-2 border-primary/30 bg-card/95 backdrop-blur-sm shadow-xl">
            <CardContent className="pt-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium mb-2 text-foreground">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-lg p-6 border-2 border-primary/30 focus:border-primary"
                    placeholder="Как к вам обращаться?"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-medium mb-2 text-foreground">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="text-lg p-6 border-2 border-primary/30 focus:border-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-medium mb-2 text-foreground">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="text-lg p-4 border-2 border-primary/30 focus:border-primary min-h-[120px]"
                    placeholder="Расскажите, что вас привело к нам..."
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, consent: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-foreground leading-relaxed cursor-pointer">
                    Я согласен на обработку персональных данных в соответствии с{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      политикой конфиденциальности
                    </Link>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-xl py-8 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/50 bg-gradient-to-r from-primary to-amber-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" className="mr-2 animate-spin" size={24} />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" className="mr-2" size={24} />
                      Отправить заявку
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center space-y-4">
            <p className="text-lg text-foreground">
              Или свяжитесь с нами напрямую:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+79164168424" 
                className="flex items-center gap-2 text-primary hover:text-primary/80 text-lg font-medium"
              >
                <Icon name="Phone" size={24} />
                +7 (916) 416-84-24
              </a>
              <a 
                href="https://wa.me/79164168424" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 text-lg font-medium"
              >
                <Icon name="MessageCircle" size={24} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}