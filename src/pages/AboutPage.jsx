import React, { useState, useEffect } from 'react';
import styles from './AboutPage.module.css';
import NavBar from '../components/NavBar';
import FooterSection from '../components/FooterSection';

const Aboutpage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const teamMembers = [
    {
      name: 'Tycho Luijten',
      role: 'CEO & Founder',
      image: '/team/tycho.jpg',
      bio: 'Growth marketing visionary with 8+ years of B2B experience'
    },
    {
      name: 'Martine Lemans',
      role: 'COO',
      image: '/team/martine.jpg',
      bio: 'Operations expert scaling teams across Europe'
    },
    {
      name: 'Baptiste Genty',
      role: 'Head of Demand',
      image: '/team/baptiste.jpg',
      bio: 'Demand generation specialist driving pipeline growth'
    },
    {
      name: 'Sabine Snijders',
      role: 'Head of Performance',
      image: '/team/sabine.jpg',
      bio: 'Performance marketing strategist maximizing ROI'
    },
    {
      name: 'Carol Noordam',
      role: 'Head of Content',
      image: '/team/carol.jpg',
      bio: 'Content marketing expert creating compelling narratives'
    },
    {
      name: 'Judith Briñol',
      role: 'Head of Creative',
      image: '/team/judith.jpg',
      bio: 'Creative director bringing brands to life visually'
    }
  ];

  const milestones = [
    { year: '2019', event: 'Dapper founded in Rotterdam by Tycho and co-founders' },
    { year: '2020', event: 'Hired first 2 employees, moved to our first office' },
    { year: '2021', event: 'Broke through office walls to expand, grew to 15 team members' },
    { year: '2022', event: 'Rebranded to Dapper B2B Growth Agency' },
    { year: '2023', event: 'Named "Best B2B Growth Agency of the Netherlands"' },
    { year: '2024', event: 'Moved to 680m² office, opened Lisbon office' },
    { year: '2025', event: 'Expanded to 45+ team members across 15+ nationalities' }
  ];

  const stats = [
    { value: '45+', label: 'Team Members' },
    { value: '15+', label: 'Nationalities' },
    { value: '500+', label: 'Projects Completed' },
    { value: '200%', label: 'Avg Growth Increase' }
  ];

  const values = [
    {
      title: 'Growth-Focused',
      description: 'We test our way to optimal lead generation funnels and turn prospects into Sales Qualified Leads',
      icon: '📈'
    },
    {
      title: 'Data-Driven',
      description: 'Every decision backed by concrete data and measurable results for predictable growth',
      icon: '📊'
    },
    {
      title: 'Creative Innovation',
      description: 'Unparalleled creativity combined with the latest tools and technology',
      icon: '💡'
    },
    {
      title: 'Team Excellence',
      description: 'Handpicked growth specialists with expertise across all marketing disciplines',
      icon: '🏆'
    }
  ];

  return (<>
    <NavBar/>
    <section className={styles.aboutSection}>
      {/* Hero Introduction */}
      <div className={styles.container}>
        <div className={styles.heroIntro}>
          <div className={styles.badge}>
            About Dapper
          </div>
          <h2 className={styles.mainHeadline}>
            Revolutionizing <span className={styles.highlight}>B2B Marketing</span><br />
            Since 2019
          </h2>
          <p className={styles.introText}>
            We're on a mission to become the world's #1 B2B marketing agency. Based in Rotterdam 
            with a global team of 45+ passionate marketers, we maximize growth for brands that make an impact.
          </p>
        </div>

        {/* Statistics Row */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <div className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Our Story</h3>
            <p className={styles.sectionSubtitle}>
              From a two-person startup to Europe's leading B2B growth agency
            </p>
          </div>

          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <p>
                Dapper began as a vision to transform how B2B companies approach marketing. 
                Founded in Rotterdam in 2019, we started with a simple belief: that every 
                impactful brand deserves to reach its full growth potential.
              </p>
              <p>
                What sets us apart is our methodology. We've helped hundreds of companies 
                create predictable growth through systematic testing, optimization, and 
                scaling of marketing engines that generate real pipeline and revenue.
              </p>
              <p>
                Today, we're proud to represent over 15 nationalities across our Rotterdam 
                and Lisbon offices, bringing diverse perspectives to every client challenge.
              </p>
            </div>
            <div className={styles.storyVisual}>
              <div className={styles.officeImage}>
                <div className={styles.officeCard}>
                  <h4>Rotterdam HQ</h4>
                  <p>680m² creative workspace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Our Growth Journey</h3>
            <p className={styles.sectionSubtitle}>
              Key milestones that shaped Dapper into Europe's top B2B growth agency
            </p>
          </div>

          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
                <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{milestone.year}</div>
                  <div className={styles.timelineEvent}>{milestone.event}</div>
                </div>
                <div className={styles.timelineDot}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Our Values</h3>
            <p className={styles.sectionSubtitle}>
              The principles that drive everything we do
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Meet Our Leadership Team</h3>
            <p className={styles.sectionSubtitle}>
              Growth fanatics leading the charge across all marketing disciplines
            </p>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
                <div key={index} className={styles.teamCard}>
                <div className={styles.teamImageContainer}>
                  <div className={styles.teamImage}>
                    <div className={styles.teamImagePlaceholder}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                <div className={styles.teamInfo}>
                  <h4 className={styles.teamName}>{member.name}</h4>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.teamCTA}>
            <p>Want to join our growing team?</p>
            <button className={styles.btnSecondary}>View Open Positions</button>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className={styles.locationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Our Global Presence</h3>
            <p className={styles.sectionSubtitle}>
              Two strategic locations, one unified mission
            </p>
          </div>

          <div className={styles.locationsGrid}>
            <div className={styles.locationCard}>
              <div className={styles.locationHeader}>
                <div className={styles.locationFlag}>🇳🇱</div>
                <div>
                  <h4 className={styles.locationName}>Rotterdam, Netherlands</h4>
                  <p className={styles.locationLabel}>Headquarters</p>
                </div>
              </div>
              <p className={styles.locationDescription}>
                Our main hub in the heart of Europe's logistics capital, 
                housing our core team and creative workspace.
              </p>
              <div className={styles.locationDetails}>
                <span>680m² Office • 35+ Team Members</span>
              </div>
            </div>

            <div className={styles.locationCard}>
              <div className={styles.locationHeader}>
                <div className={styles.locationFlag}>🇵🇹</div>
                <div>
                  <h4 className={styles.locationName}>Lisbon, Portugal</h4>
                  <p className={styles.locationLabel}>European Expansion</p>
                </div>
              </div>
              <p className={styles.locationDescription}>
                Our Southern European office bringing diverse talent and 
                fresh perspectives to our growing team.
              </p>
              <div className={styles.locationDetails}>
                <span>Modern Workspace • 10+ Team Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaHeadline}>Ready to Maximize Your Growth?</h3>
            <p className={styles.ctaSubtext}>
              Join hundreds of B2B companies that trust Dapper to scale their marketing 
              and generate predictable pipeline growth.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.btnPrimary}>
                Get Your Free Growth Audit
                <span className={styles.arrow}>→</span>
              </button>
              <button className={styles.btnSecondary}>Schedule a Call</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterSection/>
            </>
  );
};

export default Aboutpage;
