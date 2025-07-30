import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectSection.module.css';

const projects = [
  {
    title: 'CPP — Demand Generation',
    description: 'Account-based demand gen strategy that resulted in 200% increase in inbound calls.',
    tag: 'B2B SaaS',
    year: '2024',
    image: '/projects/cpp.png'
  },
  {
    title: 'LogicFlow — Performance SEO',
    description: 'Built a content-led SEO engine that increased lead volume by 350%.',
    tag: 'Tech',
    year: '2023',
    image: '/projects/logicflow.png'
  },
  {
    title: 'Finora — Funnels & Ads',
    description: 'Scaled paid LinkedIn and Google campaigns across EMEA to drive MQL growth.',
    tag: 'Finance',
    year: '2024',
    image: '/projects/finora.png'
  }
];

const palette = {
  indigo: "#6366f1",
  indigoLight: "#a5b4fc"
};

const ProjectSection = () => {
  return (
    <section className={styles.projectSection}>
      <div className={styles.bgGlow}></div>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>
            <svg width="16" height="16" aria-hidden="true" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" fill="#6366f1"/>
              <circle cx="8" cy="8" r="4" fill="#fff" opacity="0.6"/>
            </svg>
            Projects
          </span>
          <h2 className={styles.heading}>
            Our <span className={styles.indigoTextGlow}>Recent Work</span>
          </h2>
          <p className={styles.subheading}>
            Projects that drove extraordinary pipeline<br className={styles.mobileBreak}/> and predictable revenue.
          </p>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((proj, idx) => (
            <div key={idx} className={styles.projectCard}>
              <div className={styles.imageArea}>
                <img src={proj.image} alt={proj.title}/>
                <div className={styles.cardBlurBg} />
                <span className={styles.floatingTag}>{proj.tag}</span>
              </div>
              <div className={styles.contentArea}>
                <div className={styles.meta}>
                  <span className={styles.year}>{proj.year}</span>
                </div>
                <h3 className={styles.projectTitle}>{proj.title}</h3>
                <p className={styles.projectDesc}>{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ctaWrapper}>
          <Link to="/projects" className={styles.btnPrimary}>
            <span>Explore More Projects</span>
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M7 10h6M11 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
