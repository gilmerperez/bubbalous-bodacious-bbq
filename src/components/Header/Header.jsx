"use client";

import styles from "./Header.module.css";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function Header() {
  const pathname = usePathname();

  // * Sticky header logic
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // * Theme switch
  const [theme, setTheme] = useState("light");

  // Make theme be set in DOM
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

    const initialTheme = storedTheme || (prefersLight ? "light" : "dark");
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
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Make media theme switch on phone&apos;s user settings
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = (e) => {
      setTheme(e.matches ? "light" : "dark");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // * Mobile sidebar logic
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  // Handle hamburger click with spin animation
  const handleHamburgerClick = () => {
    setMenuOpen(true);
    setIsSpinning(true);

    // Reset spinning state after animation completes
    setTimeout(() => {
      setIsSpinning(false);
    }, 300);
  };

  // * Phone call handler
  const handlePhoneClick = () => {
    window.location.href = "tel:(407) 295-1212";
  };

  return (
    <>
      <header className={`${isScrollingUp ? styles.visible : styles.hidden}`} role="banner" aria-label="Site header">
        <div className={styles.headerContainer}>
          {/* Desktop Layout */}
          <div className={styles.desktopLayout}>
            {/* Logo */}
            <Link href="/" aria-label="Go to home page">
              <Image className={styles.logo} src="/logo.jpg" alt="Bubbalous Bodacious BBQ Logo" width={200} height={50} />
            </Link>
            {/* Site navigation */}
            <div className={styles.navContainer}>
              <nav className={styles.navItems} aria-label="Main site navigation">
                <Link href="/" className={pathname === "/" ? styles.activeLink : undefined} aria-label="Go to home page">
                  HOME
                </Link>
                <Link
                  href="/menu"
                  className={pathname === "/menu" ? styles.activeLink : undefined}
                  aria-label="View our menu"
                >
                  MENU
                </Link>
                <Link
                  href="/party-packs"
                  className={pathname === "/party-packs" ? styles.activeLink : undefined}
                  aria-label="Browse party packs"
                >
                  PARTY PACKS
                </Link>
                <Link
                  href="/order-online"
                  className={pathname === "/order-online" ? styles.activeLink : undefined}
                  aria-label="Order online"
                >
                  ORDER ONLINE
                </Link>
              </nav>
              {/* Separator */}
              <span className={styles.separator} aria-hidden="true">
                |
              </span>
              {/* Theme button */}
              <button
                onClick={toggleTheme}
                className={styles.themeButton}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"}`} aria-hidden="true"></i>
              </button>
            </div>
          </div>

          {/* Mobile layout */}
          <div className={styles.mobileLayout}>
            {/* Phone button */}
            <button
              className={styles.phoneButton}
              onClick={handlePhoneClick}
              aria-label="Call us at (407) 295-1212"
              type="button"
            >
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
            </button>
            {/* Mobile logo */}
            <Link href="/" className={styles.mobileLogoContainer} aria-label="Go to home page">
              <Image src="/logo.jpg" alt="Bubbalous Bodacious BBQ Logo" width={200} height={45} />
            </Link>
            {/* Hamburger menu */}
            <button
              aria-expanded={menuOpen}
              className={styles.hamburger}
              onClick={handleHamburgerClick}
              aria-label="Open navigation menu"
            >
              <i className={`fa-solid fa-bars ${isSpinning ? styles.spin : ""}`} aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      {menuOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className={styles.sidebarOverlay}
            onClick={() => setMenuOpen(false)}
          >
            <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
              {/* Sidebar close button */}
              <button
                className={styles.sidebarClose}
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
              {/* Sidebar site navigation */}
              <nav className={styles.sidebarNavItems} aria-label="Mobile site navigation">
                <Link
                  href="/"
                  className={pathname === "/" ? styles.activeLink : undefined}
                  aria-label="Go to home page"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="fa-solid fa-house" aria-hidden="true"></i>
                  HOME
                </Link>
                <Link
                  href="/menu"
                  className={pathname === "/menu" ? styles.activeLink : undefined}
                  aria-label="View our menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="fa-solid fa-burger" aria-hidden="true"></i>
                  MENU
                </Link>
                <Link
                  href="/party-packs"
                  className={pathname === "/party-packs" ? styles.activeLink : undefined}
                  aria-label="Browse party packs"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="fa-solid fa-box" aria-hidden="true"></i>
                  PARTY PACKS
                </Link>
                <Link
                  href="/order-online"
                  className={pathname === "/order-online" ? styles.activeLink : undefined}
                  aria-label="Order online"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="fa-solid fa-mobile-screen-button" aria-hidden="true"></i>
                  ORDER ONLINE
                </Link>
              </nav>
              {/* Sidebar footer */}
              <div className={styles.sidebarFooter}>
                {/* Sidebar theme button */}
                <button
                  onClick={toggleTheme}
                  className={`${styles.themeButton} ${styles.sidebarThemeButton}`}
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                  <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"}`} aria-hidden="true"></i>
                  <p>{theme === "dark" ? "DARK" : "LIGHT"}</p>
                </button>
                {/* Sidebar legal pages */}
                <Link
                  href="/contact"
                  aria-label="Contact us"
                  className={pathname === "/contact" ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                  CONTACT
                </Link>
                <Link
                  href="/privacy-policy"
                  className={pathname === "/privacy-policy" ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                  aria-label="Read our privacy policy"
                >
                  <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
                  PRIVACY POLICY
                </Link>
                <Link
                  href="/terms-of-service"
                  className={pathname === "/terms-of-service" ? styles.activeLink : undefined}
                  onClick={() => setMenuOpen(false)}
                  aria-label="Read our terms of service"
                >
                  <i className="fa-solid fa-asterisk" aria-hidden="true"></i>
                  TERMS OF SERVICE
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Header;
