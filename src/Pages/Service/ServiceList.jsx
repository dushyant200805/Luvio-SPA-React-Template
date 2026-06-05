import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function ServiceList () {
        // aos Animation
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,    // run only once
  });
}, []); 
      return (
        <>
          <section className="py-5 alt-bg border-top border-bottom prime-border" >
        <div className="container-fluid">
            <div className="row py-2 g-4 facility-d-row">
                <div className="col-xl-3 col-md-6" data-aos="fade-up">
                    <div className="about-cards card-bg p-3">
                        <div className="image-container  mb-6">
                            <img src="/pool.webp" alt="about-card-image-1" className="object-fit-contain"
                                width="60" height="60"/>
                        </div>
                        <div className="card-content">
                            <h3 className="fs-4 fw-semibold second-font text-capitalize white-text">Outdoor Pool</h3>
                            <p className="white-text pb-3">Lorem Ipsum estibulum blan dit libro at mauris condime ntum males
                                uda.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6"  data-aos="fade-up">
                    <div className="facility-gallery-image">
                        <img src="/facility-gallery-1.webp" alt="facility-gallery-image-1"
                            className="object-fit-cover w-100" height="350"/>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6"  data-aos="fade-up">
                    <div className="about-cards card-bg p-3">
                        <div className="image-container  mb-6">
                            <img src="/massage.webp" alt="about-card-image-1" className="object-fit-contain"
                                width="60" height="60"/>
                        </div>
                        <div className="card-content">
                            <h3 className="fs-4 fw-semibold second-font text-capitalize white-text">Oil Massages</h3>
                            <p className="white-text pb-3">Lorem Ipsum estibulum blan dit libro at mauris condime ntum males
                                uda.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6"  data-aos="fade-up">
                    <div className="facility-gallery-image">
                        <img src="/facility-gallery-2.webp" alt="facility-gallery-image-2"
                            className="object-fit-cover w-100" height="350"/>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6"   data-aos="fade-up">
                    <div className="facility-gallery-image">
                        <img src="/facility-gallery-4.webp" alt="facility-gallery-image-3"
                            className="object-fit-cover w-100" height="350"/>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6"  data-aos="fade-up" >
                    <div className="about-cards card-bg p-3">
                        <div className="image-container  mb-6">
                            <img src="/hot-bathe.webp" alt="about-card-image-1" className="object-fit-contain"
                                width="60" height="60"/>
                        </div>
                        <div className="card-content">
                            <h3 className="fs-4 fw-semibold second-font text-capitalize white-text">Sauna</h3>
                            <p className="white-text pb-3">Lorem Ipsum estibulum blan dit libro at mauris condime ntum males
                                uda.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6"  data-aos="fade-up" >
                    <div className="facility-gallery-image">
                        <img src="/facility-gallery-3.webp" alt="facility-gallery-image-4"
                            className="object-fit-cover w-100" height="350"/>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6"   data-aos="fade-up">
                    <div className="about-cards card-bg p-3">
                        <div className="image-container  mb-6">
                            <img src="/foot.webp" alt="about-card-image-1" className="object-fit-contain"
                                width="60" height="60"/>
                        </div>
                        <div className="card-content">
                            <h3 className="fs-4 fw-semibold second-font text-capitalize white-text">Reflexology</h3>
                            <p className="white-text pb-3">Lorem Ipsum estibulum blan dit libro at mauris condime ntum males
                                uda.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         </section>
        </>
      );
}
export default ServiceList ;