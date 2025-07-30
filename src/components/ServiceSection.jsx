import React from "react";
import styles from "./ServiceSection.module.css";
import { FaCode, FaLightbulb, FaChartLine, FaBrush } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Design & Development",
    desc: "Lightning-fast, SEO-rich, and beautifully animated websites engineered for business results.",
    color: "#6366f1",
  },
  {
    icon: <FaLightbulb />,
    title: "UI/UX Strategy",
    desc: "User-centric design sprints, digital journeys, and interface magic to turn users into fans.",
    color: "#818cf8"
  },
  {
    icon: <FaChartLine />,
    title: "SEO & Digital Growth",
    desc: "Full-funnel inbound + up-to-the-minute analytics—rank, convert, and thrive online.",
    color: "#4f46e5"
  },
  {
    icon: <FaBrush />,
    title: "Branding & Identity",
    desc: "Modern logos, story-driven identity, and visually stellar brand packets for trust and recall.",
    color: "#a5b4fc"
  }
];

const ServiceSection = () => {
  return (
    <section className={styles.serviceSection} id="services">
      {/* Animated gradient blob backgrounds */}
      <div className={styles.backgroundGlow}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <svg className={styles.trackLines} width="100%" height="180"><path d="M0,140 Q240,90 480,160 T960,155 T1440,120 T1920,140" stroke="#6366f118" strokeWidth="8" fill="none" /></svg>
      </div>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Our Services</span>
          <h2 className={styles.heading}>Capability, <span className={styles.gradientText}>creativity</span>, and code</h2>
          <p className={styles.subheading}>
            From first click to lead or sale—<span className={styles.brandAccent}>wAt</span> powers every stage of digital growth for ambitious teams.
          </p>
        </div>
        <div className={styles.gridWrap}>
          {services.map(({ icon, title, desc, color }, i) => (
            <div
              className={styles.serviceCard}
              style={{
                "--brand-shine": color || "#6366f1"
              }}
              tabIndex={0}
              key={title}
            >
              <div className={styles.iconGlow}>
                <span style={{
                  color,
                  background: `linear-gradient(145deg, ${color}44 30%, #fff7 90%)`
                }}>{icon}</span>
                <div className={styles.iconShine} />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.bottomNote}>
          <span>Let’s craft something remarkable—<span className={styles.gradientText}>just for you</span>.</span>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
