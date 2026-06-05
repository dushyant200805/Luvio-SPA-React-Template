import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// ================= UI Framework =================
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ================= Project CSS =================
import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
import {
  faBars,
  faBarsStaggered,
  faMoon,
  faSun,
  faX,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  // offcanvas
  const handleClose = () => {
    document.querySelector(".close")?.click();
  };
  // header menu active
  const { pathname } = useLocation();
  // theme change
    // Get saved theme from localStorage
    const getSavedTheme = () => {
    return localStorage.getItem("theme") || "light";
    };  
     const [theme, setTheme] = useState(getSavedTheme);

     // Apply theme + save it
        useEffect(() => {
            document.documentElement.setAttribute(
            "data-luvio-theme",
            theme
            );

            localStorage.setItem("theme", theme);
        }, [theme]);

        // Toggle theme
        const toggleTheme = () => {
            setTheme((prev) => (prev === "light" ? "dark" : "light"));
        };

  // sticky Header
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    // <!-- header -->
    <header className={`position-absolute w-100 ${isFixed ? "fix w-100" : ""}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* <!-- Logo --> */}
          <Link to="/" className="navbar-brand py-2">
            <img src="/logo-dark.png" className="object-fit-contain" height="40" alt="Dark-light" />
          </Link>

          {/* <!-- Offcanvas Menu --> */}
          <div className="offcanvas offcanvas-end" id="offcanvasNavbar2">
            <div className="offcanvas-header justify-content-between head-bg">
              <Link to="/" className="navbar-brand py-2">
                <img src="/logo-light.png" data-logo="light" className="object-fit-contain " height="40" alt="Logo-light" />
                <img src="/logo-dark.png" data-logo="dark" className="object-fit-contain " height="40" alt="Dark-light" />
              </Link>

              <button
                type="button"
                className="btn prime-btn lh-1 rounded-0 close p-2"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faXmark} className="fs-5" />
              </button>
            </div>
            <div className="offcanvas-body">
              <ul
                className="navbar-nav justify-content-center flex-grow-1 pe-3 gap-lg-3"
                id="nav_ul"
              >
                <li className={`nav-item ${pathname === "/" ? "active" : ""}`} onClick={handleClose} >
                  <Link
                    to="/"
                    className="nav-link text-uppercase fw-semibold"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={`nav-item ${pathname === "/about-us" ? "active" : ""}`}
                  onClick={handleClose}
                >
                  <Link
                    to="/about-us"
                    className="nav-link text-uppercase fw-semibold"
                  >
                    About-US
                  </Link>
                </li>
                <li
                  className={`nav-item ${pathname === "/services" ? "active" : ""}`}
                  onClick={handleClose}
                >
                  <Link
                    to="/services"
                    className="nav-link text-uppercase fw-semibold"
                  >
                    Services
                  </Link>
                </li>
                <li
                  className={`nav-item ${pathname === "/pricing" ? "active" : ""}`}
                  onClick={handleClose}
                >
                  <Link
                    to="/pricing"
                    className="nav-link text-uppercase fw-semibold"
                  >
                    Pricing
                  </Link>
                </li>
                <li className={`nav-item ${pathname === "/blogs"  ? "active" : ""}`} onClick={handleClose} >
                  <Link
                    to="/blogs"
                    className="nav-link text-uppercase fw-semibold"
                  >
                    Blogs
                  </Link>
                </li>
                <li
                  className={`nav-item ${pathname === "/contact" ? "active" : ""}`}
                  onClick={handleClose}
                >
                  <Link
                    to="/contact"
                    className="nav-link text-uppercase fw-semibold"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Right Buttons --> */}
          <div className="d-flex gap-2">
            {/* <!-- Mobile Menu Button --> */}
            <button
              className="navbar-toggler btn prime-outline-btn2 rounded-0 shadow-none p-2"
              type="button"
              data-bs-target="#offcanvasNavbar2"
              data-bs-toggle="offcanvas"
              aria-controls="offcanvasNavbar2"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon
                icon={faBarsStaggered}
                className="fs-5 white-text"
              />
            </button>
            <button
              id="btnSwitch"
              className="btn prime-btn theme-btn  rounded-0 px-3 py-2"
              aria-label="theme-switch button"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
