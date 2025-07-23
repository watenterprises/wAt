import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterSection.module.css';

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Branding */}
        <div className={styles.brandBlock}>
          <Link to="/" className={styles.logo}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 29C8.27 29 2 22.73 2 15S8.27 1 16 1s14 6.27 14 14-6.27 14-14 14z"
                fill="#22c55e"
              />
            </svg>
            <span>Dapper</span>
          </Link>
          <p className={styles.tagline}>
            Growth-led B2B marketing agency based in Rotterdam & Lisbon.
          </p>
        </div>

        {/* Navigation */}
        <div className={styles.navBlock}>
          <div>
            <h4>Pages</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
          <div className={styles.socialGroup}>
            <h4>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="LinkedIn">🔗</a>
              <a href="#" aria-label="Twitter/X">🐦</a>
              <a href="#" aria-label="Instagram">📸</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} Dapper Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
