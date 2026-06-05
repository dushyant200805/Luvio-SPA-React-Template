import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function GallerySection ({noBg}) {
            // aos Animation
        useEffect(() => {
      AOS.init({
       duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, []);
    return (
        <>
        <section className={`py-5 ${noBg ? "" : "alt-bg"} border-top border-bottom prime-border`}>
        <div className="container-fluid">
            <div className="row g-3">
                <div className="col-lg-2 col-md-6  order-lg-1 order-md-2 ">
                    <div className="gallery-img">
                        <img src="/public/gallery-1.webp" alt="gallery-img-1" className="object-fit-cover  w-100"
                            height="300"/>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6  order-lg-2  order-md-3 ">
                    <div className="gallery-img">
                        <img src="/public/gallery-2.webp" alt="gallery-img-2" className="object-fit-cover  w-100"
                            height="300"/>
                    </div>
                </div>
                <div className=" col-lg-4 col-md-12  d-flex align-items-center justify-content-center order-md-1 order-lg-3" >
                    <h2 className="head-text fw-medium fs-lg-1 fs-3 second-font text-capitalize" data-aos="fade-up"> Follow us on instagram
                    </h2>
                </div>
                <div className="col-lg-2 col-md-6  order-lg-4  order-4 ">
                    <div className="gallery-img">
                        <img src="/public/gallery-3.webp" alt="gallery-img-3" className="object-fit-cover  w-100"
                            height="300"/>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6  order-lg-5  order-md-5 ">
                    <div className="gallery-img">
                        <img src="/public/gallery-4.webp" alt="gallery-img-4" className="object-fit-cover  w-100"
                            height="300"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}
export default GallerySection;