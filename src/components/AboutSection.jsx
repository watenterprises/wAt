import React from "react";
import styles from "./AboutSection.module.css";
import {
  FaBuilding,
  FaCouch,
  FaIndustry,
  FaHardHat,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaBuilding />,
    label: "Real Estate",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.11)"
  },
  {
    icon: <FaCouch />,
    label: "Interiors",
    color: "#818cf8",
    bg: "rgba(129,140,248,0.10)"
  },
  {
    icon: <FaIndustry />,
    label: "Manufacturing",
    color: "#a5b4fc",
    bg: "rgba(165,180,252,0.10)"
  },
  {
    icon: <FaHardHat />,
    label: "Construction",
    color: "#c7d2fe",
    bg: "rgba(199,210,254,0.10)"
  },
];

const AboutSection = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.bgShapes}>
        <div className={styles.blob} />
        <div className={styles.ring} />
        <div className={styles.wave} />
      </div>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            Who <span className={styles.indigoAccent}>We Are</span>
          </h2>
          <p className={styles.intro}>
            <span className={styles.brandText}>wAt</span> is a new-wave Bangalore agency,
            <br />
            <span className={styles.textHighlight}>
              mapping digital growth & bold brand stories
            </span>
            <br />
            for ambitious local businesses.
          </p>
        </header>
        <div className={styles.content}>
          <article className={styles.mission}>
            <h3 className={styles.missionTitle}>
              <span className={styles.rainbowAccent}>Our Mission</span>
            </h3>
            <p className={styles.missionText}>
              Build trust, spark engagement—and shape digital futures using modern design, clever code, and human insight.
            </p>
          </article>
          <aside className={styles.industryGrid}>
            {industries.map(({ icon, label, color, bg }) => (
              <div
                key={label}
                className={styles.industryCard}
                style={{ borderColor: color, background: bg, boxShadow: `0 8px 32px ${color}22` }}
                tabIndex={0}
                aria-label={label}
              >
                <div
                  className={styles.iconContainer}
                  style={{
                    color,
                    filter: "drop-shadow(0 8px 20px rgba(99,102,241,0.17))"
                  }}
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <span className={styles.industryLabel}>{label}</span>
              </div>
            ))}
          </aside>
        </div>
        <div className={styles.marqueeRow}>
          <ul>
            <li>✨ Brand Storytelling</li>
            <li>UX Engineering</li>
            <li>Growth Hacking</li>
            <li>SEO & Data</li>
            <li>Animation</li>
            <li>Lead Funnels</li>
            <li>AI Automation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
