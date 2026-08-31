import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import AdultCounselingRequestForm from '@/components/AdultCounselingRequestForm';

export const metadata = { title: 'Adult Counseling in Oklahoma City | Open Arms Initiative', description: 'Find compassionate adult counseling in Oklahoma City. Open Arms Initiative provides personalized individual therapy for life challenges, relationships, growth, and change.', alternates: { canonical: 'https://www.openarmsinitiative.com/adult-counseling-oklahoma-city/' } };

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Adult & Individual Counseling', item: 'https://www.openarmsinitiative.com/adult-counseling-oklahoma-city/' },
  ],
};

const SCHEMA_SERVICE = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Adult Counseling',
  provider: {
    '@type': 'Organization',
    name: 'Open Arms Initiative',
    url: 'https://www.openarmsinitiative.com/',
  },
  areaServed: 'Oklahoma City, OK',
  description: 'Compassionate adult counseling in Oklahoma City, providing personalized individual therapy for life challenges, relationships, growth, and change.',
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is individual counseling?', acceptedAnswer: { '@type': 'Answer', text: 'Individual counseling is one-on-one therapy between you and a mental health professional. It provides a private environment to discuss emotions, experiences, relationships, behaviors, personal concerns, or goals.' } },
    { '@type': 'Question', name: 'How do I know if I should see a therapist?', acceptedAnswer: { '@type': 'Answer', text: 'There isn’t one specific point when someone needs therapy. You may consider counseling if you’re feeling overwhelmed, experiencing recurring difficulties, navigating a major life change, struggling with relationships, feeling stuck, or simply wanting to understand yourself better.' } },
    { '@type': 'Question', name: 'Do I need a mental health diagnosis to attend counseling?', acceptedAnswer: { '@type': 'Answer', text: 'No. People seek counseling for many reasons, including stress, relationships, life transitions, self-esteem, boundaries, personal development, decision-making, and emotional support.' } },
    { '@type': 'Question', name: 'What if I don’t know what to talk about?', acceptedAnswer: { '@type': 'Answer', text: 'That’s okay. You don’t need to arrive with a prepared explanation. You can start with whatever feels important—or simply tell your therapist that you aren’t sure where to begin.' } },
    { '@type': 'Question', name: 'Can I discuss relationship problems during individual counseling?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Individual therapy can provide space to explore relationship concerns, communication, boundaries, recurring patterns, and how relationships affect you. If the concern involves multiple family members or the broader family relationship, Family Counseling may also be appropriate.' } },
    { '@type': 'Question', name: 'Can I attend therapy for personal growth?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Counseling doesn’t have to begin with a crisis. Therapy can support self-awareness, confidence, healthier boundaries, improved relationships, decision-making, and personal development.' } },
    { '@type': 'Question', name: 'Do you provide adult and individual counseling in Oklahoma City?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open Arms Initiative provides Adult Counseling in Oklahoma City and individualized one-on-one therapy for adults seeking support with personal challenges, relationships, life transitions, personal growth, and emotional concerns.' } },
  ],
};

const trustIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.2" /><path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z" /><path d="m9.3 12 1.9 1.9 3.6-3.9" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.4" /><path d="m3 8 9 6 9-6" /></svg>,
];

const carryIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="8" width="16" height="8" rx="2" /><path d="M20.5 10.5v3" /><path d="M5.5 11v2" strokeDasharray="1 1.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.2s6.5-5.3 6.5-11A6.5 6.5 0 0 0 5.5 10.2c0 5.7 6.5 11 6.5 11Z" /><circle cx="12" cy="10.2" r="2.4" strokeDasharray="1.2 1.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9.5h12V10" /><path d="M10 19.5v-5h4v5" strokeDasharray="1.2 1.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21v-7.5" /><path d="M12 13.5C12 9 9 7 6 6.3c-.3 3.6 1.2 6.6 6 7.2Z" /><path d="M12 13.5c0-4.8 3-7 6-7.7.4 4.1-1.3 7.3-6 7.7Z" strokeDasharray="1.2 1.6" /></svg>,
];

const paceIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V6a1.5 1.5 0 0 1 1.5-1.5h9L20 9v10.5A1.5 1.5 0 0 1 18.5 21h-13A1.5 1.5 0 0 1 4 19.5Z" /><path d="M14.5 4.5V9H19" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4.2" /><path d="M12 3.2v2M12 18.8v2M3.2 12h2M18.8 12h2M5.8 5.8l1.4 1.4M16.8 16.8l1.4 1.4M18.2 5.8l-1.4 1.4M7.2 16.8l-1.4 1.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.2 2" /></svg>,
];

const stepIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 4.5h3.2l1.6 4-2 1.6a11 11 0 0 0 5.6 5.6l1.6-2 4 1.6v3.2a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 3 6.2a1.6 1.6 0 0 1 1.5-1.7Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 1 1 3 6.2L4 19l.9-3A7.9 7.9 0 0 1 4 12Z" /><path d="M8.5 10.5h7M8.5 14h4.5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m20 20-4.3-4.3" /><path d="M10.5 7.5v6M7.5 10.5h6" strokeDasharray="1.6 2.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg>,
];

const carrying = [
  ['Stress & Overwhelm', 'Responsibilities can build until it feels like there is no room left for you. Counseling can help you understand your stress and develop healthier ways to respond.'],
  ['Life Transitions', 'Career changes, relationships, parenthood, separation, relocation, loss, and other transitions can leave you questioning what comes next.'],
  ['Relationship Concerns', 'Individual counseling can give you space to explore communication, boundaries, recurring patterns, and how your relationships affect your emotional well-being.'],
  ['Self-Esteem & Confidence', 'Past experiences, difficult relationships, criticism, or comparison can influence how you see yourself. Therapy can help you examine those patterns and develop greater self-awareness.'],
  ['Feeling Stuck', 'Sometimes life looks fine from the outside but doesn’t feel fulfilling on the inside. Counseling can help you explore what may be keeping you stuck and what you want to change.'],
  ['Personal Growth', 'You don’t need to be experiencing a crisis to seek therapy. Counseling can also support self-discovery, healthier boundaries, stronger relationships, decision-making, and personal development.'],
];

const workToward = [
  'Greater emotional awareness',
  'Healthier coping strategies',
  'Stronger personal boundaries',
  'Improved communication',
  'Better understanding of recurring patterns',
  'Greater confidence and self-awareness',
  'Healthier relationships',
  'More intentional decision-making',
  'Navigating difficult life transitions',
  'Identifying meaningful personal goals',
  'Developing healthier responses to stress',
  'Understanding yourself more clearly',
];

const pace = [
  ['Your Story Matters', 'Your experiences have shaped how you think, respond, connect, and move through life. We take time to understand your story rather than reducing your experience to a single concern.'],
  ['Your Goals Matter', 'There isn’t one definition of progress. Your goals may involve relationships, boundaries, confidence, coping, decision-making, personal growth, or simply understanding yourself more clearly.'],
  ['Your Pace Matters', 'Meaningful change doesn’t always happen immediately. Counseling gives you room to explore difficult topics without pressure to have everything figured out.'],
];

const steps = [
  ['Connect', 'Reach out to Open Arms Initiative and request an appointment.'],
  ['Be Heard', 'Your therapist takes time to understand what brought you to counseling, what you’ve been experiencing, and what matters to you.'],
  ['Find Your Direction', 'Together, you’ll identify concerns, patterns, strengths, and goals that can guide your counseling experience.'],
  ['Move Forward', 'You’ll work toward greater understanding and develop strategies, perspectives, and skills that can support meaningful change outside therapy.'],
];

const teamMembers = [
  { name: 'Henri Jo Ball, LPC', title: 'Therapist', photo: '/Henri.jpg' },
  { name: 'Emeka Nnaka, LPC', title: 'Therapist', photo: '/Emeka Nnaka - LPC.jpg' },
  { name: 'Brenda Mitchell, LPC', title: 'Therapist', photo: '/Brenda Mitchell - LPC.jpg' },
  { name: 'Karli Burch, LPC', title: 'Therapist', photo: '/Karli Burch - LPC.jpg' },
  { name: 'Jamira Alexander', title: 'Therapist', photo: '/Jamira Alexander.jpg' },
  { name: 'Victori Swinford', title: 'Therapist', photo: '/Victori.jpg' },
];

const faqs = [
  ['What is individual counseling?', 'Individual counseling is one-on-one therapy between you and a mental health professional. It provides a private environment to discuss emotions, experiences, relationships, behaviors, personal concerns, or goals.'],
  ['How do I know if I should see a therapist?', 'There isn’t one specific point when someone needs therapy. You may consider counseling if you’re feeling overwhelmed, experiencing recurring difficulties, navigating a major life change, struggling with relationships, feeling stuck, or simply wanting to understand yourself better.'],
  ['Do I need a mental health diagnosis to attend counseling?', 'No. People seek counseling for many reasons, including stress, relationships, life transitions, self-esteem, boundaries, personal development, decision-making, and emotional support.'],
  ['What if I don’t know what to talk about?', <>That&rsquo;s okay. You don&rsquo;t need to arrive with a prepared explanation. You can start with whatever feels important&mdash;or simply tell your therapist that you aren&rsquo;t sure where to begin.</>],
  ['Can I discuss relationship problems during individual counseling?', <>Yes. Individual therapy can provide space to explore relationship concerns, communication, boundaries, recurring patterns, and how relationships affect you. If the concern involves multiple family members or the broader family relationship, <Link href="/family-therapy-oklahoma-city/">Family Counseling</Link> may also be appropriate.</>],
  ['Can I attend therapy for personal growth?', 'Yes. Counseling doesn’t have to begin with a crisis. Therapy can support self-awareness, confidence, healthier boundaries, improved relationships, decision-making, and personal development.'],
  ['Do you provide adult and individual counseling in Oklahoma City?', 'Yes. Open Arms Initiative provides Adult Counseling in Oklahoma City and individualized one-on-one therapy for adults seeking support with personal challenges, relationships, life transitions, personal growth, and emotional concerns.'],
];

export default function AdultCounselingPage() { return <main className="adult-page team-boost">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SERVICE) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />
  <ScrollReveal />

  <section className="adult-hero"><div className="adult-hero-split-inner">
    <div className="adult-hero-copy reveal reveal-from-left">
      <p className="adult-kicker">A SPACE FOR YOU.</p>
      <h1>Adult Counseling in Oklahoma City</h1>
      <p className="adult-lead">You Don&rsquo;t Have to Keep Carrying Everything Alone</p>
      <p>From the outside, you may look like you&apos;re handling everything.</p>
      <p>You go to work. Take care of responsibilities. Show up for the people who depend on you. Keep moving forward.</p>
      <p>But inside, you may feel overwhelmed, emotionally exhausted, disconnected, stuck, or simply not like yourself anymore.</p>
      <p>At Open Arms Initiative, our <strong>Adult Counseling in Oklahoma City</strong> provides personalized, one-on-one support where you can talk openly, understand what you&apos;re experiencing, and begin working toward meaningful change.</p>
      <p>You don&apos;t need to have everything figured out before you come in.<br />You just need somewhere to begin.</p>
      <div className="adult-actions"><Link href="/contact" className="adult-btn adult-solid">Request an Appointment</Link><a href="#approach" className="adult-btn adult-outline">Explore Our Approach</a></div>
    </div>
    <div className="adult-hero-form-card reveal reveal-from-right"><div className="adult-hero-form-body"><h3>Request an Appointment</h3><span className="adult-hero-form-underline" /><p className="adult-hero-form-sub">Tell us a bit about what you&rsquo;re going through and we&rsquo;ll help you find the right support.</p><AdultCounselingRequestForm /></div><div className="adult-hero-form-photo"><img src="/adog.jpg" alt="Adult individual counseling session in Oklahoma City" /></div></div>
  </div></section>

  <section className="adult-trust-section"><div className="adult-container adult-trust">{['One-on-One Support', 'Safe & Confidential', 'Personalized Care', 'In-Person & Online'].map((x, i) => <div key={x}><span>{trustIcons[i]}</span><p>{x}</p></div>)}</div></section>

  <section className="adult-section"><div className="adult-container"><div className="adult-alone reveal reveal-from-bottom">
    <div className="adult-alone-bg" aria-hidden="true" />
    <div className="adult-alone-overlay" aria-hidden="true" />
    <h2>Sometimes &ldquo;I&rsquo;m Fine&rdquo; Is Easier Than Explaining How You Really Feel</h2>
    <p>Maybe you&apos;re tired of being the person everyone depends on.</p>
    <p>Maybe work has become overwhelming.</p>
    <p>Maybe relationships are taking more out of you than you expected.</p>
    <p>Maybe you&apos;re questioning your direction, struggling with confidence, or facing a change you don&apos;t know how to navigate.</p>
    <p>And sometimes there isn&apos;t one clear reason.<br />You simply know something doesn&apos;t feel right.</p>
    <p><strong>You don&apos;t need the perfect words to start counseling. Sometimes understanding what you&apos;re feeling is part of the process.</strong></p>
  </div></div></section>

  <section id="carrying" className="adult-section adult-needs-section"><div className="adult-container">
    <div className="adult-needs-head reveal reveal-from-bottom"><h2>What Have You Been <em>Carrying?</em></h2><i className="adult-line-center" /></div>
    <div className="adult-needs-grid reveal-stagger">{carrying.map(([h, p], i) => <article className="reveal reveal-from-bottom adult-need-card" key={h}><span className="adult-need-icon">{carryIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
  </div></section>

  <section id="approach" className="adult-section adult-understand-section"><div className="adult-container"><div className="adult-understand">
    <div className="reveal reveal-from-left"><h2>Individual Counseling in OKC, A Space Focused on You</h2><p>There are things we don&apos;t always say out loud.</p><p>Maybe you don&apos;t want to worry your family. Maybe you&apos;re tired of telling people you&apos;re okay. Maybe you&apos;re usually the person everyone else comes to when something goes wrong.</p><p>But where do you get to talk?</p><p>Our <strong>Individual Counseling in OKC</strong> provides private, one-on-one time with a therapist where the conversation can focus on your experiences, emotions, relationships, concerns, and goals.</p><p>You don&apos;t have to protect someone else&apos;s feelings. You don&apos;t have to make your story sound better. And you don&apos;t have to know exactly where to start.</p><p><strong>This is your space.</strong></p></div>
    <div className="adult-understand-media reveal reveal-from-right"><img src="/nh7.jpg" alt="Adult sitting with a therapist during an individual counseling session" /></div>
  </div></div></section>

  <section className="adult-statement"><div className="adult-container reveal reveal-scale-in"><div><h2>&ldquo;You&rsquo;re allowed to need support, even when you&rsquo;re the one everyone else relies on.&rdquo;</h2><Link href="/contact" className="adult-btn adult-light">Request an Individual Counseling Appointment</Link></div><img src="/gm-100kb.jpg" alt="Two people talking openly during a supportive conversation" /><aside>You spend a lot of time showing up for other people.<br /><br />Therapy creates room for someone to show up for you.<br /><br />Come as you are.<br />Bring what you&apos;re carrying.<br />We&apos;ll start there.</aside></div></section>

  <section id="about" className="team-connect-section">
    <div className="team-connect-container section-reveal section-reveal-right">
      <div className="team-connect-copy reveal reveal-from-left">
        <span className="care-badge">Our Therapists</span>
        <h2 className="team-connect-title">
          Care Starts With People You Can Trust
          <svg className="team-connect-underline" viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8c30-10 60-10 90 0s90 10 126-2" fill="none" stroke="#0170ED" strokeWidth="3" strokeLinecap="round"/></svg>
        </h2>
        <p>Behind every session is a real person who&apos;s chosen this work, not a call center, not an algorithm.</p>
        <Link href="/about-us" className="team-connect-link">
          Meet Our Team
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </Link>
      </div>
      <div className="team-photo-grid reveal-stagger">
        {teamMembers.map((member) => (
          <div className="team-photo-card reveal reveal-from-bottom" key={member.name}>
            <div className="team-photo-media">
              <img src={member.photo} alt={member.name} />
            </div>
            <div className="team-photo-caption">
              <span className="team-photo-name">{member.name}</span>
              <span className="team-photo-title">{member.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="adult-section adult-worktoward-section"><div className="adult-worktoward-bg" aria-hidden="true" /><div className="adult-worktoward-overlay" aria-hidden="true" /><div className="adult-container">
    <h2 className="adult-center reveal reveal-from-bottom">What Can Individual Therapy Help You Work Toward?</h2><i className="adult-line-center" />
    <p className="adult-worktoward-lead reveal reveal-from-bottom">Our Adult Therapy Services in Oklahoma City are personalized around your experiences and counseling goals. Depending on your needs, therapy may help you work toward:</p>
    <div className="adult-check-grid reveal-stagger">{workToward.map(x => <span key={x}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5 9 18 20 6" /></svg>{x}</span>)}</div>
    <p className="adult-worktoward-close reveal reveal-from-bottom">The goal isn&apos;t to turn you into someone different. It&apos;s to help you better understand yourself and make choices that support the life you want to build.</p>
  </div></section>

  <section className="adult-section adult-pace-section"><div className="adult-container">
    <h2 className="adult-center reveal reveal-from-bottom">Counseling That Moves at Your Pace</h2><i className="adult-line-center" />
    <div className="adult-pace reveal-stagger">{pace.map(([h, p], i) => <article className="reveal reveal-from-bottom" key={h}><span className="adult-pace-icon">{paceIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
  </div></section>

  <section className="adult-section adult-growth-section"><div className="adult-growth-overlay" aria-hidden="true" /><div className="adult-container"><div className="adult-growth reveal reveal-from-bottom">
    <h2>Personal Growth Can Start With Understanding Yourself</h2>
    <p>Therapy isn&apos;t only about addressing what&apos;s going wrong. It can also help you ask:</p>
    <ul>{['What matters to me?', 'What patterns do I want to change?', 'What kind of relationships do I want?', 'What do I want my life to look like?'].map(x => <li key={x}>{x}</li>)}</ul>
    <p>Through <strong>Personal Development Therapy in Oklahoma City</strong>, you can explore your values, habits, boundaries, relationships, goals, and sense of self with professional support.</p>
    <p>Maybe you want more confidence. Maybe you want to stop repeating patterns that no longer serve you. Maybe you want healthier relationships.</p>
    <p>Or maybe you&apos;re simply wondering: &ldquo;What do I want for myself now?&rdquo;</p>
    <p><strong>You don&apos;t need to know the answer yet. Counseling can give you space to begin exploring it.</strong></p>
  </div></div></section>

  <section className="adult-section adult-relationships-section"><div className="adult-container"><div className="adult-relationships reveal reveal-from-bottom">
    <h2>When Relationships Are Part of What You&rsquo;re Carrying</h2>
    <p>Even in individual therapy, relationships may be an important part of the conversation.</p>
    <p>You can explore how you communicate, where your boundaries are, patterns you repeatedly encounter, and how particular relationships affect you.</p>
    <p>If the concern involves the broader family system rather than your individual experience, our <Link href="/family-therapy-oklahoma-city/">Family Counseling</Link> service may be more appropriate.</p>
    <p><strong>This gives you a clear path to the right type of support without making you figure everything out yourself.</strong></p>
  </div></div></section>

  <section className="adult-section adult-steps-section"><div className="adult-container"><h2 className="adult-center reveal reveal-from-bottom">What to Expect</h2><i className="adult-line-center" /><div className="adult-steps reveal-stagger">{steps.map(([h, p], i) => <article className="reveal reveal-from-bottom" key={h}><span className="adult-step-num">{String(i + 1).padStart(2, '0')}</span><span className="adult-step-icon">{stepIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>

  <section className="adult-section"><div className="adult-container"><div className="adult-faq"><aside className="reveal reveal-from-left"><h2>Questions About Adult &amp; Individual Counseling</h2><p>Find answers to common questions about individual counseling and what to expect.</p></aside><div className="reveal reveal-from-right">{faqs.map(([q, a]) => <details key={q} name="adult-faq-group"><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></div></div></section>

  <section className="adult-final"><div className="adult-container adult-final-grid reveal reveal-scale-in">
    <div>
      <h2>You Don&rsquo;t Need to Have Everything Figured Out Before You Ask for Support</h2>
      <p>Maybe you&apos;ve been thinking about counseling for months. Maybe you&apos;ve kept telling yourself you&apos;ll deal with things later. Or maybe today is simply the first time you&apos;ve admitted: &ldquo;I could use someone to talk to.&rdquo;</p>
      <p>That&apos;s enough of a reason to begin.</p>
      <h3>One Conversation Can Be a Beginning.</h3>
      <p>Take the first step toward understanding yourself, feeling supported, and creating meaningful change.</p>
    </div>
    <Link href="/contact" className="adult-btn adult-solid">Request an Appointment</Link>
  </div></section>
</main>}
