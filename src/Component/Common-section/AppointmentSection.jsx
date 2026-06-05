import {faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function AppointmentSection ({ noBg }) {
    // aos Animation
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,    // run only once
  });
}, []);
    return (
          <section className={`py-5 ${noBg ? "" : "alt-bg"} border-top border-bottom prime-border`}>
        <div className="container">
            <div className="head-content mb-5" data-aos="fade-up">
                <h2 className="head-text text-capitalize fw-medium display-4 second-font">Enjoy the difference</h2>
            </div>
            <form id="appointment" data-aos="fade-up">
                <div className="row align-items-center g-3 py-3">
                    <div className="col-md-3 px-3">
                        <div className="e-mail-input d-flex align-items-center border-bottom light-border">
                            <input type="email" aria-label="email"
                                className="form-control border-0 rounded-0 input-text bg-transparent shadow-none p-3"
                                name="booking_email" id="booking_email" placeholder="E-mail" required />
                            <span className="">
                                <FontAwesomeIcon icon={faEnvelope} className="fs-7 para-text"/>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 px-3">
                        <div className="date-input d-flex align-items-center border-bottom light-border">
                            <input type="date"
                                className="form-control border-0 rounded-0 bg-transparent input-text shadow-none p-3"
                                name="booking_date" id="booking_date" aria-label="date" required />
                        </div>
                    </div>
                    <div className="col-md-3 px-3">
                        <div className="custom-select-wrapper border-bottom light-border">
                            <select name="booking_treatment" id="booking_treatment" className="custom-select bg-transparent p-3 para-text" defaultValue="" required >
                                <option value="" disabled>Select Treatment</option>
                                <option value="Relax-massage">Relax massage</option>
                                <option value="Spa-day">Spa day</option>
                                <option value="stone-massage">Stone massage</option>
                            </select>
                            <span className="select-icon">
                               <FontAwesomeIcon icon={faChevronDown} className="fs-7 para-text"/>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="appointment-btn ">
                            <button type="submit" name="bookingform"
                                className="btn prime-btn rounded-0 w-100 py-2 text-uppercase">appointment</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
    );
}
export default AppointmentSection ;