import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import ParentingSupportRequestForm from '@/components/ParentingSupportRequestForm';

export const metadata = { title: 'Effective Parenting Classes OKC | Open Arms Initiative', description: 'Explore effective parenting classes in OKC with Open Arms Initiative. Build communication, confidence, healthy boundaries, and stronger parent-child connections.', alternates: { canonical: 'https://www.openarmsinitiative.com/parenting-classes-okc/' } };

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Parenting Classes', item: 'https://www.openarmsinitiative.com/parenting-classes-okc/' },
  ],
};

const SCHEMA_SERVICE = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Parenting Classes',
  provider: {
    '@type': 'Organization',
    name: 'Open Arms Initiative',
    url: 'https://www.openarmsinitiative.com/',
  },
  areaServed: 'Oklahoma City, OK',
  description: 'Effective parenting classes and parent support training in Oklahoma City, helping parents and caregivers build communication, confidence, and healthy boundaries.',
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Are parenting classes only for parents who are struggling?', acceptedAnswer: { '@type': 'Answer', text: 'No. Parenting education can benefit caregivers at many stages. Some parents seek support because of a particular challenge, while others want to strengthen communication, understand their child’s development, or build greater confidence.' } },
    { '@type': 'Question', name: 'What can I learn in a parenting class?', acceptedAnswer: { '@type': 'Answer', text: 'Topics can vary, but parenting education may address communication, behavior, boundaries, emotional awareness, parent-child relationships, family transitions, stress, and other practical parenting concerns.' } },
    { '@type': 'Question', name: 'Do you offer parenting classes in Oklahoma City?', acceptedAnswer: { '@type': 'Answer', text: 'Open Arms Initiative provides parenting support and educational programming in Oklahoma City. Contact us to learn about currently available classes, workshops, or parent-support opportunities.' } },
    { '@type': 'Question', name: 'Are parenting classes the same as family therapy?', acceptedAnswer: { '@type': 'Answer', text: 'No. Parenting classes are primarily educational, while family therapy is a clinical service addressing therapeutic concerns and family relationships. Some families may benefit from one or both depending on their circumstances.' } },
    { '@type': 'Question', name: 'Can parenting support help me communicate better with my teenager?', acceptedAnswer: { '@type': 'Answer', text: 'Parenting education can help caregivers explore communication strategies, boundaries, expectations, and ways to maintain connection as adolescents develop greater independence.' } },
    { '@type': 'Question', name: 'What if my child needs counseling too?', acceptedAnswer: { '@type': 'Answer', text: 'If your child is experiencing concerns that may benefit from therapeutic support, Open Arms Initiative also provides Child & Adolescent Counseling. Your family can explore the available services to determine an appropriate next step.' } },
  ],
};

const trustIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="8" width="17" height="12" rx="2" /><path d="M8 8V6a4 4 0 0 1 8 0v2" /><path d="M12 12v4" strokeDasharray="1.2 1.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5c0 4.7-4 8.5-9 8.5a9.5 9.5 0 0 1-3.2-.55L4 21l1.4-3.9A8.4 8.4 0 0 1 3 11.5C3 6.8 7 3 12 3s9 3.8 9 8.5Z" /><path d="m8.5 11.7 2.2 2.2 4.8-4.8" /></svg>,
];

const needsIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5c0 4.7-4 8.5-9 8.5a9.5 9.5 0 0 1-3.2-.55L4 21l1.4-3.9A8.4 8.4 0 0 1 3 11.5C3 6.8 7 3 12 3s9 3.8 9 8.5Z" /><path d="M8.5 11.7h.01M12 11.7h.01M15.5 11.7h.01" strokeWidth="2.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /><path d="M9.5 10.2h5" strokeDasharray="1.3 1.7" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10.5" width="16" height="10" rx="2" /><path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m20 20-4.3-4.3" /><path d="M7.5 10.5h6M10.5 7.5v6" strokeDasharray="1.6 2.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.2s5.5 6.7 5.5 11a5.5 5.5 0 0 1-11 0c0-4.3 5.5-11 5.5-11Z" /><path d="M9.3 15.2a2.7 2.7 0 0 0 2.7 2.7" strokeDasharray="1.3 1.8" /></svg>,
];

const processIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m20 20-4.3-4.3" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 1 1 3 6.2L4 19l.9-3A7.9 7.9 0 0 1 4 12Z" /><path d="M8.5 10.5h7M8.5 14h4.5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg>,
];

const stepIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 4.5h3.2l1.6 4-2 1.6a11 11 0 0 0 5.6 5.6l1.6-2 4 1.6v3.2a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 3 6.2a1.6 1.6 0 0 1 1.5-1.7Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V6a1.5 1.5 0 0 1 1.5-1.5h9L20 9v10.5A1.5 1.5 0 0 1 18.5 21h-13A1.5 1.5 0 0 1 4 19.5Z" /><path d="M14.5 4.5V9H19" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 12A8.5 8.5 0 1 1 12 3.5" /><path d="M20.5 12 17 8.5m3.5 3.5L17 15.5" /><path d="M12 8v4l2.5 1.5" strokeDasharray="1.4 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
];

const needs = [
  ['Communication Challenges', 'Sometimes it feels like you and your child are speaking completely different languages. Parenting support can help you explore healthier ways to listen, communicate expectations, and stay connected.'],
  ['Difficult Behaviors', 'Frequent arguments, emotional outbursts, resistance, or other challenging behaviors can leave parents unsure how to respond constructively.'],
  ['Setting Boundaries', 'Healthy boundaries can help children understand expectations while creating greater consistency and security at home.'],
  ['Parenting Teens', 'Adolescence can bring changing emotions, growing independence, new relationships, and shifting boundaries. Parents may need new approaches as their child grows.'],
  ['Family Transitions', 'Divorce, separation, blended families, relocation, foster care, adoption, loss, and other significant changes can affect both children and caregivers.'],
  ['Parenting Stress', 'Constant responsibility can become exhausting. Parents also need strategies for managing their own stress while caring for their children.'],
];

const supportList = [
  'Communicate more effectively with your child',
  'Better understand behavior and emotional needs',
  'Establish clearer expectations',
  'Develop healthier boundaries',
  'Respond more constructively during conflict',
  'Strengthen parent-child connection',
  'Navigate developmental changes',
  'Manage parenting stress',
  'Build greater confidence as a caregiver',
  'Create more consistent approaches at home',
];

const process = [
  ['Understand', 'Learn more about behavior, communication, emotions, development, and family dynamics.'],
  ['Practice', 'Explore practical strategies for communication, boundaries, expectations, and challenging situations.'],
  ['Connect', 'Strengthen the relationship underneath the rules, routines, and responsibilities.'],
  ['Grow', 'Develop greater confidence while continuing to adjust your parenting approach as your child grows.'],
];

const topicGroups = [
  { label: 'Communication & Connection', topics: ['Parent-child communication', 'Building stronger family relationships', 'Strengthening caregiver confidence'] },
  { label: 'Understanding Behavior', topics: ['Understanding behavior', 'Emotional awareness', 'Age-appropriate expectations'] },
  { label: 'Structure & Change', topics: ['Healthy boundaries', 'Parenting through transitions', 'Supporting children through change', 'Managing parenting stress'] },
];

const faqs = [
  ['Are parenting classes only for parents who are struggling?', 'No. Parenting education can benefit caregivers at many stages. Some parents seek support because of a particular challenge, while others want to strengthen communication, understand their child’s development, or build greater confidence.'],
  ['What can I learn in a parenting class?', 'Topics can vary, but parenting education may address communication, behavior, boundaries, emotional awareness, parent-child relationships, family transitions, stress, and other practical parenting concerns.'],
  ['Do you offer parenting classes in Oklahoma City?', 'Open Arms Initiative provides parenting support and educational programming in Oklahoma City. Contact us to learn about currently available classes, workshops, or parent-support opportunities.'],
  ['Are parenting classes the same as family therapy?', <>No. Parenting classes are primarily educational, while <Link href="/family-therapy-oklahoma-city/">family therapy</Link> is a clinical service addressing therapeutic concerns and family relationships. Some families may benefit from one or both depending on their circumstances.</>],
  ['Can parenting support help me communicate better with my teenager?', 'Parenting education can help caregivers explore communication strategies, boundaries, expectations, and ways to maintain connection as adolescents develop greater independence.'],
  ['What if my child needs counseling too?', <>If your child is experiencing concerns that may benefit from therapeutic support, Open Arms Initiative also provides <Link href="/child-counseling-services-oklahoma-city/">Child &amp; Adolescent Counseling</Link>. Your family can explore the available services to determine an appropriate next step.</>],
];

export default function ParentingClassesPage() { return <main className="fs-page pc-page">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SERVICE) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />
  <ScrollReveal />

  <section className="fs-hero"><div className="fs-hero-split-inner">
    <div className="fs-hero-copy reveal reveal-from-left">
      <p className="fs-kicker">SUPPORTED PARENTS. STRONGER FAMILIES.</p>
      <h1>Effective Parenting Classes<br />in OKC</h1>
      <p className="fs-lead">Parenting Doesn&rsquo;t Come With a Perfect Roadmap, and You&rsquo;re Not Expected to Have Every Answer</p>
      <p>You love your child. But that doesn&apos;t mean parenting is always easy.</p>
      <p>There may be behaviors you don&apos;t understand, conversations that end in frustration, boundaries that are difficult to maintain, or moments when you find yourself wondering: &ldquo;Am I handling this the right way?&rdquo;</p>
      <p>At Open Arms Initiative, our <strong>Effective Parenting Classes in OKC</strong> provide practical education, compassionate guidance, and supportive tools to help parents and caregivers feel more confident as they navigate the challenges of raising children.</p>
      <div className="fs-actions"><a href="#needs" className="fs-btn fs-solid">Explore Parenting Support</a><Link href="/contact" className="fs-btn fs-outline">Connect With Open Arms</Link></div>
    </div>
    <div className="fs-hero-form-card reveal reveal-from-right"><div className="fs-hero-form-body"><h3>Request an Appointment</h3><span className="fs-hero-form-underline" /><p className="fs-hero-form-sub">Tell us a bit about your family and we&rsquo;ll help you find the right support.</p><ParentingSupportRequestForm /></div><div className="fs-hero-form-photo"><img src="/happy-family-with-dog-moving-new-home-100kb.jpg" alt="Parent spending warm, connected time with children at home" /></div></div>
  </div></section>

  <section className="fs-trust-section"><div className="fs-container fs-trust">{['Practical Guidance', 'Family-Centered', 'Supportive Education', 'No Judgment'].map((x, i) => <div key={x}><span>{trustIcons[i]}</span><p>{x}</p></div>)}</div></section>

  <section className="fs-section"><div className="fs-container"><div className="fs-alone reveal reveal-from-bottom">
    <h2>Good Parents Have Hard Days Too</h2>
    <i className="fs-alone-leaf"><span className="fs-alone-leaf-dot" /></i>
    <p>Some days you feel confident. Other days, nothing seems to work.</p>
    <p>Your child doesn&apos;t listen. Your teenager stops talking. A routine that worked last month suddenly creates arguments. You set a boundary and immediately wonder whether you were too strict, or not strict enough.</p>
    <p>Parenting can involve love, pride, worry, frustration, uncertainty, and exhaustion, sometimes all in the same day.</p>
    <p><strong>Needing support doesn&apos;t mean you&apos;re doing parenting wrong. It means you&apos;re willing to keep learning.</strong></p>
  </div></div></section>

  <section id="needs" className="fs-section fs-needs-section"><div className="fs-container">
    <div className="fs-needs-head reveal reveal-from-bottom"><h2>What Are You <em>Navigating</em> Right Now?</h2><i className="fs-line" /></div>
    <div className="fs-needs-grid reveal-stagger">{needs.map(([h, p], i) => <article className="reveal reveal-from-bottom fs-need-card" key={h}><span className="fs-need-icon">{needsIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
  </div></section>

  <section className="fs-section fs-understand-section"><div className="fs-container"><div className="fs-understand">
    <div className="reveal reveal-from-left"><h2>Parenting Support Isn&rsquo;t About Becoming a Perfect Parent</h2><p>There is no perfect parent. There is no single parenting strategy that works for every child. And there isn&apos;t a checklist that makes every difficult moment disappear.</p><p>Our <strong>Parent Support Training in Oklahoma City</strong> focuses on helping parents better understand their children, strengthen communication, establish appropriate boundaries, and develop practical approaches they can use at home.</p></div>
    <div className="fs-understand-media reveal reveal-from-bottom"><img src="/ch2.jpg" alt="Family drawing and hands together on a table at home" /></div>
    <div className="reveal reveal-from-right">
      <p className="fs-kicker-label">PARENTING SUPPORT MAY HELP YOU:</p>
      <div className="fs-check-grid">{supportList.map(x => <span key={x}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5 9 18 20 6" /></svg>{x}</span>)}</div>
    </div>
  </div>
  <p className="fs-understand-close reveal reveal-from-bottom"><strong>The goal isn&apos;t perfection. It&apos;s connection, understanding, and growth.</strong></p>
  </div></section>

  <section className="fs-statement"><div className="fs-container reveal reveal-scale-in"><div><h2>&ldquo;You don&rsquo;t have to know everything to be the parent your child needs.&rdquo;</h2><Link href="/contact" className="fs-btn fs-light">Explore Parenting Support</Link></div><img src="/n1.jpg" alt="Parent and child sharing a supportive moment" /><aside>Parenting involves learning.<br /><br />Your child is growing. You&apos;re growing too.<br /><br />There is strength in being willing to ask questions, learn new approaches, and seek support when something isn&apos;t working.</aside></div></section>

  <section className="fs-section pc-process-section"><div className="fs-container">
    <h2 className="fs-center reveal reveal-from-bottom">Practical Tools for Real Family Life</h2><i className="fs-line-center" />
    <p className="pc-process-lead reveal reveal-from-bottom">Parenting advice can sound simple until you&apos;re trying to use it during a difficult morning, a public meltdown, a disagreement about boundaries, or a conversation with a teenager who doesn&apos;t want to talk. Our approach focuses on information and strategies parents can understand and apply in everyday family life.</p>
    <div className="pc-process-rows reveal-stagger">{process.map(([h, p], i) => <div className="pc-process-row reveal reveal-from-bottom" key={h}><span className="pc-process-row-icon">{processIcons[i]}</span><div><h3>{h}</h3><p>{p}</p></div></div>)}</div>
  </div></section>

  <section className="fs-section fs-kinds-section"><div className="fs-container">
    <h2 className="fs-center reveal reveal-from-bottom">Parenting Workshops in Oklahoma City</h2><i className="fs-line-center" />
    <p className="pc-process-lead reveal reveal-from-bottom">Sometimes parents don&apos;t need individual therapy. They need information, practical tools, and an opportunity to learn and ask questions. Our Parenting Workshops in Oklahoma City can provide educational opportunities around topics relevant to parents, caregivers, and families. Workshop topics may vary depending on the program and audience and can include areas such as:</p>
    <div className="pc-topic-groups reveal-stagger">{topicGroups.map((group) => <div className="pc-topic-group reveal reveal-from-bottom" key={group.label}><h3>{group.label}</h3><div className="pc-topic-chips">{group.topics.map((t) => <span className="pc-topic-chip" key={t}>{t}</span>)}</div></div>)}</div>
  </div></section>

  <section className="fs-section"><div className="fs-container"><div className="fs-counseling reveal reveal-from-bottom">
    <h2>Support for Parents Is Support for Children</h2>
    <p>Children don&apos;t experience family life separately from their caregivers. When parents have more tools, greater confidence, and better ways to communicate, the entire household can benefit.</p>
    <p>That&apos;s why parenting support isn&apos;t about pointing out what you&apos;re doing wrong. It&apos;s about recognizing what is already working and helping you develop additional tools for the areas that feel difficult.</p>
    <div className="pc-quote"><p>Sometimes the most important change begins when a parent feels:</p><p className="pc-quote-line">&ldquo;I understand my child a little better now.&rdquo;</p></div>
  </div></div></section>

  <section className="fs-section fs-understand-section"><div className="fs-container"><div className="fs-counseling reveal reveal-from-bottom">
    <h2>When Your Family May Need More Than Parenting Support</h2>
    <p>Parent education and counseling serve different purposes.</p>
    <p>If challenges involve ongoing conflict or broader family relationship concerns, our <Link href="/family-therapy-oklahoma-city/">Family Counseling</Link> service may be more appropriate.</p>
    <p>If your child is experiencing emotional, behavioral, relational, or other concerns that may benefit from professional therapeutic support, explore our <Link href="/child-counseling-services-oklahoma-city/">Child &amp; Adolescent Counseling</Link> services.</p>
    <p>Families looking for broader guidance and community resources can also explore <Link href="/family-support-services-oklahoma-city/">Family Support Services</Link>.</p>
    <p><strong>Open Arms can help you understand which type of support may best fit your circumstances.</strong></p>
  </div></div></section>

  <section className="fs-section fs-steps-section"><div className="fs-container"><h2 className="fs-center reveal reveal-from-bottom">How Parenting Support Works</h2><i className="fs-line-center" /><div className="fs-steps reveal-stagger">{[['Connect', 'Reach out to Open Arms Initiative and tell us what kind of parenting support you’re looking for.'], ['Learn', 'Explore relevant information, perspectives, and practical strategies.'], ['Practice', 'Begin applying appropriate tools to communication, boundaries, routines, and everyday parenting challenges.'], ['Grow Together', 'Continue adapting what you learn as your child, your relationship, and your family’s needs evolve.']].map(([h, p], i) => <article className="reveal reveal-from-bottom" key={h}><span className="fs-step-icon">{stepIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>

  <section className="fs-section"><div className="fs-container"><div className="fs-faq"><aside className="reveal reveal-from-left"><h2>Questions Parents Often Ask</h2><p>Find answers to common questions about parenting classes and what to expect.</p></aside><div className="reveal reveal-from-right">{faqs.map(([q, a]) => <details key={q} name="pc-faq-group"><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></div></div></section>

  <section className="fs-final"><div className="fs-container fs-final-grid reveal reveal-scale-in">
    <div>
      <h2>Your Child Is Growing, and You&rsquo;re Allowed to Grow Alongside Them</h2>
      <p>You don&apos;t need to have every answer. You don&apos;t need to handle every difficult parenting moment perfectly. And you don&apos;t need to figure everything out by yourself.</p>
      <h3>More Confidence. More Connection. More Support for Your Family.</h3>
      <p>Take the next step toward parenting with greater understanding, practical tools, and support.</p>
    </div>
    <Link href="/contact" className="fs-btn fs-solid">Connect With Open Arms</Link>
  </div></section>
</main>}
