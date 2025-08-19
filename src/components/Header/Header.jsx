import styles from "./Header.module.css";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  // Theme switch
  const [theme, setTheme] = useState("dark");

  // Mobile sidebar toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Custom styles for active page
  const navLinkClass = ({ isActive }) => (isActive ? styles.activeLink : undefined);

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

  return (
    <>
      <header>
        <section className={styles.headerContainer}>
          {/* Logo */}
          <NavLink to="/" className={styles.logoContainer}>
            <img src="/favicon.jpg" alt="Bubbalous Bodacious BBQ Logo" />
          </NavLink>

          {/* Site navigation */}
          <section className={styles.navContainer}>
            <nav className={styles.navItems}>
              <NavLink to="/" className={navLinkClass}>
                HOME
              </NavLink>
              <NavLink to="/menu" className={navLinkClass}>
                MENU
              </NavLink>
              <NavLink to="/order-online" className={navLinkClass}>
                ORDER ONLINE
              </NavLink>
              <NavLink to="/party-packs" className={navLinkClass}>
                PARTY PACKS
              </NavLink>
            </nav>

            {/* Seperator */}
            <span className={styles.seperator}>|</span>

            {/* Theme button */}
            <button className={styles.themeButton} onClick={toggleTheme}>
              <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"}`}></i>
              <p>{theme === "dark" ? "DARK" : "LIGHT"}</p>
            </button>

            {/* Mobile hamburger menu */}
            <button className={styles.hamburger} onClick={() => setMenuOpen(true)}>
              <i className="fa-solid fa-bars fa-xl"></i>
            </button>
          </section>
        </section>
      </header>

      {/* Sidebar */}
      {menuOpen &&
        createPortal(
          <section className={styles.sidebarOverlay} onClick={() => setMenuOpen(false)}>
            <section className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
              {/* Sidebar close button */}
              <button className={styles.sidebarClose} onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>

              {/* Sidebar site navigation */}
              <nav className={styles.sidebarNavItems}>
                <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  HOME
                </NavLink>
                <NavLink to="/menu" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  MENU
                </NavLink>
                <NavLink to="/party-packs" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  PARTY PACKS
                </NavLink>
                <NavLink to="/order-online" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  ORDER ONLINE
                </NavLink>
              </nav>

              {/* Sidebar footer */}
              <footer className={styles.sidebarFooter}>
                <button className={`${styles.themeButton} ${styles.sidebarThemeButton}`} onClick={toggleTheme}>
                  <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"} fa-sm`}></i>
                  <p>{theme === "dark" ? "DARK" : "LIGHT"}</p>
                </button>
                <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  CONTACT
                </NavLink>
                <NavLink to="/privacy-policy" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  PRIVACY POLICY
                </NavLink>
                <NavLink to="/terms-of-service" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  TERMS OF SERVICE
                </NavLink>
              </footer>
            </section>
          </section>,
          document.body
        )}
    </>
  );
}

export default Header;
