import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer role="contentinfo" aria-label="Site footer">
        <div className={styles.footerContainer}>
          <div className={styles.topContainer}>
            {/* Logo */}
            <img className={styles.logo} loading="lazy" src="/logo.jpg" alt="Bubbalous Bodacious BBQ Logo" />
            {/* Legal disclaimer */}
            <p className={styles.legalDisclaimer}>
              Bubbalous Bodacious BBQ provides delicious barbecue meals and catering services for enjoyment and
              satisfaction. This site does not offer dietary advice or nutritional guidance. Consumption of our products
              is at your own discretion. Always consult with a dietary professional if you have specific health concerns
              or dietary restrictions.
            </p>
            {/* Copyright */}
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} Bubbalous Bodacious BBQ. All rights reserved.
            </p>
          </div>

          {/* Separator */}
          <hr className={styles.separator} aria-hidden="true" />

          <div className={styles.bottomContainer}>
            {/* Site navigation */}
            <section className={styles.siteNavigation} aria-labelledby="pages-heading">
              <h5 id="pages-heading" className={styles.navHeader}>
                PAGES
              </h5>
              <nav className={styles.navItems} aria-label="Main site navigation">
                <NavLink to="/" aria-label="Go to home page">
                  Home
                </NavLink>
                <NavLink to="/menu" aria-label="View our menu">
                  Menu
                </NavLink>
                <NavLink to="/party-packs" aria-label="Browse party packs">
                  Party Packs
                </NavLink>
                <NavLink to="/order-online" aria-label="Order online">
                  Order Online
                </NavLink>
              </nav>
            </section>
            {/* Social links */}
            <section className={styles.socialLinks} aria-labelledby="connect-heading">
              <h5 id="connect-heading" className={styles.navHeader}>
                CONNECT
              </h5>
              <nav className={styles.navItems} aria-label="Social media links">
                {/* Facebook */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Follow us on Facebook"
                  href="https://www.facebook.com/BubbalousConroy/"
                >
                  Facebook
                </a>
                {/* Instagram */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Follow us on Instagram"
                  href="https://www.instagram.com/bubbalousonconroy/"
                >
                  Instagram
                </a>
                {/* Google page */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="View our Google page"
                  href="https://www.google.com/search?sa=X&sca_esv=19a04cb715b89171&rlz=1C1RXQR_enUS1087US1087&q=Bubbalou%27s+Bodacious+Bar-B-Que&ludocid=15616216618251093981&lsig=AB86z5V2Tiz1kh1SIkGwpkt0_9tm&ved=2ahUKEwiZloWK1ZePAxUvTDABHcBzFCwQoAJ6BAgcEBw&biw=1745&bih=828&dpr=1.1"
                >
                  Google Page
                </a>
              </nav>
            </section>
            {/* Legal pages */}
            <section className={styles.legalPages} aria-labelledby="legal-heading">
              <h5 id="legal-heading" className={styles.navHeader}>
                LEGAL
              </h5>
              <nav className={styles.navItems} aria-label="Legal pages">
                <NavLink to="/contact" aria-label="Contact us">
                  Contact
                </NavLink>
                <NavLink to="/privacy-policy" aria-label="Read our privacy policy">
                  Privacy Policy
                </NavLink>
                <NavLink to="/terms-of-service" aria-label="Read our terms of service">
                  Terms of Service
                </NavLink>
              </nav>
            </section>
            {/* Contact info */}
            <section className={styles.contactInfo} aria-labelledby="contact-heading">
              <h5 id="contact-heading" className={styles.navHeader}>
                CONTACT
              </h5>
              <nav className={styles.navItems} aria-label="Contact information">
                {/* Phone number */}
                <a href="tel:+14072951212" aria-label="Call us at (407) 295-1212" className={styles.contactLink}>
                  (407) 295 - 1212
                </a>
                {/* Email */}
                <a
                  className={styles.contactLink}
                  href="mailto:bubbalousbbq@aol.com"
                  aria-label="Email us at bubbalousbbq@aol.com"
                >
                  bubbalousbbq@aol.com
                </a>
                {/* Address */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  href="https://www.google.com/maps?sca_esv=19a04cb715b89171&rlz=1C1RXQR_enUS1087US1087&lsig=AB86z5V2Tiz1kh1SIkGwpkt0_9tm&biw=1745&bih=828&dpr=1.1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KQekdArSfueIMd2HaKpG8rfY&daddr=5818+Conroy+Rd,+Orlando,+FL+32835"
                  aria-label="Get directions to 5818 Conroy Road, Orlando FL 32835"
                >
                  5818 Conroy Road, Orlando FL 32835
                </a>
              </nav>
            </section>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
