import React from "react";
import styles from "./BlogSection.module.css";

const posts = [
    {
      image: "https://images.pexels.com/photos/8292776/pexels-photo-8292776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "2025 Web Design Trends for Real Estate",
      excerpt: "Modern design, 3D tours, and instant engagement: see what’s shaping the next wave of real estate digital.",
      date: "August 1, 2025",
      tags: ["Web Design", "Real Estate", "Trends"],
      author: { name: "Aakash Sharma", avatar: "https://randomuser.me/api/portraits/men/75.jpg" },
      category: "Real Estate",
      url: "/blog/real-estate-trends"
    },
    {
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Why Local SEO is a Bangalore Power Play",
      excerpt: "Unlock local discovery and supercharge your inbound pipeline—SEO that actually moves the needle.",
      date: "July 24, 2025",
      tags: ["SEO", "Local Business"],
      author: { name: "Neha R.", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
      category: "SEO",
      url: "/blog/local-seo-bangalore"
    },
    {
      image: "https://images.pexels.com/photos/3965533/pexels-photo-3965533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Brand Playbook: Visual Mastery for Interiors",
      excerpt: "Step-by-step tips for building irresistible, authentic brands for design studios and interior pros.",
      date: "July 10, 2025",
      tags: ["Branding", "Interiors"],
      author: { name: "Vikram Menon", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
      category: "Branding",
      url: "/blog/branding-interiors"
    }
  ];

const BlogSection = () => (
  <section className={styles.section} id="blog">
    <div className={styles.bgFX}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
    </div>
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Insights</span>
        <h2 className={styles.heading}>
          Latest <span className={styles.gradient}>Blog</span> Ideas
        </h2>
        <p className={styles.subhead}>
          Tech, design, growth, creativity—future-forward takes from the <span className={styles.brand}>wAt</span> team and friends.
        </p>
      </header>
      <div className={styles.blogGrid}>
        {posts.map(post => (
          <a href={post.url} key={post.title} className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={post.image} alt={post.title} />
              <div className={styles.ribbon}>
                <span>{post.category}</span>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.tagsRow}>
                {post.tags.map(tag => (
                  <span className={styles.tagChip} key={tag}>{tag}</span>
                ))}
                <span className={styles.date}>{post.date}</span>
              </div>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.metaRow}>
                <img src={post.author.avatar} alt={post.author.name} className={styles.authorAvatar} />
                <span className={styles.author}>{post.author.name}</span>
                <span className={styles.arrow}>→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className={styles.ctaRow}>
        <a href="/blog" className={styles.ctaBtn}>
          More Stories
          <span className={styles.ctaArrow}>→</span>
        </a>
      </div>
    </div>
  </section>
);

export default BlogSection;
