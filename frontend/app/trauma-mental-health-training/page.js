'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { submitForm } from '@/lib/api';

/* ─── FAQ DATA (unchanged) ─────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: "What's the difference between this and Trauma-Informed Care Training?",
    a: "Trauma & Mental Health Training is our broader foundational offering. It covers everything from recognizing warning signs to supporting grief and building staff resilience. Trauma-Informed Care Training is our flagship program, focused specifically on the core principles of trauma-informed practice. Many organizations start with the flagship and then add topics from this page as needed.",
  },
  {
    q: 'Can this training work for a mixed-role staff day, with case workers, volunteers, and admin staff all in the same room?',
    a: "Yes, this is one of the more common formats organizations request, and sessions are built to be useful across roles rather than assuming everyone has the same background.",
  },
  {
    q: 'Is this appropriate for volunteers, not just paid staff?',
    a: 'Yes, this training is regularly built for mixed staff-and-volunteer audiences.',
  },
];

/* ─── PROGRAM CARDS DATA (unchanged) ───────────────────────────────────── */
const PROGRAMS = [
  {
    img: '/Training/african-american-doctor-surgeon-sharing-his-ptsd-issues-with-psychiatrist.webp',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
    name: 'Recognizing the Signs',
    desc: 'Learn to identify behavioral and emotional indicators of trauma and mental health concerns.',
  },
  {
    img: '/Training/authentic-group-therapy-meeting.jpg',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0h10m-10 0H3m18-7v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" /></svg>,
    name: 'Understanding Human Behavior Through a Trauma Lens',
    desc: "Explore why people respond the way they do and what's really beneath the behavior.",
  },
  {
    img: '/Training/mid-shot-man-therapist-taking-notes-near-woman.webp',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><polyline points="9 12 11 14 15 10" /></svg>,
    name: 'Staying Well While Doing Hard Work',
    desc: 'Practical self-care and stress-management strategies for helping professionals.',
  },
  {
    img: '/Training/therapy-session-where-teenager-discusses-her-struggles-with-anxiety.webp',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z" /></svg>,
    name: 'Grief, Loss, and Emotional Support Skills',
    desc: 'Tools for supporting others through hard experiences with compassion and boundaries.',
  },
  {
    img: '/Training/people-having-debate-while-looking-computer.webp',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="12" y2="14" /></svg>,
    name: 'Communication and Conflict Skills for Human-Service Teams',
    desc: 'Build stronger relationships and navigate tough conversations with confidence.',
  },
];

/* ─── TOPIC GROUPS (unchanged) ─────────────────────────────────────────── */
const TOPIC_GROUPS = [
  {
    label: 'Trauma & the Brain',
    topics: [
      { label: 'Childhood Trauma', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg> },
      { label: 'Complex Trauma', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg> },
      { label: 'Trauma Triggers & Behavioral Responses', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg> },
      { label: 'Understanding Trauma-Driven Behavior', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg> },
    ],
  },
  {
    label: 'Mental Health Literacy',
    topics: [
      { label: 'Anxiety Across the Lifespan', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> },
      { label: 'Recognizing Depression', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg> },
      { label: 'Mental Health Warning Signs', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg> },
      { label: 'When and How to Refer', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M9 12l2 2 4-4" /><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg> },
    ],
  },
  {
    label: 'Personal & Professional Resilience',
    topics: [
      { label: 'Healthy Boundaries in Helping Work', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg> },
      { label: 'Self-Worth & Shame and Healing', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z" /></svg> },
      { label: 'Stress Management', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
      { label: 'Building Long-Term Resilience', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><polyline points="9 12 11 14 15 10" /></svg> },
    ],
  },
];

/* ─── ICONS reused for new sections ─────────────────────────────────────── */
const IconUsers = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
const IconEar = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M8 12a5 5 0 0 1 10 0c0 2-1 3-1 5a3 3 0 0 1-6 0" /><path d="M8 12a7 7 0 1 1 6 6.9" /></svg>;
const IconSettings = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9c.2.6.7 1.1 1.3 1.3h.2a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1Z" /></svg>;
const IconTarget = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></svg>;
const IconGrad = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /><path d="M22 10v6" /></svg>;
const IconGlobe = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9Z" /></svg>;
const IconCheckCircle = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9" /><path d="m8.5 12.5 2.3 2.3L16 10" /></svg>;
const IconHeart = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z" /></svg>;
const IconClock = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>;
const IconCalendar = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>;
const IconUtensils = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 3v18" /><path d="M4 3v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V3" /><path d="M18 3c-1.5 0-2 2-2 4.5S16.5 11 18 11v10" /></svg>;
const IconBuilding = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 21h18" /><path d="M5 21V10M9 21V10M15 21V10M19 21V10" /><path d="M2 10l10-6 10 6" /></svg>;
const IconLaptop = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M2 20h20" /></svg>;

/* ─── HERO STAT / FEATURE ICONS (new) ───────────────────────────────────── */
const IconStar = (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7L2 9.2l7.1-.6z" /></svg>;
const IconShield = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" /></svg>;
const IconList = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}><circle cx="4" cy="6" r="1.4" fill="currentColor" stroke="none" /><line x1="9" y1="6" x2="20" y2="6" /><circle cx="4" cy="12" r="1.4" fill="currentColor" stroke="none" /><line x1="9" y1="12" x2="20" y2="12" /><circle cx="4" cy="18" r="1.4" fill="currentColor" stroke="none" /><line x1="9" y1="18" x2="20" y2="18" /></svg>;
const IconMail = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
const IconPhone = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z" /></svg>;
const IconUserCircle = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>;
const IconBuilding2 = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M2 10l10-6 10 6" /></svg>;
const IconSend = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>;
const IconLock = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="4" y="11" width="16" height="9" rx="1.5" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>;

/* ─── FAQ ACCORDION ─────────────────────────────────────────────────────── */
function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="cbt-faq-item">
      <button className={`cbt-faq-q${open ? ' cbt-faq-q--open' : ''}`} onClick={onToggle} aria-expanded={open}>
        <span>{q}</span>
        <svg className="cbt-faq-chevron" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="cbt-faq-a">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
}

function FaqList() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <div className="cbt-faq-list reveal reveal-from-right">
      {FAQ_ITEMS.map((item, i) => (
        <FaqItem key={i} q={item.q} a={item.a} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
      ))}
    </div>
  );
}

/* ─── HERO REQUEST-TRAINING FORM (new) ──────────────────────────────────── */
function TrainingRequestForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', topic: '', message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      await submitForm({ service: 'training-request', ...form });
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="tmh2-hero-form tmh2-hero-form-success">
        <IconCheckCircle width="40" height="40" />
        <p>Thank you! Your training request has been received. Our team will be in touch with you soon.</p>
      </div>
    );
  }

  return (
    <form className="tmh2-hero-form" onSubmit={handleSubmit}>
      <label className="tmh2-form-label">Full Name</label>
      <div className="tmh2-form-input-wrap">
        <IconUserCircle width="16" height="16" />
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
      </div>

      <label className="tmh2-form-label">Email Address</label>
      <div className="tmh2-form-input-wrap">
        <IconMail width="16" height="16" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.org" required />
      </div>

      <label className="tmh2-form-label">Phone Number</label>
      <div className="tmh2-form-input-wrap">
        <IconPhone width="16" height="16" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="(123) 456-7890" />
      </div>

      <label className="tmh2-form-label">What type of training are you looking for?</label>
      <div className="tmh2-form-input-wrap">
        <select name="topic" value={form.topic} onChange={handleChange}>
          <option value="">Select training topic</option>
          <option value="trauma-mental-health">Trauma &amp; Mental Health Training</option>
          <option value="trauma-informed-care">Trauma-Informed Care Training</option>
          <option value="corporate-business">Corporate Business Training</option>
          <option value="other">Other</option>
        </select>
      </div>

      <label className="tmh2-form-label">Tell us more about your needs</label>
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Briefly describe your team and goals..." rows={3} />

      {error && <p className="tmh2-form-error">{error}</p>}

      <button type="submit" className="tmh2-btn tmh2-btn-accent tmh2-form-submit" disabled={status === 'submitting'}>
        <IconSend width="16" height="16" />
        {status === 'submitting' ? 'Sending…' : 'Request Info Now'}
      </button>
    </form>
  );
}

/* ─── PAGE ─────────────────────────────────────────────────────────────── */
export default function TraumaMentalHealthTrainingPage() {
  const revealRootRef = useRef(null);
  const heroRef = useRef(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const root = revealRootRef.current;
    if (!root) return;
    const els = root.querySelectorAll('.reveal');
    if (!els.length) return;
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(([entry]) => setShowStickyBar(!entry.isIntersecting), { threshold: 0 });
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <main ref={revealRootRef} className="tmh2-page">

      {/* ══ HERO ══ */}
      <section className="tmh2-hero" ref={heroRef}>
        <div className="tmh2-hero-inner">
          <div className="tmh2-hero-copy reveal reveal-from-left">
            <svg className="tmh2-copy-dots" viewBox="0 0 90 70" fill="none" aria-hidden="true">
              {[0, 1, 2, 3].map((row) => [0, 1, 2, 3, 4].map((col) => (
                <circle key={`${row}-${col}`} cx={col * 16 + 8} cy={row * 16 + 8} r="2.4" fill="#00AFF7" opacity="0.3" />
              )))}
            </svg>
            <svg className="tmh2-copy-dots-tl" viewBox="0 0 90 70" fill="none" aria-hidden="true">
              {[0, 1, 2, 3].map((row) => [0, 1, 2, 3, 4].map((col) => (
                <circle key={`${row}-${col}`} cx={col * 16 + 8} cy={row * 16 + 8} r="2.4" fill="#00AFF7" opacity="0.25" />
              )))}
            </svg>
            <div className="tmh2-pill">
              For Nonprofits, Coalitions &amp; Community Organizations
            </div>
            <h1 className="tmh2-hero-h1">Trauma &amp; Mental Health Training for <span className="tmh2-hero-h1-accent">Nonprofits and Community Organizations</span></h1>
            <p className="tmh2-hero-tagline">Real-world training for real-world impact.</p>
            <p className="tmh2-hero-desc">
              <span className="tmh2-desc-short">This training gives community and nonprofit teams a foundational, practical understanding of trauma and mental health, the kind that applies across roles, not just one department.</span>
              <span className="tmh2-desc-full"> A case worker doesn&apos;t know how to respond when a client shuts down mid-conversation. A volunteer takes a teenager&apos;s outburst personally instead of recognizing it as a stress response. A program director realizes half her staff are running on empathy fumes and nobody&apos;s talked about it out loud. This training gives community and nonprofit teams a foundational, practical understanding of trauma and mental health, the kind of training that applies across roles, not just one department.</span>
            </p>

            <div className="tmh2-hero-features">
              <div className="tmh2-hero-feature">
                <span className="tmh2-hero-feature-icon"><IconUsers width="18" height="18" /></span>
                Practical &amp; Evidence-Based
              </div>
              <div className="tmh2-hero-feature">
                <span className="tmh2-hero-feature-icon"><IconList width="18" height="18" /></span>
                Designed for Nonprofits
              </div>
              <div className="tmh2-hero-feature">
                <span className="tmh2-hero-feature-icon"><IconHeart width="18" height="18" /></span>
                Stronger Teams, Stronger Communities
              </div>
            </div>

            <div className="tmh2-hero-ctas">
              <Link href="/contact?training=trauma-mental-health-training" className="tmh2-btn tmh2-btn-primary">
                <IconCalendar width="16" height="16" />
                Request Training Info
              </Link>
              <Link href="/contact?interest=speaking" className="tmh2-btn tmh2-btn-outline">
                <IconGrad width="16" height="16" />
                Ask About Jamie&apos;s Availability
              </Link>
            </div>

          </div>

          <div className="tmh2-hero-form-card reveal reveal-from-right">
            <div className="tmh2-hero-form-body">
              <h3>Request Training Information</h3>
              <span className="tmh2-hero-form-underline" />
              <p className="tmh2-hero-form-sub">Tell us about your organization and we&apos;ll help you find the right training.</p>

              <TrainingRequestForm />

              <p className="tmh2-hero-form-privacy">
                <IconLock width="13" height="13" />
                We respect your privacy. Your information is safe with us.
              </p>
            </div>

            <div className="tmh2-hero-form-photo">
              <Image
                src="/Training/authentic-group-therapy-meeting.jpg"
                alt="Nonprofit and community organization staff in a trauma and mental health training session"
                fill
                sizes="(max-width: 1000px) 100vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: '25% center' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ CREDENTIALS ══ */}
      <section className="tmh2-section tmh2-section--tight">
        <div className="tmh2-wrap">
          <div className="tmh2-cred-bar reveal reveal-from-bottom">
            <div className="tmh2-cred"><span className="tmh2-cred-icon"><IconHeart width="26" height="26" /></span>Licensed Professional Counselor</div>
            <div className="tmh2-cred"><span className="tmh2-cred-icon"><IconBuilding width="26" height="26" /></span>Founder &amp; President, Open Arms Initiative</div>
            <div className="tmh2-cred"><span className="tmh2-cred-icon"><IconUsers width="26" height="26" /></span>Nonprofit Leader &amp; Clinician</div>
            <div className="tmh2-cred"><span className="tmh2-cred-icon"><IconGlobe width="26" height="26" /></span>Oklahoma City &amp; Beyond</div>
          </div>
        </div>
      </section>

      {/* ══ INTRO BANNER ══ */}
      <section className="tmh2-section tmh2-section--tight tmh2-intro-section">
        <div className="tmh2-intro-banner reveal reveal-from-bottom">
          <div className="tmh2-intro-left">
            <div className="tmh2-icon-circle">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <h2>When Staff See the Effects of Trauma Every Day Without Training For It</h2>
          </div>
          <div className="tmh2-intro-right">
            <p>Most community and nonprofit staff didn&apos;t take a job because they wanted to become trauma experts. They took it because they wanted to help people, and then found themselves managing behavior, crisis, and emotional weight they were never actually trained for.</p>
            <span className="tmh2-intro-cta">This training changes that.<span className="tmh2-intro-cta-line"></span></span>
          </div>
        </div>
      </section>

      {/* ══ WHO + HELPS — shared bg wrapper ══ */}
      <div className="tmh2-bg-wrapper">
        <div className="tmh2-helps-bg" aria-hidden="true" />
        <div className="tmh2-helps-overlay" aria-hidden="true" />

        {/* ══ WHO THIS IS FOR ══ */}
        <section className="tmh2-section" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tmh2-wrap">
            <div className="tmh2-who-header reveal reveal-from-bottom">
              <span className="tmh2-who-eyebrow"></span>
              <h2 className="tmh2-section-title">Who This Training Is For</h2>
            </div>
            <div className="tmh2-who-grid reveal-stagger">
              {[
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>, label: 'Nonprofit & Human Service Organizations', sub: 'Program staff, case managers, volunteers, administrative teams, and leadership.' },
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="23" y2="8" /><line x1="21" y1="6" x2="21" y2="10" /></svg>, label: 'Community Coalitions', sub: 'Staff and volunteers working across agencies, initiatives, and neighborhoods.' },
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>, label: 'Professional Associations', sub: 'Staff-development days and member empowerment events.' },
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>, label: 'Community Organizations', sub: 'Local groups making an impact in education, health, youth, and more.' },
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><circle cx="18" cy="7" r="3" /><path d="M21 21v-1.5a3 3 0 0 0-3-3" /></svg>, label: 'Mixed-Role Teams', sub: 'Training that speaks to frontline staff, supervisors, and administrators: everyone.' },
                { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /><path d="M12 8v4M12 16h.01" /></svg>, label: 'Volunteers & Paid Staff', sub: 'Appropriate and relevant for both volunteers and paid team members.' },
              ].map((item, i) => (
                <div key={i} className="tmh2-who-card reveal reveal-from-bottom">
                  <div className="tmh2-who-icon">{item.icon}</div>
                  <h4>{item.label}</h4>
                  <p>{item.sub}</p>
                  <span className="tmh2-who-card-accent" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHAT THIS TRAINING HELPS ══ */}
        <section className="tmh2-section tmh2-section--tight" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tmh2-wrap">
            <h2 className="tmh2-section-title reveal reveal-from-bottom">What This Training Helps Your Organization Do</h2>
            <div className="tmh2-helps-grid reveal-stagger">
              {[
                { icon: <IconTarget width="24" height="24" />, title: "Recognize What's Actually Happening", desc: 'Staff who can identify trauma-driven behavior rather than misreading it as defiance.' },
                { icon: <IconUsers width="24" height="24" />, title: 'A Shared Vocabulary for Your Team', desc: 'A common language for talking about mental health across roles, in the same room.' },
                { icon: <IconHeart width="24" height="24" />, title: 'Staff Who Can Sustain Themselves', desc: 'Tools for managing emotional weight before it becomes burnout or turnover.' },
                { icon: <IconCheckCircle width="24" height="24" />, title: 'Coordinated Coalition-Level Care', desc: 'Everyone operating from the same foundational understanding before coordinating care.' },
              ].map((c, i) => (
                <div key={i} className="tmh2-helps-card reveal reveal-from-bottom">
                  <div className="tmh2-helps-icon">{c.icon}</div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>{/* ══ end shared bg wrapper ══ */}

      {/* ══ FLAGSHIP ══ */}
      <section className="tmh2-section tmh2-section--tight tmh2-flagship-section">
        <div className="tmh2-flagship reveal reveal-from-bottom">
          <div className="tmh2-flagship-icon-col">
            <div className="tmh2-flagship-badge">
              <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
          </div>
          <div className="tmh2-flagship-body">
            <div className="tmh2-flagship-eyebrow">Our Flagship</div>
            <h3>Trauma-Informed Care Training</h3>
            <p>Our most in-depth offering for organizations ready to build a truly trauma-informed foundation. Learn more about our signature program.</p>
          </div>
          <div className="tmh2-flagship-cta">
            <Link href="/trauma-informed-care-training" className="tmh2-btn tmh2-btn-primary">
              Explore Trauma-Informed Care Training
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ FEATURED PROGRAMS ══ */}
      <section className="tmh2-section">
        <div className="tmh2-wrap">
          <h2 className="tmh2-section-title reveal reveal-from-bottom">Featured Training Programs</h2>
          <div className="tmh2-programs-grid reveal-stagger">
            {PROGRAMS.map((p, i) => (
              <div key={i} className="tmh2-program-card reveal reveal-from-bottom">
                <div className="tmh2-prog-photo-wrap">
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={400}
                    height={240}
                    className="tmh2-prog-photo"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                  <div className="tmh2-prog-icon-badge">{p.icon}</div>
                </div>
                <div className="tmh2-prog-body">
                  <h4>{p.name}</h4>
                  <p className="tmh2-program-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MORE TOPICS ══ */}
      <section className="tmh2-section tmh2-section--tint">
        <div className="tmh2-wrap">
          <h2 className="tmh2-section-title reveal reveal-from-bottom">More Topics We Cover</h2>
          <div className="tmh2-topic-groups reveal-stagger">
            {TOPIC_GROUPS.map((group, gi) => (
              <div key={gi} className="tmh2-topic-group reveal reveal-from-bottom">
                <h3>{group.label}</h3>
                <div className="tmh2-topic-chips">
                  {group.topics.map((t, ti) => (
                    <div key={ti} className="tmh2-topic-chip"><span>{t.icon}</span>{t.label}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EVERY SESSION STARTS ══ */}
      <section className="tmh2-section">
        <div className="tmh2-wrap tmh2-session-grid">
          <div className="reveal reveal-from-left">
            <h2 className="tmh2-section-title" style={{ textAlign: 'left' }}>Every Session Starts With Your Organization</h2>
            <p className="tmh2-session-desc">
              Community and nonprofit teams rarely walk in with the exact same mix of roles, experience levels, or prior training, so the first conversation is about who's actually going to be in the room and what they need most, not a fixed curriculum. Reach out and we'll talk through your team, your timing, and what would be most useful to cover.
            </p>
            <Link href="/contact?training=trauma-mental-health-training" className="tmh2-btn tmh2-btn-dark">
              Request Training Info
            </Link>
          </div>
          <div className="tmh2-session-photo reveal reveal-from-right">
            <Image src="/Training/people-working-tech-brand-together (1).webp" alt="Team discussing training needs" width={700} height={500} className="tmh2-session-img" />
          </div>
          <div className="tmh2-session-list reveal reveal-from-bottom">
            <div className="tmh2-session-item"><span><IconEar width="18" height="18" /></span>We listen first.</div>
            <div className="tmh2-session-item"><span><IconSettings width="18" height="18" /></span>We customize content.</div>
            <div className="tmh2-session-item"><span><IconTarget width="18" height="18" /></span>We focus on what your team needs most.</div>
          </div>
        </div>
      </section>

      {/* ══ WHY JAMIE ══ */}
      <section className="tmh2-section tmh2-section--tight">
        <div className="tmh2-wrap">
          <div className="tmh2-jamie reveal reveal-from-bottom">
            <div className="tmh2-jamie-photo">
              <img src="/Jamie/image (18).png" alt="Jamie James, LPC" />
            </div>
            <div className="tmh2-jamie-content">
              <h3>Why Jamie Leads This Training</h3>
              <p>As a Licensed Professional Counselor, Jamie James grounds every session in the clinical reality of how trauma, stress, and mental health actually show up in a room, not generic wellness talk. Her work leading two mission-driven organizations also means she understands the specific pressures nonprofits carry, often with fewer resources than the businesses down the street.</p>
              <div className="tmh2-jamie-tags">
                <div className="tmh2-jamie-tag"><span><IconGrad width="16" height="16" /></span>Clinical Expertise</div>
                <div className="tmh2-jamie-tag"><span><IconGlobe width="16" height="16" /></span>Real-World Experience</div>
                <div className="tmh2-jamie-tag"><span><IconCheckCircle width="16" height="16" /></span>Practical &amp; Engaging</div>
                <div className="tmh2-jamie-tag"><span><IconHeart width="16" height="16" /></span>Respect for the Work You Do</div>
              </div>
              <a href="https://www.youtube.com/watch?v=cdCBtTdeMxk" target="_blank" rel="noopener noreferrer" className="tmh2-jamie-video">
                <img src="https://img.youtube.com/vi/cdCBtTdeMxk/mqdefault.jpg" alt="You Were Never Called to Carry Everyone, Jamie James" />
                <span className="tmh2-jamie-video-play"><svg viewBox="0 0 24 24" width="14" height="14" fill="#0170ED"><polygon points="5,3 19,12 5,21" /></svg></span>
                <div>
                  <p className="tmh2-jamie-video-title">You Were Never Called to Carry Everyone</p>
                  <p className="tmh2-jamie-video-sub">Sustainability in Helping-Profession Work</p>
                </div>
              </a>
              <Link href="/training/jamie-james" className="tmh2-link" style={{ display: 'inline-block', marginTop: '1rem' }}>
                About Jamie James, LPC →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FORMATS ══ */}
      <section className="tmh2-formats-section">
        <div className="tmh2-wrap">
          <div className="tmh2-formats-header reveal reveal-from-bottom">
            <span className="tmh2-formats-eyebrow">How We Deliver It</span>
            <h2 className="tmh2-formats-title">Training &amp; Speaking Formats</h2>
            <i className="tmh2-formats-underline" />
            <p className="tmh2-formats-sub">Every organization&apos;s situation is different, so reach out and we will figure out the right length, setting, and structure together.</p>
          </div>
          <div className="tmh2-formats-grid reveal-stagger">
            <article className="tmh2-format-card reveal reveal-from-bottom"><span className="tmh2-format-icon"><IconClock width="26" height="26" /></span><h5>Half-Day Workshops</h5></article>
            <article className="tmh2-format-card reveal reveal-from-bottom"><span className="tmh2-format-icon"><IconCalendar width="26" height="26" /></span><h5>Full-Day Trainings</h5></article>
            <article className="tmh2-format-card reveal reveal-from-bottom"><span className="tmh2-format-icon"><IconUtensils width="26" height="26" /></span><h5>Lunch &amp; Learns</h5></article>
            <article className="tmh2-format-card reveal reveal-from-bottom"><span className="tmh2-format-icon"><IconBuilding width="26" height="26" /></span><h5>Conferences &amp; Retreats</h5></article>
            <article className="tmh2-format-card reveal reveal-from-bottom"><span className="tmh2-format-icon"><IconCalendar width="26" height="26" /></span><h5>Staff Development Days</h5></article>
            <article className="tmh2-format-card reveal reveal-from-bottom"><span className="tmh2-format-icon"><IconLaptop width="26" height="26" /></span><h5>Virtual or In-Person</h5></article>
          </div>
        </div>
      </section>

      {/* ══ WHY ORGANIZATIONS CHOOSE ══ */}
      <section className="tmh2-section tmh2-why-section">
        <div className="tmh2-wrap">
          <div className="tmh2-why-header reveal reveal-from-bottom">
            <span className="tmh2-who-eyebrow">Why Us</span>
            <h2 className="tmh2-section-title">Why Organizations Choose Open Arms Initiative</h2>
            <p>Training grounded in clinical practice and real nonprofit leadership.</p>
          </div>
          <div className="tmh2-why-bento reveal-stagger">
            {[
              { icon: <IconUsers width="26" height="26" />, title: 'Built for Mixed-Role Audiences', desc: 'Sessions work across roles: case workers, volunteers, and admin staff in the same room.', num: '' },
              { icon: <IconCheckCircle width="26" height="26" />, title: 'Practical Fluency, Not Just Awareness', desc: 'Staff leave with tools they can use in the room, not just a better understanding of why it matters.', num: '' },
              { icon: <IconBuilding width="26" height="26" />, title: 'Nonprofit Leadership Experience', desc: 'Jamie runs two mission-driven organizations and understands the pressures nonprofits face.', num: '', mid: true },
              { icon: <IconHeart width="30" height="30" />, title: 'Led by a Licensed Clinician', desc: 'Clinical training in how trauma and stress actually affect behavior, not wellness messaging dressed up as training.', num: '', feature: true },
            ].map((c, i) => (
              <div key={i} className={`tmh2-why-tile reveal reveal-from-bottom${c.feature ? ' tmh2-why-tile--feature' : ''}${c.mid ? ' tmh2-why-tile--mid' : ''}`}>
                <span className="tmh2-why-tile-num">{c.num}</span>
                <div className="tmh2-why-tile-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="cbt-faq-section">
        <div className="cbt-faq-inner">
          <div className="cbt-faq-header reveal reveal-from-left">
            <p className="jj-section-tag">FAQ</p>
            <h2 className="cbt-prose-h2">Frequently Asked Questions</h2>
            <p className="cbt-faq-header-sub">
              Can&apos;t find your answer here? Reach out directly and we&apos;ll respond to whatever&apos;s on your mind.
            </p>
            <Link href="/contact?training=trauma-mental-health-training" className="jj-btn jj-btn-accent" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              Ask a Question
            </Link>
          </div>
          <FaqList />
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="tmh2-final-cta">
        <div className="tmh2-wrap tmh2-final-cta-inner reveal reveal-from-bottom">
          <div>
            <h2>Tell Us About Your Team</h2>
            <p>Whatever&apos;s happening with your staff or coalition right now, the first step is just telling us about it.</p>
          </div>
          <Link href="/contact?training=trauma-mental-health-training" className="tmh2-btn tmh2-btn-accent">
            Tell Us About Your Team
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>

      {/* ══ MOBILE STICKY CTA ══ */}
      <div className={`tmh2-sticky-bar${showStickyBar ? ' tmh2-sticky-bar--visible' : ''}`} aria-hidden={!showStickyBar}>
        <Link href="/contact?training=trauma-mental-health-training" className="tmh2-btn tmh2-btn-accent tmh2-sticky-btn">
          Request Training Info
        </Link>
      </div>

      <style>{`
        .tmh2-page{
          --green:#00AFF7; --green-dark:#0170ED; --cream:#E6F2FD; --tint:#F0F7FE;
          --ink:#1B2B22; --muted:#5B6B60; --line:#E3EADD; --white:#fff;
          background:var(--white); color:var(--ink);
          font-family:'DM Sans', Arial, sans-serif;
        }
        .tmh2-page h1,.tmh2-page h2,.tmh2-page h3,.tmh2-page h4,.tmh2-page h5{
          font-family:'Plus Jakarta Sans', 'DM Sans', Arial, sans-serif; font-weight:700; color:#072B3A; margin:0;
        }
        .tmh2-wrap{ max-width:1180px; margin:0 auto; padding:0 32px; }
        .tmh2-section{ padding:56px 0; }
        .tmh2-section--tight{ padding:36px 0; }
        .tmh2-section--tint{ background:var(--tint); }
        .tmh2-section-title{ text-align:center; font-size:32px; margin-bottom:34px; }

        .tmh2-btn{
          display:inline-flex; align-items:center; gap:8px;
          font-weight:700; font-size:14.5px; padding:12px 22px; border-radius:999px;
          text-decoration:none; transition:opacity .2s ease, background .2s ease;
          border:none; cursor:pointer;
        }
        .tmh2-btn-primary{ background:linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%); color:#fff; border-radius:999px; }
        .tmh2-btn-primary:hover{ filter:brightness(1.08); }
        .tmh2-btn-outline{ background:transparent; color:var(--green-dark); border:1.5px solid #c9d6c5; border-radius:999px; }
        .tmh2-btn-outline:hover{ background:var(--tint); border-color:var(--green); }
        .tmh2-btn-dark{ background:var(--green-dark); color:var(--cream); }
        .tmh2-btn-dark:hover{ opacity:.9; }
        .tmh2-btn-accent{ background:linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%); color:#fff; }
        .tmh2-link{ color:var(--green-dark); font-weight:700; font-size:14px; border-bottom:1.5px solid var(--green); }

        /* HERO — full width */
        .tmh2-hero{ padding:80px 0;   min-height: calc(100vh - 84px);}
        .tmh2-hero-inner{ display:grid; grid-template-columns:1fr 0.95fr; gap:56px; align-items:center; max-width:100%; width:100%; padding:0 4vw; }
        .tmh2-pill{ display:inline-flex; align-items:center; gap:8px; background:var(--tint); color:var(--green-dark); border:1px solid rgba(1,112,237,.35); font-size:13px; font-weight:700; padding:8px 16px 8px 14px; border-radius:30px; margin-bottom:20px; width:fit-content; align-self:flex-start; }
        .tmh2-hero-h1{ font-size:clamp(2.2rem, 3.6vw, 3.2rem); line-height:1.12; margin-bottom:14px; }
        .tmh2-hero-h1-accent{ color:var(--green); }
        .tmh2-hero-tagline{ font-size:16px; font-weight:700; color:#5B6B60; margin:0 0 10px; }
        .tmh2-hero-desc{ font-size:15px; color:var(--muted); line-height:1.7; max-width:90%; margin-bottom:24px; }
        .tmh2-desc-short{ display:none; }
        .tmh2-desc-full{ display:inline; }
        @media(max-width:640px){
          .tmh2-desc-short{ display:inline; }
          .tmh2-desc-full{ display:none; }
        }
        .tmh2-hero-copy{ position:relative; display:flex; flex-direction:column; justify-content:center; }
        .tmh2-copy-dots{ position:absolute; top:-10px; right:0; width:100px; height:80px; z-index:0; pointer-events:none; }
        .tmh2-copy-dots-tl{ position:absolute; top:-90px; left:-10px; width:100px; height:80px; z-index:0; pointer-events:none; }

        .tmh2-hero-features{ display:flex; flex-wrap:wrap; gap:22px; margin-bottom:26px; }
        .tmh2-hero-feature{ display:flex; align-items:center; gap:8px; font-size:13.5px; font-weight:700; color:#5B6B60; }
        .tmh2-hero-feature-icon{ color:#5B6B60; display:flex; }

        .tmh2-hero-ctas{ display:flex; gap:14px; flex-wrap:wrap; margin-bottom:30px; }

        .tmh2-hero-stats{ display:flex; gap:0; background:var(--tint); border:1px solid rgba(1,112,237,.25); border-radius:16px; padding:20px 24px; flex-wrap:wrap; }
        .tmh2-stat{ flex:1; min-width:150px; display:flex; align-items:center; gap:10px; font-size:13px; color:var(--muted); }
        .tmh2-stat strong{ color:var(--green-dark); font-size:15px; }
        .tmh2-stat-icon{ color:var(--green); display:flex; flex-shrink:0; }
        .tmh2-stat-icon--star{ color:#e0a72a; }

        /* HERO — form card, clean 50/50 split */
        .tmh2-hero-form-card{
          position:relative; background:var(--white); border-radius:24px; overflow:visible;
          box-shadow:0 24px 60px rgba(9,49,41,.14); border:1px solid var(--line);
          display:grid; grid-template-columns:1fr 1fr;
        }
        .tmh2-hero-form-body{
          padding:38px 36px; display:flex; flex-direction:column;
          border-radius:24px 0 0 24px; background:var(--white); overflow:hidden;
          min-height:640px;
        }
        .tmh2-hero-form-body h3{ font-size:23px; line-height:1.25; margin-bottom:10px; }
        .tmh2-hero-form-underline{ display:block; width:44px; height:3px; background:var(--green); border-radius:2px; margin-bottom:14px; }
        .tmh2-hero-form-sub{ font-size:14px; color:var(--muted); line-height:1.6; margin-bottom:22px; }

        .tmh2-hero-form-photo{
          position:relative; width:100%; height:100%;
          border-radius:60px 6px 60px 6px; overflow:hidden;
        }

        .tmh2-hero-form{ display:flex; flex-direction:column; gap:13px; }
        .tmh2-hero-form-success{
          flex:1; align-items:center; justify-content:center; text-align:center;
          gap:16px; color:var(--ink); padding:20px 10px;
        }
        .tmh2-hero-form-success svg{ color:var(--green); }
        .tmh2-hero-form-success p{ font-size:15px; line-height:1.6; color:var(--muted); max-width:320px; }
        .tmh2-form-label{ font-size:13px; font-weight:700; color:#5B6B60; margin-bottom:-7px; }
        .tmh2-form-input-wrap{ display:flex; align-items:center; gap:10px; border:1.5px solid var(--line); border-radius:9px; padding:10px 13px; color:var(--muted); }
        .tmh2-form-input-wrap:focus-within{ border-color:var(--green); }
        .tmh2-form-input-wrap svg{ flex-shrink:0; }
        .tmh2-form-input-wrap input, .tmh2-form-input-wrap select{ border:none; outline:none; font-size:14px; width:100%; background:transparent; color:var(--ink); font-family:inherit; min-width:0; }
        .tmh2-hero-form textarea{ border:1.5px solid var(--line); border-radius:9px; padding:10px 13px; font-size:14px; font-family:inherit; resize:vertical; outline:none; color:var(--ink); }
        .tmh2-hero-form textarea:focus{ border-color:var(--green); }
        .tmh2-form-submit{ justify-content:center; margin-top:4px; padding:13px 22px; width:100%; }
        .tmh2-hero-form-privacy{ display:flex; align-items:center; gap:6px; font-size:12px; color:var(--muted); margin:16px 0 0; }

        @media(max-width:1000px){
          .tmh2-hero{ min-height:auto; padding:80px 0 48px; }
          .tmh2-hero-inner{ grid-template-columns:1fr; }
          .tmh2-hero-form-card{ grid-template-columns:1fr; }
          .tmh2-hero-form-body{ border-radius:24px 24px 0 0; }
          .tmh2-hero-form-photo{ height:220px; order:-1; border-radius:0 24px 0 24px; }
          .tmh2-hero-stats{ flex-direction:column; gap:14px; }
        }

        /* CREDENTIALS */
        .tmh2-cred-bar{ display:flex; flex-wrap:wrap; justify-content:center; gap:0; background:var(--white); border:1px solid var(--line); border-radius:20px; box-shadow:0 6px 24px rgba(9,49,41,.06); overflow:hidden; }
        .tmh2-cred{ flex:1; min-width:220px; display:flex; align-items:center; gap:16px; padding:30px 32px; font-weight:600; font-size:16px; color:#072B3A; border-right:1px solid var(--line); }
        .tmh2-cred:last-child{ border-right:none; }
        .tmh2-cred-icon{ width:54px; height:54px; border-radius:14px; background:var(--tint); color:var(--green); display:flex; align-items:center; justify-content:center; flex-shrink:0; }

        /* INTRO BANNER */
        .tmh2-intro-section{ padding-left:0 !important; padding-right:0 !important; background:var(--tint); }
        .tmh2-intro-banner{ background:transparent; border-radius:0; padding:48px 24px; display:grid; grid-template-columns:1fr 1.6fr; gap:48px; align-items:center; width:100%; max-width:1140px; margin:0 auto; }
        .tmh2-intro-left{ display:flex; flex-direction:column; gap:16px; }
        .tmh2-icon-circle{ width:60px; height:60px; border-radius:50%; border:2px solid var(--green); color:var(--green); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .tmh2-intro-banner h2{ font-size:26px; line-height:1.3; margin:0; }
        .tmh2-intro-right{ display:flex; flex-direction:column; gap:14px; }
        .tmh2-intro-banner p{ font-size:15.5px; color:var(--muted); margin:0; line-height:1.7; }
        .tmh2-intro-cta{ display:inline-flex; flex-direction:column; gap:6px; font-weight:700; font-size:15px; color:var(--green); }
        .tmh2-intro-cta-line{ display:block; width:36px; height:2.5px; background:var(--green); border-radius:2px; }

        /* WHO THIS IS FOR — redesigned as icon cards */
        .tmh2-who-header{ text-align:center; margin-bottom:8px; }
        .tmh2-who-eyebrow{ display:inline-block; font-size:12.5px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--green); background:var(--tint); padding:6px 16px; border-radius:20px; margin-bottom:14px; }
        .tmh2-who-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .tmh2-who-card{
          position:relative; overflow:hidden; text-align:left; padding:28px 26px 26px;
          background:var(--white); border:1px solid var(--line); border-radius:16px;
          box-shadow:0 4px 18px rgba(9,49,41,0.05);
          transition:transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }
        .tmh2-who-card:hover{ transform:translateY(-5px); box-shadow:0 14px 32px rgba(9,49,41,0.12); border-color:rgba(1,112,237,.45); }
        .tmh2-who-card-accent{ position:absolute; left:0; top:0; bottom:0; width:4px; background:var(--green); transform:scaleY(0); transform-origin:top; transition:transform .25s ease; }
        .tmh2-who-card:hover .tmh2-who-card-accent{ transform:scaleY(1); }
        .tmh2-who-icon{
          width:54px; height:54px; border-radius:14px; background:var(--tint); color:var(--green);
          display:flex; align-items:center; justify-content:center; margin-bottom:18px;
          transition:background .22s ease, color .22s ease;
        }
        .tmh2-who-card:hover .tmh2-who-icon{ background:var(--green); color:var(--white); }
        .tmh2-who-card h4{ font-size:16px; font-weight:700; margin-bottom:8px; color:#072B3A; line-height:1.35; }
        .tmh2-who-card p{ font-size:13.5px; color:var(--muted); margin:0; line-height:1.65; }

        /* HELPS SECTION BG */
        .tmh2-bg-wrapper{ position:relative; overflow:hidden; z-index:1; }
        .tmh2-helps-bg{ position:absolute; inset:0; background:url('/Training/bg4.png') center center / cover no-repeat; z-index:0; }
        .tmh2-helps-overlay{ position:absolute; inset:0; background:rgba(255,255,255,0.72); z-index:0; }

        /* HELPS GRID */
        .tmh2-helps-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:18px; margin-top:16px; }
        .tmh2-helps-card{ background:var(--tint); border-radius:14px; padding:26px 20px; text-align:center; }
        .tmh2-helps-icon{ width:48px; height:48px; border-radius:50%; background:var(--white); color:var(--green); display:flex; align-items:center; justify-content:center; margin:0 auto 16px; }
        .tmh2-helps-card h4{ font-size:16px; margin-bottom:8px; }
        .tmh2-helps-card p{ font-size:14px; color:var(--muted); margin:0; }

        /* FLAGSHIP */
        .tmh2-flagship-section{ background:radial-gradient(circle at 88% 12%, rgba(0,175,247,.28) 0%, rgba(0,175,247,0) 45%), linear-gradient(100deg, #072B3A 0%, #0170ED 100%); padding-left:0 !important; padding-right:0 !important; }
        .tmh2-flagship{ max-width:1140px; margin:0 auto; padding:36px 24px; display:grid; grid-template-columns:100px 1fr auto; gap:32px; align-items:center; }
        .tmh2-flagship-icon-col{ display:flex; align-items:center; justify-content:center; }
        .tmh2-flagship-badge{ width:72px; height:72px; border-radius:50%; border:2px solid rgba(255,255,255,0.25); color:var(--white); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .tmh2-flagship-body{ flex:1; }
        .tmh2-flagship-eyebrow{ color:var(--green); font-weight:700; font-size:12px; letter-spacing:.1em; text-transform:uppercase; margin-bottom:6px; }
        .tmh2-flagship h3{ color:var(--white); font-size:22px; margin-bottom:8px; }
        .tmh2-flagship p{ color:#cfe8fc; font-size:14.5px; line-height:1.6; margin:0; }
        .tmh2-flagship-cta{ flex-shrink:0; }

        /* PROGRAMS */
        .tmh2-programs-grid{ display:grid; grid-template-columns:repeat(5,1fr); gap:16px; margin-top:16px; }
        .tmh2-program-card{ border-radius:14px; overflow:hidden; background:#fff; box-shadow:0 2px 12px rgba(0,0,0,0.07); display:flex; flex-direction:column; }
        .tmh2-prog-photo-wrap{ position:relative; width:100%; aspect-ratio:4/3; overflow:hidden; border-radius:14px 14px 0 0; }
        .tmh2-prog-photo{ display:block; }
        .tmh2-prog-icon-badge{ position:absolute; bottom:10px; left:10px; width:36px; height:36px; border-radius:50%; background:rgba(255,255,255,0.92); color:var(--green); display:flex; align-items:center; justify-content:center; box-shadow:0 1px 6px rgba(0,0,0,0.15); }
        .tmh2-prog-body{ padding:16px 16px 20px; }
        .tmh2-program-card h4{ font-size:15px; font-weight:700; margin-bottom:6px; line-height:1.3; color:#072B3A; }
        .tmh2-program-desc{ font-size:13.5px; color:var(--muted); line-height:1.55; }

        /* TOPICS */
        .tmh2-topic-groups{ display:flex; flex-direction:column; gap:26px; }
        .tmh2-topic-group h3{ font-size:13.5px; text-transform:uppercase; letter-spacing:.08em; color:var(--green-dark); opacity:.6; margin-bottom:12px; }
        .tmh2-topic-chips{ display:flex; flex-wrap:wrap; gap:10px; }
        .tmh2-topic-chip{ display:inline-flex; align-items:center; gap:8px; background:var(--white); border:1px solid var(--line); border-radius:30px; padding:9px 16px 9px 12px; font-size:14.5px; color:var(--green-dark); }
        .tmh2-topic-chip span{ color:var(--green); display:flex; }

        /* SESSION */
        .tmh2-session-grid{ display:grid; grid-template-columns:0.9fr 1fr 0.8fr; gap:36px; align-items:center; }
        .tmh2-session-desc{ font-size:15px; color:var(--muted); line-height:1.7; margin-bottom:20px; }
        .tmh2-session-photo{ border-radius:18px; overflow:hidden; height:260px; }
        .tmh2-session-img{ width:100%; height:100%; object-fit:cover; }
        .tmh2-session-list{ display:flex; flex-direction:column; gap:18px; }
        .tmh2-session-item{ display:flex; align-items:center; gap:12px; font-weight:600; color:var(--green-dark); font-size:15px; }
        .tmh2-session-item span{ width:34px; height:34px; border-radius:50%; background:var(--tint); color:var(--green); display:flex; align-items:center; justify-content:center; flex-shrink:0; }

        /* JAMIE */
        .tmh2-jamie{ background:var(--green-dark); border-radius:20px; overflow:hidden; display:grid; grid-template-columns:260px 1fr; }
        .tmh2-jamie-photo{ min-height:100%; }
        .tmh2-jamie-photo img{ width:100%; height:100%; object-fit:cover; display:block; }
        .tmh2-jamie-content{ padding:34px 40px; color:var(--cream); }
        .tmh2-jamie-content h3{ color:var(--white); font-size:24px; margin-bottom:12px; }
        .tmh2-jamie-content > p{ color:#cfe8fc; font-size:14.5px; line-height:1.7; margin-bottom:18px; max-width:600px; }
        .tmh2-jamie-tags{ display:flex; flex-wrap:wrap; gap:22px; margin-bottom:20px; }
        .tmh2-jamie-tag{ display:flex; align-items:center; gap:8px; font-size:14px; font-weight:600; color:var(--white); }
        .tmh2-jamie-tag span{ width:28px; height:28px; border-radius:50%; background:rgba(255,255,255,.12); display:flex; align-items:center; justify-content:center; }
        .tmh2-jamie-video{ display:flex; align-items:center; gap:16px; background:rgba(255,255,255,.06); border-radius:12px; padding:12px; max-width:420px; text-decoration:none; position:relative; }
        .tmh2-jamie-video img{ width:120px; height:80px; border-radius:8px; object-fit:cover; flex-shrink:0; }
        .tmh2-jamie-video-play{ position:absolute; left:60px; top:50%; transform:translate(-50%,-50%); width:32px; height:32px; border-radius:50%; background:var(--green); display:flex; align-items:center; justify-content:center; }
        .tmh2-jamie-video-title{ color:var(--white); font-size:14px; font-weight:700; margin:0 0 4px; }
        .tmh2-jamie-video-sub{ color:#9fc9f5; font-size:12.5px; margin:0; }

        /* FORMATS — light card grid */
        .tmh2-formats-section{ background:var(--cream); padding:70px 0; }
        .tmh2-formats-header{ text-align:center; max-width:620px; margin:0 auto 40px; }
        .tmh2-formats-eyebrow{ display:inline-block; font-size:12.5px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--green-dark); background:var(--tint); border:1px solid rgba(1,112,237,.3); padding:6px 16px; border-radius:20px; margin-bottom:16px; }
        .tmh2-formats-title{ color:var(--ink); font-size:clamp(1.9rem,3vw,2.6rem); margin:0 0 18px; }
        .tmh2-formats-underline{ display:block; width:56px; border-top:3px solid var(--green); border-radius:2px; margin:0 auto 24px; }
        .tmh2-formats-sub{ color:var(--muted); font-size:15px; line-height:1.65; margin:0; }
        .tmh2-formats-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
        .tmh2-format-card{ position:relative; text-align:center; padding:26px 20px; background:var(--tint); border-radius:16px; box-shadow:0 10px 26px rgba(7,43,58,.08); transition:transform .25s ease, box-shadow .25s ease; }
        .tmh2-format-card:hover{ transform:translateY(-4px); box-shadow:0 16px 34px rgba(7,43,58,.14); }
        .tmh2-format-icon{ display:grid; place-items:center; width:60px; height:60px; margin:0 auto 16px; border-radius:50%; background:var(--white); color:var(--green-dark); }
        .tmh2-format-card h5{ color:var(--ink); font-size:15px; font-weight:700; line-height:1.4; margin:0; }

        /* WHY ORGANIZATIONS — bento with numbered feature tile */
        .tmh2-why-section{ background:var(--white); }
        .tmh2-why-header{ text-align:center; max-width:640px; margin:0 auto 40px; }
        .tmh2-why-header p{ color:var(--muted); font-size:15px; margin-top:8px; }
        .tmh2-why-bento{ display:grid; grid-template-columns:1fr 1fr 1.3fr; grid-template-rows:1fr 1fr; gap:20px; }
        .tmh2-why-tile{
          position:relative; overflow:hidden; border:1px solid var(--line); border-radius:18px;
          padding:30px 26px; background:var(--white); display:flex; flex-direction:column; justify-content:center;
          transition:transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }
        .tmh2-why-tile:hover{ transform:translateY(-4px); box-shadow:0 16px 34px rgba(9,49,41,0.1); border-color:rgba(1,112,237,.4); }
        .tmh2-why-tile-num{ position:absolute; top:14px; right:20px; font-size:42px; font-weight:800; color:var(--tint); line-height:1; user-select:none; }
        .tmh2-why-tile-icon{ width:56px; height:56px; border-radius:14px; background:var(--tint); color:var(--green); display:flex; align-items:center; justify-content:center; margin-bottom:18px; position:relative; z-index:1; }
        .tmh2-why-tile h4{ font-size:16px; margin-bottom:8px; position:relative; z-index:1; }
        .tmh2-why-tile p{ font-size:14px; color:var(--muted); line-height:1.6; margin:0; position:relative; z-index:1; }
        .tmh2-why-tile--mid{
          grid-column:2; grid-row:1 / span 2; display:flex; flex-direction:column; justify-content:center;
        }
        .tmh2-why-tile--feature{
          grid-column:3; grid-row:1 / span 2; background:var(--green-dark); border-color:var(--green-dark);
          display:flex; flex-direction:column; justify-content:center; align-self:stretch;
        }
        .tmh2-why-tile--feature .tmh2-why-tile-num{ color:rgba(255,255,255,0.08); font-size:64px; }
        .tmh2-why-tile--feature .tmh2-why-tile-icon{ background:rgba(0,175,247,0.15); color:var(--green); width:64px; height:64px; }
        .tmh2-why-tile--feature h4{ color:var(--white); font-size:20px; }
        .tmh2-why-tile--feature p{ color:#cfe8fc; font-size:14.5px; }
        .tmh2-why-tile--feature:hover{ transform:translateY(-4px); box-shadow:0 20px 40px rgba(9,49,41,0.3); border-color:var(--green); }

/* FINAL CTA */
        .tmh2-final-cta{ background:radial-gradient(circle at 88% 12%, rgba(0,175,247,.28) 0%, rgba(0,175,247,0) 45%), linear-gradient(100deg, #072B3A 0%, #0170ED 100%); padding:56px 0; }
        .tmh2-final-cta-inner{ display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap; }
        .tmh2-final-cta-inner h2{ color:var(--white); font-size:28px; margin-bottom:8px; }
        .tmh2-final-cta-inner p{ color:#9fc9f5; font-size:15px; margin:0; max-width:460px; }

        /* STICKY */
        .tmh2-sticky-bar{ display:none; position:fixed; bottom:0; left:0; right:0; z-index:200; padding:.85rem 1.25rem calc(.85rem + env(safe-area-inset-bottom,0px)); background:rgba(7,43,58,.97); backdrop-filter:blur(8px); transform:translateY(100%); transition:transform .3s cubic-bezier(.22,1,.36,1); }
        .tmh2-sticky-bar--visible{ transform:translateY(0); }
        .tmh2-sticky-btn{ width:100%; justify-content:center; }

        /* RESPONSIVE — tablet */
        @media(max-width:1000px){
          .tmh2-who-grid{ grid-template-columns:repeat(3,1fr); }
          .tmh2-helps-grid{ grid-template-columns:repeat(2,1fr); }
          .tmh2-programs-grid{ grid-template-columns:repeat(3,1fr); }
          .tmh2-intro-banner{ grid-template-columns:1fr; }
          .tmh2-session-grid{ grid-template-columns:1fr; }
          .tmh2-jamie{ grid-template-columns:1fr; }
          .tmh2-jamie-photo{ height:240px; }
          .tmh2-cred{ min-width:45%; border-right:none; border-bottom:1px solid var(--line); }
          .tmh2-formats-grid{ grid-template-columns:repeat(3,1fr); }
          .tmh2-why-bento{ grid-template-columns:1fr 1fr; grid-template-rows:auto; }
          .tmh2-why-tile--mid{ grid-column:auto; grid-row:auto; }
          .tmh2-why-tile--feature{ grid-row:auto; grid-column:span 2; }
          .tmh2-final-cta-inner{ flex-direction:column; text-align:center; }
        }
        /* RESPONSIVE — mobile */
        @media(max-width:1000px){
          .tmh2-intro-banner{ grid-template-columns:1fr; gap:24px; }
          .tmh2-session-grid{ grid-template-columns:1fr; }
          .tmh2-session-photo{ height:220px; }
          .tmh2-jamie{ grid-template-columns:1fr; }
          .tmh2-jamie-photo{ height:260px; }
          .tmh2-who-grid{ grid-template-columns:repeat(2,1fr); }
          .tmh2-helps-grid{ grid-template-columns:repeat(2,1fr); }
          .tmh2-programs-grid{ grid-template-columns:repeat(3,1fr); }
          .tmh2-formats-grid{ grid-template-columns:repeat(3,1fr); }
          .tmh2-why-bento{ grid-template-columns:1fr 1fr; grid-template-rows:auto; }
          .tmh2-why-tile--mid{ grid-column:auto; grid-row:auto; }
          .tmh2-why-tile--feature{ grid-row:auto; grid-column:span 2; }
          .tmh2-final-cta-inner{ flex-direction:column; text-align:center; }
          .tmh2-cred{ min-width:45%; border-right:none; border-bottom:1px solid var(--line); }
          .tmh2-wrap{ padding:0 20px; }
        }

        @media(max-width:640px){
          .tmh2-section{ padding:40px 0; }
          .tmh2-wrap{ padding:0 16px; }
          .tmh2-hero{ padding:80px 0 40px; min-height:auto; }
          .tmh2-hero-inner{ gap:32px; padding:0 16px; }
          .tmh2-hero-h1{ font-size:clamp(1.8rem, 7vw, 2.4rem); }
          .tmh2-copy-dots{ display:none; }
          .tmh2-hero-ctas{ flex-direction:column; }
          .tmh2-hero-ctas .tmh2-btn{ width:100%; justify-content:center; }
          .tmh2-hero-features{ gap:14px; flex-direction:column; }
          .tmh2-hero-form-card{ grid-template-columns:1fr; }
          .tmh2-hero-form-body{ padding:24px 20px; }
          .tmh2-hero-form-photo{ height:200px; order:-1; }
          .tmh2-who-grid{ grid-template-columns:1fr; }
          .tmh2-helps-grid{ grid-template-columns:1fr; }
          .tmh2-programs-grid{ grid-template-columns:1fr; }
          .tmh2-formats-grid{ grid-template-columns:repeat(2,1fr); }
          .tmh2-flagship{ grid-template-columns:1fr; text-align:center; }
          .tmh2-flagship-icon-col{ justify-content:center; }
          .tmh2-flagship-cta{ justify-self:center; }
          .tmh2-why-bento{ grid-template-columns:1fr; }
          .tmh2-why-tile--mid{ grid-column:auto; grid-row:auto; }
          .tmh2-why-tile--feature{ grid-column:auto; }
          .tmh2-intro-banner{ padding:36px 16px; gap:24px; grid-template-columns:1fr; }
          .tmh2-section-title{ font-size:24px; }
          .tmh2-cred{ min-width:100%; border-right:none; border-bottom:1px solid var(--line); }
          .tmh2-final-cta-inner{ flex-direction:column; text-align:center; align-items:center; }
          .tmh2-session-grid{ grid-template-columns:1fr; }
          .tmh2-session-photo{ height:200px; }
          .tmh2-jamie{ grid-template-columns:1fr; }
          .tmh2-jamie-photo{ height:220px; }
          .tmh2-jamie-content{ padding:24px 20px; }
          .tmh2-jamie-video{ flex-direction:column; max-width:100%; }
          .tmh2-jamie-video img{ width:100%; height:160px; }
          .tmh2-jamie-video-play{ left:50%; top:80px; }
          .tmh2-topic-chips{ gap:8px; }
          .tmh2-sticky-bar{ display:block; }
        }
        @media(min-width:641px){
          .tmh2-sticky-bar{ display:none !important; }
        }
      `}</style>
    </main>
  );
}