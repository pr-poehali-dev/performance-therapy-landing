import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

interface TeacherSectionProps {
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
  theaterPhotos: Array<{ url: string; alt: string }>;
}

export default function TeacherSection({ currentSlide, nextSlide, prevSlide, theaterPhotos }: TeacherSectionProps) {
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide, nextSlide]);

  return (
    <section id="teacher" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12 animate-fade-in">Ваш педагог</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
          <div className="animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/a78e8ca7-7a31-4d0c-8d18-7a31d2b3b3f8.jpg" 
              alt="Светлана Алексеевна Котлова"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4] hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-4 md:space-y-6 animate-slide-in-right">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">Светлана Алексеевна Котлова</h3>
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
                <p className="text-muted-foreground">Образование: психолог, режиссёр театральных постановок</p>
              </div>
              <div className="flex gap-3 items-start">
                <Icon name="Briefcase" className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-muted-foreground">Опыт работы: более 10 лет в психологии и театре</p>
              </div>
              <div className="flex gap-3 items-start">
                <Icon name="Award" className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-muted-foreground">Основатель и руководитель театра «Комильфо»</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center">Театр «Комильфо»</h3>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Театр «Комильфо» — это творческое пространство, где рождаются уникальные спектакли. 
            Каждая постановка — результат совместной работы участников курса перформанс-терапии.
          </p>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group">
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
                  className="w-full h-full object-cover"
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
                  onClick={() => {}}
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
  );
}
