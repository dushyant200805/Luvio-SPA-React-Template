import "@splidejs/splide/css";
import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import AOS from "aos";
import "aos/dist/aos.css";

function Sliderbannersect() {
    // Aos Animation
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false
        });
    }, []);

    const sliderRef = useRef(null);
    useEffect(() => {
        const splide = new Splide(sliderRef.current, {
            type: "loop",
            perPage: 1,
            perMove: 1,
            autoplay: true,
            interval: 4000,
            speed: 1000,
            arrows: false,
            pagination: false,
            drag: true,
            keyboard: true,
        });

        splide.mount();

        return () => splide.destroy();
    }, []);

    return (
        <section className="banner-bg">
            <div id="banner-slider" className="splide" ref={sliderRef}>
                <div className="splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide slide-1">
                            <div className="container d-flex align-items-center justify-content-center h-100">
                                <div className="splide-container text-center py-5">
                                    <p className="white-text second-font text-capitalize fw-bold mb-2 fs-1">
                                        welcome to luvio spa
                                    </p>
                                    <h1 className="white-text fw-bold mb-3 lh-sm text-uppercase fs-10">
                                        Relax  Refresh  Renew
                                    </h1>
                                    <p className="white-text text-capitalize mb-4">
                                        Experience pure tranquility with luxurious treatments designed to calm your mind and
                                        revive your body.
                                    </p>
                                    <div>
                                        <Link to="/contact" className="btn prime-btn text-capitalize btn-lg rounded-0 m-2">
                                            Book Appointment
                                        </Link>
                                        <Link to="/services" className="btn prime-btn btn-lg rounded-0 m-2">
                                            Explore Services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="splide__slide slide-2">
                            <div className="container d-flex align-items-center justify-content-center h-100">
                                <div className="splide-container text-center">
                                    <p className="white-text second-font text-capitalize fw-bold mb-2 fs-1">
                                        welcome to luvio spa
                                    </p>
                                    <h1 className="white-text fw-bold mb-3 lh-sm text-uppercase fs-10">
                                        Discover True Wellness
                                    </h1>
                                    <p className="white-text text-capitalize mb-4">
                                        From soothing massages to premium skincare, Luvio Spa brings harmony, balance, and
                                        healing to your lifestyle.
                                    </p>
                                    <div>
                                        <Link to="/contact" className="btn prime-btn text-capitalize btn-lg rounded-0 m-2">
                                            Book Appointment
                                        </Link>
                                        <Link to="/services" className="btn prime-btn btn-lg rounded-0 m-2">
                                            Explore Services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="splide__slide slide-3">
                            <div className="container d-flex align-items-center justify-content-center h-100">
                                <div className="splide-container text-center">
                                    <p className="white-text second-font text-capitalize fw-bold mb-2 fs-1">
                                        welcome to luvio spa
                                    </p>
                                    <h1 className="white-text fw-bold mb-3 lh-sm text-uppercase fs-10">
                                        Indulge in Pure Luxury
                                    </h1>
                                    <p className="white-text text-capitalize mb-4">
                                        At Luvio Spa, every detail is crafted to soothe your senses and elevate your
                                        wellness journey.
                                    </p>
                                    <div>
                                        <Link to="/contact" className="btn prime-btn text-capitalize btn-lg rounded-0 m-2">
                                            Book Appointment
                                        </Link>
                                        <Link to="/services" className="btn prime-btn btn-lg rounded-0 m-2">
                                            Explore Services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default Sliderbannersect