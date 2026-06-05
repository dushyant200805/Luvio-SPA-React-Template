function TestimonialCard () {
    const Testimonialdate = [
        {
            "ReviewerImage":"/test-1.webp",
            "ReviewerDesc":"Sed placerat pretium diam, sed tempus dolor rutrum eu. In et vestibulum magna. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer tempor est id fringilla tempus.",
            "ReviewerName":"Anna Tempah",
        },
         {
            "ReviewerImage":"/test-2.webp",
            "ReviewerDesc":"Sed placerat pretium diam, sed tempus dolor rutrum eu. In et vestibulum magna. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Integer tempor est id fringilla tempus.",
            "ReviewerName":"Sarah Johanson",
        }
    ]
    return (
        <>
        {Testimonialdate.map((item,index)=>{
            return (
         <li className="splide__slide p-0 rounded-4" key={index}>
            <div className="test-body">
                <div className="text-center mb-4">
                    <div className="testimonial-img mx-auto mb-4">
                        <img src={item.ReviewerImage} alt="testimonial-img-1"/>
                    </div>
                </div>
                <blockquote className="fs-6 para-text mb-4 text-center">
                   {item.ReviewerDesc}
                </blockquote>
                <h3 className="head-text text-center second-text m-0 text-capitalize">{item.ReviewerName}</h3>
            </div>
        </li>
            );
        })}
        </>
    );
}
export default TestimonialCard ;