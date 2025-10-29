import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    consent: false
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

  const graduatePhotos = [
    "https://cdn.poehali.dev/files/32d39b07-3f9a-4d02-9d1d-596316293f18.JPG",
    "https://cdn.poehali.dev/files/abedb96f-85de-46db-8eed-7cdb33fc3554.JPG",
    "https://cdn.poehali.dev/files/0d92556c-4064-4cdf-a4c1-8e2407c61ab2.JPG",
    "https://cdn.poehali.dev/files/857df142-765f-412b-aea6-c6ada8faaab8.JPG",
    "https://cdn.poehali.dev/files/c61636a7-21ea-43e1-9bcb-e80b994064e0.JPG"
  ];

  const reviews = [
    {
      name: "Мария Савицкая",
      text: "Прошла курс ораторского искусства и импровизации у Светланы Кузиковой по рекомендации подруги. Безумна рада, что в нужный момент я узнала именно об этой школе 🎂 Светлана настоящий профессионал! Страх и сопротивление рассеялись сразу после первого занятия! Светлана создает комфортную и теплую атмосферу в группе, передает огромное количество знаний, упражнений, которые уже сразу начинаешь практиковать как в обычной жизни, так и в публичных выступлениях. По окончании курса трансформации не заставляют себя ждать! Однозначно, рекомендую «kuzikova_school»!",
      rating: 5
    },
    {
      name: "Анастасия И.",
      text: "Только что прошла курс Перфоманс терапия у Светланы. Хочу сказать, что это уникальный человек, который умеет вытаскивать из людей их скрытые или давно забытые таланты. Открывать новые грани у каждого, кто пришел к ней! А вот тот или иной курс- Занятия проходят очень интересно, вовлекаешься в процесс так, что время пролетает незаметно. Светлана настоящий профессионал своего дела, удивительный и интересный человек. Я очень довольна, что узнала об этой школе, попала на курс и именно в нашу замечательную группу. Буду дальше посещать другие направления в этой школе!",
      rating: 5
    },
    {
      name: "Анна А.",
      text: "Это потрясающее место, где открываются таланты, открываешь себя настоящую... Курс «Перфоманс» терапия и поавда изменила мою жизнь, где я увидела и прожила свои разные грани, чувства и эмоции. В этой поддерживающей атмосфере, которую создает Светлана, мы с нашей группой обрели теплое и дружеское окружение, тут как дома -тепло, искренне и по -настоящему... где тебя поддержут и вдохновят. Этот курс и эти эмоции сцены -остунутся навсегда в моем сердце и намерена еще вернуться, как оказалось, сначала страшно сцены, а потом ты попадаешь в приятную зависимость от этих чувств и получаешь удовольствие",
      rating: 5
    },
    {
      name: "Наталия Шувалова",
      text: "Что наша жизнь? Игра! И все мы в ней актеры. Наши роли постоянно меняются, принося массу вопросов - Кто я?, Как мне общаться дома с подростком?, Как выстраивать и сохранять теплые отношения с партнером?, Как вести по работе переговоры и выгодно заключать сделки? На все эти вопросы вы получите ответы в пространстве Школы Светланы Кузиковой. Она, как дипломированный психолог и режиссёр, поможет вам гармонично и легко общаться с миром, раскрыть массу ваших достоинств и возможностей, и просто даже провести незабываемое яркое время в стенах актерской школы. Однозначно рекомендую всем, независимо от возраста, статуса и профессии. Спасибо Светлане Алексеевне за ее индивидуальный подход и профессионализм!",
      rating: 5
    },
    {
      name: "Марина М",
      text: "Светлана Алексеевна Кузикова, мастер с большой буквы! Как говорят талантливый человек, во всем талантлив. Талантливый режиссер, искусный оратор, мудрый педагог, креативный психолог, прекрасный организатор, и просто добрый, душевный человек. Я, очень рада, что имею возможность общения с ней. Я получила огромный практический опыт обучаясь у Светланы Алексеевны на курсах Ораторского искусства, и раскрыла в себе творческий потенциал на курсе \"ПЕРФОМЕНС- терапия\". Обрела уверенность в себе, способность креативно мыслить, и получила мотивацию к дальнейшей творческой самореализации. Я и в дальнейшем с удовольствием планирую обучаться у Светланы Алексеевны, так как общение с ней укрепляет меня как специалиста, и помогает обрести профессиональные знания и навыки.",
      rating: 5
    },
    {
      name: "Светлана",
      text: "Прошла курс Перфоманс терапии у Светланы, и открыла для себя новый мир ощущений, эмоций и энергий 👏 Узнала, как нужно готовиться к роли, что важно знать и над чем нужно работать. Светлана - великолепный преподаватель, еще и психолог, который знает все нюансы актерского мастерства, помогает Вам раскрыть ваши таланты и сделать это виртуозно и восхитительно 🙏❤️",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % theaterPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + theaterPhotos.length) % theaterPhotos.length);
  };

  const toggleReview = (index: number) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://functions.poehali.dev/05b3e540-3118-4da8-8150-65f1fa867e59', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message
        })
      });
      
      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        
        setFormData({
          name: "",
          phone: "",
          message: "",
          consent: false
        });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позже или свяжитесь с нами по телефону.",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary">Перформанс-терапия</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-lg hover:text-primary transition-all duration-300 hover:scale-105 font-medium">О курсе</a>
            <a href="#program" className="text-lg hover:text-primary transition-all duration-300 hover:scale-105 font-medium">Программа</a>
            <a href="#results" className="text-lg hover:text-primary transition-all duration-300 hover:scale-105 font-medium">Результаты</a>
            <a href="#teacher" className="text-lg hover:text-primary transition-all duration-300 hover:scale-105 font-medium">Педагог</a>
            <a href="#graduates" className="text-lg hover:text-primary transition-all duration-300 hover:scale-105 font-medium">Выпускники</a>
            <a href="#price" className="text-lg hover:text-primary transition-all duration-300 hover:scale-105 font-medium">Стоимость</a>
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

      {/* Hero Section */}
      <section className="pt-28 md:pt-40 pb-12 md:pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 rounded-full mb-3 md:mb-4 animate-pulse">
                <span className="text-primary font-semibold text-sm md:text-base">Психологический актёрский курс</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-4 md:mb-6 leading-tight">
                Решайте психологические задачи через <span className="text-primary text-4xl md:text-6xl lg:text-7xl">творчество</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed font-medium">
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

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 animate-fade-in">Что такое перформанс-терапия?</h2>
          
          <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
            <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
              Это уникальный курс актерского мастерства: театротерапия, психотерапевтическая практика, направленная на обретение контакта с собой и миром, проявленности и уверенности в себе.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
              Перформанс (с англ. "выступление, показ") учит нас свободе самовыражения, помогает прожить невыраженные эмоции и расширить репертуар своих жизненных ролей.
            </p>
          </div>

          <div className="mb-12 grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Heart" className="text-primary flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Для кого этот курс?</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Программа для взрослых, которые хотят вспомнить о своих талантах и овладеть актерским мастерством «для жизни», проработав психологические барьеры и раскрыв свой потенциал.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Target" className="text-primary flex-shrink-0 mt-1" size={32} />
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">Главная цель</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Через творческое самовыражение мягко, креативно и эффективно проработать психологические запросы, найти и проявить скрытые грани личности.
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
                  <h4 className="font-bold text-lg">Поиск идеальной роли</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    С помощью специальных упражнений находим вашу идеальную роль — скрытые качества, которые нужно раскрыть для уверенности и успеха.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h4 className="font-bold text-lg">Создание персонажа</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Создаём уникального персонажа для пьесы на основе вашего запроса. Пьеса пишется под конкретную группу и её участников.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h4 className="font-bold text-lg">Трансформация через игру</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Проживая роль на сцене, развиваете недостающие качества и становитесь более уверенными, адаптивными и результативными.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 border-transparent hover:border-primary">
              <Icon name="Users" className="text-primary mb-4" size={56} />
              <h4 className="font-bold mb-3 text-xl md:text-2xl">Групповой формат</h4>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">Работа в группе до 12 человек</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 border-transparent hover:border-primary" style={{ animationDelay: '0.1s' }}>
              <Icon name="Clock" className="text-primary mb-4" size={56} />
              <h4 className="font-bold mb-3 text-xl md:text-2xl">Регулярные занятия</h4>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">1 раз в неделю по 3 часа</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 border-transparent hover:border-primary" style={{ animationDelay: '0.2s' }}>
              <Icon name="Calendar" className="text-primary mb-4" size={56} />
              <h4 className="font-bold mb-3 text-xl md:text-2xl">Длительность</h4>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">3 месяца (12 занятий)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-12 animate-fade-in">Программа курса</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                icon: "Lightbulb",
                title: "Знакомство и диагностика",
                description: "Определяем запрос каждого участника и создаём персонажей"
              },
              {
                icon: "Palette",
                title: "Создание образа",
                description: "Разрабатываем характер и историю вашего персонажа"
              },
              {
                icon: "Theater",
                title: "Актёрское мастерство",
                description: "Работа с эмоциями, взаимодействие с партнёрами"
              },
              {
                icon: "Mic",
                title: "Сценическая речь и вокал",
                description: "Голос, дикция, интонации, вокальные техники"
              },
              {
                icon: "Sparkles",
                title: "Импровизация и креативность",
                description: "Развиваем спонтанность и речевую креативность"
              },
              {
                icon: "Music",
                title: "Танцевально-двигательная терапия",
                description: "Работа с телом и эмоциями через движение"
              },
              {
                icon: "Pen",
                title: "Написание пьесы",
                description: "Создаём общую историю для всех персонажей"
              },
              {
                icon: "Users",
                title: "Репетиции",
                description: "Отрабатываем сцены и углубляем образы"
              },
              {
                icon: "Star",
                title: "Финальное выступление",
                description: "Показываем спектакль на сцене театра"
              }
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-5 pb-5 flex gap-4">
                  <Icon name={item.icon as any} className="text-primary flex-shrink-0" size={32} />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-12 md:py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-12 animate-fade-in">Что вы получите</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: "CheckCircle",
                title: "Уверенность в себе",
                description: "Раскроете свои сильные стороны, научитесь выражать эмоции и чувства"
              },
              {
                icon: "Smile",
                title: "Преодоление страхов",
                description: "Проработаете внутренние блоки через игру и творчество в безопасной среде"
              },
              {
                icon: "TrendingUp",
                title: "Личностный рост",
                description: "Получите новый опыт самопознания и развития через искусство"
              },
              {
                icon: "Users",
                title: "Новые знакомства",
                description: "Найдёте единомышленников и создадите крепкие дружеские связи"
              },
              {
                icon: "Sparkles",
                title: "Творческий опыт",
                description: "Создадите собственного персонажа и сыграете в настоящем спектакле"
              },
              {
                icon: "Award",
                title: "Профессиональная поддержка",
                description: "Будете работать с опытным режиссёром и психологом в одном лице"
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-8 pb-8 flex gap-6">
                  <Icon name={item.icon as any} className="text-primary flex-shrink-0" size={48} />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section id="teacher" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-8 md:mb-12 animate-fade-in">Ваш педагог</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch mb-12">
            <div className="animate-fade-in flex">
              <img 
                src="https://cdn.poehali.dev/files/e048cea5-239f-455c-9303-f01fe07b3d63.JPG" 
                alt="Светлана Алексеевна Кузикова"
                className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-4 md:space-y-6 animate-slide-in-right flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">Светлана Алексеевна Кузикова</h3>
                <p className="text-primary font-semibold text-lg">Режиссёр театра «Комильфо», психолог</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Светлана Алексеевна — практикующий психолог с режиссёрским образованием. 
                Она создала уникальную методику перформанс-терапии, которая помогает людям 
                решать психологические задачи через творчество.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <Icon name="GraduationCap" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-muted-foreground">Сертифицированный гештальт-терапевт, арт-терапевт, преподаватель психологии</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Award" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-muted-foreground">Образование: психолог, режиссёр театральных постановок, дополнительное профессиональное обучение по арт-терапии в Германии и Америке</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Briefcase" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-muted-foreground">Опыт работы психолога: 15 лет</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-muted-foreground">Член Российской арт-терапевтической Ассоциации</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Theater" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-muted-foreground">В 2017 году создала театр «Комильфо» из выпускников своих курсов, поставила более 20 спектаклей</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Mic" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-muted-foreground">Автор курсов по ораторскому искусству и импровизации</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button asChild variant="outline" className="hover:scale-105 transition-transform duration-300">
                  <a href="https://kamer-theatre-komilfo--preview.poehali.dev/" target="_blank" rel="noopener noreferrer">
                    <Icon name="Theater" size={20} className="mr-2" />
                    Театр «Комильфо»
                  </a>
                </Button>
                <Button asChild variant="outline" className="hover:scale-105 transition-transform duration-300">
                  <a href="https://orator-site-creation--preview.poehali.dev/" target="_blank" rel="noopener noreferrer">
                    <Icon name="Mic" size={20} className="mr-2" />
                    Курсы ораторства
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-center">Театр «Комильфо»</h3>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Театр «Комильфо» — это творческое пространство, где рождаются уникальные спектакли. 
              Каждая постановка — результат совместной работы участников курса перформанс-терапии.
            </p>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group" style={{ height: '600px' }}>
              {theaterPhotos.map((photo, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-110'
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-contain bg-black"
                  />
                </div>
              ))}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                aria-label="Предыдущее фото"
              >
                <Icon name="ChevronLeft" size={24} className="text-primary" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                aria-label="Следующее фото"
              >
                <Icon name="ChevronRight" size={24} className="text-primary" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {theaterPhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Перейти к фото ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graduates Section */}
      <section id="graduates" className="py-12 md:py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12 animate-fade-in">Наши выпускники</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {graduatePhotos.map((photoUrl, index) => (
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
              {reviews.map((review, index) => (
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
            
            <div className="text-center mt-8">
              <a 
                href="https://yandex.ru/profile/108893235678?intent=reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-semibold"
              >
                <Icon name="Star" className="fill-current" size={20} />
                Все отзывы на Яндекс.Картах
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
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

      {/* Signup Section */}
      <section id="signup" className="py-12 md:py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 animate-fade-in">Запишитесь на курс</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">
            Оставьте заявку, и мы свяжемся с вами для уточнения деталей
          </p>
          
          <Card className="border-2 shadow-xl animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение (необязательно)</label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о своих ожиданиях от курса..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="text-base resize-none"
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                    required
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    Я согласен на обработку персональных данных в соответствии с{" "}
                    <Link to="/privacy" className="text-primary hover:underline" target="_blank">
                      Политикой конфиденциальности
                    </Link>
                    {" "}и{" "}
                    <Link to="/consent" className="text-primary hover:underline" target="_blank">
                      Согласием на обработку персональных данных
                    </Link>
                    . Принимаю условия{" "}
                    <Link to="/offer" className="text-primary hover:underline" target="_blank">
                      Публичной оферты
                    </Link>
                    .
                  </label>
                </div>
                
                <Button type="submit" size="lg" className="w-full text-lg hover:scale-105 transition-transform duration-300" disabled={!formData.consent}>
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 md:mt-12 grid md:grid-cols-2 gap-4 md:gap-6">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 flex gap-4">
                <Icon name="Phone" className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <a href="tel:+79183111712" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 918 311 17 12
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 flex gap-4">
                <Icon name="Mail" className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:s_kuzikova@mail.ru" className="text-muted-foreground hover:text-primary transition-colors break-all">
                    s_kuzikova@mail.ru
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <a href="tel:+79183111712" className="hover:text-primary transition-colors">+7 918 311 17 12</a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:s_kuzikova@mail.ru" className="hover:text-primary transition-colors">s_kuzikova@mail.ru</a>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <Icon name="MapPin" size={16} className="mt-0.5" />
                  <span>г. Краснодар, ул. Горького, 104, офис 26</span>
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
          
          <div className="pt-6 border-t space-y-4">
            <div className="text-center text-xs text-muted-foreground space-y-1">
              <p className="font-semibold">ИП Кузикова Светлана Алексеевна</p>
              <p>ОГРНИП: 318237500160591</p>
              <p>Адрес: г. Краснодар, ул. Горького, 104, офис 26</p>
              <p>Телефон: +7 918 311 17 12 | E-mail: s_kuzikova@mail.ru</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="/offer" className="text-muted-foreground hover:text-primary transition-colors">Публичная оферта</a>
              <a href="/consent" className="text-muted-foreground hover:text-primary transition-colors">Согласие на обработку персональных данных</a>
            </div>
            
            <p className="text-center text-sm text-muted-foreground">© 2018-2025 гг. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}