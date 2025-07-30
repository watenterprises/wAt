import React from "react";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.bgArt} />
      <div className={styles.container}>
        {/* Left: Form & Text */}
        <div className={styles.leftCol}>
          <div className={styles.sectionBadge}>
            <svg width="18" height="18" aria-hidden="true">
              <circle cx="9" cy="9" r="9" fill="#6366f1" />
              <circle cx="9" cy="9" r="5" fill="#fff" opacity="0.55" />
            </svg>
            Contact
          </div>
          <h2 className={styles.heading}>
            Let’s <span className={styles.indigo}>build</span> something remarkable
          </h2>
          <p className={styles.subheading}>
            Ready to accelerate your brand and unlock digital growth?
            <br className={styles.mobileBreak} />
            Reach out for a free strategy consult—or just say hi!
          </p>
          <form
            className={styles.form}
            autoComplete="off"
            onSubmit={e => {
              e.preventDefault();
              // Real handler goes here (integration with backend)
              alert("Message sent! 🚀");
            }}
          >
            <div className={styles.inputGroup}>
              <input type="text" name="name" placeholder="Your Name" required autoComplete="off" />
              <input type="email" name="email" placeholder="Email" required autoComplete="off" />
            </div>
            <input type="text" name="company" placeholder="Company (optional)" className={styles.singleInput} />
            <textarea name="message" rows={4} placeholder="Tell us your goals/project..." required />
            <button className={styles.ctaBtn} type="submit">
              Send Message
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path d="M6 9h6m-2-2 4 2-4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </form>
        </div>
        {/* Right: Trust Card, Map, WhatsApp */}
        <div className={styles.rightCol}>
          <div className={styles.glassCard}>
            <div className={styles.glassHeader}>
              <span className={styles.brandLogo}>wAt</span>
              <span className={styles.badgeText}>Since 2021</span>
            </div>
            <div className={styles.glassBody}>
              <div className={styles.statBig}>
                <span className={styles.indigo}>150+</span> happy clients
              </div>
              <div className={styles.statSmall}>Globally trusted for digital & growth</div>
            </div>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              title="Bangalore Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.5%2C12.86%2C77.7%2C13.01&amp;layer=mapnik"
              style={{ border: 0, width: "100%", height: "180px", borderRadius: "16px", filter: "contrast(1.07) blur(0.2px)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a
              href="https://wa.me/91xxxxxxxxxx"
              target="_blank"
              rel="noopener"
              className={styles.waBtn}
            >
              <svg width="18" height="18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="9" fill="#6366f1" />
                <path d="M6.7 6c-.3.1-.6.5-.6 1.2 0 .8.5 1.7 1.3 2.4.8.7 1.6 1 2.3.9.7-.1.8-.4 1.1-.7.1-.1.3-.2.5-.1.2.1.8.4 1.1.5s.2-.1.3-.3c.1-.2.2-.7.1-.8s-.2-.3-.3-.4c-.1-.1-.1-.2-.2-.3 0-.1-.1-.1-.2-.2C11 7 10.7 6.8 10.4 6.8L9.9 7C9.8 7 9.6 7 9.5 7c.3-.6-.2-1.1-.4-1.3-.2-.2-.5-.3-.8-.2-.3 0-.5.1-.6.3zm4 8h-6a1 1 0 0 1-1-1v-6c0-.6.4-1 1-1h6a1 1 0 0 1 1 1v1a4.5 4.5 0 0 1 0 5 1 1 0 0 1-1 1z" fill="#fff" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
