import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectSection.module.css';

const projects = [
  {
    title: 'KDM Construction',
    description: 'Built a premium construction company website with a modern UI, interactive layouts, and responsive design.',
    tag: 'Real Estate',
    year: '2025',
    image: '/kdm.png',
    link: 'https://kdm-construction.vercel.app/'
  },
  {
    title: 'Ayatti Wellness',
    description: 'Designed and developed a holistic wellness and spa platform with elegant visuals and smooth navigation.',
    tag: 'Wellness',
    year: '2025',
    image: '/Ayatti.png',
    link: 'https://ayattiwellness.life/'
  },
  {
    title: 'PhD Research Guidance',
    description: 'Developed a robust academic support portal for PhD scholars, focusing on UX clarity and lead generation.',
    tag: 'Education',
    year: '2025',
    image: '/phd.png',
    link: 'https://phdresearchguidance.com/'
  }
];


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
            Projects that drove extraordinary engagement<br className={styles.mobileBreak}/> and stunning user experience.
          </p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((proj, idx) => (
            <a href={proj.link} target="_blank" rel="noopener noreferrer" key={idx} className={styles.projectCard}>
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
            </a>
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
