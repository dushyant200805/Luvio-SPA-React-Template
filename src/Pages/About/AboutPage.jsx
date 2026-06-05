import Commonbanner from "../../Component/Common-section/CommonBanner";
import Productsection from "../../Component/Common-section/ProductSection";
import TestimonialSection from "../../Component/Common-section/TestimonialSection";
import GallerySection from "../../Component/Common-section/GallerySection";
import StorySection from "./StorySection";
import TeamSection from "./TeamSection";
function AboutPage () {
      const BannerData ={
    "BannerHeading" :"About Us",
  }
    return (
        <>
        <title>About Us | Luvio Spa – Luxury Wellness & Skincare</title>
            <Commonbanner BannerData={BannerData}/>
            <StorySection/>
            <TeamSection/>
            <TestimonialSection noBg/>                 
             <Productsection />
            <GallerySection noBg/>
        </>
    );
}
export default AboutPage ;