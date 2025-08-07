import React from 'react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Somashekar',
    title: 'Founder, KDM Construction',
    text: 'wAt transformed our website and brand. Our inquiries doubled within months!',
    image: '../src/assets/kdmlogo.png',
    rating: 5,
  },
  {
    name: 'Naveen',
    title: 'Owner, NV Fit Hub',
    text: 'Creative, fast delivery with fantastic results. Highly recommend wAt for growth!',
    image: '../src/assets/nvfithub.png',
    rating: 5,
  },
  {
    name: 'Pradeep Kumar',
    title: 'Founder, VibeWoods',
    text: 'Their professionalism and design expertise helped us grow our local presence significantly.',
    image: '../src/assets/Vibewoodslogo.png',
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`${styles.star} ${i < count ? styles.filled : ''}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>What Our Clients Say</h2>
      <p className={styles.subtitle}>Trusted by professionals across industries</p>
      <div className={styles.testimonials}>
        {testimonials.map(({ name, title, text, image, rating }, idx) => (
          <article key={idx} className={styles.card}>
            <img src={image} alt={`${name} photo`} className={styles.avatar} />
            <Stars count={rating} />
            <p className={styles.text}>"{text}"</p>
            <div className={styles.clientInfo}>
              <p className={styles.name}>{name}</p>
              <p className={styles.title}>{title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
