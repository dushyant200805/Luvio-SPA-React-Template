import CommonBanner from "../../Component/Common-section/CommonBanner"
import SpecialTreatment from "./SpecialTreatment"
import TreatmentSection from "../../Component/Common-section/TreatmentSection"
import PricingBanner from "./PriceBanner";
import GiftVoucher from "./GiftVoucher";
import GallerySection from "../../Component/Common-section/GallerySection";
function PricingPage() {
    const BannerData ={
    "BannerHeading" :"Pricing",
  }
    return (
        <>
        <title>Pricing | Luvio Spa – Luxury Wellness & Skincare</title>
            <CommonBanner BannerData={BannerData}/>
            <SpecialTreatment/>
            <TreatmentSection/>
            <PricingBanner/>
            <GiftVoucher/>
            <GallerySection noBg/>
        </>
    )   
}
export default PricingPage;