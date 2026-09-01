'use client';

import { useState } from 'react';
import Link from 'next/link';
import { submitForm } from '@/lib/api';

const responsibilities = [
  'Provide therapy for individuals, children, and families using evidence-based, trauma-informed approaches',
  'Support clients through life transitions, grief, and family dynamics',
  'Maintain accurate and timely clinical documentation',
  'Collaborate with supervisors and a multidisciplinary team',
  'Contribute to a supportive and mission-driven culture',
];

const qualifications = [
  'Master’s degree in Counseling, Social Work, Psychology, or related field',
  'LPC, LCSW, LMFT, or actively working toward licensure (supervision available)',
  'Experience or strong interest in trauma-informed care and family systems therapy',
  'Compassionate, patient, and growth-oriented mindset',
];

const benefits = [
  'Competitive pay: $50,000–$70,000/year (or $25–$35/hour)',
  'Health, dental, and vision insurance (if applicable)',
  'Paid time off and flexible scheduling',
  'Supervision for licensure provided',
  'Collaborative, mission-driven environment',
];

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12.5 9 18 20 6" />
    </svg>
  );
}

function ApplicationForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    topic: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await submitForm({
        service: 'careers',
        firstName: form.firstName,
        lastName: form.lastName,
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone,
        topic: form.topic,
        message: form.message,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="oa-contact-success">
        <span className="oa-contact-success-icon"><IconCheck /></span>
        <h3>Thank You for Applying</h3>
        <p>Your application has been received. Our team will review it and be in touch with you soon.</p>
      </div>
    );
  }

  return (
    <form className="oa-contact-form" onSubmit={handleSubmit}>
      <div className="oa-contact-form-row">
        <label className="oa-contact-field"><span>First Name*</span><input name="firstName" value={form.firstName} onChange={handleChange} required /></label>
        <label className="oa-contact-field"><span>Last Name*</span><input name="lastName" value={form.lastName} onChange={handleChange} required /></label>
      </div>
      <div className="oa-contact-form-row">
        <label className="oa-contact-field"><span>Phone</span><input type="tel" name="phone" value={form.phone} onChange={handleChange} /></label>
        <label className="oa-contact-field"><span>Email*</span><input type="email" name="email" value={form.email} onChange={handleChange} required /></label>
      </div>
      <label className="oa-contact-field"><span>Which position are you applying for?</span><input name="topic" value={form.topic} onChange={handleChange} placeholder="Job Position" /></label>
      <label className="oa-contact-field"><span>Message</span><textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us a bit about yourself and your experience." /></label>

      {error && <p className="oa-contact-form-note" style={{ color: '#c0392b' }}>{error}</p>}
      <button type="submit" className="fs-btn fs-req-btn-primary oa-contact-submit" disabled={submitting}>{submitting ? 'Submitting…' : 'Submit'}</button>
      <p className="oa-contact-form-note">
        Prefer email? Send your resume &amp; cover letter directly to{' '}
        <a href="mailto:info@openarmsfostercare.com">info@openarmsfostercare.com</a>.
      </p>
    </form>
  );
}

export default function CareersClient() {
  return (
    <main>
      {/* Hero */}
      <section id="home" className="reference-hero careers-hero">
        <div className="hero-banner-bg careers-hero-bg" aria-hidden="true"></div>
        <div className="reference-hero-overlay"></div>
        <div className="reference-hero-copy">
          <span className="hero-overline">JOIN OUR TEAM</span>
          <h1 className="hero-accent-heading">Careers <span className="hero-accent-heading-highlight">at Open Arms Initiative</span></h1>
          <div className="hero-divider" aria-hidden="true">
            <span className="hero-divider-line"></span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0170ED" strokeWidth="1.6"><path d="M12 21c-4-1-8-5-8-10a8 8 0 0 1 8-8c5 0 9 4 9 9 0 5-4.5 9-9 9Z"/><path d="M12 21c0-6 2-13 8-16"/></svg>
            <span className="hero-divider-line"></span>
          </div>
          <p className="reference-hero-text">
            At Open Arms Initiative, we believe in healing the whole person&mdash;children, adults, and families&mdash;through compassionate, trauma-informed care.
            Our team of therapists and staff are committed to making a lasting difference in the communities we serve across Oklahoma.
            If you are looking for a purpose-driven career in a supportive, mission-driven environment, we&rsquo;d love to hear from you.
          </p>
          <div className="hero-cta-row">
            <a className="reference-hero-button" href="#apply">
              Apply Now
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
          <div className="hero-mobile-cta">
            <a href="#apply" className="hero-mobile-cta-btn">Apply Now</a>
          </div>
        </div>
      </section>

      {/* Responsibilities / Qualifications / Benefits */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="why-choose-header">
            <div>
              <span className="care-badge">What to Expect</span>
              <h2 className="why-choose-title">Responsibilities, Qualifications &amp; Benefits</h2>
            </div>
          </div>
          <div className="why-choose-grid careers-info-grid">
            <article className="why-choose-card careers-info-card">
              <h3>Responsibilities</h3>
              <ul className="careers-check-list">
                {responsibilities.map((item) => (
                  <li key={item}><IconCheck />{item}</li>
                ))}
              </ul>
            </article>
            <article className="why-choose-card careers-info-card">
              <h3>Qualifications</h3>
              <ul className="careers-check-list">
                {qualifications.map((item) => (
                  <li key={item}><IconCheck />{item}</li>
                ))}
              </ul>
            </article>
            <article className="why-choose-card careers-info-card">
              <h3>Benefits</h3>
              <ul className="careers-check-list">
                {benefits.map((item) => (
                  <li key={item}><IconCheck />{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* How to Apply / Application Form */}
      <section id="apply" className="loc-online-section">
        <div className="loc-online-container">
          <div className="loc-visit-head">
            <span className="care-badge">How to Apply</span>
            <h2>Join Our Team</h2>
            <p>We&rsquo;d love to hear from you. Fill out the form below to get started.</p>
          </div>
          <div className="oa-connect-form-card careers-form-card">
            <ApplicationForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="final-cta-inner">
          <div className="final-cta-text">
            <h2>Ready to Make a Lasting Difference?</h2>
            <p>
              Whether you&rsquo;re early in your licensure journey or an experienced clinician, we&rsquo;ll help you find your place on our team.
              <br /><br />
              Email your resume &amp; cover letter to <a href="mailto:info@openarmsfostercare.com">info@openarmsfostercare.com</a>, or apply using the form above.
            </p>
            <p className="final-cta-address">Open Arms Initiative &middot; 1101 Sovereign Row, Unit A &middot; Oklahoma City, OK 73108</p>
          </div>
          <div className="final-cta-buttons">
            <a href="#apply" className="final-cta-btn primary">Apply Now</a>
            <a href="tel:+14059208934" className="final-cta-btn secondary">Call 405-920-8934</a>
          </div>
        </div>
      </section>
    </main>
  );
}
