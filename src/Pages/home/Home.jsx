import Aboutsection from "./AboutSection";
import AppointmentSection from "../../Component/Common-section/AppointmentSection";
import Servicesection from "./ServiceSection";
import Sliderbannersect from "./SliderBanner";
import Productsection from "../../Component/Common-section/ProductSection";
import TreatmentSection from "../../Component/Common-section/TreatmentSection";
import BlogSection from "../../Component/Common-section/BlogSection";
import TestimonialSection from "../../Component/Common-section/TestimonialSection";
import GallerySection from "../../Component/Common-section/GallerySection";

function HomePage() {
  return (
    <>

      <Sliderbannersect />
      <Aboutsection />
      <Servicesection />
      <AppointmentSection noBg/>
      <Productsection />
      <TreatmentSection  noBg/>  
      <BlogSection limit={3}/>
      <TestimonialSection noBg/>
      <GallerySection />
    </>
  );
}
export default HomePage;
