'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { submitForm } from '@/lib/api';

/* ─── ICONS ───────────────────────────────────────────────────────────── */
const IconUserCircle = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>;
const IconMail = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
const IconPhone = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z" /></svg>;
const IconSend = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>;
const IconLock = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="4" y="11" width="16" height="9" rx="1.5" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>;
const IconCheckCircle = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9" /><path d="m8.5 12.5 2.3 2.3L16 10" /></svg>;
const IconHeart = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z" /></svg>;
const IconUsers = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
const IconShield = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" /></svg>;
const IconGlobe = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9Z" /></svg>;
const IconBook = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>;
const IconAlert = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;
const IconGrad = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /><path d="M22 10v6" /></svg>;
const IconTarget = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></svg>;

/* ─── FAQ DATA ────────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: 'Is this training only for teachers, or can other school staff attend?',
    a: 'It works well for anyone on campus, classroom teachers, counselors, administrators, front-office staff, paraprofessionals, coaches, and bus drivers. Trauma shows up across every part of a school day, so sessions are built to be useful across roles.',
  },
  {
    q: 'Does this training tell us how to discipline students?',
    a: 'No, this isn\'t a discipline policy. It\'s a lens for understanding what\'s actually driving a behavior, so your existing discipline and classroom management approaches can be applied more effectively and with more compassion.',
  },
  {
    q: 'Can this fit into an existing professional development day?',
    a: 'Yes, this is one of the most common ways schools bring us in. We regularly deliver sessions during in-service days, staff development days, and early-release afternoons.',
  },
  {
    q: 'Do you cover educator burnout and self-care as well as student behavior?',
    a: 'Yes. Supporting students well starts with staff who aren\'t running on empty. Every session includes practical strategies for managing the emotional weight of the work, not just classroom-facing content.',
  },
];

/* ─── FAQ ACCORDION (reuses global .cbt-faq-* classes) ──────────────────── */
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

/* ─── HERO REQUEST FORM ───────────────────────────────────────────────── */
function SchoolTrainingRequestForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      await submitForm({ service: 'school-staff-training', ...form });
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="sse-hero-form sse-hero-form-success">
        <IconCheckCircle width="40" height="40" />
        <p>Thank you! Your training request has been received. Our team will be in touch with you soon.</p>
      </div>
    );
  }

  return (
    <form className="sse-hero-form" onSubmit={handleSubmit}>
      <label className="sse-form-label">Full Name</label>
      <div className="sse-form-input-wrap">
        <IconUserCircle width="16" height="16" />
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
      </div>

      <label className="sse-form-label">Email Address</label>
      <div className="sse-form-input-wrap">
        <IconMail width="16" height="16" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.org" required />
      </div>

      <label className="sse-form-label">Phone Number</label>
      <div className="sse-form-input-wrap">
        <IconPhone width="16" height="16" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="(123) 456-7890" />
      </div>

      <label className="sse-form-label">What type of training or support are you looking for?</label>
      <div className="sse-form-input-wrap">
        <select name="topic" value={form.topic} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="classroom-trauma-strategies">Classroom Trauma-Informed Strategies</option>
          <option value="staff-development-day">Staff Development Day / In-Service</option>
          <option value="educator-self-care">Educator Self-Care &amp; Burnout Prevention</option>
          <option value="counselor-admin-training">Counselor &amp; Administrator Training</option>
          <option value="other">Other</option>
        </select>
      </div>

      <label className="sse-form-label">Tell us more about your school or district</label>
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Briefly describe your staff and goals..." rows={3} />

      {error && <p className="sse-form-error">{error}</p>}

      <button type="submit" className="sse-btn sse-btn-accent sse-form-submit" disabled={status === 'submitting'}>
        <IconSend width="16" height="16" />
        {status === 'submitting' ? 'Sending…' : 'Request Info Now'}
      </button>
    </form>
  );
}

/* ─── PAGE ────────────────────────────────────────────────────────────── */
export default function SchoolStaffEducatorTrainingPage() {
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
    <main ref={revealRootRef} className="sse-page">

      {/* ══ HERO ══ */}
      <section className="sse-hero" ref={heroRef}>
        <div className="sse-hero-inner">
          <div className="sse-hero-copy reveal reveal-from-left">
            <div className="sse-pill">For Schools, Districts &amp; Educators</div>
            <h1 className="sse-hero-h1">School Staff &amp; Educator Training for <span className="sse-hero-h1-accent">Trauma-Informed Classrooms</span></h1>
            <p className="sse-hero-tagline">Practical tools for the classroom, not just the textbook.</p>
            <p className="sse-hero-desc">
              A student shuts down every time a worksheet gets handed out and no one on staff knows why. A teacher misreads a stress response as defiance and a small moment turns into a bigger one. A counselor is stretched across three campuses and can&apos;t reach every student who needs her. Educators are often the first adults to see the effects of trauma in a child&apos;s life, and they rarely receive real training for it. Open Arms Initiative equips teachers, counselors, and school administration with practical, trauma-informed classroom strategies that turn schools into safer, steadier places to learn.
            </p>

            <div className="sse-hero-features">
              <div className="sse-hero-feature"><span className="sse-hero-feature-icon"><IconGrad width="18" height="18" /></span>Built for K-12 Classrooms</div>
              <div className="sse-hero-feature"><span className="sse-hero-feature-icon"><IconUsers width="18" height="18" /></span>For Teachers, Counselors &amp; Admin</div>
              <div className="sse-hero-feature"><span className="sse-hero-feature-icon"><IconHeart width="18" height="18" /></span>Supports Staff Well-Being Too</div>
            </div>

            <div className="sse-hero-ctas">
              <Link href="/contact?training=school-staff-educator-training" className="sse-btn sse-btn-primary">
                <IconMail width="16" height="16" />
                Request Training Info
              </Link>
              <Link href="/training/jamie-james" className="sse-btn sse-btn-outline">
                <IconGrad width="16" height="16" />
                About Jamie James, LPC
              </Link>
            </div>
          </div>

          <div className="sse-hero-form-card reveal reveal-from-right">
            <div className="sse-hero-form-body">
              <h3>Request Training Information</h3>
              <span className="sse-hero-form-underline" />
              <p className="sse-hero-form-sub">Tell us about your school or district and we&apos;ll help you find the right training.</p>

              <SchoolTrainingRequestForm />

              <p className="sse-hero-form-privacy">
                <IconLock width="13" height="13" />
                We respect your privacy. Your information is safe with us.
              </p>
            </div>
            <div className="sse-hero-form-photo">
              <img src="/images/first.png" alt="Teachers and school staff in a trauma-informed classroom training session" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRUST STRIP ══ */}
      <section className="sse-trust-section">
        <div className="sse-wrap sse-trust-row reveal reveal-from-bottom">
          <div className="sse-trust-item"><span><IconGrad width="24" height="24" /></span><p>Built for K-12 Schools</p></div>
          <div className="sse-trust-item"><span><IconShield width="24" height="24" /></span><p>Licensed Clinical Expertise</p></div>
          <div className="sse-trust-item"><span><IconUsers width="24" height="24" /></span><p>For Every Role on Campus</p></div>
          <div className="sse-trust-item"><span><IconGlobe width="24" height="24" /></span><p>Oklahoma City &amp; Beyond</p></div>
        </div>
      </section>

      {/* ══ OVERVIEW ══ */}
      <section className="sse-section">
        <div className="sse-wrap sse-overview-grid">
          <div className="reveal reveal-from-left">
            <p className="jj-section-tag">Overview</p>
            <h2 className="sse-section-title" style={{ textAlign: 'left' }}>When Classrooms Carry More Than Curriculum</h2>
            <p className="sse-overview-p">Teachers spend more waking hours with many students than anyone outside their own home. That makes classrooms one of the first places the effects of trauma become visible, in shutdowns, outbursts, disengagement, or behavior that looks like defiance but is really a stress response. Most educators were trained to teach a subject, not to read trauma, and they&apos;re left to figure it out in real time, alone, in front of thirty kids.</p>
            <p className="sse-overview-p">We provide practical tools to turn classrooms into safe learning havens. This training helps teachers, counselors, and administrators recognize the signals, de-escalate difficult moments without damaging trust, and build classroom environments where students who&apos;ve experienced trauma can actually learn.</p>
            <p className="sse-overview-p">Because supporting students well starts with supporting the adults doing the work, every session also addresses educator stress and self-care, so staff have the capacity to keep showing up for their students day after day.</p>
          </div>
          <div className="sse-overview-list reveal reveal-from-right">
            <div className="sse-overview-item"><span><IconAlert width="20" height="20" /></span>Recognizing childhood trauma signals in classroom behavior</div>
            <div className="sse-overview-item"><span><IconShield width="20" height="20" /></span>Classroom de-escalation methods that preserve trust</div>
            <div className="sse-overview-item"><span><IconHeart width="20" height="20" /></span>Educator self-care and stress management strategies</div>
            <div className="sse-overview-item"><span><IconUsers width="20" height="20" /></span>Fostering supportive, predictable learning environments</div>
          </div>
        </div>
      </section>

      {/* ══ WHAT'S INCLUDED — benefits as cards on dark gradient ══ */}
      <section className="sse-benefits-section">
        <div className="sse-wrap">
          <div className="sse-benefits-header reveal reveal-from-bottom">
            <p className="jj-section-tag" style={{ color: '#9fc9f5' }}>What&apos;s Included</p>
            <h2 className="sse-section-title" style={{ color: '#fff' }}>What This Training Gives Your School</h2>
            <p className="sse-benefits-sub">Built around the real pace and pressure of a school day, not a generic staff-meeting slideshow.</p>
          </div>
          <div className="why-choose-grid reveal-stagger">
            {[
              { title: 'Recognizing Childhood Trauma Signals', desc: 'Staff who can identify the behavioral and emotional indicators of trauma rather than misreading them as defiance or disinterest.' },
              { title: 'Classroom De-Escalation Methods', desc: 'Practical strategies for calming difficult moments in the moment, without damaging the relationship or losing the rest of the class.' },
              { title: 'Educator Self-Care & Stress Management', desc: 'Tools for managing the emotional weight of the work so burnout and turnover don\'t take your best staff away from students.' },
              { title: 'Fostering Supportive Learning Environments', desc: 'A shared, campus-wide approach to building classrooms and school cultures where every student feels safe enough to learn.' },
            ].map((b, i) => (
              <article className="why-choose-card reveal reveal-from-bottom" key={i}>
                <div className="icon-box"><IconCheckCircle width="20" height="20" /></div>
                <div className="why-choose-card-copy">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHO THIS IS FOR ══ */}
      <section className="sse-section">
        <div className="sse-wrap">
          <h2 className="sse-section-title reveal reveal-from-bottom">Who This Training Is For</h2>
          <div className="sse-who-grid reveal-stagger">
            {[
              { icon: <IconGrad width="26" height="26" />, label: 'Classroom Teachers', sub: 'General and special education teachers navigating behavior every single day.' },
              { icon: <IconHeart width="26" height="26" />, label: 'School Counselors & Social Workers', sub: 'Staff already doing the emotional heavy lifting across an entire campus.' },
              { icon: <IconUserCircle width="26" height="26" />, label: 'Principals & Administrators', sub: 'Leaders shaping school-wide discipline policy and staff culture.' },
              { icon: <IconUsers width="26" height="26" />, label: 'Paraprofessionals & Aides', sub: 'The staff working most closely with students who need extra support.' },
              { icon: <IconShield width="26" height="26" />, label: 'Front-Office & Support Staff', sub: 'Often the first adult a struggling student or parent encounters.' },
              { icon: <IconBook width="26" height="26" />, label: 'Districts & PD Coordinators', sub: 'Training that scales across multiple campuses and in-service days.' },
            ].map((item, i) => (
              <div key={i} className="sse-who-card reveal reveal-from-bottom">
                <div className="sse-who-icon">{item.icon}</div>
                <h4>{item.label}</h4>
                <p>{item.sub}</p>
                <span className="sse-who-card-accent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SESSION APPROACH ══ */}
      <section className="sse-section sse-section--tint">
        <div className="sse-wrap sse-session-grid">
          <div className="reveal reveal-from-left">
            <h2 className="sse-section-title" style={{ textAlign: 'left' }}>Every Session Starts With Your Campus</h2>
            <p className="sse-session-desc">
              An elementary school managing a student in acute crisis needs something different than a high school building a proactive, campus-wide approach to student wellness. The first conversation is about who&apos;s in your building, what you&apos;re already seeing in classrooms, and what your staff needs most, not a one-size-fits-all in-service slideshow.
            </p>
            <Link href="/contact?training=school-staff-educator-training" className="sse-btn sse-btn-dark">
              Request Training Info
            </Link>
          </div>
          <div className="sse-session-list reveal reveal-from-right">
            <div className="sse-session-item"><span><IconTarget width="18" height="18" /></span>We listen to your school&apos;s specific needs first.</div>
            <div className="sse-session-item"><span><IconGrad width="18" height="18" /></span>We fit into your PD calendar, not the other way around.</div>
            <div className="sse-session-item"><span><IconUsers width="18" height="18" /></span>We build sessions around every role on your campus.</div>
          </div>
        </div>
      </section>

      {/* ══ FAQ (reuses global cbt-faq-* classes) ══ */}
      <section className="cbt-faq-section">
        <div className="cbt-faq-inner">
          <div className="cbt-faq-header reveal reveal-from-left">
            <p className="jj-section-tag">FAQ</p>
            <h2 className="cbt-prose-h2">Frequently Asked Questions</h2>
            <p className="cbt-faq-header-sub">
              Can&apos;t find your answer here? Reach out directly and we&apos;ll respond to whatever&apos;s on your mind.
            </p>
            <Link href="/contact?training=school-staff-educator-training" className="jj-btn jj-btn-accent" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              Ask a Question
            </Link>
          </div>
          <FaqList />
        </div>
      </section>

      {/* ══ FINAL CTA (reuses global .final-cta-section) ══ */}
      <section className="final-cta-section">
        <div className="final-cta-inner">
          <div>
            <h2>Tell Us About Your School</h2>
            <p>Whatever your staff or students are navigating right now, the first step is just telling us about it.</p>
          </div>
          <div className="final-cta-buttons">
            <Link href="/contact?training=school-staff-educator-training" className="final-cta-btn primary">Request Training Info</Link>
          </div>
        </div>
      </section>

      {/* ══ MOBILE STICKY CTA ══ */}
      <div className={`sse-sticky-bar${showStickyBar ? ' sse-sticky-bar--visible' : ''}`} aria-hidden={!showStickyBar}>
        <Link href="/contact?training=school-staff-educator-training" className="sse-btn sse-btn-accent sse-sticky-btn">
          Request Training Info
        </Link>
      </div>
    </main>
  );
}
