import Commonbanner from "../../Component/Common-section/CommonBanner";
import BlogList from "./BlogList";
function BlogDetails(){
    const BannerData ={
    "BannerHeading" :"Blog Details",
  }
    return(
        <>
        <title>Blog Details | Luvio Spa – Luxury Wellness & Skincare</title>
            <Commonbanner BannerData={BannerData}/>
            <BlogList/>
        </>
    );
}
export default BlogDetails;