// src/pages/ProjectsPage.jsx
import React from 'react';
import styles from './ProjectsPage.module.css';
import NavBar from '../components/NavBar';
import FooterSection from '../components/FooterSection';

const allProjects = [
  {
    title: 'CPP — Demand Generation',
    image: '/projects/cpp.png',
    tag: 'B2B SaaS',
    year: '2024',
    description: 'In-depth ABM strategy driving key pipeline shifts for B2B teams.'
  },
  {
    title: 'Finora — Paid Funnels',
    image: '/projects/finora.png',
    tag: 'Finance',
    year: '2023',
    description: 'Scaled SEM/paid social campaigns across EMEA with 3x ROAS.'
  },
  {
    title: 'LogicFlow — SEO Engine',
    image: '/projects/logicflow.png',
    tag: 'Tech',
    year: '2023',
    description: 'Content-led architecture that generated 300+ organic MQLs.'
  },
  {
    title: 'GeoTrack — LinkedIn Strategy',
    image: '/projects/geotrack.png',
    tag: 'SaaS',
    year: '2022',
    description: 'Niche persona targeting with hyper-focused LinkedIn campaigns.'
  }
];

const ProjectsPage = () => {
  return (
    <>
    <NavBar/>
    <section className={styles.projectsPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>All Projects</h1>
        <p className={styles.pageIntro}>
          Explore the growth engines we’ve designed and deployed for leading B2B brands.
        </p>

        <div className={styles.grid}>
          {allProjects.map((proj, idx) => (
              <div key={idx} className={styles.card}>
              <img src={proj.image} alt={proj.title} className={styles.image} />
              <div className={styles.details}>
                <div className={styles.meta}>
                  <span className={styles.tag}>{proj.tag}</span>
                  <span className={styles.year}>{proj.year}</span>
                </div>
                <h3 className={styles.title}>{proj.title}</h3>
                <p className={styles.desc}>{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <FooterSection/>
    </>
  );
};

export default ProjectsPage;
