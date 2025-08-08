import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footerContainer}>
          {/* Big Footer */}
          <section className={styles.bigFooter}>
            {/* Logo & Copyright */}
            <section className={styles.logoColumn}>
              <NavLink to="/">
                <img src="/favicon2.jpg" alt="Bubbalous Bodacious BBQ Logo" className={styles.logoImage} />
              </NavLink>
              <p className={styles.copyright}>
                &copy; {new Date().getFullYear()} Bubbalous Bodacious BBQ. <br /> All rights reserved.
              </p>
            </section>

            {/* Site Navigation */}
            <section className={styles.footerColumn}>
              <h5 className={styles.navHeader}>Navigation</h5>
              <nav className={styles.footerNav}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/order-online">Order Online</NavLink>
                <NavLink to="/party-packs">Party Packs</NavLink>
              </nav>
            </section>

            {/* Legal Information */}
            <section className={styles.footerColumn}>
              <h5 className={styles.navHeader}>Legal</h5>
              <nav className={styles.footerNav}>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                <NavLink to="/terms-of-service">Terms of Service</NavLink>
              </nav>
            </section>

            {/* Contact Info */}
            <section className={styles.footerColumn}>
              <h5 className={styles.navHeader}>Contact</h5>
              <div className={styles.footerNav}>
                <a href="tel:4072951212">
                  <p>(407) 295-1212</p>
                </a>
                <a href="mailto:email@address.com">
                  <p>email@address.com</p>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=5818+Conroy+Rd+Orlando+FL+32835"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    5818 Conroy Rd <br /> Orlando, FL 32835
                  </p>
                </a>
              </div>
            </section>

            {/* Connect */}
            <section className={styles.footerColumn}>
              <h5 className={styles.navHeader}>Connect</h5>
              <nav className={styles.footerNav}>
                <a href="https://www.facebook.com/BubbalousOnConroy/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href="https://www.instagram.com/bubbalousonconroy/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a
                  href="https://www.google.com/search?sca_esv=3bd3a45d31a2d09a&rlz=1C1RXQR_enUS1087US1087&q=bubbalou%27s+bodacious+bbq&spell=1&sa=X&ved=2ahUKEwjqtLGenvyOAxXrRDABHQDqJLkQBSgAegQIDxAB&biw=1745&bih=828&dpr=1.1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google
                </a>
              </nav>
            </section>
          </section>

          {/* Small Footer */}
          <section className={styles.smallFooter}>
            {/* Navigation Links */}
            <nav className={styles.footerLinks} aria-label="Footer Navigation">
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="/terms-of-service">Terms of Service</NavLink>
            </nav>

            {/* Legal Disclaimer */}
            <p className={styles.legalDisclaimer}>
              Bubbalous Bodacious BBQ provides authentic BBQ dining experiences. This website is for informational
              purposes only. All orders are subject to availability and restaurant hours. Please contact us directly for
              the most current menu and pricing information.
            </p>

            {/* Copyright */}
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} Bubbalous Bodacious BBQ. All rights reserved.
            </p>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
