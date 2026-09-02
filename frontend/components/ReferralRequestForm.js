'use client';

import { useState } from 'react';
import { submitForm } from '@/lib/api';

const IconUserCircle = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="8" r="3.2" /><path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" /></svg>
);
const IconMail = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 6.5 8 6 8-6" /></svg>
);
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z" /></svg>
);
const IconHeart = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>
);
const IconSend = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7Z" /></svg>
);
const IconLock = (props) => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="4" y="10.5" width="16" height="10" rx="2" /><path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" /></svg>
);

export default function ReferralRequestForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    relationship: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      await submitForm({
        service: 'local-referrals',
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.patientPhone,
        message: `Referring: ${form.patientName} (${form.relationship || 'relationship not specified'}). Patient email: ${form.patientEmail || 'n/a'}. Patient phone: ${form.patientPhone || 'n/a'}.`,
      });
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="fs-req-success">
        <p>Thank you for your referral! Our team will reach out to your community member soon.</p>
      </div>
    );
  }

  return (
    <form className="fs-req-form referral-req-form" onSubmit={handleSubmit}>
      <div className="referral-req-row">
        <div>
          <label className="fs-req-label">First Name</label>
          <div className="fs-req-input-wrap">
            <IconUserCircle />
            <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
          </div>
        </div>
        <div>
          <label className="fs-req-label">Last Name</label>
          <div className="fs-req-input-wrap">
            <IconUserCircle />
            <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
          </div>
        </div>
      </div>

      <label className="fs-req-label">Email Address</label>
      <div className="fs-req-input-wrap">
        <IconMail />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Address" required />
      </div>

      <label className="fs-req-label">Name of the Patient You Are Referring</label>
      <div className="fs-req-input-wrap">
        <IconUserCircle />
        <input name="patientName" value={form.patientName} onChange={handleChange} placeholder="Name of patient" required />
      </div>

      <div className="referral-req-row">
        <div>
          <label className="fs-req-label">Patient&rsquo;s Email Address</label>
          <div className="fs-req-input-wrap">
            <IconMail />
            <input name="patientEmail" type="email" value={form.patientEmail} onChange={handleChange} placeholder="Patient's Email" />
          </div>
        </div>
        <div>
          <label className="fs-req-label">Patient&rsquo;s Phone Number</label>
          <div className="fs-req-input-wrap">
            <IconPhone />
            <input name="patientPhone" value={form.patientPhone} onChange={handleChange} placeholder="Patient's Number" />
          </div>
        </div>
      </div>

      <label className="fs-req-label">Relationship to New Patient</label>
      <div className="fs-req-input-wrap">
        <IconHeart />
        <input name="relationship" value={form.relationship} onChange={handleChange} placeholder="e.g. Friend, Family Member, Neighbor" />
      </div>

      {error && <p className="fs-req-error">{error}</p>}

      <button type="submit" className="fs-btn fs-req-btn-primary fs-req-submit" disabled={status === 'submitting'}>
        <IconSend />
        {status === 'submitting' ? 'Sending…' : 'Submit Referral'}
      </button>

      <p className="fs-req-privacy">
        <IconLock />
        We respect your privacy. Your information is safe with us.
      </p>
    </form>
  );
}
