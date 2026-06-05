import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Commonbanner ( { BannerData }) {
            // aos Animation
        useEffect(() => {
      AOS.init({
       duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, []);
    return (
        <>
            {/* <!-- banner-section --> */}
        <section className="about-banner-section d-flex align-items-center">
            <div className="container text-center white-text ">
                <div className="banner-content mx-auto mt-6">
                    <h1 className="white-text second-font fw-bold mb-3 lh-sm text-uppercase fs-1" data-aos="fade-up">
                        {BannerData.BannerHeading}
                    </h1>
                </div>
            </div>
        </section>
        </>
    );
}
export default Commonbanner ;