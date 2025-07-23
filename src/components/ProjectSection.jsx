import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this
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

const ProjectSection = () => {
  return (
    <section className={styles.projectSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Projects</span>
          <h2 className={styles.heading}>Our Recent Work</h2>
          <p className={styles.subheading}>
            Projects that drove extraordinary pipeline and predictable revenue.
          </p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((proj, idx) => (
            <div key={idx} className={styles.projectCard}>
              <div className={styles.imageArea}>
                <img src={proj.image} alt={proj.title} />
              </div>
              <div className={styles.contentArea}>
                <div className={styles.meta}>
                  <span className={styles.tag}>{proj.tag}</span>
                  <span className={styles.year}>{proj.year}</span>
                </div>
                <h3 className={styles.projectTitle}>{proj.title}</h3>
                <p className={styles.projectDesc}>{proj.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Use Link instead of <a> */}
        <div className={styles.ctaWrapper}>
          <Link to="/projects" className={styles.btnPrimary}>
            Explore More Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
