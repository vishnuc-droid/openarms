'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <img className="contact-hero-image" src="/new3.jpg" alt="People joining hands" />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h1>Let&apos;s keep in touch</h1>
          <p>Feel free to reach out to us using the options below, and<br className="contact-desktop-break" /> our dedicated team will respond to your inquiries<br className="contact-desktop-break" /> promptly.</p>
        </div>
      </section>

      <section className="contact-appointment-wrap">
        <div className="contact-appointment-card">
          <div className="contact-form-panel">
            <span className="contact-tag">Connect</span>
            <h2>Need more help?</h2>
            <p className="contact-intro">Need help with a project, have a question<br className="contact-desktop-break" /> about our work? We&apos;re here.</p>

            <form onSubmit={handleSubmit} className="contact-booking-form">
              <div className="contact-fields-row">
                <label>First Name<input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" /></label>
                <label>Last Name<input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" /></label>
              </div>
              <div className="contact-fields-row">
                <label>Phone<input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" /></label>
                <label>Email<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" /></label>
              </div>
              <div className="contact-fields-row">
                <label>Date<input type="text" name="date" value={formData.date} onChange={handleChange} placeholder="Date" /></label>
                <label>Time<input type="text" name="time" value={formData.time} onChange={handleChange} placeholder="Time" /></label>
              </div>
              <label className="contact-message-label">Message<textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="4" /></label>
              <button type="submit">Book an Appointment</button>
            </form>
          </div>

          <div className="contact-feature-panel">
            <img src="/new2.jpg" alt="Open Arms Initiative workshop" />
            <div className="contact-feature-overlay" />
            <h2>Take the First<br />Step towards<br />Wellness.</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
