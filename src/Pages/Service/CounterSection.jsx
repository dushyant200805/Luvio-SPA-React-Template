import { useEffect } from "react";
import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
function CounterSection () {
        // aos Animation
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,    // run only once
  });
}, []); 
 useEffect(() => {
  const counters = document.querySelectorAll(".counter");
    const counterSection = document.querySelector(".counter-section");
        let hasRun = false; 
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasRun) {
                    hasRun = true; // Run only once
                    counters.forEach(counter => {
                        let target = +counter.getAttribute("data-target");
                        let speed = target / 180; // Adjust speed
                        let count = 0;

                        let updateCounter = () => {
                            count += speed;
                            if (count < target) {
                                counter.innerText = Math.floor(count) + '+';
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target + '+'; // Ensure final value matches
                            }
                        };

                        updateCounter();
                    });
                }
            });
    }, { threshold: 1.0 }); // Trigger when 30% of section is visible
     observer.observe(counterSection);
      }, []);
    return (
        <>
            {/* <!-- counter --> */}
    <section className="py-4 counter-section">
        <div className="container">
            <div className="head-content mb-5"  data-aos="fade-up">
                <h2 className="head-text text-capitalize fw-medium fs-1 second-font">Our experience in numbers</h2>
            </div>
            <div className="row g-3 justify-content-center">
                <div className="col-lg-2 col-md-6" data-aos="zoom-in">
                    <div className="counter-card text-center">
                        <h3 className="head-text fw-semibold second-font counter fs-10" data-target="247">247+</h3>
                        <h4 className="head-text fw-semibold second-font text-uppercase fs-7">Partners</h4>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6" data-aos="zoom-in">
                    <div className="counter-card text-center">
                        <h3 className="head-text fw-semibold second-font counter fs-10" data-target="1000">1000+</h3>
                        <h4 className="head-text fw-semibold second-font text-uppercase fs-7">visitors</h4>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6" data-aos="zoom-in">
                    <div className="counter-card text-center">
                        <h3 className="head-text fw-semibold second-font counter fs-10" data-target="46">46+</h3>
                        <h4 className="head-text fw-semibold second-font text-uppercase fs-7">SPECIALITIES</h4>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6" data-aos="zoom-in">
                    <div className="counter-card text-center">
                        <h3 className="head-text fw-semibold second-font counter fs-10" data-target="58">58+</h3>
                        <h4 className="head-text fw-semibold second-font text-uppercase fs-7">members</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}
export default CounterSection;