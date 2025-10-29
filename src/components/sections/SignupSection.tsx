import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface SignupSectionProps {
  formData: {
    name: string;
    phone: string;
    message: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    phone: string;
    message: string;
  }>>;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function SignupSection({ formData, setFormData, handleSubmit }: SignupSectionProps) {
  return (
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
              
              <Button type="submit" size="lg" className="w-full text-lg hover:scale-105 transition-transform duration-300">
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
                <a href="tel:+79000000000" className="text-muted-foreground hover:text-primary transition-colors">
                  +7 (900) 000-00-00
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6 flex gap-4">
              <Icon name="Mail" className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:info@komilfo-theatre.ru" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  info@komilfo-theatre.ru
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
