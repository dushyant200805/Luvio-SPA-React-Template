import { Link } from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function BlogCard ( {Blog} ) {
            // aos Animation
        useEffect(() => {
      AOS.init({
       duration: 1200, // animation duration
        once: false,    // run only once
      });
    }, []);
    return (
        <>
             <div className="col-lg-4 col-md-6 px-3 h-100" key={Blog.id} data-aos="fade-up">
                    <div className="blog-card border-0 ">
                        <div className="card-img mb-3">
                            <img src={Blog.BlogImage1} alt="" className="object-fit-cover bolg-img w-100"
                                height="450"/>
                        </div>
                        <div className="card-body text-start ">
                            <span className="text-capitalize m-0 fs-7 d-block para-text"> {Blog.BlogDate} / {Blog.BlogTitle}</span>
                            <h3 className="head-text second-font text-capitalize fs-5">
                                Revive your skin with gentle spa therapies
                            </h3>
                            <Link to={`/blogdetails/${Blog.id}`} className="para-text border-bottom pb-1 fw-semibold text-uppercase fs-9  prime-border">read more</Link>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default BlogCard ;