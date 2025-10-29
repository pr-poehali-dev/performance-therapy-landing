import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function ProgramSection() {
  return (
    <section id="program" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12 animate-fade-in">Программа курса</h2>
        <div className="space-y-4 md:space-y-6">
          {[
            {
              icon: "Lightbulb",
              title: "Знакомство и диагностика",
              description: "Определяем запрос каждого участника, формируем групповую динамику, начинаем создавать персонажей"
            },
            {
              icon: "Palette",
              title: "Создание образа",
              description: "Разрабатываем внешность, характер, историю вашего персонажа — через рисунок, коллаж, письменные практики"
            },
            {
              icon: "Theater",
              title: "Актёрские техники",
              description: "Осваиваем основы актёрского мастерства: речь, движение, эмоции, взаимодействие с партнёрами"
            },
            {
              icon: "Pen",
              title: "Написание пьесы",
              description: "Создаём общую историю, где каждый персонаж играет свою уникальную роль"
            },
            {
              icon: "Users",
              title: "Репетиции",
              description: "Отрабатываем сцены, углубляем образы, прорабатываем сложные моменты"
            },
            {
              icon: "Sparkles",
              title: "Финальное выступление",
              description: "Показываем спектакль на сцене театра — кульминация всего пройденного пути"
            }
          ].map((item, index) => (
            <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:-translate-x-2 animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="pt-6 flex gap-4">
                <Icon name={item.icon as any} className="text-primary flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
