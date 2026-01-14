import styles from "./Footer.module.css";
import { NavLink, Link } from "react-router-dom";

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
              <h6 id="pages-heading" className={styles.navHeader}>
                PAGES
              </h6>
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
              <h6 id="connect-heading" className={styles.navHeader}>
                CONNECT
              </h6>
              <nav className={styles.navItems} aria-label="Social media links">
                {/* Facebook */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Follow us on Facebook"
                  to="https://www.facebook.com/BubbalousConroy/"
                >
                  Facebook
                </Link>
                {/* Instagram */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Follow us on Instagram"
                  to="https://www.instagram.com/bubbalousonconroy/"
                >
                  Instagram
                </Link>
                {/* Google page */}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="View our Google page"
                  to="https://www.google.com/search?sca_esv=0683e8ae5cdf4a07&rlz=1C1RXQR_enUS1087US1087&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8s34WnzVthE3GbcLciAEjUQUYUqE_SrVCus3YtmY4GEJIahcP2Vl5otO8QtxszA113kkHURCO9gJvLjZe4SmqwVbZ057Dx--UABgG2IawYo454kpkVw%3D%3D&q=Bubbalou%27s+Bodacious+Bar-B-Que+Reviews&sa=X&ved=2ahUKEwiT-LCsnaCQAxXbRjABHTnPCbQQ0bkNegQIORAE&biw=1745&bih=828&dpr=1.1"
                >
                  Google Page
                </Link>
              </nav>
            </section>
            {/* Legal pages */}
            <section className={styles.legalPages} aria-labelledby="legal-heading">
              <h6 id="legal-heading" className={styles.navHeader}>
                LEGAL
              </h6>
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
              <h6 id="contact-heading" className={styles.navHeader}>
                CONTACT
              </h6>
              <nav className={styles.navItems} aria-label="Contact information">
                {/* Phone number */}
                <a href="tel:+14072951212" aria-label="Call us at (407) 295-1212" className={styles.contactLink}>
                  (407) 295-1212
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
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  aria-label="Get directions to 5818 Conroy Road, Orlando FL 32835"
                  to="https://www.google.com/maps/place/5818+Conroy+Rd,+Orlando,+FL+32835/@28.4932644,-81.4634049,868m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88e77ecdf6ef68b5:0x7db71923947402f4!8m2!3d28.4932644!4d-81.4608246!16s%2Fg%2F11bw3yh66m?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
                >
                  5818 Conroy Road, Orlando FL 32835
                </Link>
              </nav>
            </section>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
