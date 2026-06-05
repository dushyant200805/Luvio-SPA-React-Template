import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function StoryCard () {
            // aos Animation
        useEffect(() => {
      AOS.init({
       duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, []);
    const storydata =[
        {
            "Storyimage":"/public/about-card-image-1.webp",
            "StoryTile":"Spa Experience",
            "Storydesc":"Lorem ipsum dolor sit amet, consec tetur adipiscing elit, seddo eiusmod",
        },
         {
            "Storyimage":"/public/about-card-image-2.webp",
            "StoryTile":"Advanced detox",
            "Storydesc":"Lorem ipsum dolor sit amet, consec tetur adipiscing elit, seddo eiusmod",
        },
         {
            "Storyimage":"/public/about-card-image-3.webp",
            "StoryTile":"Healthy Skin",
            "Storydesc":"Lorem ipsum dolor sit amet, consec tetur adipiscing elit, seddo eiusmod",
        }
    ]
    return (
        <>
         {storydata.map((item,index)=>{
            return (
            <div className="col-lg-4 col-sm-6" key={index} data-aos="fade-up">
                <div className="about-card h-100 bg-transparent p-3">
                    <div className="image-container mx-auto mb-3">
                        <img src={item.Storyimage} alt="about-card-image-1"
                            className="object-fit-contain w-100 " height="120"/>
                    </div>
                    <div className="card-content text-center">
                        <h3 className="fs-4 fw-semibold second-font text-capitalize head-text">{item.StoryTile}</h3>
                        <p className="para-text pb-3">{item.Storydesc}</p>
                    </div>
                </div>
            </div>
            );
         })}
        </>
    );
}
export default StoryCard ;