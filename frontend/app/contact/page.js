'use client';

import { useState } from 'react';
import Link from 'next/link';

function Arrow() { return <span aria-hidden="true">→</span>; }

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceInterest: 'Individual Counseling',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
      <section className="section-intro" style={{ textAlign: 'left', marginBottom: '3rem' }}>
        <span className="services-kicker">Connect With Us</span>
        <h1 style={{ fontSize: '3rem', margin: '0.5rem 0 1rem', color: '#052E26' }}>
          Take the First Step Towards Healing
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#4a5568', maxWidth: '750px' }}>
          Our compassionate intake team is here to assist you with session scheduling, program inquiries, or foster parent support.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'start' }}>
        <div style={{ background: '#f8faf9', padding: '2.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <p className="eyebrow sand" style={{ color: '#8DC540', marginBottom: '0.5rem' }}>LOCATION & CONTACT</p>
          <h2 style={{ fontSize: '1.8rem', color: '#052E26', marginBottom: '1.5rem' }}>Open Arms Initiative Clinic</h2>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#052E26', marginBottom: '0.3rem' }}>Clinic Address</h3>
            <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
              1101 Sovereign Row, Unit A<br />
              Oklahoma City, OK 73108
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#052E26', marginBottom: '0.3rem' }}>Contact Details</h3>
            <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
              Phone: (405) 555-0199<br />
              Email: info@openarmsinitiative.com
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#052E26', marginBottom: '0.3rem' }}>Office Hours</h3>
            <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
              Monday – Friday: 8:00 AM – 6:00 PM<br />
              Saturday: By Appointment<br />
              Sunday: Closed (24/7 Foster Emergency Support Available)
            </p>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#052E26', borderRadius: '10px', color: '#fff' }}>
            <h4 style={{ color: '#8DC540', marginBottom: '0.5rem' }}>Need Immediate Crisis Support?</h4>
            <p style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>
              If you or a loved one are experiencing an emergency or acute mental health crisis, please dial 988 (Suicide & Crisis Lifeline) or visit your nearest emergency emergency room.
            </p>
          </div>
        </div>

        <div>
          {submitted ? (
            <div style={{ padding: '3rem', background: '#EDFFE1', borderRadius: '16px', border: '1px solid #8DC540', textAlign: 'center' }}>
              <h2 style={{ color: '#052E26', marginBottom: '1rem' }}>Thank You!</h2>
              <p style={{ fontSize: '1.1rem', color: '#2d3748', marginBottom: '1.5rem' }}>
                Your message has been received. A member of our intake team will reach out to you within 24 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="button button-dark"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '2.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#052E26', marginBottom: '1.5rem' }}>Request an Appointment</h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '500' }}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '500' }}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '500' }}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '500' }}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '500' }}>Service Interest</label>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff' }}
                >
                  <option value="Individual Counseling">Individual Counseling</option>
                  <option value="Child & Adolescent Counseling">Child & Adolescent Counseling</option>
                  <option value="Marriage & Couples Therapy">Marriage & Couples Therapy</option>
                  <option value="Foster Care & Adoption Counseling">Foster Care & Adoption Counseling</option>
                  <option value="Clinical Workshops & Training">Clinical Workshops & Training</option>
                  <option value="Pro Bono Therapy Services">Pro Bono Therapy Services</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '500' }}>How Can We Help You?</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share a brief details on what support you are looking for..."
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                ></textarea>
              </div>

              <button type="submit" className="button button-dark" style={{ width: '100%', padding: '1rem' }}>
                Submit Appointment Request <Arrow />
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
