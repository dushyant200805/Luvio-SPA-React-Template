import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function ServiceMenu () {
            // aos Animation
        useEffect(() => {
      AOS.init({
       duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, []); 
    return (
        <>
            <section className="py-5" >
                <div className="container">
                    <div className="head-content mb-5" data-aos="fade-up">
                        <h2 className="head-text text-capitalize fw-medium fs-1 second-font">Reconnect and reinvigorate your senses
                            with personalized wellness experiences</h2>
                    </div>
                    <div className="row g-3" >
                        <div className="col-xl-2 col-md-4 col-sm-6">
                            <div className="facility-card  p-3 h-100" data-aos="fade-up">
                                <div className="image-container mx-auto mb-3">
                                    <img src="/public/foot.webp" alt="about-card-image-1"   
                                        className="object-fit-contain w-100 d-block" height="120"/>
                                </div>
                                <div className="card-content text-center">
                                    <h3 className="fs-4 fw-semibold second-font text-capitalize head-text">Reflexology</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6">
                            <div className="facility-card  p-3 h-100" data-aos="fade-down">
                                <div className="image-container mx-auto mb-3">
                                    <img src="/public/skin-care.webp" alt="about-card-image-2"
                                        className="object-fit-contain w-100 d-block" height="120"/>
                                </div>
                                <div className="card-content text-center">
                                    <h3 className="fs-4 fw-semibold second-font text-capitalize head-text">Skin Care</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6">
                            <div className="facility-card  p-3 h-100" data-aos="fade-up">
                                <div className="image-container mx-auto mb-3">
                                    <img src="/public/hot-bathe.webp" alt="about-card-image-3"
                                        className="object-fit-contain w-100 d-block" height="120"/>
                                </div>
                                <div className="card-content text-center">
                                    <h3 className="fs-4 fw-semibold second-font text-capitalize head-text">Sauna</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6">
                            <div className="facility-card  p-3 h-100" data-aos="fade-down">
                                <div className="image-container mx-auto mb-3">
                                    <img src="/public/pool.webp" alt="about-card-image-3"
                                        className="object-fit-contain w-100 d-block" height="120"/>
                                </div>
                                <div className="card-content text-center">
                                    <h3 className="fs-4 fw-semibold second-font text-capitalize head-text">pool</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6">
                            <div className="facility-card  p-3 h-100" data-aos="fade-up">
                                <div className="image-container mx-auto mb-3">
                                    <img src="/public/massage.webp" alt="about-card-image-3"
                                        className="object-fit-contain w-100 d-block" height="120"/>
                                </div>
                                <div className="card-content text-center">
                                    <h3 className="fs-4 fw-semibold second-font text-capitalize head-text">Massage</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6">
                            <div className="facility-card  p-3 h-100" data-aos="fade-down">
                                <div className="image-container mx-auto mb-3">
                                    <img src="/public/coffe.webp" alt="about-card-image-3"
                                        className="object-fit-contain w-100 d-block" height="120"/>
                                </div>
                                <div className="card-content text-center">
                                    <h3 className="fs-4 fw-semibold second-font text-capitalize head-text">Restaurant</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ServiceMenu;