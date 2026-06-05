import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function TeamCard () {  
            // aos Animation
        useEffect(() => {
      AOS.init({
       duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, []);     
    const teamdata=[
        {
            "TeamImage":"/public/spa-team-1.webp",
            "TeamateName":"Eric Tenney",
            "TeamatePost":"Spa Manager",
        },
         {
            "TeamImage":"/public/spa-team-2.webp",
            "TeamateName":"Violet Malone",
            "TeamatePost":"Senior Massage Therapist",
        },
         {
            "TeamImage":"/public/spa-team-3.webp",
            "TeamateName":"John Payne",
            "TeamatePost":"Masseur",
        },
         {
            "TeamImage":"/public/spa-team-4.webp",
            "TeamateName":"Karen Tabor",
            "TeamatePost":"Spa Receptionist",
        }
    ]
    return (
        <>
            {teamdata.map((item,index)=>{
                return (
                <div className="col-lg-3 col-sm-6  px-3" key={index} data-aos="fade-down">
                    <div className="team-card border-0 h-100">
                        <div className="card-img mb-3">
                            <img src={item.TeamImage} alt="spa-team-image-1"
                                className="object-fit-cover w-100"/>
                        </div>
                        <div className="card-body text-center">
                            <h2 className="head-text fw-semibold text-capitalize fs-4 mb-1 second-font">{item.TeamateName}</h2>
                            <p className="fs-7 para-text fw-semibold">{item.TeamatePost}</p>
                        </div>
                    </div>
                </div>
                );
            })}
        </>
    );
}
export default TeamCard;