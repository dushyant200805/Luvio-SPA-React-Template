import TestimonialCard from "../Ui/TestimonialCard";
import "@splidejs/splide/css";
import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import AOS from "aos";
import "aos/dist/aos.css";
function TestimonialSection ( {noBg}) {
    // aos Animation
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,    // run only once
  });
}, []);
      const sliderRef = useRef(null);
      useEffect(() => {
    const splide = new Splide(sliderRef.current, {
      type: "loop",
      perPage: 1,
      perMove: 1,             
      autoplay: true,
      interval: 2000,
      speed: 800,            
      arrows: false,
      pagination: false,
      pauseOnHover: true,     
      gap: "20px",

      breakpoints: {
        1024: { perPage: 1 },
        768: { perPage: 1 },
      },
    });

    splide.mount();

    return () => splide.destroy();  
  }, []);
    return (
        <>  
               {/* <!-- review --> */}
    <section className={`py-5 ${noBg ? "" : "alt-bg"} border-top border-bottom prime-border`}>
        <div className="container">
            <div className="head-content mb-4" data-aos="fade-up">
                <h2 className="head-text text-capitalize fw-medium display-4 second-font">All about our compliments you can
                    find here</h2>
            </div>
            <div id="testimonial-slider" className="col-sm-8 mx-auto splide p-4" ref={sliderRef} data-aos="fade-up">
                <div className="splide__track ">
                    <ul className="splide__list">
                      <TestimonialCard/>      
                    </ul>
                </div>
            </div>
        </div>
    </section> 
        </>
    );

}
export default TestimonialSection ;
