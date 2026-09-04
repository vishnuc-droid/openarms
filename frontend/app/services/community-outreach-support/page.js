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
const IconMapPin = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
const IconHandHeart = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M11 12h3a2 2 0 0 1 0 4H9.5" /><path d="M7 20H3v-6h4" /><path d="M7 14l4-2.5c.6-.4 1.4-.4 2 0l4.5 2.8" /><path d="M15 12l4-2a2 2 0 0 0-2-3.5L13 9" /></svg>;
const IconTarget = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></svg>;
const IconAlert = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;

/* ─── FAQ DATA ────────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: 'Is there a cost to attend a community outreach program?',
    a: 'No. Our community outreach and support programs are offered free of charge, thanks to the generosity of donors and community partners who share our belief that mental health support should be accessible to everyone.',
  },
  {
    q: 'Do I need insurance or documentation to participate?',
    a: 'No. These programs are intentionally designed to remove the usual barriers, no insurance, referral, or paperwork required to attend a workshop or connect with a resource navigator.',
  },
  {
    q: 'What neighborhoods or areas do you serve?',
    a: 'We bring programming directly into local Oklahoma City neighborhoods, partnering with community centers, schools, churches, and other trusted local spaces. Reach out and we can tell you what is currently available near you.',
  },
  {
    q: 'Can my organization partner with Open Arms Initiative on an outreach event?',
    a: 'Yes, we regularly collaborate with other nonprofits, schools, and community groups to bring resources and education into shared spaces. Contact us to talk about what a partnership could look like.',
  },
  {
    q: 'How is this different from your counseling services?',
    a: 'Community outreach is about education, connection, and access, workshops, resource navigation, and family support brought directly into the community. It often serves as a bridge that helps families find their way to our pro bono and sliding-scale counseling services when more individualized care is needed.',
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
function CommunityOutreachRequestForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      await submitForm({ service: 'community-outreach', ...form });
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="cos-hero-form cos-hero-form-success">
        <IconCheckCircle width="40" height="40" />
        <p>Thank you! Your request has been received. Our team will be in touch with you soon.</p>
      </div>
    );
  }

  return (
    <form className="cos-hero-form" onSubmit={handleSubmit}>
      <label className="cos-form-label">Full Name</label>
      <div className="cos-form-input-wrap">
        <IconUserCircle width="16" height="16" />
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
      </div>

      <label className="cos-form-label">Email Address</label>
      <div className="cos-form-input-wrap">
        <IconMail width="16" height="16" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.org" required />
      </div>

      <label className="cos-form-label">Phone Number</label>
      <div className="cos-form-input-wrap">
        <IconPhone width="16" height="16" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="(123) 456-7890" />
      </div>

      <label className="cos-form-label">What type of support are you looking for?</label>
      <div className="cos-form-input-wrap">
        <select name="topic" value={form.topic} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="community-workshop">Community Workshop or Event</option>
          <option value="resource-navigation">Resource Navigation &amp; Referrals</option>
          <option value="family-support">Family Support Services</option>
          <option value="partner-organization">I Represent a Partner Organization</option>
          <option value="other">Other</option>
        </select>
      </div>

      <label className="cos-form-label">Tell us more about what you need</label>
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Briefly describe your situation or how we can help..." rows={3} />

      {error && <p className="cos-form-error">{error}</p>}

      <button type="submit" className="cos-btn cos-btn-accent cos-form-submit" disabled={status === 'submitting'}>
        <IconSend width="16" height="16" />
        {status === 'submitting' ? 'Sending…' : 'Request Info Now'}
      </button>
    </form>
  );
}

/* ─── PAGE ────────────────────────────────────────────────────────────── */
export default function CommunityOutreachSupportPage() {
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
    <main ref={revealRootRef} className="cos-page">

      {/* ══ HERO ══ */}
      <section className="cos-hero" ref={heroRef}>
        <div className="cos-hero-inner">
          <div className="cos-hero-copy reveal reveal-from-left">
            <div className="cos-pill">A Non-Profit Program of Open Arms Initiative</div>
            <h1 className="cos-hero-h1">Community Outreach &amp; Support for <span className="cos-hero-h1-accent">Oklahoma City Families</span></h1>
            <p className="cos-hero-tagline">Bringing care to where people already are.</p>
            <p className="cos-hero-desc">
              A single parent doesn&apos;t know where to start looking for help and doesn&apos;t have time to search. A neighborhood has plenty of need but no easy access to mental health resources. A family is quietly struggling and has no idea that free, compassionate support exists nearby. Our non-profit outreach programs bring mental health awareness, resource navigation, and family support directly into local Oklahoma communities, removing the barriers of cost, distance, and stigma that keep people from getting help.
            </p>

            <div className="cos-hero-features">
              <div className="cos-hero-feature"><span className="cos-hero-feature-icon"><IconHeart width="18" height="18" /></span>Free &amp; Accessible to All</div>
              <div className="cos-hero-feature"><span className="cos-hero-feature-icon"><IconMapPin width="18" height="18" /></span>In Local OKC Neighborhoods</div>
              <div className="cos-hero-feature"><span className="cos-hero-feature-icon"><IconUsers width="18" height="18" /></span>Collaborative Care Networks</div>
            </div>

            <div className="cos-hero-ctas">
              <Link href="/contact?service=community-outreach-support" className="cos-btn cos-btn-primary">
                <IconMail width="16" height="16" />
                Request Support Info
              </Link>
              <Link href="/pro-bono-counseling-okc/" className="cos-btn cos-btn-outline">
                <IconHandHeart width="16" height="16" />
                Explore Pro Bono Counseling
              </Link>
            </div>
          </div>

          <div className="cos-hero-form-card reveal reveal-from-right">
            <div className="cos-hero-form-body">
              <h3>Request Support Information</h3>
              <span className="cos-hero-form-underline" />
              <p className="cos-hero-form-sub">Tell us what you or your community need and we&apos;ll help you find the right resources.</p>

              <CommunityOutreachRequestForm />

              <p className="cos-hero-form-privacy">
                <IconLock width="13" height="13" />
                We respect your privacy. Your information is safe with us.
              </p>
            </div>
            <div className="cos-hero-form-photo">
              <img src="/images/4th.png" alt="Open Arms Initiative community outreach event in an Oklahoma City neighborhood" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRUST STRIP ══ */}
      <section className="cos-trust-section">
        <div className="cos-wrap cos-trust-row reveal reveal-from-bottom">
          <div className="cos-trust-item"><span><IconHeart width="24" height="24" /></span><p>Always Free of Charge</p></div>
          <div className="cos-trust-item"><span><IconMapPin width="24" height="24" /></span><p>Local OKC Neighborhoods</p></div>
          <div className="cos-trust-item"><span><IconUsers width="24" height="24" /></span><p>Collaborative Care Network</p></div>
          <div className="cos-trust-item"><span><IconShield width="24" height="24" /></span><p>Support for Vulnerable Families</p></div>
        </div>
      </section>

      {/* ══ OVERVIEW ══ */}
      <section className="cos-section">
        <div className="cos-wrap cos-overview-grid">
          <div className="reveal reveal-from-left">
            <p className="jj-section-tag">Overview</p>
            <h2 className="cos-section-title" style={{ textAlign: 'left' }}>Mental Health Care Shouldn&apos;t Require a Waiting Room</h2>
            <p className="cos-overview-p">For a lot of families, the biggest barrier to mental health support isn&apos;t willingness, it&apos;s access. Cost, transportation, childcare, unfamiliarity with the system, or simply not knowing where to start can keep someone from ever walking through a counselor&apos;s door. Community outreach exists to close that gap by meeting people where they already are.</p>
            <p className="cos-overview-p">As a non-profit, Open Arms Initiative brings mental health education, resource navigation, and family support directly into underserved Oklahoma communities. That looks like workshops in neighborhood community centers, partnerships with local schools and churches, and one-on-one help connecting families to the right resources, whether that&apos;s ours or another trusted organization&apos;s.</p>
            <p className="cos-overview-p">This work is only possible because of donors, volunteers, and community partners who believe, like we do, that support for mental health and family well-being should never depend on someone&apos;s zip code or income.</p>
          </div>
          <div className="cos-overview-list reveal reveal-from-right">
            <div className="cos-overview-item"><span><IconMapPin width="20" height="20" /></span>Free workshops brought directly into local OKC neighborhoods</div>
            <div className="cos-overview-item"><span><IconHandHeart width="20" height="20" /></span>Resource navigation connecting families to the right support</div>
            <div className="cos-overview-item"><span><IconUsers width="20" height="20" /></span>Collaborative partnerships with schools, churches, and nonprofits</div>
            <div className="cos-overview-item"><span><IconHeart width="20" height="20" /></span>Dedicated support for vulnerable and underserved families</div>
          </div>
        </div>
      </section>

      {/* ══ WHAT'S INCLUDED — benefits as cards on dark gradient ══ */}
      <section className="cos-benefits-section">
        <div className="cos-wrap">
          <div className="cos-benefits-header reveal reveal-from-bottom">
            <p className="jj-section-tag" style={{ color: '#9fc9f5' }}>What&apos;s Included</p>
            <h2 className="cos-section-title" style={{ color: '#fff' }}>What Our Outreach Programs Provide</h2>
            <p className="cos-benefits-sub">Practical, no-cost support designed around the realities families in our community are facing.</p>
          </div>
          <div className="why-choose-grid reveal-stagger">
            {[
              { title: 'Accessible Community Resources', desc: 'Mental health education and resource navigation made available without cost, insurance, or referral requirements.' },
              { title: 'Workshops in Local OKC Neighborhoods', desc: 'Programming delivered directly in community centers, schools, and churches across Oklahoma City, not just in an office.' },
              { title: 'Collaborative Care Networks', desc: 'Partnerships with other nonprofits and community organizations so families are connected to the right support, wherever it lives.' },
              { title: 'Support for Vulnerable Families', desc: 'Focused outreach for families facing financial hardship, isolation, or barriers to traditional mental health care.' },
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
      <section className="cos-section">
        <div className="cos-wrap">
          <h2 className="cos-section-title reveal reveal-from-bottom">Who Our Outreach Programs Serve</h2>
          <div className="cos-who-grid reveal-stagger">
            {[
              { icon: <IconUsers width="26" height="26" />, label: 'Families Facing Hardship', sub: 'Households navigating financial strain, instability, or crisis who need support now.' },
              { icon: <IconUserCircle width="26" height="26" />, label: 'Individuals Without Access to Care', sub: 'Anyone who wants support but doesn\'t have insurance or the means to pay for it.' },
              { icon: <IconMapPin width="26" height="26" />, label: 'Underserved Neighborhoods', sub: 'Communities where mental health resources are scarce, distant, or unfamiliar.' },
              { icon: <IconHandHeart width="26" height="26" />, label: 'Community Partners & Nonprofits', sub: 'Organizations looking to bring mental health programming to the people they already serve.' },
              { icon: <IconShield width="26" height="26" />, label: 'At-Risk Youth & Caregivers', sub: 'Young people and the adults raising them who need extra support and connection.' },
              { icon: <IconGlobe width="26" height="26" />, label: 'Anyone Who Doesn\'t Know Where to Start', sub: 'People who simply need someone to help point them toward the right next step.' },
            ].map((item, i) => (
              <div key={i} className="cos-who-card reveal reveal-from-bottom">
                <div className="cos-who-icon">{item.icon}</div>
                <h4>{item.label}</h4>
                <p>{item.sub}</p>
                <span className="cos-who-card-accent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SESSION APPROACH ══ */}
      <section className="cos-section cos-section--tint">
        <div className="cos-wrap cos-session-grid">
          <div className="reveal reveal-from-left">
            <h2 className="cos-section-title" style={{ textAlign: 'left' }}>Every Program Starts With Your Community</h2>
            <p className="cos-session-desc">
              A neighborhood dealing with a recent crisis needs something different than a community center hoping to build a recurring resource night. The first conversation is about what your community actually needs and who we can partner with to make it happen, not a fixed program dropped in the same way everywhere.
            </p>
            <Link href="/contact?service=community-outreach-support" className="cos-btn cos-btn-dark">
              Request Support Info
            </Link>
          </div>
          <div className="cos-session-list reveal reveal-from-right">
            <div className="cos-session-item"><span><IconTarget width="18" height="18" /></span>We listen to your community&apos;s specific needs first.</div>
            <div className="cos-session-item"><span><IconMapPin width="18" height="18" /></span>We show up where you already gather.</div>
            <div className="cos-session-item"><span><IconUsers width="18" height="18" /></span>We connect families to the right resources, ours or otherwise.</div>
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
            <Link href="/contact?service=community-outreach-support" className="jj-btn jj-btn-accent" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
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
            <h2>Tell Us What You Need</h2>
            <p>Whatever your family or community is facing right now, the first step is just telling us about it.</p>
          </div>
          <div className="final-cta-buttons">
            <Link href="/contact?service=community-outreach-support" className="final-cta-btn primary">Request Support Info</Link>
          </div>
        </div>
      </section>

      {/* ══ MOBILE STICKY CTA ══ */}
      <div className={`cos-sticky-bar${showStickyBar ? ' cos-sticky-bar--visible' : ''}`} aria-hidden={!showStickyBar}>
        <Link href="/contact?service=community-outreach-support" className="cos-btn cos-btn-accent cos-sticky-btn">
          Request Support Info
        </Link>
      </div>
    </main>
  );
}
