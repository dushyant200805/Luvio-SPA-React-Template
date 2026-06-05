import {  BlogData } from "../../Data/BlogData";
import BlogCard from "../Ui/BlogCard";
function BlogSection ( {limit,noBg} ) {
     const displayedEvents = limit
    ? BlogData.slice(0, limit)
    : BlogData;

    return (
        <>
            <section className={`py-5 ${noBg ? "" : "alt-bg border-top border-bottom prime-border"}`}>
        <div className="container-fluid">
            <div className="head-content mb-5">
                <h2 className="head-text text-capitalize fw-medium display-4 second-font">Read our blogs & discover newest
                    trends</h2>
            </div>
            <div className="row g-4 py-2">
                 {displayedEvents.map(Blog => (
                  <BlogCard key={Blog.id} Blog={Blog} />
               ))}
            </div>
        </div>
            </section>
        </>
    );
}
export default BlogSection ;