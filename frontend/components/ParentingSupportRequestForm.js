'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
const IconSend = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7Z" /></svg>
);
const IconShield = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3 4.5 6v6c0 4.5 3.2 7.7 7.5 9 4.3-1.3 7.5-4.5 7.5-9V6L12 3Z" /><path d="M9 12.2 11 14l4-4.2" /></svg>
);

export default function ParentingSupportRequestForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', phone: '', insurance: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      await submitForm({ service: 'parenting-classes', ...form });
      router.push(`/eligibility?insurance=${encodeURIComponent(form.insurance)}`);
    } catch (err) {
      setError(err.message);
      setStatus('idle');
    }
  };

  return (
    <form className="fs-req-form" onSubmit={handleSubmit}>
      <label className="fs-req-label">Full Name</label>
      <div className="fs-req-input-wrap">
        <IconUserCircle />
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
      </div>

      <label className="fs-req-label">Email Address</label>
      <div className="fs-req-input-wrap">
        <IconMail />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.org" required />
      </div>

      <label className="fs-req-label">Phone Number</label>
      <div className="fs-req-input-wrap">
        <IconPhone />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="(123) 456-7890" />
      </div>

      <label className="fs-req-label">How will you be paying for services?</label>
      <div className="fs-req-input-wrap">
        <IconShield />
        <select name="insurance" value={form.insurance} onChange={handleChange}>
          <option value="" disabled>Select Your Insurance Provider</option>
          <option value="SoonerCare">SoonerCare</option>
          <option value="Humana">Humana</option>
          <option value="Aetna">Aetna</option>
          <option value="Oklahoma Complete Health">Oklahoma Complete Health</option>
          <option value="Private Pay">Private Pay</option>
          <option value="Not Sure">I&rsquo;m not sure / I need help verifying my coverage</option>
        </select>
      </div>

      <label className="fs-req-label">Message / How can we help?</label>
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Briefly describe what's going on and how we can help..." rows={3} />

      {error && <p className="fs-req-error">{error}</p>}

      <button type="submit" className="fs-btn fs-req-btn-primary fs-req-submit" disabled={status === 'submitting'}>
        <IconSend />
        {status === 'submitting' ? 'Sending…' : 'Continue to Eligibility'}
      </button>

      <p className="req-form-insurance-note">Open Arms Initiative is currently accepting new clients with Humana, Aetna, Oklahoma Complete Health, OHCA (SoonerCare), and private pay. Coverage and eligibility will be verified before services are scheduled.</p>
    </form>
  );
}
