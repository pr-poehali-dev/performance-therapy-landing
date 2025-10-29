import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theaterPhotos = [
    {
      url: "https://cdn.poehali.dev/files/ad4aa480-c288-4180-870a-3fa60ea89d60.JPG",
      alt: "Театр Комильфо - спектакль 1"
    },
    {
      url: "https://cdn.poehali.dev/files/4264aae9-273f-486e-bc34-2f4e95de3ea0.JPG",
      alt: "Театр Комильфо - спектакль 2"
    },
    {
      url: "https://cdn.poehali.dev/files/4a4aea76-2e59-4edc-a50e-3974a27f85fb.JPG",
      alt: "Театр Комильфо - спектакль 3"
    },
    {
      url: "https://cdn.poehali.dev/files/65e254ce-c3ca-4262-9469-bdc95143509a.jpg",
      alt: "Театр Комильфо - спектакль 4"
    },
    {
      url: "https://cdn.poehali.dev/files/f073a76f-c1ab-4f58-b847-9e59d047d576.JPG",
      alt: "Театр Комильфо - спектакль 5"
    },
    {
      url: "https://cdn.poehali.dev/files/b88f21da-53fa-4f39-b154-b72a9f939065.JPG",
      alt: "Театр Комильфо - спектакль 6"
    },
    {
      url: "https://cdn.poehali.dev/files/9cfce0a4-1bcf-4d36-ba21-d3d387b99db2.JPG",
      alt: "Театр Комильфо - спектакль 7"
    },
    {
      url: "https://cdn.poehali.dev/files/536cf790-5698-4395-a9e7-8fad63b9403e.jpg",
      alt: "Театр Комильфо - спектакль 8"
    },
    {
      url: "https://cdn.poehali.dev/files/bcc6fc52-1ffb-40f4-aa05-83c30b192b18.JPG",
      alt: "Театр Комильфо - спектакль 9"
    },
    {
      url: "https://cdn.poehali.dev/files/d5b2fd71-7de4-4da6-b518-215a71bda06a.JPG",
      alt: "Театр Комильфо - спектакль 10"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % theaterPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + theaterPhotos.length) % theaterPhotos.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const toggleReview = (index: number) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <h1 className="text-lg md:text-2xl font-heading font-bold text-primary">Перформанс-терапия</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">О курсе</a>
            <a href="#program" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">Программа</a>
            <a href="#results" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">Результаты</a>
            <a href="#teacher" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">Педагог</a>
            <a href="#graduates" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">Выпускники</a>
            <a href="#price" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">Стоимость</a>
          </nav>
          <Button asChild className="hidden md:inline-flex hover:scale-105 transition-transform duration-300">
            <a href="#signup">Записаться</a>
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-all duration-300"
            aria-label="Меню"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className="text-primary" />
          </button>
        </div>
        
        <div className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#about" 
              className="text-base hover:text-primary transition-all duration-300 py-2 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              О курсе
            </a>
            <a 
              href="#program" 
              className="text-base hover:text-primary transition-all duration-300 py-2 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Программа
            </a>
            <a 
              href="#results" 
              className="text-base hover:text-primary transition-all duration-300 py-2 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Результаты
            </a>
            <a 
              href="#teacher" 
              className="text-base hover:text-primary transition-all duration-300 py-2 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Педагог
            </a>
            <a 
              href="#graduates" 
              className="text-base hover:text-primary transition-all duration-300 py-2 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Выпускники
            </a>
            <a 
              href="#price" 
              className="text-base hover:text-primary transition-all duration-300 py-2 hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Стоимость
            </a>
            <Button asChild className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <a href="#signup">Записаться на курс</a>
            </Button>
          </nav>
        </div>
      </header>

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

      <section id="about" className="py-12 md:py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12 animate-fade-in">О курсе</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-slide-in-left">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Icon name="Theater" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Что это?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Перформанс-терапия — это психотерапевтическая практика через актёрское творчество. 
                  Мы используем театр как инструмент исследования себя и решения личных задач.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in delay-100">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Icon name="Users" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Для кого?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Для тех, кто хочет раскрыть свой потенциал, проработать страхи, обрести уверенность и развить навыки самовыражения — 
                  через творчество, а не традиционную терапию.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-slide-in-right">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Icon name="Target" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Зачем?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Чтобы научиться выражать себя свободно, преодолеть внутренние блоки, развить харизму и 
                  обрести навыки, которые пригодятся в жизни и карьере.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-6 md:mb-8">Как это работает?</h3>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm md:text-base">1</div>
                <p className="text-base md:text-lg leading-relaxed">
                  <strong>Собираем запрос.</strong> В начале курса мы выясняем ваши психологические задачи — 
                  это может быть страх публики, неуверенность в себе, сложности в общении или самовыражении.
                </p>
              </div>
              <div className="flex items-start gap-3 md:gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm md:text-base">2</div>
                <p className="text-base md:text-lg leading-relaxed">
                  <strong>Раскрываем ваши качества.</strong> Это те способности, которые уже есть у вас, но недостаточно развиты или неосознаваемы. 
                  Они нужны для полноценного репертуара жизненных ролей — чтобы быть уверенным, адаптивным и успешным.
                </p>
              </div>
              <div className="flex items-start gap-3 md:gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm md:text-base">3</div>
                <p className="text-base md:text-lg leading-relaxed">
                  <strong>Создаём персонажа и пьесу.</strong> Под каждого участника мы создаём его уникального героя. 
                  Даже пьеса создаётся под конкретную группу и ваши запросы.
                </p>
              </div>
              <div className="flex items-start gap-3 md:gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm md:text-base">4</div>
                <p className="text-base md:text-lg leading-relaxed">
                  <strong>Прорабатываем через творчество.</strong> Через актёрское мастерство, речь, вокал и импровизацию 
                  мягко и эффективно решаем ваши психологические задачи.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3 md:mb-4 animate-fade-in">Программа занятий</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">На курсе вы освоите</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-slide-in-bottom delay-100">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 mx-auto hover:rotate-12 transition-transform duration-300">
                  <Icon name="Drama" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-center mb-3">Актёрское мастерство</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Техника актёра, работа с ролью, сценическое движение и присутствие.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-slide-in-bottom delay-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 mx-auto hover:rotate-12 transition-transform duration-300">
                  <Icon name="Mic" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-center mb-3">Голос и речь</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Постановка голоса, дикция, интонации. Учимся говорить уверенно и выразительно.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-slide-in-bottom delay-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 mx-auto hover:rotate-12 transition-transform duration-300">
                  <Icon name="Sparkles" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-center mb-3">Импровизация</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Развиваем спонтанность, креативность и умение действовать в моменте.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-slide-in-bottom delay-400">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 mx-auto hover:rotate-12 transition-transform duration-300">
                  <Icon name="Music" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-center mb-3">Вокал</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Раскрываем голосовые возможности, работаем с дыханием и самовыражением через пение.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-slide-in-bottom delay-500">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 mx-auto hover:rotate-12 transition-transform duration-300">
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
            <div className="bg-secondary/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-heading font-semibold text-center mb-4">
                <Icon name="Award" className="inline mr-2 text-primary" size={28} />
                Работаем со страхами
              </h3>
              <p className="text-center text-lg text-muted-foreground leading-relaxed">
                Особое внимание уделяем преодолению страха публики и публичных выступлений. 
                Создаём безопасное пространство для самовыражения и экспериментов.
              </p>
            </div>
            
            <div className="bg-primary/10 rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-center mb-3 md:mb-4">
                <Icon name="Sparkle" className="inline mr-2 text-primary" size={24} />
                Выпускной спектакль
              </h3>
              <p className="text-center text-base md:text-lg text-foreground leading-relaxed">
                Создаём пьесу специально под ваш запрос и играем выпускной спектакль 
                <strong>на профессиональной сцене</strong>. Это кульминация вашего пути.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="py-12 md:py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3 md:mb-4 animate-fade-in">Результаты курса</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">Что вы получите после прохождения</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Icon name="Shield" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Преодоление страхов</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Избавитесь от страха публичных выступлений и сценического волнения через постепенную практику в безопасной среде.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Icon name="Zap" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Уверенность в себе</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Разовьёте внутреннюю уверенность через работу с телом, голосом и самовыражением на сцене.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Icon name="MessageCircle" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Навыки общения</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Улучшите коммуникативные способности, научитесь лучше понимать себя и других через театральные техники.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Icon name="Lightbulb" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Креативность</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Раскроете творческий потенциал и научитесь мыслить нестандартно в любых жизненных ситуациях.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Icon name="Heart" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Эмоциональный интеллект</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Научитесь распознавать и управлять своими эмоциями, развивая эмпатию и самоосознанность.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Icon name="Star" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Харизма и присутствие</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Обретёте магнетическое присутствие и харизму, которые помогут в карьере и личной жизни.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="teacher" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12 animate-fade-in">Ваш преподаватель</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Светлана Алексеевна Кузикова</h3>
              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="flex items-start gap-2 md:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Icon name="GraduationCap" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm md:text-base">Профессиональный театральный режиссёр</p>
                </div>
                <div className="flex items-start gap-2 md:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Icon name="Heart" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm md:text-base">Дипломированный психолог с опытом более 15 лет</p>
                </div>
                <div className="flex items-start gap-2 md:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Icon name="Star" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm md:text-base">Сертифицированный гештальт-терапевт и арт-терапевт</p>
                </div>
                <div className="flex items-start gap-2 md:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Icon name="Award" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm md:text-base">Член Российской арт-терапевтической Ассоциации</p>
                </div>
                <div className="flex items-start gap-2 md:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Icon name="Globe" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm md:text-base">Дополнительное обучение по арт-терапии в Германии и Америке</p>
                </div>
                <div className="flex items-start gap-2 md:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Icon name="Briefcase" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm md:text-base">Руководитель театра «Комильфо»</p>
                </div>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                «Моя миссия — помочь людям раскрыть свой потенциал через творчество. 
                Театр — это не просто сцена, это пространство для личностного роста и трансформации. 
                Каждый человек способен на большее, чем думает о себе.»
              </p>
            </div>
            
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <img 
                src="https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/6c80e4c6-cb41-49d9-9b8c-3dc84e4ba61d.jpg"
                alt="Светлана Алексеевна Кузикова"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[3/4] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="graduates" className="py-12 md:py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12 animate-fade-in">Наши выпускники</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {[
              "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/f16f7c69-c827-483f-b4e5-cc3b4d09a40f.jpg",
              "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/c50d9efe-9bcc-4bb6-adcd-61fc1ae45b9f.jpg",
              "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/a78e8ca7-7a31-4d0c-8d18-7a31d2b3b3f8.jpg",
              "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/0b8c93d9-b81f-4b05-9bd4-6f8eb9e5aa83.jpg",
              "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/85fd0b38-97f5-458d-a359-97a7ec9a1d76.jpg",
              "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/1fb881d9-f56e-4b93-a68c-77dd4e7dcbb4.jpg",
              "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/3a0a53e5-17dc-4eae-b1a2-5f98bfc748c4.jpg",
              "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/f5d3c64d-0d93-484e-9f42-d7e3e3e37de6.jpg"
            ].map((photoUrl, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl aspect-square hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img 
                  src={photoUrl} 
                  alt={`Выпускник ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">Отзывы</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Алина",
                  text: "Здравствуйте. Хочу выразить благодарность Светлане Алексеевне за курс перформанс- терапии. Это было очень интересно и познавательно. Я узнала много нового о себе. Раскрепостилась, стала более уверенной в себе. Мне понравилось заниматься с психологом и режиссером в одном лице. Спасибо за знания и опыт!",
                  rating: 5
                },
                {
                  name: "Ирина",
                  text: "Добрый вечер. Впечатление от курса \"Перформанс-терапия\" самые замечательные! Все занятия прошли в творческой, доброжелательной обстановке, под четким руководством. Появились новые знакомства. Результат превзошел все ожидания: я увидела себя с другой стороны, а главное - поверила в свои возможности. Спасибо огромное Светлане Алексеевне за профессионализм, чуткость и внимательное отношение к каждому!",
                  rating: 5
                },
                {
                  name: "Наталья",
                  text: "Здравствуйте! Хочу выразить огромную признательность Светлане Алексеевне за курс перформанс-терапии. Курс прошел на одном дыхании. Не смотря на то,что я очень стеснительный человек, во время занятий раскрепостилась. Узнала себя с другой стороны. Получила массу положительных эмоций. Спасибо большое!",
                  rating: 5
                },
                {
                  name: "Татьяна",
                  text: "Светлана Алексеевна, большое спасибо Вам за курс перформанс-терапии. Он, действительно, помогает раскрыться и побороть страхи. Занятия всегда проходили в очень доброжелательной, тёплой обстановке. Я получила массу положительных эмоций. Благодарю за Ваш профессионализм!",
                  rating: 5
                },
                {
                  name: "Елена",
                  text: "Светлана Алексеевна, огромное спасибо за курс перформанс-терапии! Занятия проходили в очень комфортной обстановке. Вы создали атмосферу доверия и творчества. Я многое узнала о себе, смогла раскрыться и поверить в свои силы. Это был уникальный опыт! Спасибо за Ваш профессионализм и внимание к каждому участнику!",
                  rating: 5
                }
              ].map((review, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-lg">{review.name}</h4>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                        ))}
                      </div>
                    </div>
                    <div className={`text-muted-foreground leading-relaxed transition-all duration-300 ${expandedReviews[index] ? '' : 'line-clamp-3'}`}>
                      {review.text}
                    </div>
                    {review.text.length > 200 && (
                      <button 
                        onClick={() => toggleReview(index)}
                        className="text-primary font-semibold mt-2 hover:underline transition-all duration-300 hover:translate-x-1"
                      >
                        {expandedReviews[index] ? 'Скрыть' : 'Читать полностью'}
                      </button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12 animate-fade-in">Стоимость курса</h2>
          
          <Card className="border-4 border-primary shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 animate-scale-in">
            <CardContent className="pt-8 pb-8 px-6 md:px-12">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 animate-pulse">
                  <span className="text-primary font-bold">Полный курс</span>
                </div>
                <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">15 000 ₽</div>
                <p className="text-muted-foreground text-lg">за весь курс</p>
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
                  <p className="text-lg font-bold">Выпускной спектакль на профессиональной сцене</p>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="text-lg px-12 py-6 hover:scale-105 transition-transform duration-300" asChild>
                  <a href="#signup">Записаться на курс</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="theater" className="py-12 md:py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3 md:mb-4 animate-fade-in">Театр «Комильфо»</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">
            Наши выпускные спектакли проходят на профессиональной сцене
          </p>

          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={theaterPhotos[currentSlide].url}
                alt={theaterPhotos[currentSlide].alt}
                className="w-full h-full object-cover transition-opacity duration-500 hover:scale-105 transition-transform duration-700"
              />
              
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <Icon name="ChevronLeft" size={24} className="text-primary" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <Icon name="ChevronRight" size={24} className="text-primary" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {theaterPhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                      currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Театр «Комильфо» — это профессиональное театральное пространство, где выпускники курса 
              представляют свои работы. Каждый спектакль — это результат совместного творческого пути, 
              личностного роста и преодоления себя.
            </p>
          </div>
        </div>
      </section>

      <section id="signup" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3 md:mb-4 animate-fade-in">Запись на курс</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">
            Оставьте заявку, и мы свяжемся с вами для уточнения деталей
          </p>

          <Card className="shadow-xl border-2 hover:border-primary transition-all duration-300 animate-scale-in">
            <CardContent className="pt-8 pb-8 px-6 md:px-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="hover:scale-105 transition-transform duration-300">
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input 
                    id="name"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="hover:scale-105 transition-transform duration-300">
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="hover:scale-105 transition-transform duration-300">
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">Сообщение (необязательно)</label>
                  <Textarea 
                    id="message"
                    placeholder="Расскажите о ваших ожиданиях от курса..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg hover:scale-105 transition-transform duration-300">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary/5 border-t py-8 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-muted-foreground mb-2">© 2024 Перформанс-терапия | Камерная театральная школа</p>
          <p className="text-sm text-muted-foreground">Краснодар, Россия</p>
        </div>
      </footer>
    </div>
  );
}