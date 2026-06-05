import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";   
import { BlogData } from "../../Data/BlogData";
import { faLink, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function BlogList(){
        // aos Animation
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,    // run only once
  });
}, []);

     const { id } = useParams();
    const Blog = BlogData.find((e) => e.id === id );
    
  if (!Blog) return <h2 className="text-center fs-2 my-3">Blogs Not Found</h2>;

    return(
        <>
       <section className="py-5">
        <div className="container">
            <div className="row g-3 justify-content-center">
                <div className="col-lg-8">
                    <div className="blog-details p-2">
                        <div className="image-container mb-3" data-aos="zoom-in">
                            <img src={Blog.BlogImage1} alt="blog-image-4" className="object-fit-cover w-100"
                                height="350"/>
                        </div>
                        <div className="content" data-aos="fade-up">
                            <h2 className="head-text text-uppercase  fs-9">{Blog.BlogDate} / {Blog.BlogTitle}</h2>
                            <h3 className="head-text text-capitalize second-font fs-1 mb-2">{Blog.BlogHeading1}</h3>
                            <p className="para-text mb-3">{Blog.BlogDesc2}</p>
                            <a href="#"className="para-text border-bottom pb-1 mb-5 d-inline-block fw-semibold text-uppercase fs-9  prime-border">read more</a>
                        </div>
                        <div className="review-block card-alt-bg p-5 border light-border mb-5" data-aos="fade-up">
                            <p className="para-text mb-3">{Blog.BlogDesc3}</p>
                            <h4 className="head-text fs-5 second-font text-capitalize">sarah johanson</h4>
                        </div>
                        <div className="image-container mb-3" data-aos="zoom-in">
                            <img src={Blog.BlogImage2} alt="blog-image-5" className="object-fit-cover w-100"
                                height="350"/>
                        </div>
                        <div className="content" data-aos="fade-up">
                            <h2 className="head-text text-uppercase  fs-9">Jan 15, <span className="currentyear"></span> /
                                Massage,
                                Sauna</h2>
                            <h3 className="head-text text-capitalize second-font fs-1 mb-2">{Blog.BlogHeading2}
                            </h3>
                            <p className="para-text mb-3">{Blog.BlogDesc2}</p>

                            <a href="#"
                                className="para-text border-bottom pb-1 mb-5 d-inline-block fw-semibold text-uppercase fs-9  prime-border">read
                                more</a>
                        </div>

                        <div className="review-block card-alt-bg p-5 border light-border mb-5" data-aos="fade-up">
                            <h4 className="head-text fs-3 second-font text-capitalize">
                                <a href="#"> <FontAwesomeIcon icon={faLink} className="fs-3 head-text me-2" /> Great skin comes from nature</a></h4>
                        </div>  

                        <div className="image-container mb-3" data-aos="zoom-in">
                            <img src={Blog.BlogImage3} alt="blog-image-6" className="object-fit-cover w-100"
                                height="350"/>
                        </div>
                        <div className="content" data-aos="fade-up">
                              <h2 className="head-text text-uppercase  fs-9">Jan 8, <span className="currentyear"></span> / Massage,
                            Sauna</h2>
                        <h3 className="head-text text-capitalize second-font fs-1 mb-2">Romantic weekend spa getaways</h3>
                        <p className="para-text mb-3">{Blog.BlogDesc2}</p>

                        <a href="#"
                            className="para-text border-bottom pb-1 mb-5 d-inline-block fw-semibold text-uppercase fs-9  prime-border">read
                            more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="client-card p-2 mb-3" >
                        <div className="client-image mb-2" data-aos="zoom-in">
                            <img src={Blog.BlogReviwerImage} alt="client-image" className="object-fit-cover w-100"
                                height="300"/>
                        </div>
                        <div className="card-content" data-aos="fade-up" >
                            <h4 className="text-capitalize head-text second-font mb-2">{Blog.BlogReviwer}</h4>
                            <p className="para-text mb-3">{Blog.BlogReviweDesc}</p>
                            <a href="#" className="text-capitalize fs-7 me-2">fb</a>
                            <a href="#" className="text-capitalize fs-7 mx-2">ln</a>
                            <a href="#" className="text-capitalize fs-7 mx-2">be</a>
                            <a href="#" className="text-capitalize fs-7 mx-2">lg</a>
                        </div>
                    </div>
                    <div className="blog-search-block p-2" data-aos="fade-up">
                        <form id="blog-search" className="mb-5">
                            <div className="input-group mb-3 p-1 input-bg border light-border">
                                <input type="email" name="blog_email" id="blog_email"
                                    className="form-control input-text border-0 p-1 bg-transparent shadow-none "
                                    placeholder="Search..." aria-label="Search" required/>
                                <button className="btn prime-btn rounded-0" type="submit" name="blog-search">
                                  <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
                            </div>
                        </form>
                    </div>
                    <div className="category-block p-2">
                        <h4 className="head-text second-font text-capitalize mb-3">Category</h4>
                        <a href="service.html" className="head-text d-block second-font fw-bold fs-9 mb-3 text-uppercase"  data-aos="fade-up" data-aos-delay="100">Massage</a>
                        <a href="service.html" className="head-text d-block second-font fw-bold fs-9 mb-3 text-uppercase"  data-aos="fade-up" data-aos-delay="200">Relax</a>
                        <a href="service.html" className="head-text d-block second-font fw-bold fs-9 mb-3 text-uppercase"  data-aos="fade-up" data-aos-delay="300">Sauna</a>
                        <a href="service.html" className="head-text d-block second-font fw-bold fs-9 mb-3 text-uppercase"  data-aos="fade-up" data-aos-delay="400">SPA</a>
                    </div>
                    <div className="post mb-3 p-2">
                        <div className="post-card g-3 mb-3" data-aos="fade-up">
                            <div className="image-container mb-3" >
                                <img src={Blog.BlogImage6} alt="post-image" className="object-fit-cover w-100"
                                    height="250"/>
                            </div>
                            <div className="content">
                                <span className="head-text text-uppercase fs-9 d-inline-block mb-2">{Blog.BlogSuggDate1} / {Blog.BlogSuggTitle1} </span>
                                <h5 className="head-text text-capitalize second-font">{Blog.BlogSuggHeading1}</h5>
                            </div>
                        </div>
                        <div className="post-card g-3" data-aos="fade-up" data-aos-delay="200">
                            <div className="image-container mb-3" >
                                <img src={Blog.BlogImage5} alt="post-image" className="object-fit-cover w-100"
                                    height="250"/>
                            </div>
                            <div className="content">
                                <span className="head-text text-uppercase fs-9 d-inline-block mb-2">{Blog.BlogSuggDate2} / {Blog.BlogSuggTitle2} </span>
                                <h5 className="head-text text-capitalize second-font">{Blog.BlogSuggHeading2}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="social-block p-2" >
                        <h5 className="head-text fs-4 second-font text-capitalize mb-2">Follow us</h5>
                        <a href="#" className="text-capitalize fs-7 me-2" data-aos="fade-left" data-aos-delay="100">fb</a>
                        <a href="#" className="text-capitalize fs-7 mx-2" data-aos="fade-left" data-aos-delay="200">ln</a>
                        <a href="#" className="text-capitalize fs-7 mx-2" data-aos="fade-left" data-aos-delay="300">be</a>
                        <a href="#" className="text-capitalize fs-7 mx-2" data-aos="fade-left" data-aos-delay="400">lg</a>
                    </div>
                </div>
            </div>
        </div>
    </section>    
        </>
    );
}
export default BlogList;