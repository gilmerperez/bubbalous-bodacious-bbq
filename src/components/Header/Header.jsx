import styles from "./Header.module.css";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  // * Theme switch
  const [theme, setTheme] = useState("light");

  // Make theme be set in DOM
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle handler
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Make media theme switch on phone's user settings
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // * Custom styles for active page
  const navLinkClass = ({ isActive }) => (isActive ? styles.activeLink : undefined);

  // * Mobile sidebar toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  // Handle hamburger click with spin animation
  const handleHamburgerClick = () => {
    setIsSpinning(true);
    setMenuOpen(true);

    // Reset spinning state after animation completes
    setTimeout(() => {
      setIsSpinning(false);
    }, 300);
  };

  // * Sticky header logic
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // * Phone call handler
  const handlePhoneClick = () => {
    window.location.href = "tel:(407) 295-1212";
  };

  return (
    <>
      <header className={`${isScrollingUp ? styles.visible : styles.hidden}`}>
        <section className={styles.headerContainer}>
          {/* Desktop Layout */}
          <div className={styles.desktopLayout}>
            {/* Logo */}
            <NavLink to="/" className={styles.logoContainer}>
              <img src="/logo.jpg" alt="Bubbalous Bodacious BBQ Logo" />
            </NavLink>

            {/* Site navigation */}
            <div className={styles.navContainer}>
              <nav className={styles.navItems}>
                <NavLink to="/" className={navLinkClass}>
                  HOME
                </NavLink>
                <NavLink to="/menu" className={navLinkClass}>
                  MENU
                </NavLink>
                <NavLink to="/party-packs" className={navLinkClass}>
                  PARTY PACKS
                </NavLink>
                <NavLink to="/order-online" className={navLinkClass}>
                  ORDER ONLINE
                </NavLink>
              </nav>

              {/* Seperator */}
              <span className={styles.seperator}>|</span>

              {/* Theme button */}
              <button className={styles.themeButton} onClick={toggleTheme}>
                <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"}`}></i>
                <p>{theme === "dark" ? "DARK" : "LIGHT"}</p>
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className={styles.mobileLayout}>
            {/* Mobile phone button */}
            <button className={styles.phoneButton} onClick={handlePhoneClick}>
              <i className="fa-solid fa-phone fa-xl"></i>
            </button>

            {/* Mobile Logo */}
            <NavLink to="/" className={styles.mobileLogoContainer}>
              <img src="/logo.jpg" alt="Bubbalous Bodacious BBQ Logo" />
            </NavLink>

            {/* Mobile hamburger menu */}
            <button className={styles.hamburger} onClick={handleHamburgerClick}>
              <i className={`fa-solid fa-bars fa-xl ${isSpinning ? styles.spin : ""}`}></i>
            </button>
          </div>
        </section>
      </header>

      {/* Sidebar */}
      {menuOpen &&
        createPortal(
          <div className={styles.sidebarOverlay} onClick={() => setMenuOpen(false)}>
            <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
              {/* Sidebar close button */}
              <button className={styles.sidebarClose} onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>

              {/* Sidebar site navigation */}
              <nav className={styles.sidebarNavItems}>
                <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-house"></i>
                  HOME
                </NavLink>
                <NavLink to="/menu" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-burger"></i>
                  MENU
                </NavLink>
                <NavLink to="/party-packs" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-box"></i>
                  PARTY PACKS
                </NavLink>
                <NavLink to="/order-online" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-mobile-screen-button"></i>
                  ORDER ONLINE
                </NavLink>
              </nav>

              {/* Sidebar footer */}
              <footer className={styles.sidebarFooter}>
                {/* Theme button */}
                <button className={`${styles.themeButton} ${styles.sidebarThemeButton}`} onClick={toggleTheme}>
                  <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"}`}></i>
                  <p>{theme === "dark" ? "DARK" : "LIGHT"}</p>
                </button>
                {/* Legal pages */}
                <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-paper-plane"></i>
                  CONTACT
                </NavLink>
                <NavLink to="/privacy-policy" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-shield-halved"></i>
                  PRIVACY POLICY
                </NavLink>
                <NavLink to="/terms-of-service" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-asterisk"></i>
                  TERMS OF SERVICE
                </NavLink>
              </footer>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Header;
