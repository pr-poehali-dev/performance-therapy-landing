import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    question: "Нужна ли подготовка для участия в курсе?",
    answer: "Нет, курс подходит для людей без актёрского опыта. Мы начинаем с базовых упражнений и постепенно углубляемся в практику."
  },
  {
    question: "Сколько человек в группе?",
    answer: "В группе до 12-15 человек. Это оптимальное количество для индивидуального подхода к каждому участнику и создания доверительной атмосферы."
  },
  {
    question: "Что делать, если я пропущу занятие?",
    answer: "Вы можете отработать пропущенное занятие с другой группой или получить материалы для самостоятельной практики."
  },
  {
    question: "Как проходят занятия?",
    answer: "Занятия проходят 1 раз в неделю по 3 часа. Каждое занятие включает теорию, практические упражнения, этюды и обратную связь от педагога."
  },
  {
    question: "Будет ли итоговый спектакль?",
    answer: "Да! В конце курса участники готовят и показывают полноценный спектакль для зрителей. Это кульминация всей работы и возможность применить полученные навыки."
  },
  {
    question: "Можно ли оплатить курс частями?",
    answer: "Да, возможна оплата в рассрочку. Детали обсуждаются индивидуально при записи на курс."
  },
  {
    question: "Какой возраст участников?",
    answer: "Курс рассчитан на взрослых людей от 18 лет. В группах встречаются участники разных возрастов — от 20 до 60+ лет."
  },
  {
    question: "Где проходят занятия?",
    answer: "Занятия проходят в театральной студии по адресу: г. Краснодар, ул. Горького, 104, офис 26. Удобная транспортная доступность."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-primary">
            ❓ Ответы на вопросы
          </h2>
          <p className="text-lg md:text-xl text-foreground">
            Самые частые вопросы о курсе перформанс-терапии
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 md:p-6 flex items-center justify-between gap-4 text-left hover:bg-secondary/30 transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <Icon 
                    name={openIndex === index ? "ChevronUp" : "ChevronDown"} 
                    className="text-primary flex-shrink-0 transition-transform duration-300"
                    size={24}
                  />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-base md:text-lg text-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-lg md:text-xl text-foreground mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <a 
            href="https://wa.me/79183111712" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg md:text-xl text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            <Icon name="MessageCircle" size={24} />
            Напишите нам в WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
