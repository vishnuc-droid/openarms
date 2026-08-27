import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import ProBonoRequestForm from '@/components/ProBonoRequestForm';

export const metadata = { title: 'Pro Bono Counseling OKC | Open Arms Initiative', description: 'Explore pro bono counseling in OKC through Open Arms Initiative. Learn about available no-fee counseling and community support for individuals and families.', alternates: { canonical: 'https://www.openarmsinitiative.com/pro-bono-counseling-okc/' } };

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pro Bono Counseling', item: 'https://www.openarmsinitiative.com/pro-bono-counseling-okc/' },
  ],
};

const SCHEMA_SERVICE = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Pro Bono Counseling',
  provider: {
    '@type': 'Organization',
    name: 'Open Arms Initiative',
    url: 'https://www.openarmsinitiative.com/',
  },
  areaServed: 'Oklahoma City, OK',
  description: 'Pro bono counseling in Oklahoma City provided as part of Open Arms Initiative’s nonprofit mission to reduce financial barriers to mental health support.',
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What does pro bono counseling mean?', acceptedAnswer: { '@type': 'Answer', text: 'Pro bono counseling generally refers to professional counseling services provided without the standard counseling fee for people who meet applicable program requirements.' } },
    { '@type': 'Question', name: 'Does Open Arms Initiative offer pro bono counseling in Oklahoma City?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open Arms Initiative provides Pro Bono Counseling in OKC as part of its commitment to improving access to mental health support. Availability and eligibility may vary, so contact Open Arms for current program information.' } },
    { '@type': 'Question', name: 'Is pro bono counseling completely free?', acceptedAnswer: { '@type': 'Answer', text: 'Pro bono generally means that the standard professional counseling fee is waived. Open Arms Initiative can explain the specific terms of its current program during the inquiry or intake process.' } },
    { '@type': 'Question', name: 'Who qualifies for pro bono counseling?', acceptedAnswer: { '@type': 'Answer', text: 'Eligibility can depend on Open Arms Initiative’s current program requirements, available providers, capacity, and other applicable considerations. Contact the organization directly for current eligibility information.' } },
    { '@type': 'Question', name: 'Is pro bono counseling confidential?', acceptedAnswer: { '@type': 'Answer', text: 'Counseling services are generally confidential subject to applicable legal, ethical, and safety-related exceptions. Your provider can explain confidentiality and its limits before or during the counseling process.' } },
    { '@type': 'Question', name: 'What happens if there are no pro bono appointments available?', acceptedAnswer: { '@type': 'Answer', text: 'Availability may change based on program capacity and provider schedules. Open Arms Initiative can explain current availability and, when appropriate and possible, discuss other relevant support options or community resources.' } },
  ],
};

const trustIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10.5" width="16" height="10" rx="2" /><path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z" /><path d="m9.3 12 1.9 1.9 3.6-3.9" /></svg>,
];

const needsIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 12.3c-1.9-1.7-3-3-3-4.6a2.9 2.9 0 0 1 5.2-1.8A2.9 2.9 0 0 1 16 7.7c0 .7-.2 1.3-.5 1.9" /><path d="M12 12.5s-3.6 2.9-3.6 5.5a3.6 3.6 0 0 0 7.2 0c0-1-.3-1.9-.8-2.7" strokeDasharray="1.2 1.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5c0 4.7-4 8.5-9 8.5a9.5 9.5 0 0 1-3.2-.55L4 21l1.4-3.9A8.4 8.4 0 0 1 3 11.5C3 6.8 7 3 12 3s9 3.8 9 8.5Z" /><path d="M8.5 11.7h.01M12 11.7h.01M15.5 11.7h.01" strokeWidth="2.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.2s5.5 6.7 5.5 11a5.5 5.5 0 0 1-11 0c0-4.3 5.5-11 5.5-11Z" /><path d="M9.3 15.2a2.7 2.7 0 0 0 2.7 2.7" strokeDasharray="1.3 1.8" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m20 20-4.3-4.3" /><path d="M7.5 10.5h6M10.5 7.5v6" strokeDasharray="1.6 2.4" /></svg>,
];

const dignityIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.2" /><path d="M5.5 20c.8-4.2 3.1-6.4 6.5-6.4s5.7 2.2 6.5 6.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10.5" width="16" height="10" rx="2" /><path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z" /><path d="m9.3 12 1.9 1.9 3.6-3.9" /></svg>,
];

const stepIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 4.5h3.2l1.6 4-2 1.6a11 11 0 0 0 5.6 5.6l1.6-2 4 1.6v3.2a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 3 6.2a1.6 1.6 0 0 1 1.5-1.7Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 1 1 3 6.2L4 19l.9-3A7.9 7.9 0 0 1 4 12Z" /><path d="M8.5 10.5h7M8.5 14h4.5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m20 20-4.3-4.3" /><path d="M7.5 10.5h6M10.5 7.5v6" strokeDasharray="1.6 2.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg>,
];

const kindsIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.2" /><path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="6.5" r="2.6" /><circle cx="5.5" cy="9.5" r="2.1" /><circle cx="18.5" cy="9.5" r="2.1" /><path d="M8.2 20c.5-3.4 1.9-5 3.8-5s3.3 1.6 3.8 5" strokeDasharray="1.3 1.8" /><path d="M2.5 19c.4-2.4 1.4-3.6 3-3.9M21.5 19c-.4-2.4-1.4-3.6-3-3.9" /></svg>,
];

const needs = [
  ['Emotional Challenges', 'A safe space to talk about difficult emotions, experiences, or periods when life feels harder to manage.'],
  ['Stress & Overwhelm', 'Support when responsibilities, circumstances, or ongoing pressures begin to feel difficult to carry alone.'],
  ['Relationship & Family Concerns', 'Counseling may help individuals or families explore communication, relationships, boundaries, and challenging family dynamics.'],
  ['Life Transitions', 'Changes involving relationships, family, work, caregiving, loss, or other significant circumstances can be difficult to navigate alone.'],
  ['Grief & Loss', 'Support can provide space to process grief and adjust to life following a significant loss.'],
  ['Personal Growth', 'Counseling can also be a place to develop greater self-awareness, strengthen relationships, explore goals, and build healthier patterns.'],
];

const dignity = [
  ['Compassion', 'We recognize that asking for support—financial or emotional—can feel vulnerable.'],
  ['Respect', 'Every person’s circumstances and experiences deserve to be treated with dignity.'],
  ['Confidentiality', 'Counseling services are provided within appropriate professional and confidentiality standards.'],
  ['Community', 'As a nonprofit organization, Open Arms Initiative works to strengthen individuals and families as part of building healthier communities.'],
];

const communityList = [
  'Counseling services',
  'Family support',
  'Parenting education',
  'Child and adolescent support',
  'Mental health education',
  'Community resources',
  'Support programs',
];

const kinds = [
  ['Adult & Individual Counseling', 'One-on-one counseling for adults seeking support with personal concerns, relationships, life transitions, and personal growth.', '/adult-counseling-oklahoma-city/'],
  ['Family Counseling', 'Therapeutic support for families working through communication challenges, conflict, relationships, and transitions.', '/family-therapy-oklahoma-city/'],
  ['Child & Adolescent Counseling', 'Age-appropriate counseling support for children and teenagers experiencing emotional, behavioral, family, school, or life challenges.', '/child-counseling-services-oklahoma-city/'],
  ['Grief & Loss Counseling', 'Compassionate support for individuals navigating bereavement, significant loss, and major life changes.', '/grief-counseling-oklahoma-city/'],
  ['Family Support Services', 'Broader family-focused guidance, education, resources, and connections to appropriate support.', '/family-support-services-oklahoma-city/'],
];

const faqs = [
  ['What does pro bono counseling mean?', 'Pro bono counseling generally refers to professional counseling services provided without the standard counseling fee for people who meet applicable program requirements.'],
  ['Does Open Arms Initiative offer pro bono counseling in Oklahoma City?', 'Yes. Open Arms Initiative provides Pro Bono Counseling in OKC as part of its commitment to improving access to mental health support. Availability and eligibility may vary, so contact Open Arms for current program information.'],
  ['Is pro bono counseling completely free?', 'Pro bono generally means that the standard professional counseling fee is waived. Open Arms Initiative can explain the specific terms of its current program during the inquiry or intake process.'],
  ['Who qualifies for pro bono counseling?', 'Eligibility can depend on Open Arms Initiative’s current program requirements, available providers, capacity, and other applicable considerations. Contact the organization directly for current eligibility information.'],
  ['Is pro bono counseling confidential?', 'Counseling services are generally confidential subject to applicable legal, ethical, and safety-related exceptions. Your provider can explain confidentiality and its limits before or during the counseling process.'],
  ['What happens if there are no pro bono appointments available?', 'Availability may change based on program capacity and provider schedules. Open Arms Initiative can explain current availability and, when appropriate and possible, discuss other relevant support options or community resources.'],
];

export default function ProBonoCounselingPage() { return <main className="fs-page">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SERVICE) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />
  <ScrollReveal />

  <section className="fs-hero"><div className="fs-hero-split-inner">
    <div className="fs-hero-copy reveal reveal-from-left">
      <p className="fs-kicker">CARE SHOULD FEEL WITHIN REACH.</p>
      <h1>Pro Bono Counseling<br />in OKC</h1>
      <p className="fs-lead">Financial Barriers Shouldn&rsquo;t Be the Reason Someone Faces a Difficult Season Alone</p>
      <p>Sometimes you know you need someone to talk to. But the next thought is: &ldquo;Can I afford counseling?&rdquo;</p>
      <p>When finances are already stretched, seeking mental health support can feel like one more thing that&apos;s out of reach.</p>
      <p>Open Arms Initiative provides compassionate <strong>Pro Bono Counseling in OKC</strong> as part of our commitment to making mental health support more accessible to people and families in our community.</p>
      <p>Because asking for help takes courage, and cost shouldn&apos;t automatically close the door.</p>
      <div className="fs-actions"><Link href="/contact" className="fs-btn fs-solid">Ask About Pro Bono Counseling</Link><a href="#community" className="fs-btn fs-outline">Explore Community Support</a></div>
    </div>
    <div className="fs-hero-form-card reveal reveal-from-right"><div className="fs-hero-form-body"><h3>Request an Appointment</h3><span className="fs-hero-form-underline" /><p className="fs-hero-form-sub">Tell us a bit about your situation and we&rsquo;ll help you find the right support.</p><ProBonoRequestForm /></div><div className="fs-hero-form-photo"><img src="/counseling-conversation.jpg" alt="Compassionate counseling conversation" /></div></div>
  </div></section>

  <section className="fs-trust-section"><div className="fs-container fs-trust">{['Compassionate Care', 'Community Focused', 'Confidential Support', 'Access With Dignity'].map((x, i) => <div key={x}><span>{trustIcons[i]}</span><p>{x}</p></div>)}</div></section>

  <section className="fs-section"><div className="fs-container"><div className="fs-alone reveal reveal-from-bottom">
    <h2>You Deserve to Ask for Help Without Feeling Embarrassed About What You Can Afford</h2>
    <i className="fs-alone-leaf"><span className="fs-alone-leaf-dot" /></i>
    <p>Financial circumstances can change.</p>
    <p>A job loss. An unexpected expense. Family responsibilities. Housing costs. A difficult transition.</p>
    <p>Sometimes there simply isn&apos;t enough room in the budget for everything.</p>
    <p>Needing financial assistance doesn&apos;t make your emotional well-being less important.</p>
    <p>At Open Arms Initiative, we believe conversations about access to counseling should happen with respect, compassion, and dignity.</p>
    <p><strong>Your financial circumstances don&apos;t define the value of the support you need.</strong></p>
  </div></div></section>

  <section className="fs-section fs-understand-section"><div className="fs-container"><div className="fs-counseling reveal reveal-from-bottom">
    <h2>What Is Pro Bono Counseling?</h2>
    <p>Pro bono counseling refers to professional counseling services provided without the standard counseling fee to eligible individuals or families.</p>
    <p>The purpose is simple: to help reduce financial barriers to mental health support.</p>
    <p>Open Arms Initiative&rsquo;s pro bono counseling program reflects our nonprofit mission of supporting individuals, families, and communities who may otherwise experience difficulty accessing care.</p>
    <p>Availability may depend on factors such as current program capacity and eligibility requirements.</p>
    <p><Link href="/contact" className="fs-btn fs-solid">Ask About Current Availability</Link></p>
  </div></div></section>

  <section id="needs" className="fs-section fs-needs-section"><div className="fs-container">
    <div className="fs-needs-head reveal reveal-from-bottom"><h2>Support for <em>Real Life</em></h2><i className="fs-line" /><p>People seek counseling for many different reasons. You don&apos;t need to wait until life reaches a crisis point before asking whether support is available. Depending on available services and individual needs, counseling may support people experiencing:</p></div>
    <div className="fs-needs-grid reveal-stagger">{needs.map(([h, p], i) => <article className="reveal reveal-from-bottom fs-need-card" key={h}><span className="fs-need-icon">{needsIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
  </div></section>

  <section className="fs-statement"><div className="fs-container reveal reveal-scale-in"><div><h2>&ldquo;Needing help and needing financial support can exist in the same sentence. Neither should be a source of shame.&rdquo;</h2><Link href="/contact" className="fs-btn fs-light">Ask About Pro Bono Counseling</Link></div><img src="/nh4.jpg" alt="Hands offering comfort and support" /><aside>You don&apos;t need to justify why life has become difficult.<br /><br />And you don&apos;t need to feel embarrassed about asking what options are available.<br /><br />Start with a conversation.</aside></div></section>

  <section className="fs-section fs-pillars-section"><div className="fs-container">
    <h2 className="fs-center reveal reveal-from-bottom">Access With Dignity</h2><i className="fs-line-center" />
    <p className="fs-pillars-lead reveal reveal-from-bottom">Receiving pro bono counseling shouldn&apos;t make someone feel like they&apos;re receiving lesser care. Our approach is grounded in respect for every person who reaches out.</p>
    <div className="fs-pillars reveal-stagger">{dignity.map(([h, p], i) => <article className="reveal reveal-from-bottom" key={h}><span className="fs-pillar-icon">{dignityIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
  </div></section>

  <section className="fs-section fs-steps-section"><div className="fs-container"><h2 className="fs-center reveal reveal-from-bottom">How Pro Bono Counseling Works</h2><i className="fs-line-center" /><div className="fs-steps reveal-stagger">{[['Reach Out', 'Contact Open Arms Initiative and let us know you’re interested in learning about pro bono counseling.'], ['Discuss Availability', 'Our team can explain current program availability and any applicable eligibility or intake requirements.'], ['Determine the Next Step', 'If appropriate services and availability align with your needs, we’ll explain what happens next.'], ['Begin Support', 'When placement is available and appropriate, you can begin the counseling process with greater clarity about your care.']].map(([h, p], i) => <article className="reveal reveal-from-bottom" key={h}><span className="fs-step-icon">{stepIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div><p className="fs-understand-close reveal reveal-from-bottom"><strong>Important:</strong> Pro bono counseling may be subject to eligibility requirements, provider availability, program capacity, and the suitability of available services.</p></div></section>

  <section className="fs-section"><div className="fs-container"><div className="fs-understand">
    <div className="reveal reveal-from-left"><h2>What If Pro Bono Counseling Isn&rsquo;t Currently Available?</h2><p>Reaching out still matters.</p><p>Program capacity can vary, and availability may not always match every person&apos;s needs or preferred timing.</p><p>When appropriate and possible, Open Arms Initiative can help you understand other available services, programs, or community resources that may be relevant to your circumstances.</p></div>
    <div className="fs-understand-media reveal reveal-from-bottom"><img src="/nh6.jpg" alt="Counselor listening attentively during a conversation" /></div>
    <div className="reveal reveal-from-right"><p>We don&apos;t want the conversation to end with:</p><p><strong>&ldquo;We can&apos;t help.&rdquo;</strong></p><p>Whenever possible, we want it to continue with:</p><p><strong>&ldquo;Let&apos;s understand what options may be available.&rdquo;</strong></p></div>
  </div></div></section>

  <section id="community" className="fs-section fs-understand-section"><div className="fs-container"><div className="fs-understand">
    <div className="reveal reveal-from-left"><h2>Community Support Is Part of Our Mission</h2><p>Mental health doesn&apos;t exist separately from families and communities.</p><p>When people can access support, families can become stronger. When caregivers have resources, children can benefit. When individuals feel heard and connected, communities can become more resilient.</p><p>Our <strong>Non-Profit Community Support in OKC</strong> reflects Open Arms Initiative&rsquo;s broader commitment to helping people access education, resources, counseling, and family-focused support.</p></div>
    <div className="fs-understand-media reveal reveal-from-bottom"><img src="/mg9.jpg" alt="Diverse group of people supporting one another in a community setting" /></div>
    <div className="reveal reveal-from-right">
      <p className="fs-kicker-label">DEPENDING ON AVAILABLE PROGRAMS, WE MAY CONNECT YOU WITH:</p>
      <div className="fs-check-grid">{communityList.map(x => <span key={x}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5 9 18 20 6" /></svg>{x}</span>)}</div>
    </div>
  </div></div></section>

  <section className="fs-section fs-kinds-section"><div className="fs-container">
    <h2 className="fs-center reveal reveal-from-bottom">More Ways Open Arms Can Support You</h2><i className="fs-line-center" />
    <div className="fs-kinds fs-kinds-five reveal-stagger">{kinds.map(([h, p, href], i) => <article className="reveal reveal-from-bottom" key={h}><span className="fs-kind-icon">{kindsIcons[i]}</span><h3><Link href={href}>{h}</Link></h3><p>{p}</p></article>)}</div>
  </div></section>

  <section className="fs-section"><div className="fs-container"><div className="fs-faq"><aside className="reveal reveal-from-left"><h2>Questions About Pro Bono Counseling</h2><p>Find answers to common questions about pro bono counseling and what to expect.</p></aside><div className="reveal reveal-from-right">{faqs.map(([q, a]) => <details key={q} name="pb-faq-group"><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></div></div></section>

  <section className="fs-final"><div className="fs-container fs-final-grid reveal reveal-scale-in">
    <div>
      <h2>Cost Shouldn&rsquo;t Stop You From Asking What Help Is Available</h2>
      <p>Maybe you&apos;ve put counseling off because you assumed it wasn&apos;t financially possible. Maybe you weren&apos;t sure whether it was okay to ask.</p>
      <h3>It Is Okay to Ask.</h3>
      <p>Start with a conversation. Let Open Arms Initiative help you understand what pro bono counseling and community support options may currently be available.</p>
    </div>
    <Link href="/contact" className="fs-btn fs-solid">Ask About Pro Bono Counseling</Link>
  </div></section>
</main>}
