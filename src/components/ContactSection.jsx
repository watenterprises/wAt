import React, { useState } from 'react';
import styles from './ContactSection.module.css';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const ContactSection = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, sent: false, error: '' });

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStatus({ loading: true, sent: false, error: '' });

    // --- Implementation Demo: Replace below with your API or EmailJS call
    setTimeout(() => {
      setStatus({ loading: false, sent: true, error: '' });
      setForm(initialState);
    }, 1500);
    // ----
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.infoPanel}>
          <div className={styles.badge}>Contact</div>
          <h2 className={styles.title}>
            Let’s connect <span className={styles.highlight}>and grow</span>
          </h2>
          <p className={styles.subtitle}>
            Interested in working with Dapper or have a question? Fill out the form or reach us directly.
          </p>
          <div className={styles.contactDetails}>
            <div>
              <span className={styles.label}>Email</span>
              <a href="mailto:hello@dapperagency.com">hello@dapperagency.com</a>
            </div>
            <div>
              <span className={styles.label}>Phone</span>
              <a href="tel:+31123456789">+31 123 456 789</a>
            </div>
            <div>
              <span className={styles.label}>Offices</span>
              <p>
                Rotterdam, Netherlands <br />
                Lisbon, Portugal
              </p>
            </div>
          </div>
        </div>

        <form className={styles.formPanel} onSubmit={handleSubmit} noValidate>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? styles.errorInput : ''}
              disabled={status.loading}
              autoComplete="name"
              required
            />
            {errors.name && <div className={styles.errorMsg}>{errors.name}</div>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? styles.errorInput : ''}
              disabled={status.loading}
              autoComplete="email"
              required
            />
            {errors.email && <div className={styles.errorMsg}>{errors.email}</div>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className={errors.message ? styles.errorInput : ''}
              disabled={status.loading}
              required
            />
            {errors.message && <div className={styles.errorMsg}>{errors.message}</div>}
          </div>
          <button className={styles.btnPrimary} type="submit" disabled={status.loading}>
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
          {status.sent && <div className={styles.successMsg}>Thank you! We’ll get back to you soon.</div>}
          {status.error && <div className={styles.errorMsg}>{status.error}</div>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

