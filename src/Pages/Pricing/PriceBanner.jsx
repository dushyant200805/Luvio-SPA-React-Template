import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function PricingBanner() {
        // aos Animation
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,    // run only once
  });
}, []);
    return(
        <>
            <section className="py-5 pricing-banner" >
        <div className="container">
            <div className="row justify-content-lg-center  g-3">
                <div className="col-lg-3 col-sm-6"  data-aos="zoom-in">
                    <div className="pricing-card-container px-3 py-5">
                        <div className="pricing-card text-center text-md-start">
                            <h2 className="second-font text-capitalize fs-4 white-text fw-semibold ">Standard</h2>
                            <h3 className="second-font white-text fw-semibold mb-3 text-capitalize mb-3"><sub
                                    className="fs-2 second-font">$</sub><span className="fs-1 second-font">60</span>/ Monthly
                            </h3>
                            <p className="white-text">Lorem ipsum dolor sit aie con sectetur adipiscin eit. Integer tempor
                                est id fringilla tepus.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6"  data-aos="zoom-in">
                    <div className="pricing-card-container px-3 py-5">
                        <div className="pricing-card text-center text-md-start">
                            <h2 className="second-font text-capitalize fs-4 white-text fw-semibold ">Premium</h2>
                            <h3 className="second-font white-text fw-semibold mb-3 text-capitalize mb-3"><sub
                                    className="fs-2 second-font">$</sub><span className="fs-1 second-font">120</span>/ Monthly
                            </h3>
                            <p className="white-text">Lorem ipsum dolor sit aie con sectetur adipiscin eit. Integer tempor
                                est id fringilla tepus.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6"  data-aos="zoom-in"> 
                    <div className="pricing-card-container px-3 py-5">
                        <div className="pricing-card text-center text-md-start">
                            <h2 className="second-font text-capitalize fs-4 white-text fw-semibold ">Deluxe</h2>
                            <h3 className="second-font white-text fw-semibold mb-3 text-capitalize mb-3"><sub
                                    className="fs-2 second-font">$</sub><span className="fs-1 second-font">260</span>/ Monthly
                            </h3>
                            <p className="white-text">Lorem ipsum dolor sit aie con sectetur adipiscin eit. Integer tempor
                                est id fringilla tepus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </section>
        </>
    );
}
export default PricingBanner