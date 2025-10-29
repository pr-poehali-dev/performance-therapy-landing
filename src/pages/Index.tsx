import { useState } from "react";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProgramSection from "@/components/sections/ProgramSection";
import ResultsSection from "@/components/sections/ResultsSection";
import TeacherSection from "@/components/sections/TeacherSection";
import GraduatesSection from "@/components/sections/GraduatesSection";
import PriceSection from "@/components/sections/PriceSection";
import SignupSection from "@/components/sections/SignupSection";
import Footer from "@/components/sections/Footer";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theaterPhotos = [
    {
      url: "https://cdn.poehali.dev/files/ad4aa480-c288-4180-870a-3fa60ea89d60.JPG",
      alt: "Театр Комильфо - спектакль 1"
    },
    {
      url: "https://cdn.poehali.dev/files/4264aae9-273f-486e-bc34-2f4e95de3ea0.JPG",
      alt: "Театр Комильфо - спектакль 2"
    },
    {
      url: "https://cdn.poehali.dev/files/4a4aea76-2e59-4edc-a50e-3974a27f85fb.JPG",
      alt: "Театр Комильфо - спектакль 3"
    },
    {
      url: "https://cdn.poehali.dev/files/65e254ce-c3ca-4262-9469-bdc95143509a.jpg",
      alt: "Театр Комильфо - спектакль 4"
    },
    {
      url: "https://cdn.poehali.dev/files/f073a76f-c1ab-4f58-b847-9e59d047d576.JPG",
      alt: "Театр Комильфо - спектакль 5"
    },
    {
      url: "https://cdn.poehali.dev/files/b88f21da-53fa-4f39-b154-b72a9f939065.JPG",
      alt: "Театр Комильфо - спектакль 6"
    },
    {
      url: "https://cdn.poehali.dev/files/9cfce0a4-1bcf-4d36-ba21-d3d387b99db2.JPG",
      alt: "Театр Комильфо - спектакль 7"
    },
    {
      url: "https://cdn.poehali.dev/files/536cf790-5698-4395-a9e7-8fad63b9403e.jpg",
      alt: "Театр Комильфо - спектакль 8"
    },
    {
      url: "https://cdn.poehali.dev/files/bcc6fc52-1ffb-40f4-aa05-83c30b192b18.JPG",
      alt: "Театр Комильфо - спектакль 9"
    },
    {
      url: "https://cdn.poehali.dev/files/d5b2fd71-7de4-4da6-b518-215a71bda06a.JPG",
      alt: "Театр Комильфо - спектакль 10"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % theaterPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + theaterPhotos.length) % theaterPhotos.length);
  };

  const toggleReview = (index: number) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <ResultsSection />
      <TeacherSection 
        currentSlide={currentSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        theaterPhotos={theaterPhotos}
      />
      <GraduatesSection 
        expandedReviews={expandedReviews}
        toggleReview={toggleReview}
      />
      <PriceSection />
      <SignupSection 
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}
