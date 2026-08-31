'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const ABOUT_VIDEO_ID = 'IkwbPsOvdHU';

const trustIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5c0 4.7-4 8.5-9 8.5a9.5 9.5 0 0 1-3.2-.55L4 21l1.4-3.9A8.4 8.4 0 0 1 3 11.5C3 6.8 7 3 12 3s9 3.8 9 8.5Z" /><path d="m8.5 11.7 2.2 2.2 4.8-4.8" /></svg>,
];

const growIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21V10" /><path d="M12 10C12 6 9 4 5 4c0 4 2 6.5 7 6" /><path d="M12 14c0-3.5 2.5-5.5 6-5.5-.2 3.5-2 5.5-6 5.5Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.2s5.5 6.7 5.5 11a5.5 5.5 0 0 1-11 0c0-4.3 5.5-11 5.5-11Z" /><path d="M9.3 15.2a2.7 2.7 0 0 0 2.7 2.7" strokeDasharray="1.3 1.8" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20.5h16" /><path d="M8 20.5V13a4 4 0 0 1 8 0v7.5" /><path d="M12 13V6.5" strokeDasharray="1.3 1.8" /><path d="M9 8.5 12 6.5l3 2" /></svg>,
];

const believeIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8.5" r="3.4" /><path d="M5 20.5c0-3.6 3.1-6 7-6s7 2.4 7 6" strokeDasharray="1.4 1.8" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m20 20-4.3-4.3" /><path d="M7.5 10.5h6M10.5 7.5v6" strokeDasharray="1.6 2.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="8" width="17" height="12" rx="2" /><path d="M8 8V6a4 4 0 0 1 8 0v2" /><path d="M12 12v4" strokeDasharray="1.2 1.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5c0 4.7-4 8.5-9 8.5a9.5 9.5 0 0 1-3.2-.55L4 21l1.4-3.9A8.4 8.4 0 0 1 3 11.5C3 6.8 7 3 12 3s9 3.8 9 8.5Z" /><path d="m8.5 11.7 2.2 2.2 4.8-4.8" /></svg>,
];

const kindsIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /><path d="M9.5 10.2h5" strokeDasharray="1.3 1.7" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5c0 4.7-4 8.5-9 8.5a9.5 9.5 0 0 1-3.2-.55L4 21l1.4-3.9A8.4 8.4 0 0 1 3 11.5C3 6.8 7 3 12 3s9 3.8 9 8.5Z" /><path d="m8.5 11.7 2.2 2.2 4.8-4.8" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10.5" width="16" height="10" rx="2" /><path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" /></svg>,
];

const pillarIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="8" width="17" height="12" rx="2" /><path d="M8 8V6a4 4 0 0 1 8 0v2" /><path d="M12 12v4" strokeDasharray="1.2 1.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8.5" r="3.4" /><path d="M5 20.5c0-3.6 3.1-6 7-6s7 2.4 7 6" strokeDasharray="1.4 1.8" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5c0 4.7-4 8.5-9 8.5a9.5 9.5 0 0 1-3.2-.55L4 21l1.4-3.9A8.4 8.4 0 0 1 3 11.5C3 6.8 7 3 12 3s9 3.8 9 8.5Z" /><path d="m8.5 11.7 2.2 2.2 4.8-4.8" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
];

const growth = [
  ['Plant', 'the possibility of hope.', 'Sometimes reaching out, asking a question, attending a counseling session, or learning something new is where change begins.'],
  ['Water', 'support growth with compassion, knowledge, consistency, and care.', 'Meaningful change often needs an environment where people feel safe enough to learn, reflect, and try again.'],
  ['Grow', 'in whatever way is true for you.', 'It may mean communicating differently, understanding yourself better, creating healthier relationships, feeling more confident as a parent, or simply recognizing that you don’t have to navigate everything alone.'],
];

const beliefs = [
  ['Compassion Before Judgment', 'Every person has experiences we may not immediately see. We begin by listening.'],
  ['People Are More Than Their Difficult Moments', 'A diagnosis, difficult season, family conflict, past experience, or challenging behavior does not define an entire person.'],
  ['Families Deserve Support Too', 'When one person is struggling, the impact can reach parents, partners, children, caregivers, and other relationships. That’s why our work often considers the broader family.'],
  ['Understanding Can Change How We Respond', 'Trauma-informed care encourages us to look beyond “What’s wrong?” and consider “What happened, what is this person experiencing, and what might they need?”'],
  ['Support Should Be More Accessible', 'Financial circumstances and other barriers can make mental health support difficult to access. Our nonprofit mission includes helping expand access through community-focused services and pro bono counseling opportunities.'],
  ['Stronger People Help Build Stronger Communities', 'Mental health and family well-being don’t exist in isolation. Supporting individuals and families is part of strengthening the community we all share.'],
];

const kinds = [
  ['Counseling & Therapy', 'Compassionate counseling for adults, children, adolescents, couples, and families navigating emotional, relational, and life challenges.', 'Explore Counseling Services', '/adult-counseling-oklahoma-city/'],
  ['Foster Care & Adoption Support', 'Training, counseling, guidance, and ongoing support for foster and adoptive families.', 'Explore Foster Family Support', '/foster-care/'],
  ['Family & Parenting Support', 'Education, resources, parenting support, and family-focused guidance designed to strengthen relationships and caregiver confidence.', 'Explore Family Support', '/family-support-services-oklahoma-city/'],
  ['Pro Bono Counseling', 'Counseling opportunities designed to reduce financial barriers for eligible individuals and families, subject to program requirements and availability.', 'Explore Pro Bono Counseling', '/pro-bono-counseling-okc/'],
  ['Community Education & Outreach', 'Educational initiatives that help individuals, families, professionals, and community groups better understand mental health, trauma, relationships, and supportive care.', 'Explore Training & Workshops', '/parenting-classes-okc/'],
];

const pillars = [
  ['Trauma-Informed', 'We recognize that experiences can influence how people feel, communicate, build relationships, and respond to the world around them.'],
  ['Whole-Person Focused', 'You are more than a symptom or a difficult season. Our approach considers the person, their experiences, strengths, relationships, and goals.'],
  ['Family-Centered', 'Children don’t exist separately from their caregivers. Adults don’t exist separately from their relationships. Where appropriate, we consider the people and environments surrounding an individual.'],
  ['Rooted in Community', 'Our work extends beyond the counseling room through foster support, education, family resources, outreach, and accessible care.'],
  ['Built Around Human Connection', 'Programs and professional knowledge matter. But people also need to feel heard. Connection is at the center of what we do.'],
];

const leadership = [
  { name: 'Jamie James - LPC', title: 'President & Founder', photo: '/Jamie James - LPC.jpg' },
  { name: "D'Fawn Downs - LPC", title: 'Corporate Compliance Officer & Clinical Director', photo: "/D'Fawn Downs - LPC.jpg" },
  { name: 'Brandon Martin', title: 'CFO', photo: '/Brandon Martin.jpg' },
];

const clinicalTeam = [
  { name: 'Jessena Varghese - LPC', title: 'Clinical Director', photo: '/Jessena Varghese - LPC.jpg' },
  { name: 'Henri Jo Ball - LPC', title: 'Therapist', photo: '/Henri.jpg' },
  { name: 'Emeka Nnaka - LPC', title: 'Therapist', photo: '/Emeka Nnaka - LPC.jpg' },
  { name: 'Brenda Mitchell - LPC', title: 'Therapist', photo: '/Brenda Mitchell - LPC.jpg' },
  { name: 'Karli Burch - LPC', title: 'Therapist', photo: '/Karli Burch - LPC.jpg' },
  { name: 'Lori Baker LMFT-S', title: 'Therapist', photo: '/lori.jpg' },
  { name: 'Breanna White - LPC', title: 'Therapist', photo: '/Breanna White - LPC.jpg' },
  { name: 'Rebekah Thomas LPC-C', title: 'Therapist', photo: '/rebekah.jpg' },
  { name: 'Jamira Alexander', title: 'Therapist', photo: '/Jamira Alexander.jpg' },
  { name: 'Victori Swinford', title: 'Therapist', photo: '/Victori.jpg' },
  { name: 'Mattea Lear', title: 'Therapist', photo: '/Mattea.jpg' },
];

const fosterTeam = [
  { name: 'Amber Price', title: 'Director of Foster Care', photo: '/Amber Price.jpg' },
  { name: 'Stephanie Caldwell', title: 'Parent Relations Director', photo: '/Stephanie Caldwell.jpg' },
];

const adminTeam = [
  { name: 'Chloe Burke', title: 'Lead Admin', photo: '/Chloe Burke.jpg' },
  { name: 'Destinee Curry', title: 'Administrative Assistant', photo: '/Destinee Curry.jpg' },
  { name: 'Kamryn Bass', title: 'Administrative Assistant', photo: '/Kamryn-Bass.jpg' },
  { name: 'Stephanie Vaughn', title: 'Billing & Placement Specialist', photo: '/Stephanie Vaughn.jpg' },
];

function TeamGrid({ members, size = 'md' }) {
  return (
    <div className={`oa-team-grid oa-team-grid-${size} reveal-stagger`}>
      {members.map((m) => (
        <div className="oa-team-card reveal reveal-from-bottom" key={m.name}>
          <div className="oa-team-photo-wrap"><img src={m.photo} alt={m.name} className="oa-team-photo" loading="lazy" /></div>
          <div className="oa-team-caption">
            <h3>{m.name}</h3>
            <p>{m.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AboutClient() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <main className="fs-page oa-about-page">
      <ScrollReveal />

      {/* Hero */}
      <section className="fs-hero oa-about-hero"><div className="fs-container oa-about-hero-inner">
        <div className="fs-hero-copy reveal reveal-from-left oa-about-hero-copy">
          <p className="fs-kicker">COMPASSION. CONNECTION. GROWTH.</p>
          <h1>Open Arms for Every Story. Support for Every Step Forward.</h1>
          <p>Behind every person who reaches out is a story.</p>
          <p>A parent trying to help their child. An adult carrying more than others can see. A family learning how to communicate again. A foster caregiver trying to create safety and connection. Someone simply hoping life can feel different.</p>
          <p>At Open Arms Initiative, we believe people deserve to be met with compassion, dignity, and understanding, not judgment.</p>
          <p>Through counseling, family and foster support, education, and community-focused programs, we&rsquo;re here to help individuals and families find support for where they are today and hope for where they&rsquo;re going next.</p>
          <div className="fs-actions"><Link href="/contact" className="fs-btn fs-solid">Connect With Open Arms</Link><Link href="/#services" className="fs-btn fs-outline">Explore Our Services</Link></div>
        </div>
      </div></section>

      <section className="fs-trust-section"><div className="fs-container fs-trust">{['Trauma-Informed', 'Family Focused', 'Community Driven', 'Compassionate Care'].map((x, i) => <div key={x}><span>{trustIcons[i]}</span><p>{x}</p></div>)}</div></section>

      {/* Why Open Arms Exists */}
      <section className="fs-section fs-alone-parenting oa-why-section"><div className="fs-alone reveal reveal-from-bottom">
        <h2>Why Open Arms Exists</h2>
        <i className="fs-alone-leaf"><span className="fs-alone-leaf-dot" /></i>
        <p>Sometimes people know they need help but don&apos;t know where to find it.</p>
        <p>Sometimes families are doing everything they can and still need additional support.</p>
        <p>Sometimes financial circumstances, fear, uncertainty, or simply not knowing where to begin can keep someone from reaching out.</p>
        <p>Open Arms Initiative exists to help make that first step feel more possible.</p>
        <p>We bring together mental health counseling, family support, foster-care services, education, and community resources with one shared purpose: <strong>to help people feel supported while they navigate life&rsquo;s challenges and build toward what comes next.</strong></p>
        <p><strong>We aren&apos;t here to define what your life or family should look like. We&apos;re here to meet you where you are.</strong></p>
      </div></section>

      {/* Mission */}
      <section className="fs-section oa-mission-section"><div className="fs-container">
        <div className="oa-mission-grid">
          <div className="reveal reveal-from-left">
            <p className="fs-kicker-label">OUR MISSION</p>
            <h2>Helping Individuals and Families Find Support, Strength, and Hope</h2>
            <p>Our mission is to provide compassionate, trauma-informed support that recognizes the whole person, not simply the challenge that brought them through our doors.</p>
            <p>We work with individuals, children, couples, parents, foster caregivers, and families while also investing in education and resources that can strengthen the wider community.</p>
            <p>Because when one person receives meaningful support, the impact can reach much further.</p>
            <p className="oa-mission-note"><strong>Healthier individuals</strong> can strengthen families.<br /><strong>Stronger families</strong> can strengthen communities.</p>
          </div>
          <div className="oa-mission-media reveal reveal-from-right">
            <img src="/making-the-most-of-marriage-counseling-shutterstock-2377029067-66db63c16e3a6 (1).webp" alt="Couple finding support and connection at Open Arms Initiative" />
          </div>
        </div>
      </div></section>

      {/* Video */}
      <section className="fs-section oa-video-section">
        <div className="fs-container">
          <div className="oa-video-head reveal reveal-from-bottom">
            <h2 className="fs-center">See the Heart Behind Open Arms</h2><i className="fs-line-center" />
            <p className="pc-process-lead">Some stories are better experienced than explained. Watch our video to learn more about Open Arms Initiative, the people behind our work, and the heart that guides our commitment to individuals, children, and families.</p>
          </div>
        </div>
        <div className="oa-video-frame reveal reveal-scale-in">
          <div className="growth-video-card oa-video-card-lg">
            <div className="growth-video-titlebar">
              <span className="growth-video-avatar">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>
              </span>
              <div className="growth-video-titletext">
                <p className="growth-video-title">Our Story. Our Mission. Our Open Arms.</p>
              </div>
              <span className="growth-video-menu" aria-hidden="true">&#8942;</span>
            </div>
            <div className="growth-video-stage">
              {videoPlaying ? (
                <iframe
                  className="growth-video-iframe"
                  src={`https://www.youtube.com/embed/${ABOUT_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="Open Arms Initiative - Our Story, Our Mission, Our Open Arms"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  className="growth-video-poster"
                  onClick={() => setVideoPlaying(true)}
                  aria-label="Play video: Our Story. Our Mission. Our Open Arms."
                  style={{ backgroundImage: `url(https://img.youtube.com/vi/${ABOUT_VIDEO_ID}/maxresdefault.jpg)` }}
                >
                  <span className="growth-video-playbtn" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="#ffffff"><path d="M8 5v14l11-7Z" /></svg>
                  </span>
                  <span className="growth-video-watch">
                    Watch on
                    <svg viewBox="0 0 28 20" width="22" height="16" aria-hidden="true"><rect width="28" height="20" rx="5" fill="#FF0000" /><path d="M11 6.2 19 10l-8 3.8Z" fill="#ffffff" /></svg>
                    YouTube
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Plant Water Grow */}
      <section className="fs-section oa-grow-section"><div className="fs-container">
        <div className="oa-grow-head reveal reveal-from-bottom">
          <h2 className="fs-center">Plant. Water. Grow.</h2><i className="fs-line-center" />
          <p className="pc-process-lead">Growth rarely happens all at once. It happens through small steps. Through being heard. Through learning. Through connection. Through having someone continue to believe that change is possible.</p>
        </div>
        <div className="oa-grow-rows reveal-stagger">
          {growth.map(([word, lead, body], i) => (
            <div className="oa-grow-row reveal reveal-from-bottom" key={word}>
              <span className="oa-grow-icon">{growIcons[i]}</span>
              <div>
                <h3>{word}<span>{lead}</span></h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="fs-understand-close reveal reveal-from-bottom"><strong>Plant hope. Water it with support. Give people room to grow.</strong></p>
      </div></section>

      {/* What We Believe */}
      <section className="fs-section fs-kinds-section oa-believe-section"><div className="fs-container">
        <h2 className="fs-center reveal reveal-from-bottom">What We Believe</h2><i className="fs-line-center" />
        <div className="fs-needs-grid oa-believe-grid reveal-stagger">{beliefs.map(([h, p], i) => <article className="reveal reveal-from-bottom fs-need-card" key={h}><span className="fs-need-icon">{believeIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
      </div></section>

      {/* How We Support Our Community */}
      <section id="services" className="fs-section oa-kinds-section"><div className="fs-container">
        <h2 className="fs-center reveal reveal-from-bottom">How We Support Our Community</h2><i className="fs-line-center" />
        <p className="pc-process-lead reveal reveal-from-bottom">Open Arms Initiative provides multiple pathways to support because different people need different things.</p>
        <div className="oa-kinds-grid reveal-stagger">
          {kinds.map(([h, p, cta, href], i) => (
            <Link href={href} className="oa-kind-card reveal reveal-from-bottom" key={h}>
              <span className="fs-kind-icon">{kindsIcons[i]}</span>
              <h3>{h}</h3>
              <p>{p}</p>
              <span className="oa-kind-cta">{cta}<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </Link>
          ))}
        </div>
      </div></section>

      {/* What Makes Us Different */}
      <section className="fs-section fs-pillars-section"><div className="fs-container">
        <h2 className="fs-center reveal reveal-from-bottom">What Makes Open Arms Different?</h2><i className="fs-line-center" />
        <div className="fs-pillars oa-pillars-5 reveal-stagger">{pillars.map(([h, p], i) => <article className="reveal reveal-from-bottom" key={h}><span className="fs-pillar-icon">{pillarIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
      </div></section>

      {/* Meet the Team intro */}
      <section className="oa-team-intro-section"><div className="fs-container">
        <div className="reveal reveal-from-bottom oa-team-intro">
          <p className="fs-kicker-label" style={{ textAlign: 'center' }}>MEET THE PEOPLE BEHIND OPEN ARMS</p>
          <h2 className="fs-center">Real People. Shared Purpose. Open Arms.</h2><i className="fs-line-center" />
          <p className="pc-process-lead">Behind every counseling session, family conversation, foster-care resource, training program, and community initiative is a team of people committed to helping others feel supported. Our team brings together professionals across counseling, foster care, family support, administration, education, and community services.</p>
          <p className="pc-process-lead"><strong>But beyond titles and credentials, there is something that connects us: we believe people deserve somewhere safe to turn.</strong></p>
        </div>
      </div></section>

      {/* Leadership */}
      <section className="oa-team-section"><div className="fs-container">
        <h3 className="oa-team-cat-title reveal reveal-from-bottom">Leadership Team</h3>
        <TeamGrid members={leadership} size="lg" />
      </div></section>

      {/* Clinical Team */}
      <section className="oa-team-section oa-team-section-alt"><div className="fs-container">
        <h3 className="oa-team-cat-title reveal reveal-from-bottom">Clinical &amp; Counseling Team</h3>
        <p className="oa-team-cat-lead reveal reveal-from-bottom">Meet the professionals providing compassionate mental health support to individuals, children, couples, and families.</p>
        <TeamGrid members={clinicalTeam} />
      </div></section>

      {/* Foster Care Team */}
      <section className="oa-team-section"><div className="fs-container">
        <h3 className="oa-team-cat-title reveal reveal-from-bottom">Foster Care &amp; Family Support Team</h3>
        <p className="oa-team-cat-lead reveal reveal-from-bottom">Meet the people supporting foster caregivers, children, adoptive families, parents, and families throughout their journeys.</p>
        <TeamGrid members={fosterTeam} />
      </div></section>

      {/* Admin Team */}
      <section className="oa-team-section oa-team-section-alt"><div className="fs-container">
        <h3 className="oa-team-cat-title reveal reveal-from-bottom">Administrative &amp; Community Support Team</h3>
        <p className="oa-team-cat-lead reveal reveal-from-bottom">The work of Open Arms also depends on the people helping programs, families, clinicians, and community initiatives stay connected.</p>
        <TeamGrid members={adminTeam} />
      </div></section>

      {/* More than a team photo */}
      <section className="fs-section oa-more-than-photo"><div className="fs-container">
        <div className="oa-more-than-photo-inner reveal reveal-from-bottom">
          <h2>More Than a Team Photo</h2>
          <i className="fs-alone-leaf"><span className="fs-alone-leaf-dot" /></i>
          <p>When someone comes to Open Arms, they may be sharing something deeply personal. That&apos;s why knowing who is on the other side of the conversation matters.</p>
          <p><strong>Our team section isn&apos;t here simply to show names and credentials. It&apos;s here so that before you ever call, email, or walk through our doors, you can see the people who are here to welcome you.</strong></p>
        </div>
      </div></section>

      {/* Board Members */}
      <section className="oa-board-section"><div className="fs-container">
        <div className="oa-board-media reveal reveal-scale-in">
          <img src="/WE copy.jpg" alt="Open Arms Initiative Board Members" />
        </div>
      </div></section>

      {/* Emotional Statement */}
      <section className="fs-statement oa-statement"><div className="fs-container reveal reveal-scale-in"><div>
        <h2>&ldquo;People may come to Open Arms for different reasons. What they should find here is the same: compassion, respect, and somewhere to begin.&rdquo;</h2>
        <Link href="/contact" className="fs-btn fs-light">Connect With Open Arms</Link>
      </div>
        <img src="/business-team-joining-hands-teamwork-concept-100kb.jpg" alt="Open Arms Initiative team supporting the community together" />
        <aside>You may be looking for a counselor.<br /><br />You may need support for your child.<br /><br />You may be opening your home to a foster child.<br /><br />You may be trying to strengthen your family.<br /><br />Or you may simply be trying to figure out what comes next.<br /><br /><strong>Whatever brought you here, you don&apos;t have to have everything figured out before you reach out.</strong></aside>
      </div></section>

      {/* Proud to serve OKC */}
      <section className="fs-section oa-okc-section"><div className="fs-container">
        <div className="oa-okc-grid">
          <div className="reveal reveal-from-left">
            <p className="fs-kicker-label">PROUD TO SERVE OKLAHOMA CITY</p>
            <h2>Rooted in Oklahoma City. Committed to Our Community.</h2>
            <p>Open Arms Initiative is rooted in Oklahoma City and committed to supporting the individuals and families who make up our community.</p>
            <p>Our work extends across counseling, family support, foster care, parenting education, community programs, and efforts to make appropriate mental health services more accessible.</p>
            <div className="oa-okc-list">
              {['Here for individuals.', 'Here for children.', 'Here for parents and caregivers.', 'Here for families.', 'Here for our community.'].map((x) => (
                <span key={x}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5 9 18 20 6" /></svg>{x}</span>
              ))}
            </div>
            <Link href="/contact" className="fs-btn fs-solid oa-okc-cta">Visit Our Oklahoma City Location</Link>
          </div>
          <div className="oa-okc-map reveal reveal-from-right">
            <iframe
              title="Open Arms Initiative OKC Map"
              src="https://maps.google.com/maps?cid=11493076692460582253&hl=en-US&z=14&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div></section>

      {/* Our work begins with people / final */}
      <section className="fs-final oa-final"><div className="fs-container fs-final-grid reveal reveal-scale-in">
        <div>
          <h2>Our Work Begins With People</h2>
          <p>Services and programs are important. But behind every service is a person. Someone hoping to be heard. Someone looking for guidance. Someone trying to help their child. Someone working to rebuild a relationship. Someone ready, or almost ready, to ask for support.</p>
          <h3>There Is Room for Your Story Here.</h3>
          <p>You are more than what you&apos;re going through. And you don&apos;t have to go through it without support.</p>
        </div>
        <div className="oa-final-ctas"><Link href="/contact" className="fs-btn fs-solid">Connect With Open Arms</Link><Link href="/#services" className="fs-btn fs-outline-light">Explore Our Services</Link></div>
      </div></section>
    </main>
  );
}
