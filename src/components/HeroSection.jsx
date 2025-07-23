import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior with useEffect and useState
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Background Elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.leafGraphic}></div>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Left Side - Text Content */}
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}></span>
              B2B Marketing Agency
            </div>

            <h1 className={styles.headline}>
              We build <span className={styles.highlight}>high-performing</span><br />
              marketing engines for<br />
              B2B Brands
            </h1>

            <p className={styles.subheadline}>
              We build, optimize, and scale marketing engines that generate pipeline and improve marketing ROI.
            </p>

            <div className={styles.ctaButtons}>
              <button className={`${styles.btn} ${styles.btnPrimary}`}>
                <span>Discover more</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3L13 8L8 13M13 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Visual Elements */}
          <div className={styles.visualContent}>
            <div className={styles.imageContainer}>
              {/* Laptop Mockup */}
              <div className={styles.laptopMockup}>
                <div className={styles.laptopScreen}>
                  <div className={styles.screenContent}>
                    <div className={styles.mockupBg}></div>
                  </div>
                </div>
                <div className={styles.laptopBase}></div>
              </div>

              {/* Stats Card */}
              <div className={styles.statsCard}>
                <div className={styles.statsHeader}>
                  <div className={styles.statsBrand}>CPP</div>
                  <div className={styles.statsIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16 8L18 10L16 12M18 10H8M12 16C12 16.93 12 17.395 11.8978 17.7765C11.6204 18.8117 10.8117 19.6204 9.77646 19.8978C9.39496 20 8.92997 20 8 20H6C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16V4C2 2.11438 2 1.17157 2.58579 0.585786C3.17157 0 4.11438 0 6 0H8C8.92997 0 9.39496 0 9.77646 0.102177C10.8117 0.379626 11.6204 1.18827 11.8978 2.22354C12 2.60504 12 3.07003 12 4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <div className={styles.statsContent}>
                  <h3>Demand Gen strategy leading to 200% Increase in inbound calls</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;