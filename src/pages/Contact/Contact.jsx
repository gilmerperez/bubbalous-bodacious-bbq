import styles from "./Contact.module.css";
import { useEffect, useState } from "react";

function Contact() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Contact";
  }, []);

  // Email form state
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // CAPTCHA logic
  const [captchaError, setCaptchaError] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaPassed, setCaptchaPassed] = useState(false);

  // Generate a simple math problem
  const [captchaQuestion] = useState(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, answer: num1 + num2 };
  });

  // Handle CAPTCHA submission
  const handleCaptchaSubmit = (e) => {
    e.preventDefault();
    const userAnswer = parseInt(captchaAnswer);

    if (userAnswer === captchaQuestion.answer) {
      setCaptchaPassed(true);
      setCaptchaError("");
    } else {
      setCaptchaError("Incorrect answer. Please try again.");
      setCaptchaAnswer("");
    }
  };

  // Send email
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = "bubbalousbbq@aol.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <main>
      <section className={styles.contactContainer}>
        {/* Heading */}
        <h1 className={styles.heading}>LET'S CONNECT</h1>

        {/* Introduction */}
        <p className={styles.introduction}>
          Whether you're exploring business opportunities, potential sponsorships, community partnerships, or simply
          have questions about our menu, catering, or party packs — we'd love to connect with you. Reach out below and a
          member of our team will follow up shortly.
        </p>

        {/* CAPTCHA form */}
        {!captchaPassed && (
          <section className={styles.formContainer}>
            <h2 className={styles.captchaTitle}>Security Verification</h2>
            <p className={styles.captchaDescription}>
              Please complete this simple verification to access our contact form.
            </p>
            <form onSubmit={handleCaptchaSubmit}>
              <div className={styles.captchaQuestion}>
                <p>
                  What is {captchaQuestion.num1} + {captchaQuestion.num2}?
                </p>
                <div className={`${styles.formGroup} ${styles.formFloating}`}>
                  <input
                    required
                    id="captcha"
                    type="number"
                    placeholder="Answer"
                    value={captchaAnswer}
                    className={styles.formControl}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                  />
                  <label htmlFor="captcha">ANSWER</label>
                </div>
                {captchaError && <p className={styles.errorMessage}>{captchaError}</p>}
              </div>
              <button type="submit" className={styles.submitBtn}>
                VERIFY <i className="fa-solid fa-shield-check"></i>
              </button>
            </form>
          </section>
        )}

        {/* Email form - only show after CAPTCHA is passed */}
        {captchaPassed && (
          <section className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              {/* Subject field */}
              <div className={`${styles.formGroup} ${styles.formFloating}`}>
                <input
                  required
                  type="text"
                  id="subject"
                  value={subject}
                  placeholder="Subject"
                  className={styles.formControl}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <label htmlFor="subject">SUBJECT</label>
              </div>
              {/* Message field */}
              <div className={`${styles.formGroup} ${styles.formFloating}`}>
                <textarea
                  required
                  id="message"
                  value={message}
                  placeholder="Message"
                  className={styles.formControl}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label htmlFor="message">MESSAGE</label>
              </div>
              {/* Submit button */}
              <button type="submit" className={styles.submitBtn}>
                SEND MESSAGE <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </section>
        )}
      </section>
    </main>
  );
}

export default Contact;
