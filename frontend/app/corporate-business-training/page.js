'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* ─── FAQ DATA ─────────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: 'Can this training be customized for our organization?',
    a: "Yes. Sessions are built around your team's specific situation rather than a fixed curriculum. The first conversation is always about what's actually happening on your team, what's already been tried, and what you want people to be able to do differently.",
  },
  {
    q: 'Who is this training designed for?',
    a: 'Anyone responsible for leading people through stress: HR directors, executives, department leaders, and managers, in businesses, nonprofits, and other organizations.',
  },
  {
    q: 'How is this different from a generic corporate wellness workshop?',
    a: "It's led by a licensed clinician who also currently leads two organizations, so the training is grounded in a clinical understanding of stress and behavior, not just leadership theory.",
  },
  {
    q: 'Is virtual training available?',
    a: "Formats are confirmed when you reach out, so tell us what would work best for your team.",
  },
  {
    q: 'Does Jamie travel outside Oklahoma City?',
    a: "Reach out with your location and we'll let you know what's possible.",
  },
  {
    q: 'Can our whole leadership team attend?',
    a: 'Group size and format are worked out together once we know more about your team.',
  },
];

/* ─── PROGRAM CARDS DATA ───────────────────────────────────────────────── */
const PROGRAMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        <path d="M17 3l2 2-5 5"/>
      </svg>
    ),
    name: 'Leading Through Burnout',
    desc: 'Recognizing high-functioning burnout in yourself and your team before it costs you people.',
    tags: ['Executives', 'Managers', 'HR Directors'],
    outcome: 'Identify burnout early and respond before it becomes a retention problem.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="8" y1="10" x2="16" y2="10"/>
        <line x1="8" y1="14" x2="12" y2="14"/>
      </svg>
    ),
    name: 'Difficult Conversations & Conflict',
    desc: 'Practical frameworks for having the conversations managers avoid, and why they avoid them.',
    tags: ['Dept. Leaders', 'Managers', 'Supervisors'],
    outcome: 'Address problems directly without escalating or shutting people down.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/>
      </svg>
    ),
    name: 'Trauma-Informed Leadership',
    desc: 'Understanding how trauma shows up in team behavior, and how trauma-aware leadership changes outcomes.',
    tags: ['All Levels', 'High-Stress Teams'],
    outcome: 'Respond to behavior rather than reacting to it.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    name: 'Organizational Mental Health Foundations',
    desc: 'Building a workplace where mental health is addressed openly, not avoided until someone leaves.',
    tags: ['HR Directors', 'Nonprofit Leaders'],
    outcome: 'Talk about mental health before a crisis requires it.',
  },
];

/* ─── TOPIC GROUPS ────────────────────────────────────────────────────── */
const TOPIC_GROUPS = [
  {
    label: 'Leadership & Self-Awareness',
    topics: [
      { label: 'Leadership Burnout & Boundaries', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg> },
      { label: 'High-Functioning Burnout', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
      { label: 'Compassion Fatigue', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg> },
      { label: 'Emotional Regulation for Leaders', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> },
    ],
  },
  {
    label: 'Team & Culture',
    topics: [
      { label: 'Healthy Communication in Teams', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
      { label: 'Conflict Without Casualties', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M9 12l2 2 4-4"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg> },
      { label: 'Psychological Safety at Work', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/></svg> },
      { label: 'Trauma-Informed Leadership', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg> },
    ],
  },
  {
    label: 'Individual Wellness',
    topics: [
      { label: 'Stress Management Under Pressure', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> },
      { label: 'Mental Health Awareness', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> },
      { label: 'Boundaries Without Guilt', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
      { label: 'Sustainable High Performance', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
    ],
  },
];

/* ─── FAQ ACCORDION ITEM ───────────────────────────────────────────────── */
function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="cbt-faq-item">
      <button
        className={`cbt-faq-q${open ? ' cbt-faq-q--open' : ''}`}
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{q}</span>
        <svg className="cbt-faq-chevron" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
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
        <FaqItem
          key={i}
          q={item.q}
          a={item.a}
          open={openIdx === i}
          onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
        />
      ))}
    </div>
  );
}

/* ─── PAGE ─────────────────────────────────────────────────────────────── */
export default function CorporateBusinessTrainingPage() {
  const revealRootRef = useRef(null);
  const heroRef = useRef(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  /* scroll-reveal */
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
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* sticky mobile CTA — appears after hero scrolls out */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    /* cbt-page scopes all hero overrides to this page only */
    <main ref={revealRootRef} className="jj-page cbt-page">

      {/* ══ HERO — cream background, blob-shaped team photo ══ */}
      <section className="oah-hero" ref={heroRef}>
        {/* decorative background elements */}
        <svg className="oah-hero-deco-ring" viewBox="0 0 200 200" fill="none" aria-hidden="true">
          <circle cx="100" cy="100" r="90" stroke="#8DC540" strokeWidth="1" strokeDasharray="6 8" opacity="0.25"/>
          <circle cx="100" cy="100" r="65" stroke="#093129" strokeWidth="0.8" opacity="0.1"/>
        </svg>
        <svg className="oah-hero-deco-dots" viewBox="0 0 120 120" fill="none" aria-hidden="true">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={col*24+12} cy={row*24+12} r="2.2" fill="#8DC540" opacity="0.18"/>
          )))}
        </svg>
        <div className="oah-hero-inner">

          {/* LEFT copy */}
          <div className="oah-hero-copy reveal reveal-from-left">
            <div className="oah-hero-pill">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#5a7a3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
              </svg>
              For Leaders Managing High-Stress Teams
            </div>

            <h1 className="oah-hero-headline">
              Leadership &amp; Workplace Wellness Training for Teams Under Real Pressure
            </h1>

            <p className="oah-hero-desc">
              When good leaders are running on empty, communication gets shorter, problems get ignored, and your best people start quietly looking elsewhere. This training helps managers and leadership teams recognize those patterns early and build healthier ways to lead under pressure.
            </p>

            <div className="oah-hero-ctas">
              <Link href="/contact?training=leadership-workplace-wellness" className="oah-btn oah-btn-primary">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Request Training Info
              </Link>
              <Link href="/contact?interest=speaking" className="oah-btn oah-btn-outline">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                Ask About Jamie&apos;s Availability
              </Link>
            </div>

          </div>

          {/* RIGHT — blob-shaped photo with floating name card */}
          <div className="oah-hero-photo-col reveal reveal-from-right">
            <div className="oah-hero-blob">
              <Image
                src="/Training/hero-banner.webp"
                alt="Leadership team working together during a workplace wellness training session"
                className="oah-hero-blob-img"
                width={1600}
                height={1066}
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ══ CREDENTIALS BAR ══ */}
      <section className="jj-cred-section" style={{background:'#fff'}}>
        <div className="jj-cred-bar reveal reveal-from-bottom">
          <div className="jj-cred">
            <span className="jj-cred-icon"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#8DC540" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><polyline points="9 12 11 14 15 10"/></svg></span>
            <span>Licensed Professional Counselor</span>
          </div>
          <div className="jj-cred-divider" aria-hidden="true" />
          <div className="jj-cred">
            <span className="jj-cred-icon"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#8DC540" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></span>
            <span>Founder &amp; President, Open Arms Initiative</span>
          </div>
          <div className="jj-cred-divider" aria-hidden="true" />
          <div className="jj-cred">
            <span className="jj-cred-icon"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#8DC540" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg></span>
            <span>Organizational Leader &amp; Clinician</span>
          </div>
          <div className="jj-cred-divider" aria-hidden="true" />
          <div className="jj-cred">
            <span className="jj-cred-icon"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#8DC540" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
            <span>Oklahoma City &amp; Beyond</span>
          </div>
        </div>
      </section>

      {/* ══ WHEN BURNOUT — icon rows + organic blob photo ══ */}
      <section className="oab-burnout">
        <div className="oab-burnout-dots" aria-hidden="true">
          <svg viewBox="0 0 80 80" fill="none">
            {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
              <circle key={`d-${row}-${col}`} cx={col*16+8} cy={row*16+8} r="2" fill="#c9d6be" />
            )))}
          </svg>
        </div>

        <svg className="oab-burnout-leaf" viewBox="0 0 300 300" fill="none" aria-hidden="true">
          <path d="M20 280 C 40 220, 30 160, 70 120 C 100 90, 150 90, 170 60" stroke="#c9e3ae" strokeWidth="2" fill="none" opacity="0.8"/>
          <path d="M170 60 C 160 40, 140 30, 150 10" stroke="#c9e3ae" strokeWidth="2" fill="none" opacity="0.8"/>
          <ellipse cx="150" cy="20" rx="14" ry="7" fill="#d7ecc0" transform="rotate(40 150 20)"/>
          <ellipse cx="120" cy="55" rx="16" ry="8" fill="#d7ecc0" transform="rotate(20 120 55)"/>
          <ellipse cx="90" cy="95" rx="18" ry="9" fill="#cfe8b3" transform="rotate(-10 90 95)"/>
          <ellipse cx="60" cy="150" rx="20" ry="10" fill="#cfe8b3" transform="rotate(-30 60 150)"/>
          <ellipse cx="35" cy="210" rx="20" ry="10" fill="#d7ecc0" transform="rotate(-55 35 210)"/>
        </svg>

        <svg width="0" height="0" style={{position:'absolute'}} aria-hidden="true">
          <defs>
            <clipPath id="oab-blob-clip" clipPathUnits="objectBoundingBox">
              <path d="M1,0
                       L0.60,0
                       C0.35,0.03 0.20,0.15 0.18,0.35
                       C0.16,0.55 0.24,0.68 0.28,0.85
                       C0.30,0.93 0.36,0.98 0.45,1
                       L1,1
                       Z"/>
            </clipPath>
          </defs>
        </svg>

        <div className="oab-burnout-inner">

          <div className="oab-burnout-copy reveal reveal-from-left">
            <div className="oab-burnout-pill">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#3a6e2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              LEADERSHIP &amp; WELLNESS
            </div>

            <h2 className="oab-burnout-headline">When Burnout, Turnover, and Silence Start Running the Culture</h2>
            <div className="oab-burnout-rule" />

            <p className="oab-burnout-desc">
              Literally, what walks the halls isn&apos;t just what&apos;s said, it&apos;s what&apos;s not said. What happens in the unseen spaces and empty seats is shaping the culture more than any strategy deck. When burnout becomes the norm, when the best people quietly check out, and when leadership starts hearing less truth, everything starts to break down.
            </p>

            <div className="oab-burnout-rows">
              <div className="oab-burnout-row">
                <span className="oab-burnout-row-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#052E26" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                <div>
                  <h3>Burnout Is a Symptom</h3>
                  <p>Your people aren&apos;t disengaged out of nowhere. They&apos;re exhausted from carrying more than they should.</p>
                </div>
              </div>

              <div className="oab-burnout-row">
                <span className="oab-burnout-row-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#052E26" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                </span>
                <div>
                  <h3>Turnover Is a Signal</h3>
                  <p>High turnover doesn&apos;t just hurt your team, it shows that something deeper is off in the culture.</p>
                </div>
              </div>

              <div className="oab-burnout-row">
                <span className="oab-burnout-row-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#052E26" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </span>
                <div>
                  <h3>Silence Is the Biggest Risk</h3>
                  <p>When people stop speaking up, ideas stop flowing, problems hide deeper, and trust starts to fade.</p>
                </div>
              </div>
            </div>

            <div className="oab-burnout-quote">
              <span className="oab-burnout-quote-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#EDFFE1" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c4-3 6-6 6-10a6 6 0 0 0-12 0c0 4 2 7 6 10z"/><path d="M12 12V6"/></svg>
              </span>
              <p>
                Real leadership creates the kind of culture where people feel safe, supported, and seen: where they don&apos;t just survive, they thrive and stay.
              </p>
            </div>
          </div>

          <div className="oab-burnout-photo-col reveal reveal-from-right">
            <div className="oab-burnout-blob">
              <Image
                src="/Training/burnout-section.jpg"
                alt="Leadership team discussing culture, burnout, and turnover during a collaborative session"
                className="oab-burnout-blob-img"
                width={1200}
                height={800}
              />
            </div>
          </div>

        </div>

        <div className="oab-burnout-wave-wrap">
          <svg className="oab-burnout-wave" viewBox="0 0 1600 190" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 90 Q200 40 420 95 Q640 150 860 100 Q1080 50 1300 95 Q1450 120 1600 90 L1600 190 L0 190Z" fill="#EDFFE1" />
            <path d="M0 130 Q220 90 440 130 Q660 170 880 130 Q1100 90 1320 130 Q1460 155 1600 130 L1600 190 L0 190Z" fill="#dcf0c8" opacity="0.7"/>
          </svg>
        </div>
      </section>

      {/* ══ WHO THIS IS FOR — dark forest band ══ */}
      <section className="cbt-audience-section">
        <div className="jj-inner">
          <div className="cbt-audience-inner reveal reveal-from-bottom">
            <p className="jj-section-tag">WHO THIS IS FOR</p>
            <h2 className="cbt-prose-h2">Built for Leaders Who Are Already Carrying a Lot</h2>
            <div className="cbt-audience-grid">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                  label: 'HR Directors',
                  sub: 'Managing people operations and culture',
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
                  label: 'CEOs & Executive Directors',
                  sub: 'Leading organizations under sustained pressure',
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
                  label: 'Department Leaders & Managers',
                  sub: 'Navigating team dynamics day to day',
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>,
                  label: 'Nonprofit Leaders',
                  sub: 'Serving others while managing staff sustainability',
                },
              ].map((item, i) => (
                <div key={i} className="cbt-audience-card">
                  <span className="cbt-audience-icon">{item.icon}</span>
                  <span className="cbt-audience-label">{item.label}</span>
                  <span className="cbt-audience-sub">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT THIS TRAINING HELPS — full bg image + icon-card grid ══ */}
      <section className="oah-help">
        <div className="oah-help-bg" aria-hidden="true">
          <img src="/Training/bg3.png" className="oah-help-bg-img" alt="" />
          <div className="oah-help-bg-overlay" />
        </div>

        <div className="oah-help-inner">

          <div className="oah-help-copy reveal reveal-from-left">
            <div className="oah-help-pill">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#3a6e2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 4 13V6a1 1 0 0 1 1-1h7a7 7 0 0 1 7 7 7 7 0 0 1-7 7z"/>
                <path d="M4 13c0 7 7 7 7 7"/>
              </svg>
              LEADERSHIP IMPACT
            </div>

            <h2 className="oah-help-headline">What This Training Helps Your Organization Do</h2>
            <div className="oah-help-rule" />

            <p className="oah-help-desc">
              Most organizations don&apos;t have a wellness problem. They have a leadership capacity problem that shows up as a wellness problem. When leaders don&apos;t have tools for managing their own stress, they can&apos;t accurately read what&apos;s happening in their teams. When managers avoid difficult conversations, small problems compound into ones that are much harder to unwind. And when culture sends the signal that struggling is a weakness, people hide what&apos;s happening until it becomes a crisis.
            </p>
            <p className="oah-help-desc">
              This training doesn&apos;t address those problems through awareness campaigns or generic wellness programming. It addresses them by giving your leadership the specific skills they&apos;re missing: how to recognize burnout in themselves and others before it becomes visible in turnover, how to approach the conversations they&apos;ve been avoiding, and how to build a culture where people don&apos;t have to choose between honesty and self-protection.
            </p>
          </div>

          <div className="oah-help-cards reveal reveal-from-right">
            <div className="oah-help-card">
              <span className="oah-help-card-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#3a6e2a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </span>
              <h3>Stronger Leadership Capacity</h3>
              <div className="oah-help-card-rule" />
              <p>Equip leaders with the skills to manage stress, navigate tough conversations, and lead with clarity and confidence.</p>
            </div>

            <div className="oah-help-card">
              <span className="oah-help-card-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#3a6e2a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z"/></svg>
              </span>
              <h3>Healthier, More Engaged Teams</h3>
              <div className="oah-help-card-rule" />
              <p>Address issues early, build trust, and create an environment where people feel supported and empowered to speak up.</p>
            </div>

            <div className="oah-help-card">
              <span className="oah-help-card-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#3a6e2a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </span>
              <h3>Reduced Turnover &amp; Burnout</h3>
              <div className="oah-help-card-rule" />
              <p>Recognize burnout early, address root causes, and create a culture where people want to stay and grow.</p>
            </div>

            <div className="oah-help-card">
              <span className="oah-help-card-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#3a6e2a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4.5 8-11.8A8 8 0 0 0 12 2a8 8 0 0 0-8 8.2C4 17.5 12 22 12 22z"/><polyline points="9 12 11 14 15 10"/></svg>
              </span>
              <h3>A Culture of Trust &amp; Honesty</h3>
              <div className="oah-help-card-rule" />
              <p>Build a workplace where people don&apos;t have to choose between honesty and self-protection.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ══ FEATURED TRAINING PROGRAMS — modern dark cards ══ */}
      <section className="oah-programs">
        <div className="oah-programs-glow" aria-hidden="true" />
        <div className="oah-programs-inner">

          <div className="oah-programs-header reveal reveal-from-bottom">
            <div>

              <div className="oah-help-pill">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#3a6e2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 4 13V6a1 1 0 0 1 1-1h7a7 7 0 0 1 7 7 7 7 0 0 1-7 7z"/>
                <path d="M4 13c0 7 7 7 7 7"/>
              </svg>
             Featured Programs
            </div>

              <h2 className="oah-programs-title">Four programs, <span>one purpose</span></h2>
            </div>
            <p className="oah-programs-sub">Each program addresses a specific leadership or culture challenge, not a generic topic list.</p>
          </div>

          <div className="oah-programs-grid reveal-stagger">
            {PROGRAMS.map((p, i) => (
              <div key={i} className="oah-program-card reveal reveal-from-bottom" data-num={`0${i + 1}`}>
                <div className="oah-program-icon">{p.icon}</div>
                <h3 className="oah-program-name">{p.name}</h3>
                <p className="oah-program-desc">{p.desc}</p>
                <div className="oah-program-tags">
                  {p.tags.map((tag, ti) => (
                    <span key={ti} className="oah-program-tag">{tag}</span>
                  ))}
                </div>
                <div className="oah-program-outcome">
                  <strong>Helps you</strong>
                  {p.outcome}
                </div>
                <Link href="/contact?training=leadership-workplace-wellness" className="oah-program-link">
                  Request info
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ MORE TOPICS — dark forest background, horizontal pill chips ══ */}
      <section className="jj-topics" style={{background:'#093129'}}>
        <div className="jj-inner jj-topics-content">
          <div className="reveal reveal-from-bottom">
            <h2 className="cbt-prose-h2" style={{color:'#fff', marginBottom:'2.5rem'}}>More Training We Cover</h2>
          </div>
          <div className="cbt-topic-groups reveal-stagger">
            {TOPIC_GROUPS.map((group, gi) => (
              <div key={gi} className="cbt-topic-group reveal reveal-from-bottom">
                <h3 className="cbt-topic-group-label">{group.label}</h3>
                <div className="cbt-topic-chips">
                  {group.topics.map((t, ti) => (
                    <div key={ti} className="cbt-topic-chip">
                      <span className="cbt-topic-chip-icon">{t.icon}</span>
                      <span>{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <svg className="jj-topics-wave-bottom" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 60 L0 25 Q180 0 360 35 Q540 60 720 20 Q900 0 1080 35 Q1260 60 1440 25 L1440 60Z" fill="#faf8f3"/>
        </svg>
      </section>

      {/* ══ CUSTOM TRAINING — cream ══ */}
      <section className="cbt-prose-section">
        <div className="jj-inner">
          <div className="cbt-prose-block reveal reveal-from-bottom">
            <p className="jj-section-tag">CUSTOM TRAINING</p>
            <h2 className="cbt-prose-h2">Every Session Starts With Your Organization</h2>
            <p>
              Every organization that lands on this page is dealing with some version of the same problem, but rarely the exact same version. That&apos;s why the first conversation isn&apos;t about picking a package. It&apos;s about what&apos;s actually happening on your team, what&apos;s already been tried, and what you want people to be able to do differently by the end of the session. Reach out and we&apos;ll talk through timing, format, and group size together.
            </p>
            <Link href="/contact?training=leadership-workplace-wellness" className="jj-btn jj-btn-dark" style={{marginTop:'1.5rem', display:'inline-flex'}}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Request Training Info
            </Link>
          </div>
        </div>
      </section>

      {/* ══ WHY JAMIE — arched photo, floating badge, video thumbnail ══ */}
      <section className="oah-jamie">
        <svg className="oah-jamie-dots" viewBox="0 0 130 90" fill="none" aria-hidden="true">
          {[0,1,2,3,4].map(row => [0,1,2,3,4,5,6,7].map(col => (
            <circle key={`jd-${row}-${col}`} cx={col*16+8} cy={row*16+8} r="2" fill="#c9d6be" />
          )))}
        </svg>

        <svg className="oah-jamie-wave" viewBox="0 0 1600 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 40 Q300 0 600 45 Q900 90 1200 40 Q1400 10 1600 35 L1600 90 L0 90Z" fill="#EDFFE1" opacity="0.6"/>
        </svg>

        <div className="oah-jamie-inner">

          <div className="oah-jamie-copy reveal reveal-from-left">
            <div className="oah-jamie-pill">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#3a6e2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              WHY JAMIE LEADS THIS TRAINING
            </div>

            <h2 className="oah-jamie-headline">
              She&apos;s Not Describing a Problem She Read About. She&apos;s Describing
              <span className="accent">One She&apos;s Managed</span>
            </h2>

            <p className="oah-jamie-body">
              Jamie James is a Licensed Professional Counselor and the founder of two active organizations: Open Arms Initiative and Open Arms Foster Care. Foster care is one of the more demanding environments in the child welfare system, where the stakes are high, resources are stretched, and staff burnout is a genuine operational risk. She manages that reality every day while also running a separate counseling and training organization.
            </p>

            <p className="oah-jamie-body">
              That&apos;s the perspective she brings into this training: a clinician&apos;s understanding of how burnout and stress actually show up in behavior, paired with a leader&apos;s understanding of what it actually takes to hold a team together under sustained pressure. When she talks about a manager who&apos;s avoiding a conversation, or a leadership team that&apos;s stopped functioning well together, she&apos;s not illustrating a concept. She&apos;s describing a pattern she&apos;s navigated firsthand.
            </p>

            <div className="oah-jamie-video-label">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#3a6e2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="16" height="12" rx="2"/><path d="M22 8l-4 3 4 3V8z"/></svg>
              WATCH JAMIE ON LEADERSHIP BURNOUT
            </div>
            <a href="https://www.youtube.com/watch?v=Hy-mRWM6zi0" target="_blank" rel="noopener noreferrer" className="oah-jamie-video-thumb" aria-label="Watch: Why Strong Leaders Feel Empty? High-Functioning Burnout">
              <img src="https://img.youtube.com/vi/Hy-mRWM6zi0/mqdefault.jpg" alt="Why Strong Leaders Feel Empty? High-Functioning Burnout, Jamie James" className="oah-jamie-video-photo" />
              <span className="oah-jamie-video-play"><svg viewBox="0 0 24 24" width="15" height="15" fill="#fff"><polygon points="5,3 19,12 5,21"/></svg></span>
              <div className="oah-jamie-video-info">
                <p className="oah-jamie-video-title">Why Strong Leaders Feel Empty?</p>
                <p className="oah-jamie-video-sub">High-Functioning Burnout Explained</p>
                <div className="oah-jamie-video-brand">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M11 20A7 7 0 0 1 4 13V6a1 1 0 0 1 1-1h7a7 7 0 0 1 7 7 7 7 0 0 1-7 7z"/></svg>
                  openarms
                </div>
              </div>
            </a>

            <Link href="/training/jamie-james" className="oah-jamie-cta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Continue Reading About Jamie
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          </div>

          <div className="oah-jamie-photo-col reveal reveal-from-right">
            <div className="oah-jamie-arch-ring" aria-hidden="true" />
            <div className="oah-jamie-arch">
              <img src="/Jamie/image (18).png" alt="Jamie James, LPC" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top'}} />
            </div>

            <div className="oah-jamie-floatcard">
              <div className="oah-jamie-floatcard-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#3a6e2a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13V6a1 1 0 0 1 1-1h7a7 7 0 0 1 7 7 7 7 0 0 1-7 7z"/><path d="M4 13c0 7 7 7 7 7"/></svg>
              </div>
              <div>
                <p className="oah-jamie-floatcard-title">Clinician. Leader. Advocate.</p>
                <p className="oah-jamie-floatcard-sub">Real-world experience that shapes real change.</p>
              </div>
            </div>

            <div className="oah-jamie-badge-circle">
              <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z"/>
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* ══ FORMATS — dark band ══ */}
      <section className="cbt-prose-section cbt-prose-section--dark">
        <div className="jj-inner">
          <div className="cbt-prose-block reveal reveal-from-bottom">
            <p className="jj-section-tag">TRAINING &amp; SPEAKING FORMATS</p>
            <h2 className="cbt-prose-h2">Format Is Matched to What Works for Your Team</h2>
            <p>
              Every organization&apos;s situation is different, and session format is matched to what actually works for your team. Reach out and we&apos;ll figure out the right length, setting, and structure together.
            </p>
          </div>
        </div>
      </section>

      {/* ══ WHY ORGANIZATIONS CHOOSE — cream ══ */}
      <section className="jj-why" style={{background:'#faf8f3'}}>
        <div className="jj-inner">
          <div className="jj-why-header reveal reveal-from-bottom">
            <h2 className="jj-why-title">Why Organizations Choose Open Arms Initiative</h2>
            <p className="jj-why-sub">Training grounded in clinical practice and real organizational leadership.</p>
          </div>
          <div className="jj-why-cards reveal-stagger">
            {[
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#3a6e2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="34" height="34"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><polyline points="9 12 11 14 15 10"/></svg>,
                title: 'Led by a Licensed Clinician',
                desc: "A licensed professional counselor with clinical training in how stress and trauma actually affect behavior, not just leadership theory.",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#3a6e2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="34" height="34"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
                title: 'Built for Your Specific Situation',
                desc: "Sessions are shaped around what's actually happening in your organization, not a fixed curriculum delivered the same way to every room.",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#3a6e2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="34" height="34"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: 'Organizational Leadership Experience',
                desc: "Jamie runs two organizations, so she understands the constraints, dynamics, and pressures leaders are managing when she walks into a room.",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#3a6e2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="34" height="34"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
                title: 'Practical Tools, Not Just Concepts',
                desc: "Leaders leave with specific frameworks they can use, not just a better understanding of why the problem exists.",
              },
            ].map((c, i) => (
              <div key={i} className="jj-why-card reveal reveal-from-bottom">
                <span className="jj-why-card-icon">{c.icon}</span>
                <h3 className="jj-why-card-title">{c.title}</h3>
                <p className="jj-why-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ — two-column dark left / white right ══ */}
      <section className="cbt-faq-section">
        <div className="cbt-faq-inner">

          {/* Left dark panel */}
          <div className="cbt-faq-header reveal reveal-from-left">
            <p className="jj-section-tag">FAQ</p>
            <h2 className="cbt-prose-h2">Frequently Asked Questions</h2>
            <p className="cbt-faq-header-sub">
              Can&apos;t find your answer here? Reach out directly and we&apos;ll respond to whatever&apos;s on your mind.
            </p>
            <Link href="/contact?training=leadership-workplace-wellness" className="jj-btn jj-btn-accent" style={{marginTop:'1.5rem', display:'inline-flex'}}>
              Ask a Question
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>

          {/* Right accordion — only one open at a time */}
          <FaqList />

        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="jj-cta">
        <div className="jj-cta-inner reveal reveal-from-bottom">
          <div>
            <h2 className="jj-cta-title">Tell Us About Your Team</h2>
            <p className="jj-cta-sub">Whatever is happening in your organization right now, the first step is just telling us about it.</p>
          </div>
          <Link href="/contact?training=leadership-workplace-wellness" className="jj-btn jj-btn-accent">
            Tell Us About Your Team
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      {/* ══ MOBILE STICKY CTA ══ */}
      <div className={`cbt-sticky-bar${showStickyBar ? ' cbt-sticky-bar--visible' : ''}`} aria-hidden={!showStickyBar}>
        <Link href="/contact?training=leadership-workplace-wellness" className="jj-btn jj-btn-accent cbt-sticky-btn">
          Request Training Info
        </Link>
      </div>

      <style>{`
        .oab-burnout{
          position:relative;
          background:#FBFBF6;
          overflow:hidden;
          padding:70px 0 0;
        }
        .oab-burnout-dots{
          position:absolute;
          top:24px;
          right:26%;
          width:110px;
          opacity:0.7;
          z-index:1;
          pointer-events:none;
        }
        .oab-burnout-leaf{
          position:absolute;
          left:-40px;
          bottom:70px;
          width:220px;
          opacity:0.9;
          z-index:5;
          pointer-events:none;
        }
        .oab-burnout-inner{
          position:relative;
          z-index:2;
          display:grid;
          grid-template-columns:0.95fr 1.2fr;
          align-items:stretch;
          gap:0;
          max-width:1600px;
          margin:0 auto;
        }
        .oab-burnout-copy{
          padding:20px 60px 100px 80px;
        }
        .oab-burnout-pill{
          display:inline-flex;
          align-items:center;
          gap:8px;
          background:#EDFFE1;
          color:#3a6e2a;
          border:1px solid rgba(141,197,64,0.35);
          font-size:11.5px;
          font-weight:700;
          letter-spacing:0.04em;
          padding:8px 16px 8px 14px;
          border-radius:30px;
          margin-bottom:22px;
        }
        .oab-burnout-headline{
          font-family:'Plus Jakarta Sans', sans-serif;
          font-weight:600;
          color:#052E26;
          font-size:34px;
          line-height:1.2;
          margin:0 0 18px;
          max-width:460px;
        }
        .oab-burnout-rule{
          width:56px;
          height:3px;
          background:#8DC540;
          border-radius:4px;
          margin-bottom:22px;
        }
        .oab-burnout-desc{
          color:#586a60;
          font-size:14.5px;
          line-height:1.7;
          max-width:480px;
          margin-bottom:28px;
        }
        .oab-burnout-rows{
          display:flex;
          flex-direction:column;
          gap:12px;
          margin-bottom:22px;
        }
        .oab-burnout-row{
          display:flex;
          align-items:flex-start;
          gap:16px;
          background:#F6F8F1;
          border-radius:12px;
          padding:16px 18px;
        }
        .oab-burnout-row-icon{
          width:48px;height:48px;
          border-radius:50%;
          background:#EDFFE1;
          display:flex;align-items:center;justify-content:center;
          flex:none;
        }
        .oab-burnout-row h3{
          font-family:'Plus Jakarta Sans', sans-serif;
          font-size:15.5px;
          font-weight:700;
          color:#052E26;
          margin:0 0 4px;
        }
        .oab-burnout-row p{
          font-size:13px;
          color:#5f7168;
          line-height:1.5;
          margin:0;
        }
        .oab-burnout-quote{
          display:flex;
          align-items:flex-start;
          gap:16px;
          background:#052E26;
          border-radius:14px;
          padding:22px 24px;
        }
        .oab-burnout-quote-icon{
          width:44px;height:44px;
          border-radius:50%;
          background:#0e4638;
          display:flex;align-items:center;justify-content:center;
          flex:none;
        }
        .oab-burnout-quote p{
          color:#eaf4e2;
          font-size:14px;
          line-height:1.6;
          margin:0;
        }
        .oab-burnout-photo-col{
          position:relative;
          min-height:700px;
        }
        .oab-burnout-blob{
          position:absolute;
          top:0;
          left:-6%;
          right:0;
          bottom:0;
          clip-path: url(#oab-blob-clip);
          overflow:hidden;
          background:#0e2418;
        }
        .oab-burnout-blob-img{
          width:100%;
          height:100%;
          object-fit:cover;
          object-position: center 15%;
          display:block;
        }
        .oab-burnout-wave-wrap{
          position:relative;
          z-index:4;
          margin-top:-140px;
        }
        .oab-burnout-wave{
          display:block;
          width:100%;
          height:190px;
        }
        @media(max-width:1100px){
          .oab-burnout-inner{ grid-template-columns:1fr; }
          .oab-burnout-copy{ padding:20px 32px 40px; }
          .oab-burnout-photo-col{ min-height:420px; }
          .oab-burnout-blob{ left:0; clip-path:none; border-radius:40px; margin:0 24px; }
          .oab-burnout-wave-wrap{ margin-top:20px; }
          .oab-burnout-wave{ height:80px; }
        }
        @media(max-width:600px){
          .oab-burnout-headline{ font-size:26px; }
          .oab-burnout-row{ flex-direction:column; align-items:flex-start; }
        }

        .oah-help{
          position:relative;
          overflow:hidden;
          padding:80px 0 110px;
        }
        .oah-help-bg{
          position:absolute;
          inset:0;
          z-index:0;
        }
        .oah-help-bg-img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }
        .oah-help-bg-overlay{
          position:absolute;
          inset:0;
          background:rgba(251, 251, 246, 0.88);
        }
        .oah-help-inner{
          position:relative;
          z-index:2;
          display:grid;
          grid-template-columns:0.85fr 1.15fr;
          gap:60px;
          align-items:center;
          max-width:1400px;
          margin:0 auto;
          padding:0 60px;
        }
        .oah-help-pill{
          display:inline-flex;
          align-items:center;
          gap:8px;
          background:#EDFFE1;
          color:#3a6e2a;
          border:1px solid rgba(141,197,64,0.35);
          font-size:11.5px;
          font-weight:700;
          letter-spacing:0.04em;
          padding:8px 16px 8px 14px;
          border-radius:30px;
          margin-bottom:22px;
        }
        .oah-help-headline{
          font-family:'Plus Jakarta Sans', sans-serif;
          font-weight:600;
          color:#052E26;
          font-size:32px;
          line-height:1.2;
          margin:0 0 18px;
          max-width:420px;
        }
        .oah-help-rule{
          width:56px;
          height:3px;
          background:#8DC540;
          border-radius:4px;
          margin-bottom:24px;
        }
        .oah-help-desc{
          color:#3d4a44;
          font-size:14.5px;
          line-height:1.7;
          max-width:480px;
          margin-bottom:18px;
        }
        .oah-help-cards{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }
        .oah-help-card{
          background:rgba(255,255,255,0.85);
          border-radius:14px;
          padding:28px 22px;
          text-align:center;
        }
        .oah-help-card-icon{
          width:56px;height:56px;
          border-radius:50%;
          background:#EDFFE1;
          display:flex;align-items:center;justify-content:center;
          margin:0 auto 16px;
        }
        .oah-help-card h3{
          font-family:'Plus Jakarta Sans', sans-serif;
          font-size:16px;
          font-weight:700;
          color:#052E26;
          margin:0 0 10px;
          line-height:1.3;
        }
        .oah-help-card-rule{
          width:28px;
          height:2px;
          background:#8DC540;
          border-radius:4px;
          margin:0 auto 12px;
        }
        .oah-help-card p{
          font-size:13px;
          color:#5f7168;
          line-height:1.55;
          margin:0;
        }
        @media(max-width:1100px){
          .oah-help-inner{ grid-template-columns:1fr; padding:0 32px; }
        }
        @media(max-width:600px){
          .oah-help-headline{ font-size:26px; }
          .oah-help-cards{ grid-template-columns:1fr; }
        }

        .oah-programs{
          position:relative;
          background:#052E26;
          padding:100px 0;
          overflow:hidden;
        }
        .oah-programs-glow{
          position:absolute;
          top:-200px;
          right:-100px;
          width:600px;
          height:600px;
          background:radial-gradient(circle, rgba(141,197,64,0.15) 0%, transparent 70%);
          pointer-events:none;
        }
        .oah-programs-inner{
          position:relative;
          z-index:2;
          max-width:1320px;
          margin:0 auto;
          padding:0 40px;
        }
        .oah-programs-header{
          display:flex;
          justify-content:space-between;
          align-items:flex-end;
          flex-wrap:wrap;
          gap:24px;
          margin-bottom:60px;
        }
        .oah-programs-eyebrow{
          display:inline-flex;
          align-items:center;
          gap:8px;
          color:#8DC540;
          font-size:12px;
          font-weight:700;
          letter-spacing:0.12em;
          text-transform:uppercase;
          margin-bottom:14px;
        }
        .oah-programs-eyebrow::before{
          content:'';
          width:24px;
          height:2px;
          background:#8DC540;
        }
        .oah-programs-title{
          font-family:'Inter', sans-serif;
          font-weight:800;
          color:#fff;
          font-size:38px;
          line-height:1.1;
          letter-spacing:-0.02em;
          max-width:520px;
        }
        .oah-programs-title span{
          color:#8DC540;
        }
        .oah-programs-sub{
          color:rgba(255,255,255,0.55);
          font-size:14.5px;
          line-height:1.6;
          max-width:280px;
        }
        .oah-programs-grid{
          display:grid;
          grid-template-columns:repeat(4, 1fr);
          gap:20px;
        }
        .oah-program-card{
          position:relative;
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:20px;
          padding:32px 26px;
          display:flex;
          flex-direction:column;
          overflow:hidden;
          transition:transform .3s cubic-bezier(.2,.8,.2,1), border-color .3s ease, background .3s ease;
        }
        .oah-program-card:hover{
          transform:translateY(-6px);
          border-color:rgba(141,197,64,0.5);
          background:rgba(255,255,255,0.06);
        }
        .oah-program-card::before{
          content:attr(data-num);
          position:absolute;
          top:-10px;
          right:-6px;
          font-family:'Inter', sans-serif;
          font-weight:800;
          font-size:90px;
          line-height:1;
          color:rgba(255,255,255,0.035);
          letter-spacing:-0.04em;
          pointer-events:none;
        }
        .oah-program-icon{
          width:52px;height:52px;
          border-radius:14px;
          background:linear-gradient(135deg, #8DC540, #6ba82f);
          display:flex;align-items:center;justify-content:center;
          margin-bottom:24px;
          position:relative;
          z-index:1;
          box-shadow:0 8px 20px rgba(141,197,64,0.25);
          color:#052E26;
        }
        .oah-program-name{
          font-size:18px;
          font-weight:700;
          color:#fff;
          line-height:1.3;
          margin:0 0 12px;
          position:relative;
          z-index:1;
          min-height:47px;
        }
        .oah-program-desc{
          font-size:13.5px;
          color:rgba(255,255,255,0.55);
          line-height:1.65;
          margin:0 0 22px;
          position:relative;
          z-index:1;
        }
        .oah-program-tags{
          display:flex;
          flex-wrap:wrap;
          gap:6px;
          margin-bottom:22px;
          position:relative;
          z-index:1;
        }
        .oah-program-tag{
          font-size:10.5px;
          font-weight:600;
          color:#c9e3ae;
          background:rgba(141,197,64,0.12);
          border:1px solid rgba(141,197,64,0.25);
          padding:5px 10px;
          border-radius:20px;
        }
        .oah-program-outcome{
          font-size:12.5px;
          color:rgba(255,255,255,0.75);
          line-height:1.55;
          padding-top:18px;
          border-top:1px solid rgba(255,255,255,0.08);
          margin-bottom:20px;
          margin-top:auto;
          position:relative;
          z-index:1;
        }
        .oah-program-outcome strong{
          display:block;
          color:#8DC540;
          font-size:10px;
          font-weight:700;
          letter-spacing:0.08em;
          text-transform:uppercase;
          margin-bottom:6px;
        }
        .oah-program-link{
          display:inline-flex;
          align-items:center;
          justify-content:space-between;
          width:100%;
          font-size:13.5px;
          font-weight:700;
          color:#fff;
          text-decoration:none;
          padding:12px 16px;
          border-radius:10px;
          background:rgba(255,255,255,0.06);
          transition:background .2s ease;
          position:relative;
          z-index:1;
        }
        .oah-program-link:hover{
          background:#8DC540;
          color:#052E26;
        }
        .oah-program-link:hover svg{
          stroke:#052E26;
          transform:translateX(3px);
        }
        .oah-program-link svg{
          stroke:#8DC540;
          transition:transform .2s ease, stroke .2s ease;
        }
        @media(max-width:1100px){
          .oah-programs-grid{ grid-template-columns:1fr 1fr; }
        }
        @media(max-width:600px){
          .oah-programs-grid{ grid-template-columns:1fr; }
          .oah-programs-title{ font-size:28px; }
          .oah-programs-header{ flex-direction:column; align-items:flex-start; }
        }

        .oah-jamie{
          position:relative;
          background:#FBFBF6;
          overflow:hidden;
          padding:70px 0 100px;
        }
        .oah-jamie-dots{
          position:absolute;
          top:24px;
          right:24px;
          width:130px;
          opacity:0.6;
          z-index:1;
          pointer-events:none;
        }
        .oah-jamie-wave{
          position:absolute;
          left:0; right:0; bottom:0;
          height:90px;
          z-index:0;
        }
        .oah-jamie-inner{
          position:relative;
          z-index:2;
          display:grid;
          grid-template-columns:0.95fr 1fr;
          gap:60px;
          align-items:center;
          max-width:1400px;
          margin:0 auto;
          padding:0 60px;
        }
        .oah-jamie-pill{
          display:inline-flex;
          align-items:center;
          gap:8px;
          background:#EDFFE1;
          color:#3a6e2a;
          border:1px solid rgba(141,197,64,0.35);
          font-size:11.5px;
          font-weight:700;
          letter-spacing:0.05em;
          padding:8px 16px 8px 14px;
          border-radius:30px;
          margin-bottom:24px;
        }
        .oah-jamie-headline{
          font-family:'Plus Jakarta Sans', sans-serif;
          font-weight:700;
          color:#052E26;
          font-size:33px;
          line-height:1.28;
          margin:0 0 22px;
        }
        .oah-jamie-headline .accent{
          display:block;
          font-style:italic;
          color:#3a6e2a;
          position:relative;
          width:fit-content;
        }
        .oah-jamie-headline .accent::after{
          content:'';
          position:absolute;
          left:0; right:0; bottom:-6px;
          height:2px;
          background:#8DC540;
          opacity:0.6;
        }
        .oah-jamie-body{
          color:#4a5750;
          font-size:14.5px;
          line-height:1.75;
          margin-bottom:16px;
          max-width:560px;
        }
        .oah-jamie-video-label{
          display:flex;
          align-items:center;
          gap:8px;
          font-size:12px;
          font-weight:700;
          letter-spacing:0.05em;
          color:#052E26;
          margin:26px 0 12px;
        }
        .oah-jamie-video-thumb{
          position:relative;
          display:flex;
          align-items:center;
          gap:20px;
          background:linear-gradient(120deg, #14351f, #0a2015);
          border-radius:14px;
          padding:18px;
          max-width:520px;
          overflow:hidden;
          text-decoration:none;
          cursor:pointer;
        }
        .oah-jamie-video-photo{
          width:160px;
          height:110px;
          border-radius:10px;
          object-fit:cover;
          flex:none;
          background:linear-gradient(140deg,#3a5540,#1a2e1c);
        }
        .oah-jamie-video-play{
          position:absolute;
          left:160px;
          transform:translateX(-50%);
          width:38px;height:38px;
          border-radius:50%;
          background:rgba(255,255,255,0.15);
          border:1.5px solid rgba(255,255,255,0.5);
          display:flex;align-items:center;justify-content:center;
        }
        .oah-jamie-video-info{
          color:#fff;
        }
        .oah-jamie-video-title{
          font-size:14px;
          font-weight:700;
          line-height:1.3;
          margin:0 0 4px;
        }
        .oah-jamie-video-sub{
          font-size:12px;
          color:#a8c99a;
          line-height:1.4;
          margin:0 0 8px;
        }
        .oah-jamie-video-brand{
          display:flex;
          align-items:center;
          gap:5px;
          font-size:11px;
          font-weight:700;
          color:rgba(255,255,255,0.6);
        }
        .oah-jamie-video-brand svg{ width:14px; height:14px; }
        .oah-jamie-cta{
          display:inline-flex;
          align-items:center;
          gap:10px;
          background:#052E26;
          color:#fff;
          font-size:14px;
          font-weight:600;
          padding:14px 24px;
          border-radius:8px;
          margin-top:24px;
          text-decoration:none;
        }
        .oah-jamie-cta svg{ width:15px; height:15px; }
        .oah-jamie-photo-col{
          position:relative;
          display:flex;
          align-items:center;
          justify-content:center;
          min-height:600px;
        }
        .oah-jamie-arch-ring{
          position:absolute;
          inset:-14px;
          border:1px solid rgba(141,197,64,0.3);
          border-radius:220px 220px 40px 40px;
          z-index:0;
        }
        .oah-jamie-arch{
          position:relative;
          width:100%;
          max-width:440px;
          height:560px;
          border-radius:220px 220px 40px 40px;
          overflow:hidden;
          z-index:1;
          background:linear-gradient(150deg,#cbb89a,#8a7458 60%,#5c4c38);
        }
        .oah-jamie-arch-placeholder{
          position:absolute;inset:0;
          display:flex;align-items:center;justify-content:center;
          color:rgba(255,255,255,0.6);
          font-size:13px;text-align:center;padding:40px;
        }
        .oah-jamie-floatcard{
          position:absolute;
          left:-30px;
          bottom:70px;
          background:#fff;
          border-radius:16px;
          box-shadow:0 20px 45px rgba(9,49,41,0.15);
          padding:16px 22px 16px 16px;
          display:flex;
          align-items:center;
          gap:14px;
          z-index:3;
          max-width:300px;
        }
        .oah-jamie-floatcard-icon{
          width:52px;height:52px;
          border-radius:50%;
          background:#EDFFE1;
          display:flex;align-items:center;justify-content:center;
          flex:none;
        }
        .oah-jamie-floatcard-title{
          font-size:14px;
          font-weight:700;
          color:#052E26;
          margin:0 0 4px;
          line-height:1.3;
        }
        .oah-jamie-floatcard-sub{
          font-size:12px;
          color:#5f7168;
          line-height:1.4;
          margin:0;
        }
        .oah-jamie-badge-circle{
          position:absolute;
          right:-24px;
          bottom:-10px;
          width:82px;height:82px;
          border-radius:50%;
          background:#3a6e2a;
          border:4px solid #fff;
          display:flex;align-items:center;justify-content:center;
          z-index:4;
          box-shadow:0 10px 24px rgba(9,49,41,0.25);
        }
        @media(max-width:1100px){
          .oah-jamie-inner{ grid-template-columns:1fr; padding:0 32px; }
          .oah-jamie-photo-col{ margin-top:40px; min-height:auto; }
          .oah-jamie-arch{ height:420px; max-width:340px; }
          .oah-jamie-floatcard{ left:0; bottom:-20px; max-width:260px; }
          .oah-jamie-badge-circle{ right:0; bottom:-40px; }
        }
        @media(max-width:600px){
          .oah-jamie-headline{ font-size:26px; }
        }
      `}</style>

    </main>
  );
}