import { Link } from "react-router";
import ServiceCard from "../../Component/Ui/ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Servicesection() {
    // aos Animation
    useEffect(() => {
        AOS.init({
            duration: 1200, // animation duration
            once: false,    // run only once
        });
    }, []);
    return (
        <>
            <section className="py-5 px-1 ">
                <div className="head-content py-4 text-center">
                    <h2 className="head-text second-font display-6 mb-3 fw-normal">Lorem ipsum dolor sit amet, consectetur
                        adipisicing
                        elit, sed do eiusmod tempor incididunt ut labor.</h2>
                    <Link to="/services"
                        className="para-text border-bottom pb-1 fw-semibold text-uppercase fs-7 ms-2 prime-border">see more</Link>
                </div>
                <div className="mx-auto service-card-section" data-aos="fade-up">
                    <div className="container ">
                        <div className="head-content">
                            <h3 className="white-text text-capitalize fs-8 second-font">Our services</h3>
                        </div>
                        <div className="row py-5 align-items-center justify-content-center">
                            <ServiceCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Servicesection;