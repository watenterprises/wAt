import React from "react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    name: "Priya Kumar",
    company: "UrbanNests Interiors",
    logo: "/projects/urbannests-logo.png",
    text: "“Our site is unforgettable. The wAt team delivered both the polish and measurable growth we needed to break into a new client tier.”",
    rating: 5,
  },
  {
    name: "Rahul Singh",
    company: "Skyline Realty",
    logo: "/projects/skyline-logo.png",
    text: "“From discovery to delivery, wAt’s creativity and clarity powered our digital brand. Results were exactly as promised—and then some.”",
    rating: 5,
  },
  {
    name: "Arjun Mehra",
    company: "BuildRight Constructions",
    logo: "/projects/buildright-logo.png",
    text: "“Professional, visionary, and incredibly fast. We recommend wAt to any business serious about digital success in Bangalore.”",
    rating: 5,
  },
];

const renderStars = (count) =>
  Array.from({ length: count }).map((_, i) => (
    <span key={i} aria-hidden="true" className={styles.star}>
      ★
    </span>
  ));

const TestimonialsSection = () => (
  <section className={styles.testimonialsSection} id="testimonials" aria-label="Client Testimonials">
    <div className={styles.bgFX}>
      <div className={styles.glowBlob} />
      <svg viewBox="0 0 1440 200" className={styles.waveSvg} aria-hidden="true">
        <path fill="#6366f133" d="M0,80 Q360,130 720,80 T1440,140 V200 H0Z"></path>
      </svg>
      <div className={styles.bubbles}>
        <div className={styles.bubble} style={{ left: "12%", animationDelay: "0s" }}></div>
        <div className={styles.bubble} style={{ left: "34%", animationDelay: "3s" }}></div>
        <div className={styles.bubble} style={{ left: "58%", animationDelay: "2s" }}></div>
        <div className={styles.bubble} style={{ left: "78%", animationDelay: "4.5s" }}></div>
      </div>
    </div>
    <div className={styles.container}>
      <header className={styles.sectionHeader}>
        <span className={styles.badge}>Client Love</span>
        <h2 className={styles.heading}>
          Hear the <span className={styles.gradientText}>Buzz</span>
        </h2>
        <p className={styles.subheading}>
          Bold results. Real partnerships. Stories from leaders who trusted <span className={styles.brandHighlight}>wAt</span> to grow digital impact in Bangalore and beyond.
        </p>
      </header>
      <div className={styles.cardsRow} role="list">
        {testimonials.map(({ name, company, logo, text, rating }, i) => (
          <article key={i} className={styles.testimonialCard} tabIndex={0} role="listitem">
            <div className={styles.avatarGlow}>
              <div className={styles.avatarCircle}>
                <img src={logo} alt={`${company} logo`} />
              </div>
              <div className={styles.avatarRing}></div>
            </div>
            <blockquote className={styles.quote}>
              <span className={styles.quoteMark} aria-hidden="true">“</span>
              {text}
            </blockquote>
            <div className={styles.clientMeta}>
              <div className={styles.nameRow}>
                <span className={styles.clientName}>{name}</span>
                <span className={styles.stars}>{renderStars(rating)}</span>
              </div>
              <span className={styles.company}>{company}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
