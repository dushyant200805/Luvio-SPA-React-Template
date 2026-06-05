import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
function Productsection({ noBg }) {
    // aos Animation
    useEffect(() => {
        AOS.init({
            duration: 1200, // animation duration
            once: false,    // run only once
        });
    }, []);
    return (
        <section className={`py-5 ${noBg ? "" : "alt-bg"} border-top border-bottom prime-border`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 product-image p-3 text-center" data-aos="fade-down">
                        <img src="/product-1.webp" alt="product-1" className="object-fit-cover  w-100 "
                            height="450" />
                    </div>
                    <div className="col-lg-3 product-image p-3 text-center" data-aos="fade-up">
                        <img src="/product-2.webp" alt="product-1" className="object-fit-cover w-100 "
                            height="550" />
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <div className="product-content" >
                            <h2 className="text-capitalize head-text second-font fw-medium display-4 mb-3 lh-2">New solutions
                                with
                                organic oil free products</h2>
                            <p className="para-text w-75 mb-4 ms-2">Lorem ipsum estibulum blandit libero at mauris condi me ntum
                                males uada scelerisque in mauris ut malada.</p>
                            <Link to="/about-us"
                                className="para-text border-bottom pb-1 fw-semibold text-uppercase fs-7 ms-2 prime-border">see
                                more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Productsection;