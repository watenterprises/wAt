import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './ProjectsPage.module.css';
import NavBar from '../components/NavBar';

// Sample projects as previously listed
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
  },
  {
    title: 'B4Tutorial',
    description: 'Created a dynamic coaching platform with user-friendly design and optimized performance for better engagement.',
    tag: 'Coaching',
    year: '2025',
    image: '/b4logo.png',
    link: 'https://www.b4tutorial.in/'
  },
  {
    title: 'JH Groups',
    description: 'Delivered a construction company website with impactful visuals, strategic branding, and mobile responsiveness.',
    tag: 'Construction',
    year: '2025',
    image: '/jhlogo.png',
    link: 'https://www.jhgroups.in/'
  },
  {
    title: 'A5 Motors',
    description: 'Built a sleek two-wheeler dealership website highlighting product catalogs, service info, and contact features.',
    tag: 'Automobile',
    year: '2025',
    image: '/a5logo.png',
    link: 'https://www.a5motors.in/'
  },
  {
    title: 'Vibewoods',
    description: 'Designed a stylish website for an interior design firm, focusing on visual storytelling, elegance, and modern UX.',
    tag: 'Interior Design',
    year: '2025',
    image: '/vibewoods.png',
    link: 'https://vibewoods.in/'
  }
];


const allTags = ['All', ...Array.from(new Set(projects.map(p => p.tag)))];

export default function ProjectPage() {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.tag === filter);

  // Parallax background glow (scroll effect)
  const [bgRef, inView] = useInView({ triggerOnce: false, threshold: 0 });

  return (<>
    <NavBar/>
    <section className={styles.projectPage}>
      <motion.div
        className={styles.glowBg}
        animate={{ opacity: inView ? 1 : 0.7, scale: inView ? 1.18 : 0.95 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        ref={bgRef}
        />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.13, delayChildren: 0.2 } }
        }}
        className={styles.innerContainer}
        >
        {/* Page Header */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          className={styles.headerBlock}
          >
          <span className={styles.badgeGlow}>
            <svg width="18" height="18" aria-hidden="true"><circle cx="9" cy="9" r="9" fill="#6366f1"/><circle cx="9" cy="9" r="4.5" fill="#fff" opacity="0.55"/></svg>
            Portfolio
          </span>
          <h1 className={styles.heading}>
            <span>Selected</span> <span className={styles.textGradient}>Projects</span>
          </h1>
          <p className={styles.desc}>
            Handpicked projects that push boundaries in UI, tech, conversion, and delight. <br className={styles.brMobile}/>
            Explore by category:
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div className={styles.filterBar} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          {allTags.map(tag => (
            <button
            key={tag}
            className={`${styles.filterBtn} ${filter === tag && styles.activeBtn}`}
            onClick={() => setFilter(tag)}
            aria-pressed={filter === tag}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div className={styles.grid}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.09, delayChildren: 0.15 }
            }
          }}>
          <AnimatePresence>
            {filteredProjects.length === 0
              ? <div className={styles.emptyProjects}>No projects in this category yet.</div>
              : filteredProjects.map((proj, idx) => (
                <motion.a
                key={proj.title}
                href={proj.link}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.91, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.91, y: 30 }}
                transition={{ duration: 0.36, delay: 0.05 * idx, type: 'spring' }}
                tabIndex={0}
                whileHover={{ scale: 1.025, rotateY: -4, boxShadow: "0 20px 60px #6366f166" }}
                whileTap={{ scale: 0.96 }}
                >
                  <motion.div className={styles.cardImage}
                    whileHover={{ scale: 1.04, filter: 'brightness(1.08) blur(2px)' }}
                    transition={{ type: 'spring', stiffness: 280 }}
                    >
                    <img src={proj.image} alt={proj.title + " project preview"} draggable="false" />
                    <span className={styles.projTag}>{proj.tag}</span>
                    <motion.div
                      className={styles.cardOverlay}
                      initial={{ opacity: 0.14 }}
                      whileHover={{ opacity: 0.34 }}
                      transition={{ duration: 0.32 }}
                      />
                  </motion.div>
                  <div className={styles.cardText}>
                    <span className={styles.year}>{proj.year}</span>
                    <h2 className={styles.title}>{proj.title}</h2>
                    <p className={styles.desc}>{proj.description}</p>
                  </div>
                </motion.a>
              ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className={styles.ctaZone}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
          <Link to="/contact" className={styles.gradientBtn}>
            <span>Let’s Bring Your Project to Life</span>
            <svg width="24" height="24"><path d="M8 12h8M14 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
          </>
  );
}
