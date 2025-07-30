import React from 'react';
import styles from './FooterSection.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand Block */}
        <div className={styles.brandBlock}>
          <a href="/" className={styles.logo}>
            <HiOutlineLightBulb size={24} />
            wAt Enterprises
          </a>
          <p className={styles.tagline}>
            We help businesses scale with expert website development, UI/UX design, SEO marketing, and branding strategies tailored for the modern digital era.
          </p>
        </div>

        {/* Navigation Links */}
        <div className={styles.navBlock}>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/work">Our Work</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="/services/web-design">Website Design</a></li>
              <li><a href="/services/ui-ux">UI/UX</a></li>
              <li><a href="/services/seo">SEO & Marketing</a></li>
              <li><a href="/services/branding">Branding</a></li>
            </ul>
          </div>
          <div className={styles.socialGroup}>
            <h4>Connect</h4>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} wAt Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
