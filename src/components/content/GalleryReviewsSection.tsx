import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface GalleryReviewsSectionProps {
  theaterPhotos: Array<{ url: string; alt: string }>;
  graduatePhotos: string[];
  reviews: Array<{ name: string; text: string; rating: number }>;
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
  toggleReview: (index: number) => void;
  expandedReviews: Record<number, boolean>;
}

export default function GalleryReviewsSection({
  theaterPhotos,
  graduatePhotos,
  reviews,
  currentSlide,
  nextSlide,
  prevSlide,
  toggleReview,
  expandedReviews
}: GalleryReviewsSectionProps) {
  return (
    <>
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
                    <Icon name="GraduationCap" className="text-primary flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6" />
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
                    <Icon name="Award" className="text-primary flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6" />
                    <div>
                      <p className="font-semibold text-primary">Опыт работы:</p>
                      <p>Более 30 лет общего опыта</p>
                      <p className="mt-1">17 лет психологической практики</p>
                      <p className="mt-1">8 лет назад создала свой театр "Комильфо"</p>
                      <p className="mt-1">Автор уникальной методики перформанс-терапии</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="Users" className="text-primary flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6" />
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
                <Icon name="Quote" className="text-primary mx-auto mb-4 w-8 h-8 md:w-10 md:h-10" />
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
            Более 6000 учеников прошли путь трансформации через курсы школы
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
                <div className="bg-primary/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">6000+</div>
                <p className="text-lg text-foreground">Учеников</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-primary/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" className="text-primary w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-lg text-foreground">Спектаклей</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 bg-card/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-primary/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" className="text-primary w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
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
              <Icon name="ChevronLeft" className="w-5 h-5 md:w-6 md:h-6" />
            </Button>

            <Button
              onClick={nextSlide}
              size="icon"
              variant="outline"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-primary/30 hover:border-primary w-12 h-12 rounded-full shadow-xl"
            >
              <Icon name="ChevronRight" className="w-5 h-5 md:w-6 md:h-6" />
            </Button>

            <div className="flex justify-center gap-2 mt-6">
              {theaterPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {}}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary w-8' : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
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
                      <Icon key={i} name="Star" className="text-amber-500 fill-amber-500 w-4 h-4 md:w-5 md:h-5" />
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
    </>
  );
}