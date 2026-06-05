import Commonbanner from "../../Component/Common-section/CommonBanner";
import ContactForm from "./contactForm";
import GallerySection from "../../Component/Common-section/GallerySection";
import EmailAlertMessage from "../../Component/Ui/EmailAlertMessage";
function ContactPage() {
  const BannerData = {
    "BannerHeading": "Contact Us",
  }
  return (
    <>
      <title>Contact | Luvio Spa – Luxury Wellness & Skincare</title>
      <Commonbanner BannerData={BannerData} />
      <EmailAlertMessage />
      <ContactForm />
      <GallerySection />
    </>
  );
}

export default ContactPage;