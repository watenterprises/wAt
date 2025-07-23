import React, { useState } from "react";
import styles from "./CareersPage.module.css";
import FooterSection from "../components/FooterSection";
import NavBar from "../components/NavBar";

const jobs = [
  {
    title: "Senior Growth Marketer",
    type: "Full-time",
    location: "Rotterdam, NL (Hybrid)",
    desc: "Lead growth strategy for top B2B clients, run campaigns, own measurable results.",
    id: "sr-growth-marketer",
  },
  {
    title: "Content Marketing Specialist",
    type: "Full-time",
    location: "Lisbon, PT (Remote possible)",
    desc: "Craft stories, articles, and case studies that fuel Dapper clients’ pipelines.",
    id: "content-marketing-specialist",
  },
  {
    title: "PPC Performance Lead",
    type: "Full-time",
    location: "Rotterdam, NL",
    desc: "Own paid channels and drive outstanding pipeline growth for global B2B brands.",
    id: "ppc-performance-lead",
  },
];

const benefits = [
  "Hybrid & remote work",
  "Annual growth budget",
  "Paid training",
  "Flexible vacation",
  "Latest gear & tools",
  "Diverse, international team",
];

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[0].id);
  const [form, setForm] = useState({ name: "", email: "", cv: null, cover: "" });
  const [formStatus, setFormStatus] = useState({ loading: false, sent: false, error: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleFile = (e) => {
    setForm((f) => ({ ...f, cv: e.target.files[0] }));
  };

  const submit = (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, sent: false, error: "" });
    setTimeout(() => {
      setForm({ name: "", email: "", cv: null, cover: "" });
      setFormStatus({ loading: false, sent: true, error: "" });
    }, 1400);
  };

  return (
    <>
    <NavBar/>
    <section className={styles.careersPage}>
      {/* HERO BANNER */}
      <div className={styles.banner}>
        <div>
          <h1>
            Your Next <span className={styles.gradient}>Career Adventure</span> Starts Here
          </h1>
          <p>
            Join Dapper’s mission to build B2B growth engines for ambitious brands across Europe and beyond.
          </p>
        </div>
        <img
          src="/team/careers-illustration.svg"
          alt="Careers at Dapper"
          className={styles.heroImage}
        />
      </div>

      {/* JOB LISTINGS */}
      <div className={styles.jobsSection}>
        <h2>Open Positions</h2>
        <div className={styles.jobsList}>
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`${styles.jobCard} ${
                selectedJob === job.id ? styles.selected : ""
              }`}
              tabIndex={0}
              onClick={() => setSelectedJob(job.id)}
              onKeyPress={(e) => e.key === "Enter" && setSelectedJob(job.id)}
              aria-label={`Open details for ${job.title}`}
            >
              <div>
                <div className={styles.jobTitle}>{job.title}</div>
                <div className={styles.jobType}>{job.type}</div>
              </div>
              <div className={styles.jobLocation}>{job.location}</div>
              <div className={styles.jobDesc}>{job.desc}</div>
              <button
                className={styles.applyBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedJob(job.id);
                  document.getElementById("apply-form").scrollIntoView({ behavior: "smooth" });
                }}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* WHY DAPPER */}
      <div className={styles.whySection}>
        <h2>Why Dapper?</h2>
        <ul className={styles.benefitsGrid}>
          {benefits.map((b, i) => (
            <li key={i} className={styles.benefit}>
              <span>✅</span>{b}
            </li>
          ))}
        </ul>
        <div className={styles.cultureQuote}>
          “Great ideas come from great people and an open, growth-first culture.”
        </div>
      </div>

      {/* APPLICATION FORM */}
      <div className={styles.formSection} id="apply-form">
        <h2>Apply Now</h2>
        <form className={styles.form} onSubmit={submit}>
          <div className={styles.formRow}>
            <div>
              <label htmlFor="job">Position</label>
              <select
                id="job"
                name="job"
                value={selectedJob}
                onChange={(e) => setSelectedJob(e.target.value)}
                required
              >
                {jobs.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleInput}
                required
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                autoComplete="email"
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div>
              <label htmlFor="cv">Attach CV/Resume</label>
              <input
                id="cv"
                name="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFile}
                required
              />
            </div>
            <div className={styles.formCol2}>
              <label htmlFor="cover">Short Cover Letter</label>
              <textarea
                id="cover"
                name="cover"
                rows={4}
                placeholder="Tell us about yourself and why you’re a fit…"
                value={form.cover}
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <div>
            <button className={styles.submitBtn} type="submit" disabled={formStatus.loading}>
              {formStatus.loading ? "Submitting…" : "Send Application"}
            </button>
            {formStatus.sent && (
              <div className={styles.successMsg}>Thanks! We’ll connect if it’s a fit.</div>
            )}
          </div>
        </form>
      </div>
    </section>
    <FooterSection/>
    </>
  );
};

export default CareersPage;
