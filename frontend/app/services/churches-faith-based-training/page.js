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
    q: 'Does this training conflict with our church’s theology or beliefs?',
    a: 'No. This training complements your ministry’s spiritual care rather than replacing it. We focus on the clinical realities of trauma and mental health, how to recognize warning signs and respond with wisdom, while leaving matters of doctrine and pastoral counsel entirely to your church’s own leadership.',
  },
  {
    q: 'Who should attend, just pastors or the whole team?',
    a: 'This works well for pastors, associate pastors, and staff, but it is just as valuable for small group leaders, deacons, greeters, children’s and youth ministry volunteers, and anyone in a caregiving or first-contact role. Many churches bring their whole volunteer team.',
  },
  {
    q: 'Can this be built around a specific concern our church is facing?',
    a: 'Yes. Every session starts with a conversation about what your congregation and leadership team are actually seeing, whether that’s grief after a loss in the church family, a member in crisis, or a broader desire to become a safer, more informed community.',
  },
  {
    q: 'Is this appropriate for a small church with an all-volunteer staff?',
    a: 'Yes, this training is built to be useful regardless of church size or budget. Many of the churches we work with rely entirely on volunteer leadership, and the content is designed to be practical for exactly that setting.',
  },
  {
    q: 'How long is a typical session?',
    a: 'It depends on your church’s schedule and needs. We’ve delivered this as a single Sunday morning session, a weeknight training, a half-day retreat for leadership teams, and a recurring series. Reach out and we’ll find a format that fits.',
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
function ChurchTrainingRequestForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      await submitForm({ service: 'churches-faith-training', ...form });
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="chf-hero-form chf-hero-form-success">
        <IconCheckCircle width="40" height="40" />
        <p>Thank you! Your training request has been received. Our team will be in touch with you soon.</p>
      </div>
    );
  }

  return (
    <form className="chf-hero-form" onSubmit={handleSubmit}>
      <label className="chf-form-label">Full Name</label>
      <div className="chf-form-input-wrap">
        <IconUserCircle width="16" height="16" />
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
      </div>

      <label className="chf-form-label">Email Address</label>
      <div className="chf-form-input-wrap">
        <IconMail width="16" height="16" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.org" required />
      </div>

      <label className="chf-form-label">Phone Number</label>
      <div className="chf-form-input-wrap">
        <IconPhone width="16" height="16" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="(123) 456-7890" />
      </div>

      <label className="chf-form-label">What type of training or support are you looking for?</label>
      <div className="chf-form-input-wrap">
        <select name="topic" value={form.topic} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="pastoral-staff-training">Pastoral &amp; Staff Training</option>
          <option value="volunteer-lay-leader-training">Volunteer &amp; Lay Leader Training</option>
          <option value="crisis-response">Crisis Response &amp; Safety Planning</option>
          <option value="congregation-workshop">Congregation-Wide Workshop</option>
          <option value="other">Other</option>
        </select>
      </div>

      <label className="chf-form-label">Tell us more about your church or ministry</label>
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Briefly describe your church and what you're hoping to cover..." rows={3} />

      {error && <p className="chf-form-error">{error}</p>}

      <button type="submit" className="chf-btn chf-btn-accent chf-form-submit" disabled={status === 'submitting'}>
        <IconSend width="16" height="16" />
        {status === 'submitting' ? 'Sending…' : 'Request Info Now'}
      </button>
    </form>
  );
}

/* ─── PAGE ────────────────────────────────────────────────────────────── */
export default function ChurchesFaithBasedTrainingPage() {
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
    <main ref={revealRootRef} className="chf-page">

      {/* ══ HERO ══ */}
      <section className="chf-hero" ref={heroRef}>
        <div className="chf-hero-inner">
          <div className="chf-hero-copy reveal reveal-from-left">
            <div className="chf-pill">For Churches, Ministries &amp; Faith Communities</div>
            <h1 className="chf-hero-h1">Churches &amp; Faith-Based Training for <span className="chf-hero-h1-accent">Ministry Leaders and Volunteers</span></h1>
            <p className="chf-hero-tagline">Trauma-informed care that honors your ministry.</p>
            <p className="chf-hero-desc">
              A member quietly stops coming to service and no one knows how to check in. A youth volunteer notices a teenager withdrawing but isn&apos;t sure if it&apos;s ordinary struggle or something more serious. A pastor is asked to walk a family through a crisis with no clinical training to draw on. Open Arms Initiative partners with churches and faith-based organizations across Oklahoma City to equip pastors, staff, and volunteers with practical, trauma-informed tools, grounded in clinical insight and delivered in a way that respects your church&apos;s faith and mission.
            </p>

            <div className="chf-hero-features">
              <div className="chf-hero-feature"><span className="chf-hero-feature-icon"><IconHeart width="18" height="18" /></span>Faith-Friendly &amp; Clinically Grounded</div>
              <div className="chf-hero-feature"><span className="chf-hero-feature-icon"><IconUsers width="18" height="18" /></span>For Staff, Lay Leaders &amp; Volunteers</div>
              <div className="chf-hero-feature"><span className="chf-hero-feature-icon"><IconShield width="18" height="18" /></span>Practical Crisis Response Tools</div>
            </div>

            <div className="chf-hero-ctas">
              <Link href="/contact?training=churches-faith-based-training" className="chf-btn chf-btn-primary">
                <IconMail width="16" height="16" />
                Request Training Info
              </Link>
              <Link href="/training/jamie-james" className="chf-btn chf-btn-outline">
                <IconGrad width="16" height="16" />
                About Jamie James, LPC
              </Link>
            </div>
          </div>

          <div className="chf-hero-form-card reveal reveal-from-right">
            <div className="chf-hero-form-body">
              <h3>Request Training Information</h3>
              <span className="chf-hero-form-underline" />
              <p className="chf-hero-form-sub">Tell us about your church or ministry and we&apos;ll help you find the right training.</p>

              <ChurchTrainingRequestForm />

              <p className="chf-hero-form-privacy">
                <IconLock width="13" height="13" />
                We respect your privacy. Your information is safe with us.
              </p>
            </div>
            <div className="chf-hero-form-photo">
              <img src="/images/second.png" alt="Ministry leaders and volunteers gathered for faith-based mental health training" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRUST STRIP ══ */}
      <section className="chf-trust-section">
        <div className="chf-wrap chf-trust-row reveal reveal-from-bottom">
          <div className="chf-trust-item"><span><IconHeart width="24" height="24" /></span><p>Faith-Friendly Approach</p></div>
          <div className="chf-trust-item"><span><IconShield width="24" height="24" /></span><p>Licensed Clinical Expertise</p></div>
          <div className="chf-trust-item"><span><IconUsers width="24" height="24" /></span><p>Built for Volunteers &amp; Staff</p></div>
          <div className="chf-trust-item"><span><IconGlobe width="24" height="24" /></span><p>Oklahoma City &amp; Beyond</p></div>
        </div>
      </section>

      {/* ══ OVERVIEW ══ */}
      <section className="chf-section">
        <div className="chf-wrap chf-overview-grid">
          <div className="reveal reveal-from-left">
            <p className="jj-section-tag">Overview</p>
            <h2 className="chf-section-title" style={{ textAlign: 'left' }}>When Ministry Meets the Realities of Trauma and Mental Health</h2>
            <p className="chf-overview-p">Faith leaders are often the first people someone turns to in a crisis, long before, or instead of, a counselor&apos;s office. That trust is sacred, but it also means pastors, staff, and volunteers regularly find themselves navigating grief, abuse disclosures, anxiety, addiction, and mental health crises without clinical training to guide them.</p>
            <p className="chf-overview-p">We partner with church leaders and faith organizations to provide specialized workshops that bridge spiritual support with clinical mental health insight. This isn&apos;t about replacing pastoral care, it&apos;s about giving the people already doing that care the tools to recognize what they&apos;re seeing, respond wisely, and know when and how to refer someone to additional help.</p>
            <p className="chf-overview-p">Every session is built around your congregation, your leadership structure, and the specific pressures your ministry is facing, delivered with respect for your church&apos;s theology and mission.</p>
          </div>
          <div className="chf-overview-list reveal reveal-from-right">
            <div className="chf-overview-item"><span><IconAlert width="20" height="20" /></span>Recognizing trauma and mental health warning signs in congregation members</div>
            <div className="chf-overview-item"><span><IconUsers width="20" height="20" /></span>Equipping lay leaders and volunteers, not just pastoral staff</div>
            <div className="chf-overview-item"><span><IconShield width="20" height="20" /></span>Practical crisis intervention and safety planning strategies</div>
            <div className="chf-overview-item"><span><IconHeart width="20" height="20" /></span>Destigmatizing mental health conversations within ministry</div>
          </div>
        </div>
      </section>

      {/* ══ WHAT'S INCLUDED — benefits as cards on dark gradient ══ */}
      <section className="chf-benefits-section">
        <div className="chf-wrap">
          <div className="chf-benefits-header reveal reveal-from-bottom">
            <p className="jj-section-tag" style={{ color: '#9fc9f5' }}>What&apos;s Included</p>
            <h2 className="chf-section-title" style={{ color: '#fff' }}>What This Training Gives Your Church</h2>
            <p className="chf-benefits-sub">Built specifically for the demands of ministry life, not a generic corporate wellness program.</p>
          </div>
          <div className="why-choose-grid reveal-stagger">
            {[
              { title: 'Faith-Friendly Trauma Training', desc: 'Clinical insight into trauma and mental health, delivered in a way that respects and complements your church’s faith and mission.' },
              { title: 'Equipping Lay Leaders & Volunteers', desc: 'Practical tools for the small group leaders, greeters, and ministry volunteers who are often the first to notice something is wrong.' },
              { title: 'Crisis Intervention Strategies', desc: 'Clear, practical steps for responding when a congregation member is in crisis, including when and how to refer for professional care.' },
              { title: 'Destigmatizing Mental Health in Ministry', desc: 'A shared language for talking about mental health openly within your church community, without shame or stigma.' },
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
      <section className="chf-section">
        <div className="chf-wrap">
          <h2 className="chf-section-title reveal reveal-from-bottom">Who This Training Is For</h2>
          <div className="chf-who-grid reveal-stagger">
            {[
              { icon: <IconUserCircle width="26" height="26" />, label: 'Pastors & Ministry Staff', sub: 'Lead pastors, associate pastors, and paid ministry staff navigating congregational care.' },
              { icon: <IconUsers width="26" height="26" />, label: 'Small Group & Lay Leaders', sub: 'The volunteers building relationships with your congregation week to week.' },
              { icon: <IconGrad width="26" height="26" />, label: 'Youth & Children’s Ministry', sub: 'Staff and volunteers who are often first to notice trauma in young people.' },
              { icon: <IconShield width="26" height="26" />, label: 'Deacons & Care Teams', sub: 'Those formally tasked with pastoral care, hospital visits, and crisis response.' },
              { icon: <IconBook width="26" height="26" />, label: 'Church Administrators', sub: 'Front-office and administrative staff who are often the first point of contact.' },
              { icon: <IconGlobe width="26" height="26" />, label: 'Multi-Site & Denominational Teams', sub: 'Training designed to scale across campuses, church plants, and denominational networks.' },
            ].map((item, i) => (
              <div key={i} className="chf-who-card reveal reveal-from-bottom">
                <div className="chf-who-icon">{item.icon}</div>
                <h4>{item.label}</h4>
                <p>{item.sub}</p>
                <span className="chf-who-card-accent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SESSION APPROACH ══ */}
      <section className="chf-section chf-section--tint">
        <div className="chf-wrap chf-session-grid">
          <div className="reveal reveal-from-left">
            <h2 className="chf-section-title" style={{ textAlign: 'left' }}>Every Session Starts With Your Ministry</h2>
            <p className="chf-session-desc">
              No two churches carry the exact same needs. A church walking alongside a grieving family needs something different than a ministry team trying to build a proactive care culture. The first conversation is about your congregation, your leadership team, and what would genuinely help, not a fixed curriculum handed to every church the same way.
            </p>
            <Link href="/contact?training=churches-faith-based-training" className="chf-btn chf-btn-dark">
              Request Training Info
            </Link>
          </div>
          <div className="chf-session-list reveal reveal-from-right">
            <div className="chf-session-item"><span><IconTarget width="18" height="18" /></span>We listen to your church&apos;s specific needs first.</div>
            <div className="chf-session-item"><span><IconHeart width="18" height="18" /></span>We honor your theology and ministry approach.</div>
            <div className="chf-session-item"><span><IconUsers width="18" height="18" /></span>We build sessions around who&apos;s actually in the room.</div>
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
            <Link href="/contact?training=churches-faith-based-training" className="jj-btn jj-btn-accent" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
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
            <h2>Tell Us About Your Church</h2>
            <p>Whatever your congregation or ministry team is navigating right now, the first step is just telling us about it.</p>
          </div>
          <div className="final-cta-buttons">
            <Link href="/contact?training=churches-faith-based-training" className="final-cta-btn primary">Request Training Info</Link>
          </div>
        </div>
      </section>

      {/* ══ MOBILE STICKY CTA ══ */}
      <div className={`chf-sticky-bar${showStickyBar ? ' chf-sticky-bar--visible' : ''}`} aria-hidden={!showStickyBar}>
        <Link href="/contact?training=churches-faith-based-training" className="chf-btn chf-btn-accent chf-sticky-btn">
          Request Training Info
        </Link>
      </div>
    </main>
  );
}
