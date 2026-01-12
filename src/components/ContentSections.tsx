import AboutProgramSection from "@/components/content/AboutProgramSection";
import GalleryReviewsSection from "@/components/content/GalleryReviewsSection";
import PriceContactSection from "@/components/content/PriceContactSection";

interface ContentSectionsProps {
  handleEventClick: (date: string) => void;
  theaterPhotos: Array<{ url: string; alt: string }>;
  graduatePhotos: string[];
  reviews: Array<{ name: string; text: string; rating: number }>;
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
  toggleReview: (index: number) => void;
  expandedReviews: Record<number, boolean>;
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

export default function ContentSections({
  handleEventClick,
  theaterPhotos,
  graduatePhotos,
  reviews,
  currentSlide,
  nextSlide,
  prevSlide,
  toggleReview,
  expandedReviews,
  formData,
  setFormData,
  handleSubmit,
  isSubmitting
}: ContentSectionsProps) {
  return (
    <>
      <AboutProgramSection />
      
      <GalleryReviewsSection
        theaterPhotos={theaterPhotos}
        graduatePhotos={graduatePhotos}
        reviews={reviews}
        currentSlide={currentSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        toggleReview={toggleReview}
        expandedReviews={expandedReviews}
      />
      
      <PriceContactSection
        handleEventClick={handleEventClick}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </>
  );
}
