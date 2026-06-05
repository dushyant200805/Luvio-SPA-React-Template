import TreatmentDetail from "../Ui/Treatmentdetail";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function TreatmentSection ( {noBg} ) {
            // aos Animation
        useEffect(() => {
      AOS.init({
       duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, []);
    return (
      <section className={`py-5 ${noBg ? "" : "alt-bg border-top border-bottom prime-border"}`}>
        <div className="container">
            <div className="head-content mb-5" data-aos="fade-up">
                <h2 className="head-text text-capitalize fw-medium display-4 second-font">List of treatments</h2>
            </div>
            <div className="row py-3 g-3 justify-content-between" data-aos="fade-up">
                <TreatmentDetail/>
            </div>
        </div>
    </section>
    );
}
export default TreatmentSection ;