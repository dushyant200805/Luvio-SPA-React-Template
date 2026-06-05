import StoryCard from "../../Component/Ui/StoryCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function StorySection (){
            // aos Animation
        useEffect(() => {
      AOS.init({
       duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, []);
    return  (
        <>
        
    {/* <!-- about-card --> */}
    <section className="py-5" >
        <div className="container">
            <div className="head-content mb-5" data-aos="fade-up">
                <h2 className="head-text text-capitalize fw-medium fs-1 second-font">We developed new kind of wellness and
                    spa experience to reconnect and reinvigorate your senses with personalized wellness experiences</h2>
            </div>
            <div className="row g-3">
                <StoryCard/>
            </div>
        </div>
    </section>
        </>
    ); 
}
export default  StorySection ;