import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function ResultsSection() {
  return (
    <section id="results" className="py-12 md:py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 md:mb-12 animate-fade-in">Что вы получите</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
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
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="pt-6 flex gap-4">
                <Icon name={item.icon as any} className="text-primary flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
