import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-heading font-bold text-primary">Перформанс-терапия</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm hover:text-primary transition-colors">О курсе</a>
            <a href="#program" className="text-sm hover:text-primary transition-colors">Программа</a>
            <a href="#teacher" className="text-sm hover:text-primary transition-colors">Преподаватель</a>
            <a href="#results" className="text-sm hover:text-primary transition-colors">Результаты</a>
            <a href="#price" className="text-sm hover:text-primary transition-colors">Стоимость</a>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <a href="#signup">Записаться</a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-primary font-semibold">Психологический актёрский курс</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Решайте психологические задачи через <span className="text-primary">творчество</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                На курсе «Перформанс-терапия» мы прорабатываем психологические запросы через творческое самовыражение — 
                мягко, креативно и эффективно
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="#signup">Записаться на курс</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="#about">Узнать подробнее</a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/4bcfeacf-95c5-4147-a3d3-55655fc50ed7.jpg" 
                alt="Перформанс-терапия"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">О курсе</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Theater" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Что это?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Перформанс-терапия — это психотерапевтическая практика через актёрское мастерство. 
                  Главное слово здесь «терапия».
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Для кого?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Для взрослых, которые забыли о своей талантливости. Для тех, кого в детстве 
                  «закрывали рот» или одёргивали за яркие проявления.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Зачем?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Научиться свободе самовыражения, прожить невыраженные эмоции, 
                  расширить репертуар жизненных ролей и обрести уверенность.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-center mb-6">Как это работает?</h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <p className="text-lg leading-relaxed">
                  <strong>Находим вашу идеальную роль.</strong> С помощью специальных упражнений ищем скрытую субличность — 
                  ваше идеальное Я, которое есть в потенциале, но ещё не проявлено.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <p className="text-lg leading-relaxed">
                  <strong>Раскрываем ваши качества.</strong> Это те способности, которые уже есть у вас, но недостаточно развиты или неосознаваемы. 
                  Они нужны для полноценного репертуара жизненных ролей — чтобы быть уверенным, адаптивным и успешным.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <p className="text-lg leading-relaxed">
                  <strong>Создаём персонажа и пьесу.</strong> Под каждого участника мы создаём его уникального героя. 
                  Даже пьеса создаётся под конкретную группу и ваши запросы.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <p className="text-lg leading-relaxed">
                  <strong>Прорабатываем через творчество.</strong> Через актёрское мастерство, речь, вокал и импровизацию 
                  мягко и эффективно решаем ваши психологические задачи.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Программа занятий</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">На курсе вы освоите</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Drama" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-center mb-3">Актёрское мастерство</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Техника актёра, работа с ролью, сценическое движение и присутствие.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Mic" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-center mb-3">Голос и речь</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Постановка голоса, дикция, интонации. Учимся говорить уверенно и выразительно.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Sparkles" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-center mb-3">Импровизация</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Развиваем спонтанность, креативность и умение действовать в моменте.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Music" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-center mb-3">Вокал</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Раскрываем голосовые возможности, работаем с дыханием и самовыражением через пение.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Waves" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-center mb-3">Танцевальная терапия</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Освобождаем тело, учимся выражать эмоции через движение.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-semibold text-center mb-4">
                <Icon name="Award" className="inline mr-2 text-primary" size={28} />
                Работаем со страхами
              </h3>
              <p className="text-center text-lg text-muted-foreground leading-relaxed">
                Особое внимание уделяем преодолению страха публики и публичных выступлений. 
                Создаём безопасное пространство для самовыражения и экспериментов.
              </p>
            </div>
            
            <div className="bg-primary/10 rounded-2xl p-8 border-2 border-primary">
              <h3 className="text-2xl font-heading font-semibold text-center mb-4">
                <Icon name="Sparkle" className="inline mr-2 text-primary" size={28} />
                Выпускной спектакль
              </h3>
              <p className="text-center text-lg text-foreground leading-relaxed">
                Создаём пьесу специально под ваш запрос и играем выпускной спектакль 
                <strong>на профессиональной сцене</strong>. Это кульминация вашего пути.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="teacher" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Ваш преподаватель</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-heading font-bold mb-4">Светлана Алексеевна Кузикова</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Icon name="GraduationCap" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg">Профессиональный театральный режиссёр</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Heart" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg">Дипломированный психолог, арт-терапевт</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Star" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg">Сертифицированный гештальт-терапевт</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Светлана — уникальный специалист, сочетающий глубокие знания театрального искусства 
                с профессиональными навыками психотерапии. Её подход позволяет участникам не просто 
                освоить актёрское мастерство, но и проработать внутренние блоки, мешающие самовыражению.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="MapPin" size={20} />
                <span>г. Краснодар</span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img 
                src="https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/f984e21c-d32b-4762-9cd5-661a0862245f.jpg" 
                alt="Светлана Алексеевна Кузикова"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Результаты курса</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Что вы получите</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2">Уверенность в себе</h3>
                    <p className="text-muted-foreground">
                      Преодолеете страх публичных выступлений и обретёте внутреннюю опору
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2">Свобода самовыражения</h3>
                    <p className="text-muted-foreground">
                      Научитесь выражать свои чувства и эмоции без стеснения
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2">Проработка травм</h3>
                    <p className="text-muted-foreground">
                      Исцелите детские травмы, связанные с подавлением самовыражения
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2">Навыки для жизни</h3>
                    <p className="text-muted-foreground">
                      Актёрское мастерство применимое в повседневной жизни и карьере
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2">Контакт с собой</h3>
                    <p className="text-muted-foreground">
                      Углубите понимание себя, своих желаний и потребностей
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-2">Расширение ролей</h3>
                    <p className="text-muted-foreground">
                      Откроете новые грани своей личности и поведенческие паттерны
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/c425d149-7ace-4a20-aaf3-1254f2130d9d.jpg" 
              alt="Участники курса"
              className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Стоимость участия</h2>
          
          <Card className="border-2 border-primary shadow-2xl">
            <CardContent className="pt-8 pb-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-heading font-bold mb-4">Курс «Перформанс-терапия»</h3>
                <div className="text-5xl font-heading font-bold text-primary mb-2">
                  Уточняйте
                </div>
                <p className="text-muted-foreground">Стоимость и расписание обсуждаются индивидуально</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={24} />
                  <span>Групповые занятия в безопасной атмосфере</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={24} />
                  <span>Профессиональное сопровождение психолога</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={24} />
                  <span>Комплексная программа развития</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={24} />
                  <span>Все материалы для занятий включены</span>
                </div>
              </div>

              <Button size="lg" className="w-full text-lg" asChild>
                <a href="#signup">Записаться на курс</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="signup" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Запись на курс</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку, и мы свяжемся с вами для уточнения деталей
          </p>

          <Card className="border-2 shadow-xl">
            <CardContent className="pt-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение (необязательно)</label>
                  <Textarea 
                    placeholder="Расскажите, что вас интересует или какие у вас вопросы"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">Перформанс-терапия</h3>
              <p className="text-muted-foreground mb-4">
                Уникальный курс актёрского мастерства и театротерапии в Краснодаре
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="MapPin" size={20} />
                  <span>г. Краснодар</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Phone" size={20} />
                  <span>+7 (___) ___-__-__</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Mail" size={20} />
                  <span>info@example.ru</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Преподаватель</h4>
              <p className="text-muted-foreground">
                Светлана Алексеевна Кузикова<br/>
                Театральный режиссёр, психолог,<br/>
                арт-терапевт, гештальт-терапевт
              </p>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
            © 2024 Перформанс-терапия. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}