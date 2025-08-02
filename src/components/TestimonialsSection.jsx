import React from 'react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Priya Kumar',
    title: 'Founder, UrbanNests',
    text: 'wAt transformed our website and brand. Our inquiries doubled within months!',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
  },
  {
    name: 'Rahul Singh',
    title: 'Managing Director, Skyline Realty',
    text: 'Their professionalism and design expertise helped us grow our local presence significantly.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 5,
  },
  {
    name: 'Aisha Patel',
    title: 'CMO, Finora',
    text: 'Creative, fast delivery with fantastic results. Highly recommend wAt for growth!',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
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
