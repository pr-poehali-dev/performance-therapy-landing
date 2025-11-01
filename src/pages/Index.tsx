import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import FAQSection from "@/components/sections/FAQSection";

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
    "https://cdn.poehali.dev/files/c61636a7-21ea-43e1-9bcb-e80b994064e0.JPG",
    "https://cdn.poehali.dev/files/4c9aa5a5-4445-4df8-9aa6-5a05c0521d2b.jpg",
    "https://cdn.poehali.dev/files/ae33bd80-be03-4b35-b9d5-ff9531c0f580.jpg",
    "https://cdn.poehali.dev/files/c7b02962-6572-4083-8001-46fff30c31e5.jpg"
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

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

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
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Theatrical curtain top decoration */}
      <div className="fixed top-0 left-0 right-0 h-8 bg-gradient-to-b from-accent to-transparent z-40 border-b-2 border-primary/50" />
      
      {/* Stage lights effect */}
      <div className="fixed inset-0 bg-stage-lights pointer-events-none z-0 animate-spotlight" />
      
      {/* Header */}
      <header className="fixed top-8 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-primary/30 shadow-xl">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src="https://cdn.poehali.dev/files/d2f56f8d-e933-4cb2-87e4-c664e879c628.PNG" 
              alt="Комильфо Театр Студия" 
              className="h-10 md:h-12 w-auto object-contain"
            />
            <h1 className="text-xl md:text-2xl font-heading font-bold text-primary tracking-wider drop-shadow-lg">Перформанс-терапия</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-lg hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group">
              О курсе
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#program" className="text-lg hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group">
              Программа
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#results" className="text-lg hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group">
              Результаты
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#teacher" className="text-lg hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group">
              Педагог
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#graduates" className="text-lg hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group">
              Выпускники
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#price" className="text-lg hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group">
              Стоимость
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>
          <Button onClick={scrollToForm} className="hidden md:inline-flex hover:scale-105 transition-transform duration-300 bg-primary text-primary-foreground shadow-lg shadow-primary/50">
            Записаться
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-all duration-300"
            aria-label="Меню"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className="text-primary" />
          </button>
        </div>
        
        <div className={`md:hidden bg-card border-t border-primary/30 overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
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
            <Button className="w-full" onClick={() => { scrollToForm(); setMobileMenuOpen(false); }}>
              Записаться на курс
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 md:pt-40 pb-12 md:pb-20 px-4 relative">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:20px_20px] opacity-20" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/20 border border-primary/50 rounded-full mb-3 md:mb-4 animate-shimmer bg-[length:200%_100%] bg-gold-shimmer">
                <span className="text-primary font-semibold text-base md:text-lg tracking-wider">✨ Психологический актёрский курс</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-4 md:mb-6 leading-tight">
                Решайте психологические задачи через <span className="text-primary text-4xl md:text-6xl lg:text-7xl drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">творчество</span>
              </h2>
              <p className="text-2xl md:text-3xl text-foreground mb-6 md:mb-8 leading-relaxed font-medium">
                На курсе «Перформанс-терапия» мы прорабатываем психологические запросы через творческое самовыражение — 
                мягко, креативно и эффективно
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button onClick={scrollToForm} size="lg" className="text-lg md:text-xl px-6 md:px-8 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/50">
                  🎭 Записаться на курс
                </Button>
                <Button size="lg" variant="outline" className="text-lg md:text-xl px-6 md:px-8 hover:scale-105 transition-all duration-300 border-primary/50 hover:bg-primary/10" asChild>
                  <a href="#about">Узнать подробнее</a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in relative">
              <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full" />
              <img 
                src="https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/4bcfeacf-95c5-4147-a3d3-55655fc50ed7.jpg" 
                alt="Перформанс-терапия"
                className="rounded-2xl shadow-2xl shadow-primary/30 w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500 border-2 border-primary/30 relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 bg-secondary/50 border-y-2 border-primary/30 relative">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:30px_30px] opacity-10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 animate-fade-in text-primary drop-shadow-lg">🎭 Что такое перформанс-терапия?</h2>
          
          <div className="max-w-4xl mx-auto text-center mb-12 space-y-3">
            <p className="text-foreground leading-relaxed text-lg md:text-xl">
              Это уникальный арт-терапевтический курс актёрского мастерства. Это театротерапия - групповая психотерапия, направленная на проработку своих страхов перед публикой и детских травм, связанных с тем, что "закрывали рот" или жестко одергивали яркие проявления вовне.
            </p>
            <p className="text-foreground leading-relaxed text-lg md:text-xl">
              Перформанс (с англ. "выступление, показ") учит нас свободе самовыражения, помогает прожить невыраженные эмоции и расширить репертуар своих жизненных ролей.
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
                <p className="text-foreground leading-relaxed text-lg">
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
                  <h4 className="font-heading font-bold text-xl">Поиск идеальной роли</h4>
                  <p className="text-foreground leading-relaxed text-lg">
                    С помощью специальных упражнений находим вашу идеальную роль — скрытые качества, которые нужно раскрыть для уверенности и успеха.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h4 className="font-heading font-bold text-xl">Создание персонажа</h4>
                  <p className="text-foreground leading-relaxed text-lg">
                    Создаём уникального персонажа для пьесы на основе вашего запроса. Пьеса пишется под конкретную группу и её участников.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h4 className="font-heading font-bold text-xl">Трансформация через игру</h4>
                  <p className="text-foreground leading-relaxed text-lg">
                    Проживая роль на сцене, развиваете недостающие качества и становитесь более уверенными, адаптивными и результативными.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-card/95 backdrop-blur rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 border-primary/30 hover:border-primary">
              <Icon name="Users" className="text-primary mb-4" size={56} />
              <h4 className="font-heading font-bold mb-3 text-xl md:text-2xl text-foreground">Групповой формат</h4>
              <p className="text-lg md:text-xl text-foreground font-medium">Работа в группе до 12 человек</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-card/95 backdrop-blur rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 border-primary/30 hover:border-primary" style={{ animationDelay: '0.1s' }}>
              <Icon name="Clock" className="text-primary mb-4" size={56} />
              <h4 className="font-heading font-bold mb-3 text-xl md:text-2xl text-foreground">Регулярные занятия</h4>
              <p className="text-lg md:text-xl text-foreground font-medium">1 раз в неделю по 3 часа</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-card/95 backdrop-blur rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 border-primary/30 hover:border-primary" style={{ animationDelay: '0.2s' }}>
              <Icon name="Calendar" className="text-primary mb-4" size={56} />
              <h4 className="font-heading font-bold mb-3 text-xl md:text-2xl text-foreground">Длительность</h4>
              <p className="text-lg md:text-xl text-foreground font-medium">3 месяца (12 занятий)</p>
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
              }
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-5 pb-5 flex gap-4">
                  <Icon name={item.icon as any} className="text-primary flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-foreground text-lg md:text-xl leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-4 md:mt-6">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full md:w-1/2">
              <CardContent className="pt-5 pb-5 flex gap-4">
                <Icon name="Star" className="text-primary flex-shrink-0" size={32} />
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">Финальное выступление</h3>
                  <p className="text-foreground text-lg md:text-xl leading-relaxed">Показываем спектакль на сцене театра</p>
                </div>
              </CardContent>
            </Card>
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
                    <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-foreground text-lg md:text-xl leading-relaxed font-medium">{item.description}</p>
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
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch mb-8">
            <div className="animate-fade-in flex">
              <img 
                src="https://cdn.poehali.dev/files/e048cea5-239f-455c-9303-f01fe07b3d63.JPG" 
                alt="Светлана Алексеевна Кузикова"
                className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-3 md:space-y-4 animate-slide-in-right flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">Светлана Алексеевна Кузикова</h3>
                <p className="text-primary font-semibold text-xl md:text-2xl">Режиссёр театра «Комильфо», психолог</p>
              </div>

              <div className="space-y-2">
                <div className="flex gap-3 items-start">
                  <Icon name="GraduationCap" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-foreground text-lg md:text-xl">Сертифицированный гештальт-терапевт, арт-терапевт, преподаватель психологии</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Award" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-foreground text-lg md:text-xl">Образование: психолог, режиссёр театральных постановок, дополнительное профессиональное обучение по арт-терапии в Германии и Америке</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Briefcase" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-foreground text-lg md:text-xl">Опыт работы психолога: 15 лет</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-foreground text-lg md:text-xl">Член Российской арт-терапевтической Ассоциации</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Theater" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-foreground text-lg md:text-xl">В 2017 году создала театр «Комильфо» из выпускников своих курсов, поставила более 20 спектаклей</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Icon name="Mic" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-foreground text-lg md:text-xl">Автор курсов по ораторскому искусству и импровизации</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform duration-300 text-lg">
                  <a href="https://kamer-theatre-komilfo--preview.poehali.dev/" target="_blank" rel="noopener noreferrer">
                    <Icon name="Theater" size={22} className="mr-2" />
                    Театр «Комильфо»
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform duration-300 text-lg">
                  <a href="https://orator-site-creation--preview.poehali.dev/" target="_blank" rel="noopener noreferrer">
                    <Icon name="Mic" size={22} className="mr-2" />
                    Курсы ораторства
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-center">Театр «Комильфо»</h3>
            <p className="text-center text-foreground max-w-3xl mx-auto leading-relaxed text-lg md:text-xl font-medium">
              Театр «Комильфо» — это творческое пространство, где рождаются уникальные спектакли. 
              Наши выпускники выступают на профессиональной сцене, демонстрируя высокий уровень актёрского мастерства.
            </p>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group max-w-4xl mx-auto" style={{ height: '450px' }}>
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
                      <h4 className="font-heading font-semibold text-xl md:text-2xl">{review.name}</h4>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                        ))}
                      </div>
                    </div>
                    <div className={`text-foreground text-lg md:text-xl leading-relaxed transition-all duration-300 ${expandedReviews[index] ? '' : 'line-clamp-3'}`}>
                      {review.text}
                    </div>
                    {review.text.length > 200 && (
                      <button 
                        onClick={() => toggleReview(index)}
                        className="text-primary font-semibold text-lg mt-2 hover:underline transition-all duration-300 hover:translate-x-1"
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
                  <span className="text-primary font-bold">Помесячная оплата</span>
                </div>
                <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">9 500 ₽</div>
                <p className="text-foreground text-xl md:text-2xl font-medium">в месяц</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Icon name="Calendar" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-xl md:text-2xl">3 месяца обучения (24 занятия)</p>
                </div>
                <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Icon name="Clock" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-xl md:text-2xl">Занятия 2 раза в неделю по 2 часа</p>
                </div>
                <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Icon name="CreditCard" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-xl md:text-2xl">Различные формы оплаты: онлайн, наличные, картой, QR-код</p>
                </div>
                <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Icon name="UserCheck" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-xl md:text-2xl">Работа с профессиональным режиссёром и психологом</p>
                </div>
                <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Icon name="Sparkles" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-xl md:text-2xl">Создание уникального персонажа и пьесы</p>
                </div>
                <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Icon name="Star" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-xl md:text-2xl">Выступление на сцене театра «Комильфо»</p>
                </div>
              </div>
              
              <Button size="lg" className="w-full text-xl md:text-2xl hover:scale-105 transition-transform duration-300" asChild>
                <a href="#signup">Записаться на курс</a>
              </Button>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-foreground">
            <p className="text-lg md:text-xl font-medium">Итоговая стоимость курса: 28 500 ₽ за 3 месяца</p>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="py-12 md:py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 animate-fade-in">Запишитесь на курс</h2>
          <p className="text-center text-foreground mb-8 md:mb-12 text-xl md:text-2xl font-medium">
            Оставьте заявку, и мы свяжемся с вами для уточнения деталей
          </p>
          
          <Card className="border-2 shadow-xl animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg md:text-xl font-medium mb-2">Ваше имя</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-lg md:text-xl"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-lg md:text-xl font-medium mb-2">Телефон</label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="text-lg md:text-xl"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-lg md:text-xl font-medium mb-2">Сообщение (необязательно)</label>
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
                  <label htmlFor="consent" className="text-base md:text-lg text-muted-foreground leading-relaxed cursor-pointer">
                    Я согласен на обработку персональных данных в соответствии с{" "}
                    <Link to="/privacy" className="text-primary hover:underline font-medium" target="_blank">
                      Политикой конфиденциальности
                    </Link>
                    {" "}и{" "}
                    <Link to="/consent" className="text-primary hover:underline font-medium" target="_blank">
                      Согласием на обработку персональных данных
                    </Link>
                    . Принимаю условия{" "}
                    <Link to="/offer" className="text-primary hover:underline font-medium" target="_blank">
                      Публичной оферты
                    </Link>
                    .
                  </label>
                </div>
                
                <Button type="submit" size="lg" className="w-full text-xl md:text-2xl hover:scale-105 transition-transform duration-300" disabled={!formData.consent}>
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
                  <h3 className="font-heading font-semibold text-xl md:text-2xl mb-1">Телефон</h3>
                  <a href="tel:+79183111712" className="text-foreground text-lg md:text-xl hover:text-primary transition-colors">
                    +7 918 311 17 12
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 flex gap-4">
                <Icon name="Mail" className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-heading font-semibold text-xl md:text-2xl mb-1">Email</h3>
                  <a href="mailto:s_kuzikova@mail.ru" className="text-foreground text-lg md:text-xl hover:text-primary transition-colors break-all">
                    s_kuzikova@mail.ru
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 bg-secondary/50 border-t">
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
                  <Icon name="Phone" size={16} />
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
            
            <div className="flex flex-wrap justify-center gap-4 text-base md:text-lg">
              <a href="/privacy" className="text-foreground hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="/offer" className="text-foreground hover:text-primary transition-colors">Публичная оферта</a>
              <a href="/consent" className="text-foreground hover:text-primary transition-colors">Согласие на обработку персональных данных</a>
            </div>
            
            <p className="text-center text-sm text-muted-foreground">© 2018-2025 гг. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/79183111712"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Написать в WhatsApp"
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          1
        </span>
      </a>
    </div>
  );
}