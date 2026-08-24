'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';


const ALL_VIDEOS = [
  { id: 'Hy-mRWM6zi0', title: 'Why Strong Leaders Feel Empty? High-Functioning Burnout' },
  { id: 'cdCBtTdeMxk', title: 'You Were Never Called to Carry Everyone: Leadership Burnout and Boundaries' },
  { id: 'RjPN-cDn4n0', title: "Leadership Boundaries Are Not Selfish, They're Stewardship" },
  { id: 'ABTYwSKfa3U', title: 'You Can Be Successful and Still Be Falling Apart' },
  { id: 'vTBbwdZAusI', title: "Depression Isn't Just Sadness" },
  { id: 'q2hwT6fpyO8', title: 'What Labels Are You Still Carrying?' },
  { id: '9-OiqitupIU', title: 'How to Lead Without Losing Yourself: Stay Rooted in Christ' },
  { id: 'mFIWUEuHgv8', title: 'Why Do I Keep Thinking Negative Thoughts?' },
  { id: 'RbPCvAmW3e8', title: 'Why Am I So Anxious?' },
];

function VideoModal({ id, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <div className="jj-modal-overlay" onClick={onClose}>
      <div className="jj-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="jj-modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className="jj-modal-embed">
          <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        <p className="jj-modal-title">{title}</p>
      </div>
    </div>
  );
}

function VideoCard({ v, onOpen }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="jj-vstack-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(v)}
      style={{ cursor: 'pointer' }}
    >
      <div className="jj-vstack-thumb-wrap">
        {hovered ? (
          <iframe
            src={`https://www.youtube.com/embed/${v.id}?autoplay=1&mute=1&controls=0`}
            title={v.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="jj-vstack-iframe"
          />
        ) : (
          <>
            <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title} className="jj-vstack-thumb" />
            <div className="jj-vstack-play">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff"><polygon points="5,3 19,12 5,21"/></svg>
            </div>
          </>
        )}
      </div>
      <div className="jj-vstack-body">
        <p className="jj-vstack-title">{v.title}</p>
      </div>
    </div>
  );
}

function VideoSection() {
  const [modal, setModal] = useState(null);
  return (
    <>
      {modal && <VideoModal id={modal.id} title={modal.title} onClose={() => setModal(null)} />}
      <section className="jj-videos">
        <div className="jj-videos-stack-section">
          <div className="jj-inner">
            <div className="jj-videos-stack-header">
              <p className="jj-videos-stack-label">Watch Jamie</p>
              <h2 className="jj-videos-stack-title">Hear It Directly from Jamie</h2>
            </div>
            <div className="jj-videos-stack">
              {ALL_VIDEOS.map((v) => (
                <VideoCard key={v.id} v={v} onOpen={setModal} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function JamieJamesPage() {
  const revealRootRef = useRef(null);

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

  const trainingAreas = [
    {
      title: 'Leadership & Workplace Wellness',
      desc: 'Equipping leaders and teams with trauma-informed tools, healthy boundaries, and sustainable wellness practices.',
      href: '/services/corporate-business-training',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
    },
    {
      title: 'Trauma & Mental Health',
      desc: 'Building organizational capacity to recognize, respond to, and support those affected by trauma.',
      href: '/services/trauma-informed-care-training',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>,
    },
    {
      title: 'Foster Care, Adoption & Child Welfare',
      desc: 'Specialized training for agencies, foster parents, and child welfare professionals rooted in clinical and lived experience.',
      href: '/services/trauma-informed-care-training',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    },
    {
      title: 'Parenting & Family',
      desc: 'Practical, compassionate guidance for parents navigating trauma, big emotions, and family dynamics.',
      href: '/services/trauma-informed-care-training',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><circle cx="9" cy="7" r="3"/><circle cx="15" cy="7" r="3"/><path d="M3 20c0-4 2.7-7 6-7h6c3.3 0 6 3 6 7"/></svg>,
    },
    {
      title: 'Schools & Youth Organizations',
      desc: 'Trauma-informed classroom strategies and youth mental health tools for teachers and school administrators.',
      href: '/services/school-staff-educator-training',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
    },
    {
      title: 'Faith, Ministry & Mental Health',
      desc: 'Equipping ministry leaders with trauma awareness, mental health literacy, and compassionate care practices.',
      href: '/services/churches-faith-based-training',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M12 2v4M8 6l4-4 4 4M5 10h14M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10M9 21v-6h6v6"/></svg>,
    },
    {
      title: 'Clinical Training & Professional Development',
      desc: 'Advanced training for counselors, social workers, and mental health professionals seeking continuing education.',
      href: '/services/trauma-informed-care-training',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
    },
  ];

  const popularTopics = [
    {
      label: 'Trauma-Informed Leadership',
      href: '/services/trauma-informed-care-training',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>,
    },
    {
      label: 'Mental Health Awareness',
      href: '/services/mental-health-awareness',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    },
    {
      label: 'Leadership Burnout & Boundaries',
      href: '/services/corporate-business-training',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
    },
    {
      label: 'Compassion Fatigue',
      href: '/services/trauma-informed-care-training',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    },
    {
      label: 'Supporting Students Under Stress',
      href: '/services/school-staff-educator-training',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
    },
    {
      label: 'Healthy Communication in Teams',
      href: '/services/anxiety-depression-stress-management',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    },
  ];

  const whyReasons = [
    'Faith-informed perspective that resonates with diverse audiences',
    'Real-world clinical experience that transforms complex topics into practical tools',
    'Engaging, compassionate, and direct communication style',
    'Brings lasting behavioral and organizational change',
  ];

  return (
    <main ref={revealRootRef} className="jj-page">

      {/* ══ HERO ══ */}
      <section className="jj-hero">


        <div className="jj-hero-inner">

          {/* ── LEFT copy ── */}
          <div className="jj-hero-copy reveal reveal-from-left">

            {/* top pill */}
            <div className="jj-hero-pill">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#5a7a3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>
              Compassionate Guidance. Lasting Change.
            </div>

            <h1 className="jj-hero-headline">
              Trauma-Informed<br />Training &amp; Speaking<br />for Organizations
            </h1>

            <p className="jj-hero-desc">
              Helping organizations understand trauma, emotional wellness, healthy boundaries, and compassionate communication.
            </p>

           

            <div className="jj-hero-ctas">
              <Link href="/contact" className="jj-btn jj-btn-dark">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Request Training Info
              </Link>
              <Link href="/contact" className="jj-btn jj-btn-outline">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Ask About Availability
              </Link>
            </div>


          </div>

          {/* ── RIGHT photo arch ── */}
          <div className="jj-hero-photo-col reveal reveal-from-right">
            <div className="jj-photo-arch">

              {/* arch background with leaf + photo inside */}
              <div className="jj-arch-bg">
                <svg className="jj-arch-leaf" viewBox="0 0 120 220" fill="none" aria-hidden="true">
                  <path d="M60 210 C15 165 -5 110 18 55 C34 12 72 0 84 12 C94 22 76 70 54 100 C32 130 28 168 60 210Z" fill="#c8b47a" opacity="0.45"/>
                  <path d="M58 210 C22 168 8 116 28 65 C43 22 76 6 86 18 C92 28 76 76 56 106 C36 136 34 170 58 210Z" fill="#a89050" opacity="0.2"/>
                  <line x1="60" y1="210" x2="52" y2="55" stroke="#a89050" strokeWidth="1.5" opacity="0.35"/>
                  <line x1="60" y1="210" x2="72" y2="80" stroke="#a89050" strokeWidth="1" opacity="0.25"/>
                  <line x1="60" y1="210" x2="40" y2="100" stroke="#a89050" strokeWidth="0.8" opacity="0.2"/>
                </svg>

                <img
                  src="/Jamie/image (18).png"
                  alt="Jamie James, LPC"
                  className="jj-arch-photo"
                />

                {/* wave at bottom of arch */}
                <svg className="jj-arch-wave" viewBox="0 0 400 55" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 35 Q60 8 120 28 Q180 48 240 22 Q300 0 360 18 Q390 28 400 20 L400 55 L0 55Z" fill="#8DC540" opacity="0.4"/>
                  <path d="M0 45 Q80 18 160 38 Q240 56 320 34 Q375 18 400 35 L400 55 L0 55Z" fill="#1a3a20" opacity="0.25"/>
                </svg>
              </div>

              {/* floating name card */}
              <div className="jj-arch-namecard">
                <span className="jj-arch-namecard-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8C14.5 17 12 22 12 22Z"/></svg>
                </span>
                <div>
                  <p className="jj-arch-namecard-name">Jamie James, LPC</p>
                  <p className="jj-arch-namecard-sub">Speaker · Trainer · Counselor</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* wave band at bottom of hero */}
        <div className="jj-hero-wave-section">
          <svg className="jj-hero-wave" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 60 Q220 10 440 55 Q680 105 920 55 Q1160 5 1440 50 L1440 160 L0 160Z" />
          </svg>
        </div>

      </section>

      {/* ══ CREDENTIALS SECTION ══ */}
      <section className="jj-cred-section">
        <div className="jj-cred-bar reveal reveal-from-bottom">
          <div className="jj-cred">
            <span className="jj-cred-icon"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#8DC540" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><polyline points="9 12 11 14 15 10"/></svg></span>
            <span>Licensed Professional Counselor</span>
          </div>
          <div className="jj-cred-divider" aria-hidden="true" />
          <div className="jj-cred">
            <span className="jj-cred-icon"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#8DC540" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></span>
            <span>Founder &amp; President</span>
          </div>
          <div className="jj-cred-divider" aria-hidden="true" />
          <div className="jj-cred">
            <span className="jj-cred-icon"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#8DC540" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg></span>
            <span>Open Arms Initiative</span>
          </div>
          <div className="jj-cred-divider" aria-hidden="true" />
          <div className="jj-cred">
            <span className="jj-cred-icon"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#8DC540" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
            <span>Open Arms Foster Care</span>
          </div>
        </div>
      </section>

      {/* ══ MEET YOUR TRAINER ══ */}
      <section className="jj-myt">
        <div className="jj-inner">
          <div className="jj-myt-inner reveal reveal-from-bottom">
            <div className="jj-myt-badge">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#3a6e2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              Meet Your Trainer
            </div>
            <h2 className="jj-myt-headline">
              The Person Leading Your Training<br />Also Runs Two Organizations<br /><em>Like Yours</em>
            </h2>
            <p className="jj-myt-body">
              Jamie James isn&apos;t just a consultant who read about burnout and trauma-informed leadership; she's dealt with both directly. As a Licensed Professional Counselor, she founded Open Arms Initiative. As an organizational leader, she also founded and runs Open Arms Foster Care, a licensed therapeutic foster care agency operating in Oklahoma City, Tulsa, and Lawton, one of the more demanding corners of the child welfare system, where trauma-informed practice is a daily requirement, not a talking point.

            </p>
            <p className="jj-myt-body">
That's the perspective she brings into every training, workshop, and speaking engagement: a clinician's understanding of how trauma and stress actually show up in behavior, combined with a leader's understanding of what it actually takes to keep people functioning under pressure. If your organization is dealing with burnout, difficult conversations, or a team that's quietly struggling, she's not describing a problem she read about. She's describing one she's managed.
            </p>
          
            <Link href="/contact" className="jj-btn jj-btn-dark">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Ask About Jamie's Availability
            </Link>
          </div>
        </div>
      </section>

      {/* ══ WHO IS JAMIE ══ */}
      <section className="jj-bio">
        <div className="jj-inner">
          <div className="jj-bio-grid">

            {/* LEFT — photo */}
            <div className="jj-bio-photo-col reveal reveal-from-left">
              <div className="jj-bio-photo-wrap">
                <img src="/Jamie/image (18).png" alt="Jamie James, LPC" className="jj-bio-photo" />
              </div>
            </div>

            {/* RIGHT — copy */}
            <div className="jj-bio-copy reveal reveal-from-right">
              <p className="jj-section-tag">MEET JAMIE</p>
              <h2 className="jj-bio-title">Founder. Counselor.<br />Advocate. Speaker.</h2>
              <p className="jj-bio-desc">
                Jamie James is a Licensed Professional Counselor (LPC) and the President &amp; Founder of Open Arms Initiative, a mental health and wellness organization equipping teams, families, and communities with trauma-informed tools. She also founded and leads Open Arms Foster Care, a licensed therapeutic foster care agency serving families in Oklahoma City, Tulsa, and Lawton.
              </p>
              <ul className="jj-bio-list">
                <li><span className="jj-check"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>Licensed Professional Counselor (LPC)</li>
                <li><span className="jj-check"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>Faith-informed, trauma-sensitive approach</li>
                <li><span className="jj-check"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>Founder &amp; President, Open Arms Initiative</li>
                <li><span className="jj-check"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>Founder, Open Arms Foster Care (OKC · Tulsa · Lawton)</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ══ TRAINING AREAS ══ */}
      <section className="jj-trains">
        <div className="jj-inner">
          <div className="jj-section-header reveal reveal-from-bottom">
            <p className="jj-section-tag">HER TRAIN</p>
            <h2 className="jj-section-title">Who We Train</h2>
          </div>
          <div className="jj-trains-grid reveal-stagger">
            {trainingAreas.map((area, i) => (
              <Link key={i} href={area.href} className="jj-train-card reveal reveal-from-bottom">
                <span className="jj-train-icon">{area.icon}</span>
                <span className="jj-train-title">{area.title}</span>
                <span className="jj-train-desc">{area.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ POPULAR TOPICS ══ */}
      <section className="jj-topics">
        {/* top wave */}
        <svg className="jj-topics-wave-top" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0 L0 40 Q180 80 360 30 Q540 0 720 40 Q900 70 1080 25 Q1260 0 1440 35 L1440 0Z" fill="#faf8f3"/>
        </svg>
        <div className="jj-inner jj-topics-content">
          <p className="jj-section-tag reveal reveal-from-bottom" style={{color:'#3a6e2a', fontSize:'1.5rem', letterSpacing:'0.02em', textTransform:'none', marginBottom:'0.75rem'}}>Popular Training Topics</p>
          <div className="jj-topics-grid reveal-stagger">
            {popularTopics.map((t, i) => (
              <Link key={i} href={t.href} className="jj-topic-card reveal reveal-from-bottom">
                <span className="jj-topic-card-icon">{t.icon}</span>
                <span className="jj-topic-card-label">{t.label}</span>
              </Link>
            ))}
          </div>
        </div>
        {/* bottom wave */}
        <svg className="jj-topics-wave-bottom" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 60 L0 25 Q180 0 360 35 Q540 60 720 20 Q900 0 1080 35 Q1260 60 1440 25 L1440 60Z" fill="#faf8f3"/>
        </svg>
      </section>

      {/* ══ WHY ORGANIZATIONS BOOK ══ */}
      <section className="jj-why">
        <div className="jj-inner">
          <div className="jj-why-header reveal reveal-from-bottom">
            
            <h2 className="jj-why-title">Why Organizations Book Open Arms</h2>
            <p className="jj-why-sub">Evidence-based training. Real-world impact.</p>
          </div>
          <div className="jj-why-cards reveal-stagger">
            {[
              { num:'', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#3a6e2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="34" height="34"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>, title:'Practical, Compassionate Approach', desc:'Accessible, relatable training that leads to real-world impact.' },
              { num:'', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#3a6e2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="34" height="34"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, title:'Customized for Your Audience', desc:'Every session is tailored to your goals, context, and challenges.' },
              { num:'', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#3a6e2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="34" height="34"><circle cx="9" cy="7" r="3"/><circle cx="15" cy="7" r="3"/><path d="M3 20c0-4 2.7-7 6-7h6c3.3 0 6 3 6 7"/></svg>, title:'Real-World Leadership Perspective', desc:'Grounded in leadership, clinical experience, and frontline service.' },
              { num:'', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#3a6e2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="34" height="34"><path d="M12 2v4M8 6l4-4 4 4M5 10h14M5 10v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V10M9 21v-6h6v6"/></svg>, title:'Faith-Sensitive or Professional Options', desc:'Faith-integrated or secular formats that respect your setting.' },
            ].map((c, i) => (
              <div key={i} className="jj-why-card reveal reveal-from-bottom">
                <span className="jj-why-card-num">{c.num}</span>
                <span className="jj-why-card-icon">{c.icon}</span>
                <h3 className="jj-why-card-title">{c.title}</h3>
                <p className="jj-why-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section className="jj-reviews">
        <div className="jj-inner">
          <div className="jj-reviews-grid reveal-stagger">
            <blockquote className="jj-review-card reveal reveal-from-left">
              <span className="jj-review-qmark">&ldquo;</span>
              <p className="jj-review-text">Jamie&apos;s training was one of the best investments we&apos;ve made. Our team left every session feeling more confident and empowered to create real change.</p>
              <div className="jj-review-line" />
              <footer className="jj-review-name">Erica L., HR Director</footer>
            </blockquote>
            <blockquote className="jj-review-card reveal reveal-from-right">
              <span className="jj-review-qmark">&ldquo;</span>
              <p className="jj-review-text">Our staff is better equipped and has tools they can use in real time. The training and follow-up support make all the difference.</p>
              <div className="jj-review-line" />
              <footer className="jj-review-name">Michael T., School Principal</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ══ SPEAKER POSITIONING ══ */}
      <section className="jj-speaker">
        <div className="jj-inner">
          <div className="jj-speaker-grid">
            <div className="jj-speaker-copy reveal reveal-from-left">
              <p className="jj-section-tag">SPEAKING ENGAGEMENTS</p>
              <h2 className="jj-speaker-title">Bringing Clarity to the<br />Conversations That Matter Most</h2>
              <p className="jj-speaker-body">
Jamie James speaks from operating experience, not just clinical theory. She leads two organizations built around the exact pressures she speaks about: burnout, trauma-informed leadership, and sustaining people through high-stress, high-stakes work.              </p>
              <ul className="jj-speaker-topics">
                {[
                  'Corporate/business leadership groups and HR/people-ops gatherings',
                  'School district in-service days and educator professional-development events',
                  'Church and ministry leadership retreats and conferences',
                  'Foster care and child welfare conferences or agency events',
                  'Nonprofit leadership gatherings and community coalitions',
                  'Behavioral-health professional associations and clinical conferences',
                ].map((topic, i) => (
                  <li key={i}>
                    <span className="jj-speaker-dot" />
                    {topic}
                  </li>
                ))}
              </ul>
              <div className="jj-speaker-events">
                <span className="jj-speaker-event-tag">Conferences</span>
                <span className="jj-speaker-event-tag">Staff Development Days</span>
                <span className="jj-speaker-event-tag">Leadership Retreats</span>
                <span className="jj-speaker-event-tag">Workshops &amp; Trainings</span>
              </div>
              <Link href="/contact" className="jj-btn jj-btn-dark" style={{marginTop:'1.5rem', display:'inline-flex'}}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Ask About Jamie&apos;s Availability
              </Link>
            </div>
            <div className="jj-speaker-photo-col reveal reveal-from-right">
              <div className="jj-speaker-photo-wrap">
                <img src="/Jamie/image (18).png" alt="Jamie James speaking" className="jj-speaker-photo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VIDEO AUTHORITY ══ */}
      <VideoSection />

      {/* ══ CTA BANNER ══ */}
      <section className="jj-cta">
        <div className="jj-cta-inner reveal reveal-from-bottom">
          <div>
            <h2 className="jj-cta-title">Bring Training that Empowers People and<br />Strengthens Teams</h2>
            <p className="jj-cta-sub">Schedule Jamie for your next staff development, conference, or organization training.</p>
          </div>
          <Link href="/contact" className="jj-btn jj-btn-accent">
            Request a Consultation
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}