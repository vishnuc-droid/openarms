import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FamilySupportRequestForm from '@/components/FamilySupportRequestForm';

export const metadata = { title: 'Family Support Services Oklahoma City | Open Arms', description: 'Find compassionate family support services in Oklahoma City. Open Arms Initiative helps families access guidance, education, resources, and appropriate support.', alternates: { canonical: 'https://www.openarmsinitiative.com/family-support-services-oklahoma-city/' } };

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Family Support', item: 'https://www.openarmsinitiative.com/family-support-services-oklahoma-city/' },
  ],
};

const SCHEMA_SERVICE = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Family Support Services',
  provider: {
    '@type': 'Organization',
    name: 'Open Arms Initiative',
    url: 'https://www.openarmsinitiative.com/',
  },
  areaServed: 'Oklahoma City, OK',
  description: 'Compassionate family support services in Oklahoma City, including guidance, education, resources, and connections to appropriate care.',
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are family support services?', acceptedAnswer: { '@type': 'Answer', text: 'Family support services can include education, guidance, resources, referrals, and other forms of assistance designed to help families navigate challenges and strengthen family well-being. Available support depends on the organization, program, and family’s circumstances.' } },
    { '@type': 'Question', name: 'How do I know what type of support my family needs?', acceptedAnswer: { '@type': 'Answer', text: 'You don’t necessarily need to know before reaching out. Start by explaining the challenges your family is experiencing. Open Arms Initiative can help you explore available services and determine what type of support may be appropriate.' } },
    { '@type': 'Question', name: 'Are family support services the same as family counseling?', acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily. Family counseling is a therapeutic service provided by qualified mental health professionals. Family support can be broader and may include education, resources, guidance, or connections to services. Some families may benefit from both.' } },
    { '@type': 'Question', name: 'Can you help parents who are struggling?', acceptedAnswer: { '@type': 'Answer', text: 'Open Arms Initiative provides family-centered support and educational resources that may help parents and caregivers navigate challenges. The appropriate service depends on your family’s particular needs and circumstances.' } },
    { '@type': 'Question', name: 'Do you provide family support services in Oklahoma City?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open Arms Initiative provides Family Support Services in Oklahoma City designed to help families access support, education, guidance, and appropriate resources.' } },
    { '@type': 'Question', name: 'Can you help me find the right service for my child or family?', acceptedAnswer: { '@type': 'Answer', text: 'Open Arms Initiative can help you explore available services based on the concerns you share. Depending on your circumstances, appropriate options may include family support, counseling, child and adolescent services, education, or connections to other resources.' } },
  ],
};

const trustIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="6.5" r="2.6" /><circle cx="5.5" cy="9.5" r="2.1" /><circle cx="18.5" cy="9.5" r="2.1" /><path d="M8.2 20c.5-3.4 1.9-5 3.8-5s3.3 1.6 3.8 5" strokeDasharray="1.3 1.8" /><path d="M2.5 19c.4-2.4 1.4-3.6 3-3.9M21.5 19c-.4-2.4-1.4-3.6-3-3.9" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="8" width="17" height="12" rx="2" /><path d="M8 8V6a4 4 0 0 1 8 0v2" /><path d="M12 12v4" strokeDasharray="1.2 1.6" /></svg>,
];

const needsIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="6.5" r="2.6" /><circle cx="5.5" cy="9.5" r="2.1" /><circle cx="18.5" cy="9.5" r="2.1" /><path d="M8.2 20c.5-3.4 1.9-5 3.8-5s3.3 1.6 3.8 5" strokeDasharray="1.3 1.8" /><path d="M2.5 19c.4-2.4 1.4-3.6 3-3.9M21.5 19c-.4-2.4-1.4-3.6-3-3.9" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9.5h12V10" /><path d="M10 19.5v-5h4v5" strokeDasharray="1.2 1.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 12.3c-1.9-1.7-3-3-3-4.6a2.9 2.9 0 0 1 5.2-1.8A2.9 2.9 0 0 1 16 7.7c0 .7-.2 1.3-.5 1.9" /><path d="M12 12.5s-3.6 2.9-3.6 5.5a3.6 3.6 0 0 0 7.2 0c0-1-.3-1.9-.8-2.7" strokeDasharray="1.2 1.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.2s6.5-5.3 6.5-11A6.5 6.5 0 0 0 5.5 10.2c0 5.7 6.5 11 6.5 11Z" /><circle cx="12" cy="10.2" r="2.4" strokeDasharray="1.2 1.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21v-7.5" /><path d="M12 13.5C12 9 9 7 6 6.3c-.3 3.6 1.2 6.6 6 7.2Z" /><path d="M12 13.5c0-4.8 3-7 6-7.7.4 4.1-1.3 7.3-6 7.7Z" strokeDasharray="1.2 1.6" /></svg>,
];

const kindsIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7.5" r="3" /><path d="M2.8 19.5c.6-3.8 2.8-5.8 6.2-5.8s5.6 2 6.2 5.8" /><path d="M16 4.3c1.3.3 2.3 1.5 2.3 3s-1 2.7-2.3 3" strokeDasharray="1.4 1.8" /><path d="M17 14c2 .4 3.4 2 3.9 4.8" strokeDasharray="1.4 1.8" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4.2" /><path d="M12 3.2v2M12 18.8v2M3.2 12h2M18.8 12h2M5.8 5.8l1.4 1.4M16.8 16.8l1.4 1.4M18.2 5.8l-1.4 1.4M7.2 16.8l-1.4 1.4" /></svg>,
];

const stepIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 4.5h3.2l1.6 4-2 1.6a11 11 0 0 0 5.6 5.6l1.6-2 4 1.6v3.2a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 3 6.2a1.6 1.6 0 0 1 1.5-1.7Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 1 1 3 6.2L4 19l.9-3A7.9 7.9 0 0 1 4 12Z" /><path d="M8.5 10.5h7M8.5 14h4.5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V6a1.5 1.5 0 0 1 1.5-1.5h9L20 9v10.5A1.5 1.5 0 0 1 18.5 21h-13A1.5 1.5 0 0 1 4 19.5Z" /><path d="M14.5 4.5V9H19" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
];

const pillarIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.2" /><path d="M5.5 20c.8-4.2 3.1-6.4 6.5-6.4s5.7 2.2 6.5 6.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="6.5" r="2.6" /><circle cx="5.5" cy="9.5" r="2.1" /><circle cx="18.5" cy="9.5" r="2.1" /><path d="M8.2 20c.5-3.4 1.9-5 3.8-5s3.3 1.6 3.8 5" strokeDasharray="1.3 1.8" /><path d="M2.5 19c.4-2.4 1.4-3.6 3-3.9M21.5 19c-.4-2.4-1.4-3.6-3-3.9" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z" /><path d="m9.3 12 1.9 1.9 3.6-3.9" /></svg>,
];

const needs = [
  ['Parenting Challenges', 'Parenting can bring questions that don’t always have simple answers. Families may benefit from education, guidance, and resources that strengthen confidence and communication.'],
  ['Family Transitions', 'Separation, blended families, relocation, foster care experiences, changes in caregiving, and other transitions can affect the entire household.'],
  ['Children & Adolescents', 'When a child is struggling emotionally, socially, behaviorally, or at school, parents may need guidance in understanding what support could be appropriate.'],
  ['Emotional & Relationship Challenges', 'Stress and strained relationships can affect how family members communicate, connect, and support one another.'],
  ['Finding Community Resources', 'Families may know that additional assistance exists but feel overwhelmed trying to understand where to look or what options may be appropriate.'],
  ['Building Family Strengths', 'Support isn’t only for moments of crisis. Families can also seek education and resources that strengthen communication, parenting skills, relationships, and resilience.'],
];

const supportList = [
  'Family-focused guidance',
  'Parenting education and support',
  'Counseling resources',
  'Child and adolescent support',
  'Community resource information',
  'Family-strengthening education',
  'Support during life transitions',
  'Connections to appropriate services',
  'Mental health education',
  'Practical information for caregivers',
];

const kinds = [
  ['Support for Parents & Caregivers', 'Parents and caregivers often carry responsibility for everyone else while having very little space to ask their own questions. Family support can provide information, education, and guidance to help caregivers feel more confident about their next steps.'],
  ['Support for Children & Families', <>When children or adolescents are struggling, the effects can reach the entire household. Open Arms can help families explore appropriate support and, when applicable, connect them with relevant counseling and family-focused services.</>],
  ['Support Through Change', 'Families change. Relationships change. Circumstances change. Support during periods of transition can help families better understand what they’re experiencing and identify constructive ways to move forward.'],
];

const faqs = [
  ['What are family support services?', 'Family support services can include education, guidance, resources, referrals, and other forms of assistance designed to help families navigate challenges and strengthen family well-being. Available support depends on the organization, program, and family’s circumstances.'],
  ['How do I know what type of support my family needs?', 'You don’t necessarily need to know before reaching out. Start by explaining the challenges your family is experiencing. Open Arms Initiative can help you explore available services and determine what type of support may be appropriate.'],
  ['Are family support services the same as family counseling?', <>Not necessarily. <Link href="/family-therapy-oklahoma-city/">Family counseling</Link> is a therapeutic service provided by qualified mental health professionals. Family support can be broader and may include education, resources, guidance, or connections to services. Some families may benefit from both.</>],
  ['Can you help parents who are struggling?', 'Open Arms Initiative provides family-centered support and educational resources that may help parents and caregivers navigate challenges. The appropriate service depends on your family’s particular needs and circumstances.'],
  ['Do you provide family support services in Oklahoma City?', 'Yes. Open Arms Initiative provides Family Support Services in Oklahoma City designed to help families access support, education, guidance, and appropriate resources.'],
  ['Can you help me find the right service for my child or family?', <>Open Arms Initiative can help you explore available services based on the concerns you share. Depending on your circumstances, appropriate options may include family support, counseling, <Link href="/child-counseling-services-oklahoma-city/">child and adolescent services</Link>, education, or connections to other resources.</>],
];

export default function FamilySupportPage() { return <main className="fs-page">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SERVICE) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />
  <ScrollReveal />

  <section className="fs-hero"><div className="fs-hero-split-inner">
    <div className="fs-hero-copy reveal reveal-from-left">
      <p className="fs-kicker">SUPPORT FOR FAMILIES. STRENGTH FOR WHAT COMES NEXT.</p>
      <h1>Family Support Services<br />in Oklahoma City</h1>
      <p className="fs-lead">Because Sometimes Your Family Needs More Than Advice, You Need Someone to Help You Find the Way Forward</p>
      <p>Families carry a lot. Parenting responsibilities. Changing relationships. Financial pressures. School concerns. Unexpected transitions. Questions about where to turn when someone you love needs additional support.</p>
      <p>And when several challenges happen at once, even knowing where to begin can feel overwhelming.</p>
      <p>Open Arms Initiative provides compassionate <strong>Family Support Services in Oklahoma City</strong> designed to help families feel informed, supported, and more connected to the resources they may need.</p>
      <div className="fs-actions"><Link href="/contact" className="fs-btn fs-solid">Connect With Open Arms</Link><a href="#needs" className="fs-btn fs-outline">Explore Family Support</a></div>
    </div>
    <div className="fs-hero-form-card reveal reveal-from-right"><div className="fs-hero-form-body"><h3>Request an Appointment</h3><span className="fs-hero-form-underline" /><p className="fs-hero-form-sub">Tell us a bit about your family and we&rsquo;ll help you find the right support.</p><FamilySupportRequestForm /></div><div className="fs-hero-form-photo"><img src="/n11.jpg" alt="Family finding support and guidance together in Oklahoma City" /></div></div>
  </div></section>

  <section className="fs-trust-section"><div className="fs-container fs-trust">{['Family-Centered', 'Compassionate Guidance', 'Community Focused', 'Practical Support'].map((x, i) => <div key={x}><span>{trustIcons[i]}</span><p>{x}</p></div>)}</div></section>

  <section className="fs-section"><div className="fs-container"><div className="fs-alone reveal reveal-from-bottom">
    <span className="fs-alone-badge"><img src="/ng.png" alt="" /></span>
    <i className="fs-alone-divider" />
    <h2>You Shouldn&rsquo;t Have to Figure Everything Out Alone</h2>
    <i className="fs-alone-leaf"><span className="fs-alone-leaf-dot" /></i>
    <p>Sometimes families know they need help but don&apos;t know what kind of help they need.</p>
    <p>You may be asking:</p>
    <ul className="fs-quote-list">
      <li><span className="fs-quote-icon">?</span>&ldquo;Who do I call?&rdquo;</li>
      <li><span className="fs-quote-icon">?</span>&ldquo;Where can we find support?&rdquo;</li>
      <li><span className="fs-quote-icon">?</span>&ldquo;What resources are available for our family?&rdquo;</li>
      <li><span className="fs-quote-icon">?</span>&ldquo;What should we do next?&rdquo;</li>
    </ul>
    <p>Those questions can feel even harder when you&apos;re already worried about your child, your relationships, or your family&apos;s future.</p>
    <p>Open Arms Initiative exists to help families feel less alone while navigating those questions.</p>
    <p><strong>You don&apos;t need to arrive knowing exactly what you need. We can start with what your family is facing right now.</strong></p>
  </div></div></section>

  <section id="needs" className="fs-section fs-needs-section"><div className="fs-container">
    <div className="fs-needs-head reveal reveal-from-bottom"><h2>Every Family&rsquo;s Needs<br />Look <em>Different</em></h2><i className="fs-line" /></div>
    <div className="fs-needs-grid reveal-stagger">{needs.map(([h, p], i) => <article className="reveal reveal-from-bottom fs-need-card" key={h}><span className="fs-need-icon">{needsIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
  </div></section>

  <section className="fs-section fs-understand-section"><div className="fs-container"><div className="fs-understand">
    <div className="reveal reveal-from-left"><h2>Support Starts With Understanding What Your Family Needs</h2><p>There is no single solution that works for every household.</p><p>That&apos;s why meaningful family support begins with listening.</p><p>At Open Arms Initiative, we take time to understand the challenges you&apos;re facing and help identify appropriate next steps based on the services and resources available.</p></div>
    <div className="fs-understand-media reveal reveal-from-bottom"><img src="/nh3.jpg" alt="Family finding support and guidance together in Oklahoma City" /></div>
    <div className="reveal reveal-from-right">
      <p className="fs-kicker-label">SUPPORT MAY INCLUDE:</p>
      <div className="fs-check-grid">{supportList.map(x => <span key={x}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5 9 18 20 6" /></svg>{x}</span>)}</div>
    </div>
  </div>
  <p className="fs-understand-close reveal reveal-from-bottom"><strong>The goal isn&apos;t to tell your family what it should look like. It&apos;s to help your family find support that makes sense for where you are now.</strong></p>
  </div></section>

  <section className="fs-statement"><div className="fs-container reveal reveal-scale-in"><div><h2>&ldquo;You&rsquo;ve been doing everything you can for your family. Asking for support can be part of caring for them, too.&rdquo;</h2><Link href="/contact" className="fs-btn fs-light">Connect With Open Arms</Link></div><img src="/nh4.jpg" alt="Hands offering comfort and support to a family member" /><aside>You don&apos;t need every answer today.<br /><br />You don&apos;t need to know which service you need before reaching out.<br /><br />Tell us what&apos;s happening. We can begin there.</aside></div></section>

  <section className="fs-section fs-kinds-section"><div className="fs-container">
    <h2 className="fs-center reveal reveal-from-bottom">More Than One Kind of Support</h2><i className="fs-line-center" />
    <div className="fs-kinds reveal-stagger">{kinds.map(([h, p], i) => <article className="reveal reveal-from-bottom" key={h}><span className="fs-kind-icon">{kindsIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
  </div></section>

  <section id="counseling" className="fs-section"><div className="fs-container"><div className="fs-counseling reveal reveal-from-bottom">
    <h2>Sometimes Counseling Is Part of the Support</h2>
    <p>Some families may benefit from therapeutic services in addition to broader family support.</p>
    <p>If communication has become difficult, relationships feel strained, or your household is navigating significant emotional challenges, our <Link href="/family-therapy-oklahoma-city/">Family Counseling</Link> services may provide a more appropriate therapeutic environment.</p>
    <p>If your child or teenager is experiencing emotional or behavioral concerns, you can also explore our <Link href="/child-counseling-services-oklahoma-city/">Child &amp; Adolescent Counseling</Link> services.</p>
    <p><strong>Our goal is to help you understand the available options, not make you figure out the entire path by yourself.</strong></p>
  </div></div></section>

  <section className="fs-section fs-pillars-section"><div className="fs-container">
    <h2 className="fs-center reveal reveal-from-bottom">Building Stronger Families Builds Stronger Communities</h2><i className="fs-line-center" />
    <p className="fs-pillars-lead reveal reveal-from-bottom">Family well-being doesn&apos;t stop at the front door. When parents feel supported, children can benefit. When families have access to helpful information and resources, communities can become more connected and resilient.</p>
    <div className="fs-pillars reveal-stagger">{[['Strengthen Families', 'Help families develop knowledge, skills, connections, and confidence.'], ['Support Caregivers', 'Provide parents and caregivers with opportunities to learn and feel supported.'], ['Connect Communities', 'Help families become more aware of services, education, and resources that may be available to them.'], ['Encourage Early Support', 'Families shouldn’t have to wait until circumstances become overwhelming before asking for help.']].map(([h, p], i) => <article className="reveal reveal-from-bottom" key={h}><span className="fs-pillar-icon">{pillarIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
  </div></section>

  <section className="fs-section fs-steps-section"><div className="fs-container"><h2 className="fs-center reveal reveal-from-bottom">How Family Support Works</h2><i className="fs-line-center" /><div className="fs-steps reveal-stagger">{[['Reach Out', 'Contact Open Arms Initiative and tell us what your family is currently experiencing.'], ['Talk With Us', 'We’ll listen to your concerns and better understand the type of support you’re looking for.'], ['Explore Your Options', 'Based on your circumstances and available services, we can help you understand possible resources or next steps.'], ['Move Forward', 'Your family can take the next step with greater clarity and a better understanding of the support available.']].map(([h, p], i) => <article className="reveal reveal-from-bottom" key={h}><span className="fs-step-icon">{stepIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>

  <section className="fs-section"><div className="fs-container"><div className="fs-faq"><aside className="reveal reveal-from-left"><h2>Questions About Family Support Services</h2><p>Find answers to common questions about family support and what to expect.</p></aside><div className="reveal reveal-from-right">{faqs.map(([q, a]) => <details key={q} name="fs-faq-group"><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></div></div></section>

  <section className="fs-final"><div className="fs-container fs-final-grid reveal reveal-scale-in">
    <div>
      <h2>You Don&rsquo;t Need to Know Exactly What Kind of Help You Need Before You Ask for It</h2>
      <p>Sometimes the hardest part is knowing where to begin. So begin with a conversation.</p>
      <p>Tell us what&apos;s happening. Tell us what you&apos;re worried about. Tell us what your family needs right now, even if you&apos;re not sure how to describe it.</p>
      <h3>Your Family Deserves to Feel Supported.</h3>
      <p>Open Arms Initiative is here to help you explore the next step.</p>
    </div>
    <Link href="/contact" className="fs-btn fs-light">Connect With Open Arms</Link>
  </div></section>
</main>}
