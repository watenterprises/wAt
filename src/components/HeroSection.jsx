import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgDecor} />
      <div className={styles.wrap}>
        <div className={styles.colContent}>
          <div className={styles.trustBadge}>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke="#6366f1" strokeWidth="2"/>
              <circle cx="8" cy="8" r="3.3" fill="#6366f1"/>
            </svg>
            Recognized Tech Partner
          </div>
          <h1 className={styles.headline}>
            We <span className={styles.indigo}>engineer</span><br/>
            digital advantage for<br/>
            ambitious companies
          </h1>
          <p className={styles.subhead}>
            Modern web, strong branding, and growth systems for forward-thinking businesses. Build trust. Accelerate results.
          </p>
          <div className={styles.buttonsRow}>
            <button className={styles.ctaPrimary}>
              <span>Get Started</span>
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path d="M5 9h8M11 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a href="#portfolio" className={styles.linkGhost}>View Portfolio</a>
          </div>
        </div>
        <div className={styles.colImage}>
          <div className={styles.laptopMockup}>
            <div className={styles.laptopScreen}>
              {/* Replace with Lottie or animated SVG as needed */}
              <img
                className={styles.heroArt}
                src="https://assets-global.website-files.com/625510da564981c932cfde8d/625518a5a7d9d12e3017e7a4_web-app-ui-mock.svg"
                alt="Modern web app illustration"
                loading="lazy"
              />
            </div>
            <div className={styles.laptopBase}></div>
          </div>
          <div className={styles.glassCard}>
            <div className={styles.glassLogo}>wAt</div>
            <div className={styles.smallStat}><span className={styles.indigo}>99%</span> Client Retention • 200%+ Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
