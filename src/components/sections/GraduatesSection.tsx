import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface GraduatesSectionProps {
  expandedReviews: Record<number, boolean>;
  toggleReview: (index: number) => void;
}

export default function GraduatesSection({ expandedReviews, toggleReview }: GraduatesSectionProps) {
  const graduatePhotos = [
    "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/f16f7c69-c827-483f-b4e5-cc3b4d09a40f.jpg",
    "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/c50d9efe-9bcc-4bb6-adcd-61fc1ae45b9f.jpg",
    "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/a78e8ca7-7a31-4d0c-8d18-7a31d2b3b3f8.jpg",
    "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/0b8c93d9-b81f-4b05-9bd4-6f8eb9e5aa83.jpg",
    "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/85fd0b38-97f5-458d-a359-97a7ec9a1d76.jpg",
    "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/1fb881d9-f56e-4b93-a68c-77dd4e7dcbb4.jpg",
    "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/3a0a53e5-17dc-4eae-b1a2-5f98bfc748c4.jpg",
    "https://cdn.poehali.dev/projects/b56a6071-ba85-42b9-8a98-12ef82c3c2c9/files/f5d3c64d-0d93-484e-9f42-d7e3e3e37de6.jpg"
  ];

  const reviews = [
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
  ];

  return (
    <section id="graduates" className="py-12 md:py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12 animate-fade-in">Наши выпускники</h2>
        <p className="text-xl md:text-2xl text-center text-foreground/90 mb-8 max-w-3xl mx-auto">
          Более 6000 человек уже прошли курс и изменили свою жизнь
        </p>
        
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
        </div>
      </div>
    </section>
  );
}