import Commonbanner from "../../Component/Common-section/CommonBanner";
import BlogSection from "../../Component/Common-section/BlogSection";
import GallerySection from "../../Component/Common-section/GallerySection";
function BlogsPage(){
    const BannerData ={
    "BannerHeading" :"Blogs",
  }
    return (
        <>
        <title>Blogs | Luvio Spa – Luxury Wellness & Skincare</title>
         <Commonbanner BannerData={BannerData}/>
         <BlogSection noBg/>
         <GallerySection/>
        </>
    );
}   

export default BlogsPage;