import AppointmentSection from "../../Component/Common-section/AppointmentSection";
import Commonbanner from "../../Component/Common-section/CommonBanner";
import TreatmentSection from "../../Component/Common-section/TreatmentSection";
import CounterSection from "./CounterSection";
import ServiceList from "./ServiceList";
import ServiceMenu from "./ServiceMenu";
import GallerySection from "../../Component/Common-section/GallerySection";


function ServicePage () {
    const BannerData ={
    "BannerHeading" :"Services",
  }
    return (
        <>
        <title>Services | Luvio Spa – Luxury Wellness & Skincare</title>
           <Commonbanner BannerData={BannerData}/>
           <ServiceMenu/>
           <ServiceList/>
           <CounterSection/>
           <TreatmentSection/>
           <AppointmentSection noBg/>
           <GallerySection noBg/>
        </> 
    );
}
export default ServicePage ;