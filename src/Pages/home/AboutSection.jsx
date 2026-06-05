import { Link } from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Aboutsection() {
    // aos Animation
    useEffect(() => {
        AOS.init({
            duration: 1200, // animation duration
            once: false,    // run only once
        });
    }, []);
    return (
        <>
            {/* <!-- about-us --> */}
            <section className="py-5">
                <div className="container">
                    <div className="row gx-3">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="about-img">
                                <img src="/about-img.webp" alt="about-img"
                                    className="object-fit-cover w-100 about-img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content p-3">
                                <span className="prime-text mb-2 text-capitalize second-font fw-bold fs-5"> about-us</span>
                                <h2 className="head-text mb-3 text-capitalize p-0 fw-medium second-font display-4">The Essence of
                                    Pure Relaxation</h2>
                                <p className="para-text mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
                                    sit, ipsa et voluptates aperiam iste totam asperiores vero,
                                    ullam quo doloribus distinctio libero, explicabo temporibus quas sed quis provident
                                    consequatur ipsam! Rerum incidunt eveniet at!</p>
                                <p className="para-text mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
                                    sit, ipsa et voluptates aperiam iste totam asperiores vero,
                                    ullam quo doloribus distinctio libero</p>
                                <Link to="/about-us"
                                    className="para-text border-bottom pb-1 fw-semibold text-uppercase fs-7 ms-2 prime-border">see
                                    more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Aboutsection;