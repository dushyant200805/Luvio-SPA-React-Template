import {BrowserRouter, Routes,Route, useLocation,} from "react-router-dom";
import Header from "../Component/Layout/Header";
import Footer from "../Component/Layout/Footer";
import Home from "../Pages/home/Home";
import About from "../Pages/About/AboutPage";
import ServicePage from "../Pages/Service/ServicePage";
import PricingPage from "../Pages/Pricing/PricingPage";
import BlogsPage from "../Pages/blogs/BlogsPage";
import BlogDetails from "../Pages/blogdetail/BlogDetailsPage";
import Contact from "../Pages/contact/ContactPage";
import NotFound from "../pages/notfound/NotFound";
import ScrollFunction from "../Component/Common-section/ScrollFunction";

function Layout() {
  const location = useLocation();

  const validPaths = [
    "/",
    "/about-us",
    "/services",
    "/pricing",
    "/gallery",
    "/blogs",
    "/contact",
  ];

  const isBlogDetails = location.pathname.startsWith("/blogdetails/");

  const showLayout =
    validPaths.includes(location.pathname) || isBlogDetails;

  return (
    <>
      {showLayout && <Header />}

      <ScrollFunction />

      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about-us" element={<About />} />
       <Route path="/services" element={<ServicePage />} />
       <Route path="/pricing" element={<PricingPage />} />
       <Route path="/blogs" element={<BlogsPage />} />
       <Route path="/blogdetails/:id" element={<BlogDetails />} />
       <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showLayout && <Footer />}
    </>
  );
}

function AppRoutes() {
  return (
     <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default AppRoutes;