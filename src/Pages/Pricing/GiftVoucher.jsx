import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
function GiftVoucher () {
        // aos Animation
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,    // run only once
  });
}, []);
    return (
        <>
    <section className="py-5 alt-bg border-top border-bottom prime-border"  >
        <div className="container">
            <div className="row g-3 py-5 justify-content-center align-items-center">
                <div className="col-lg-4" data-aos="fade-down">
                    <div className="gift-content p-3 text-center" >
                        <h2 className="head-text text-capitalize fw-semibold">Grab voucher during current month</h2>
                        <Link to="/pricing" className="para-text border-bottom pb-1 fw-semibold text-uppercase fs-7 ms-2 prime-border">see
                            more</Link>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up">
                    <div className="voucher-image ">
                        <div className="badge-container">
                            <div className="text-ring">
                                <span>D</span><span>I</span><span>S</span><span>C</span><span>O</span><span>U</span><span>N</span><span>T</span>
                                <span>D</span><span>I</span><span>S</span><span>C</span><span>O</span><span>U</span><span>N</span><span>T</span>
                                <span>O</span><span>F</span><span>F</span><span>E</span><span>R</span>
                            </div>
                            <div className="center-text">
                                15<span className="percent">%</span>
                            </div>
                        </div>
                        {/* <!-- Existing Content --> */}
                        <div className="logo-image">
                            <img src="/public/logo-dark.png" alt="logo-dark" height="25"/>
                        </div>
                        <h2 className="second-font text-capitalize white-text fw-semibold fs-1">
                            wellness gift card
                        </h2>
                        <p className="white-text fw-semibold text-uppercase fs-9">
                            enjoy our services
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
        </>
    );
}
export default GiftVoucher