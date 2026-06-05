import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function SpecialTreatment () {
        // aos Animation
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,    // run only once
  });
}, []); 
    return(
        <>
       <section className="py-5 ">
        <div className="container">
            <div className="head-content mb-5" data-aos="fade-up">
                <h2 className="head-text text-capitalize fw-medium fs-1 second-font">Special treatments to relax you
                    soul body and mind</h2>
            </div>
            <div className="row g-3 justify-content-center">
                <div className="col-lg-4 col-md-6"  data-aos="fade-right" data-aos-delay="200">
                    <div className="special-treatment-desc  p-2">
                        <p className="para-text mb-3 fs-9">Lorem ipsum dolor sit amet, consectetur adipisci ng elit. Integer
                            tempor
                            est id fringili tempus. Sed placerat pretium diam, sed massa semper solin.</p>
                        <p className="para-text fs-9">Duis ultrices diam sed faucibus facilisis. Sed non nulla id leo tempor
                            euismod</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6"  data-aos="fade-right" data-aos-delay="400">
                    <div className="special-treatment d-flex justify-content-md-center">
                        <ul className="para-text text-uppercase fs-9 d-block">
                            <li className="mb-2 ">Traditional Thai massage</li>
                            <li className="mb-2 "> HydraFacial Treatment</li>
                            <li className="mb-2 ">Deep Pore Cleansing</li>
                            <li className="mb-2 ">Therapeutic massag</li>
                            <li className="mb-2 ">Anti-Aging Facial</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6"  data-aos="fade-right" data-aos-delay="600">
                    <div className="special-treatment d-flex justify-content-md-center">
                        <ul className="para-text text-uppercase fs-9 d-block">
                            <li className="mb-2 "> revitalizing body scrub</li>
                            <li className="mb-2 "> Cryo time freeze facial</li>
                            <li className="mb-2 ">Gold splendour massage</li>
                            <li className="mb-2 ">revitalizing body scrub</li>
                            <li className="mb-2 ">Cryo-lipoliss</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}
export default SpecialTreatment 