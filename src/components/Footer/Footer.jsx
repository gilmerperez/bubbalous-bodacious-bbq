import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.topContainer}>
            {/* Logo */}
            <div className={styles.logoContainer}>
              <img src="/favicon.jpg" alt="Bubbalous Bodacious BBQ Logo" />
            </div>

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

          {/* Seperator */}
          <hr className={styles.seperator} />

          <section className={styles.bottomContainer}>
            {/* Site navigation */}
            <section className={styles.siteNavigation}>
              <h5 className={styles.navHeader}>PAGES</h5>
              <nav className={styles.navItems}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/party-packs">Party Packs</NavLink>
                <NavLink to="/order-online">Order Online</NavLink>
              </nav>
            </section>

            {/* Social links */}
            <section className={styles.socialLinks}>
              <h5 className={styles.navHeader}>CONNECT</h5>
              <nav className={styles.navItems}>
                {/* Facebook */}
                <a href="https://www.facebook.com/BubbalousConroy/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/bubbalousonconroy/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                {/* Google page */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/search?sa=X&sca_esv=19a04cb715b89171&rlz=1C1RXQR_enUS1087US1087&q=Bubbalou%27s+Bodacious+Bar-B-Que&ludocid=15616216618251093981&lsig=AB86z5V2Tiz1kh1SIkGwpkt0_9tm&ved=2ahUKEwiZloWK1ZePAxUvTDABHcBzFCwQoAJ6BAgcEBw&biw=1745&bih=828&dpr=1.1"
                >
                  Google Page
                </a>
              </nav>
            </section>

            {/* Legal pages */}
            <section className={styles.legalPages}>
              <h5 className={styles.navHeader}>LEGAL</h5>
              <nav className={styles.navItems}>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                <NavLink to="/terms-of-service">Terms of Service</NavLink>
              </nav>
            </section>

            {/* Contact info */}
            <section className={styles.contactInfo}>
              <h5 className={styles.navHeader}>CONTACT</h5>
              <nav className={styles.navItems}>
                {/* Phone number */}
                <a href="tel:4072951212">(407) 295-1212</a>
                {/* Email */}
                <a href="mailto:bubbalousbbq@aol.com">bubbalousbbq@aol.com</a>
                {/* Address */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps?sca_esv=19a04cb715b89171&rlz=1C1RXQR_enUS1087US1087&lsig=AB86z5V2Tiz1kh1SIkGwpkt0_9tm&biw=1745&bih=828&dpr=1.1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KQekdArSfueIMd2HaKpG8rfY&daddr=5818+Conroy+Rd,+Orlando,+FL+32835"
                >
                  5818 Conroy Road, Orlando FL 32835
                </a>
              </nav>
            </section>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
