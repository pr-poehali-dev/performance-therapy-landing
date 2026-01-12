import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import FAQSection from "@/components/sections/FAQSection";

interface PriceContactSectionProps {
  handleEventClick: (date: string) => void;
  formData: {
    name: string;
    phone: string;
    message: string;
    consent: boolean;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    phone: string;
    message: string;
    consent: boolean;
  }>>;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
}

export default function PriceContactSection({
  handleEventClick,
  formData,
  setFormData,
  handleSubmit,
  isSubmitting
}: PriceContactSectionProps) {
  return (
    <>
      {/* Price Section */}
      <section id="price" className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary/10 via-amber-500/10 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:40px_40px] opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-shimmer bg-[length:200%_100%]" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary drop-shadow-lg">Стоимость курса</h2>
          <p className="text-xl md:text-2xl text-center text-foreground/90 mb-12 max-w-3xl mx-auto">
            Инвестиция в себя, которая окупится многократно
          </p>
          
          <Card className="border-4 border-primary/40 bg-card/95 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-2xl mx-auto">
            <CardContent className="pt-10 pb-10">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-red-500/20 border-2 border-red-500 rounded-full mb-4">
                  <span className="text-lg font-bold text-red-500">При раннем бронировании</span>
                </div>
                <div className="mb-4">
                  <div className="text-6xl md:text-7xl font-bold text-primary mb-2">12 000₽</div>
                  <div className="text-3xl text-foreground/50 line-through mb-2">16 000₽</div>
                  <p className="text-xl text-foreground/80">в месяц</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6" />
                  <div>
                    <p className="font-semibold text-foreground">48 часов групповой терапии</p>
                    <p className="text-sm text-foreground/70">24 занятия по 2 часа в группе</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6" />
                  <div>
                    <p className="font-semibold text-foreground">3 индивидуальных сессии</p>
                    <p className="text-sm text-foreground/70">Персональная работа с педагогом</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6" />
                  <div>
                    <p className="font-semibold text-foreground">Выпускной показ</p>
                    <p className="text-sm text-foreground/70">Выступление перед реальными зрителями</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-amber-500/10 rounded-lg border-2 border-amber-500/30">
                  <Icon name="UserCheck" className="text-amber-500 flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6" />
                  <div>
                    <p className="font-semibold text-foreground">Предварительное собеседование</p>
                    <p className="text-sm text-foreground/70">Обязательно для каждого участника до зачисления на курс</p>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8 p-6 bg-gradient-to-r from-primary/20 to-amber-500/20 border-2 border-primary/40 rounded-xl">
                <p className="text-lg text-foreground/80 mb-2">Полная стоимость курса (3 месяца):</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-5xl font-bold text-primary">36 000₽</div>
                  <div className="text-3xl text-foreground/50 line-through">48 000₽</div>
                </div>
                <p className="text-base text-foreground/70 mt-2">при раннем бронировании</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-amber-500/20 to-primary/20 border-2 border-amber-500/40 rounded-xl mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Gift" className="text-amber-500 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  <h3 className="text-2xl font-bold text-primary">Специальное предложение</h3>
                </div>
                <p className="text-lg text-foreground mb-2">
                  Пробное занятие — <span className="font-bold text-primary">БЕСПЛАТНО!</span>
                </p>
                <p className="text-base text-foreground/80">
                  Познакомьтесь с методикой, преподавателем и атмосферой курса без обязательств
                </p>
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="text-xl px-12 py-8 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/50 bg-gradient-to-r from-primary to-amber-500 w-full"
                  onClick={() => handleEventClick('пробное занятие')}
                  asChild
                >
                  <a href="#signup">
                    <Icon name="Calendar" className="mr-2 w-5 h-5 md:w-6 md:h-6" />
                    Подать заявку
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-lg text-foreground/80">
              Возможна рассрочка платежа. Подробности уточняйте при записи
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="signup" className="py-12 md:py-16 px-4 bg-secondary/50 border-y-2 border-primary/30 relative">
        <div className="absolute inset-0 bg-velvet-texture bg-[length:30px_30px] opacity-10" />
        <div className="container mx-auto max-w-2xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary drop-shadow-lg">Записаться на курс</h2>
          <p className="text-xl md:text-2xl text-center text-foreground/90 mb-12">
            Заполните форму, и мы свяжемся с вами в ближайшее время
          </p>
          
          <Card className="border-2 border-primary/30 bg-card/95 backdrop-blur-sm shadow-xl">
            <CardContent className="pt-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium mb-2 text-foreground">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-lg p-4 md:p-5 lg:p-6 border-2 border-primary/30 focus:border-primary"
                    placeholder="Как к вам обращаться?"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-medium mb-2 text-foreground">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="text-lg p-4 md:p-5 lg:p-6 border-2 border-primary/30 focus:border-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-medium mb-2 text-foreground">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="text-lg p-4 border-2 border-primary/30 focus:border-primary min-h-[120px]"
                    placeholder="Расскажите, что вас привело к нам..."
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, consent: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-foreground leading-relaxed cursor-pointer">
                    Я согласен на обработку персональных данных в соответствии с{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      политикой конфиденциальности
                    </Link>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-xl py-8 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/50 bg-gradient-to-r from-primary to-amber-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" className="mr-2 animate-spin w-5 h-5 md:w-6 md:h-6" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" className="mr-2 w-5 h-5 md:w-6 md:h-6" />
                      Отправить заявку
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center space-y-4">
            <p className="text-lg text-foreground">
              Или свяжитесь с нами напрямую:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+79183111712" 
                className="flex items-center gap-2 text-primary hover:text-primary/80 text-lg font-medium"
              >
                <Icon name="Phone" className="w-5 h-5 md:w-6 md:h-6" />
                +7 918 311 17 12
              </a>
              <a 
                href="https://wa.me/79183111712" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 text-lg font-medium"
              >
                <Icon name="MessageCircle" className="w-5 h-5 md:w-6 md:h-6" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}