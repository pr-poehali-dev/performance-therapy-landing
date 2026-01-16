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
    <section id="signup" className="py-12 md:py-20 px-4 bg-secondary/30 scroll-mt-20">
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

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-6">Или свяжитесь с нами удобным способом:</p>
        </div>

        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <a 
            href="https://wa.me/79183111712" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="border-2 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer bg-green-50/50">
              <CardContent className="pt-6 flex flex-col items-center gap-3 text-center">
                <div className="bg-green-500 text-white p-3 rounded-full">
                  <Icon name="MessageCircle" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">Написать сейчас</p>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href="tel:+79183111712" className="block">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
              <CardContent className="pt-6 flex flex-col items-center gap-3 text-center">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Позвонить</h3>
                  <p className="text-sm text-muted-foreground">+7 (918) 311-17-12</p>
                </div>
              </CardContent>
            </Card>
          </a>
          
          <a href="mailto:info@komilfo-theatre.ru" className="block">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
              <CardContent className="pt-6 flex flex-col items-center gap-3 text-center">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground break-all">info@komilfo-theatre.ru</p>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
}