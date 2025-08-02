import React from 'react';
import styles from './HeroSection.module.css';
import { Rocket } from 'lucide-react'; // Optional icon from Lucide

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgDecor} />
      <div className={styles.wrap}>
        <div className={styles.colContent}>
          <div className={styles.trustBadge}>
            <Rocket size={16} color="#6366f1" style={{ marginRight: '8px' }} />
            Recognized Tech Partner
          </div>
          <h1 className={styles.headline}>
            We <span className={styles.indigo}>engineer</span><br />
            digital advantage for<br />
            ambitious companies
          </h1>
          <p className={styles.subhead}>
            Modern web, strong branding, and growth systems for forward-thinking businesses. Build trust. Accelerate results.
          </p>
          <div className={styles.buttonsRow}>
            <button className={styles.ctaPrimary}>
              <span>Get Started</span>
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path d="M5 9h8M11 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a href="#portfolio" className={styles.linkGhost}>View Portfolio</a>
          </div>
        </div>
        <div className={styles.colImage}>
          <div className={styles.laptopMockup}>
            <div className={styles.laptopScreen}>
              <img
                className={styles.heroArt}
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Modern web team collaboration"
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
