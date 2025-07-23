import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutSection.module.css';

const AboutSection = () => (
  <section className={styles.shortAbout}>
    <div className={styles.container}>
      <div className={styles.badge}>About Us</div>
      <h2 className={styles.title}>
        Driven by Growth, <span className={styles.highlight}>Powered by People</span>
      </h2>
      <p className={styles.text}>
        Dapper is a B2B marketing agency from Rotterdam helping ambitious brands build, scale, and optimize their growth engines. Our multidisciplinary team delivers strategies that drive pipeline and predictable results.
      </p>
      <div className={styles.ctaWrapper}>
        <Link to="/about" className={styles.btnPrimary}>
          Learn more about us →
        </Link>
      </div>
    </div>
  </section>
);

export default AboutSection;
