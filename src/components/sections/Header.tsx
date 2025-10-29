import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <h1 className="text-lg md:text-2xl font-heading font-bold text-primary">Перформанс-терапия</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">О курсе</a>
          <a href="#program" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">Программа</a>
          <a href="#results" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">Результаты</a>
          <a href="#teacher" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">Педагог</a>
          <a href="#graduates" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">Выпускники</a>
          <a href="#price" className="text-sm hover:text-primary transition-all duration-300 hover:scale-105">Стоимость</a>
        </nav>
        <Button asChild className="hidden md:inline-flex hover:scale-105 transition-transform duration-300">
          <a href="#signup">Записаться</a>
        </Button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-all duration-300"
          aria-label="Меню"
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className="text-primary" />
        </button>
      </div>
      
      <div className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
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
          <Button asChild className="w-full" onClick={() => setMobileMenuOpen(false)}>
            <a href="#signup">Записаться на курс</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
