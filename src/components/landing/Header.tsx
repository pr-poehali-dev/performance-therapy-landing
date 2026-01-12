import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-8 bg-gradient-to-b from-accent to-transparent z-40 border-b-2 border-primary/50" />
      
      <div className="fixed inset-0 bg-stage-lights pointer-events-none z-0 animate-spotlight" />
      
      <header className="fixed top-8 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-primary/30 shadow-xl">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
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
          <Button className="hidden md:inline-flex hover:scale-105 transition-transform duration-300 bg-primary text-primary-foreground shadow-lg shadow-primary/50" asChild>
            <a href="#signup">
              <Icon name="Send" className="mr-2" size={18} />
              Подать заявку
            </a>
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
            <Button className="w-full" asChild>
              <a href="#signup" onClick={() => setMobileMenuOpen(false)}>
                <Icon name="Send" className="mr-2" size={18} />
                Подать заявку
              </a>
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
}