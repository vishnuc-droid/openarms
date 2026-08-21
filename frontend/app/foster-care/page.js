import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Foster Care Support | Open Arms Initiative',
  description: 'Foster Care Support from Open Arms Initiative in Oklahoma City — training, guidance, and trauma-informed counseling built around the realities of foster and adoptive families.',
  alternates: { canonical: 'https://www.openarmsinitiative.com/foster-care/' },
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Foster Care', item: 'https://www.openarmsinitiative.com/foster-care/' },
  ],
};

const trustIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.2 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="8" r="2.8" /><path d="M2.5 19c0-3 2.7-5.2 6-5.2s6 2.2 6 5.2" /><circle cx="17" cy="8.5" r="2.2" /><path d="M15.8 13.9c2.6.3 4.7 2.3 4.7 5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" /></svg>,
];

const supportKinds = [
  ['Foster Parent Training', 'Preparing to welcome a child into your home is different from any other kind of parenting. We offer training built around the realities of placement, attachment, and trauma — not generic parenting advice.'],
  ['Guidance Beyond Scheduled Sessions', 'Foster care doesn’t happen on a fixed schedule, and challenges don’t wait for the next appointment. Families working with us have access to support beyond the counseling room.'],
  ['Foster Care & Adoption Counseling', 'When attachment, transition, or trauma need a clinical response, our counselors bring specific experience with foster and adoptive family dynamics — not a one-size-fits-all approach.'],
];

const faqs = [
  ['What kind of support does Open Arms offer foster families?', 'We offer foster parent training, guidance beyond scheduled sessions, and trauma-informed counseling built specifically around the realities of foster care — placement, attachment, and transition.'],
  ['Is this support only for licensed foster parents?', 'Foster care support is built for foster and adoptive families navigating placement, attachment, and transition. If you’re unsure whether your situation fits, reach out and we can talk through it together.'],
  ['Do you also provide therapy for foster or adopted children?', <>Yes. Our <Link href="/services/foster-care-adoption-counseling">Foster Care &amp; Adoption Counseling</Link> service provides trauma-informed counseling for foster and adoptive families and the children in their care.</>],
  ['How is this different from general parenting support?', 'Foster and adoptive families face a distinct set of challenges around placement, attachment, and trauma history that general parenting resources aren’t built to address. Our approach is built around those specific realities.'],
];

export default function FosterCarePage() { return <main className="fs-page">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
  <ScrollReveal />

  <section className="fs-hero"><div className="fs-container fs-hero-grid">
    <div className="reveal reveal-from-left">
      <p className="fs-kicker">FOSTER CARE SUPPORT</p>
      <h1>Foster Care Support<br />in Oklahoma City</h1>
      <p className="fs-lead">Support Built Around the Realities of Foster Care, Not Generic Advice</p>
      <p>Foster care comes with its own set of challenges: placement transitions, attachment questions, and the everyday reality of caring for a child who has experienced trauma.</p>
      <p>Open Arms Initiative offers training, guidance, and trauma-informed counseling to help foster families build stable, loving homes.</p>
      <div className="fs-actions"><Link href="/contact" className="fs-btn fs-solid">Connect With Open Arms</Link><a href="#support" className="fs-btn fs-outline">See How We Help</a></div>
    </div>
    <div className="fs-hero-media reveal reveal-from-right"><img src="/fam9.jpg" alt="Foster family spending time together outdoors in Oklahoma City" /></div>
  </div></section>

  <section className="fs-trust-section"><div className="fs-container fs-trust">{['Trauma-Informed', 'Foster Parent Training', 'Community-Connected', 'Support Beyond Sessions'].map((x, i) => <div key={x}><span>{trustIcons[i]}</span><p>{x}</p></div>)}</div></section>

  <section id="support" className="fs-section fs-kinds-section"><div className="fs-container">
    <h2 className="fs-center reveal reveal-from-bottom">How We Support Foster Families</h2><i className="fs-line-center" />
    <div className="fs-kinds reveal-stagger">{supportKinds.map(([h, p], i) => <article className="reveal reveal-from-bottom" key={h}><span className="fs-kind-icon">{trustIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
  </div></section>

  <section className="fs-statement"><div className="fs-container reveal reveal-scale-in"><div><h2>&ldquo;Foster and adoptive families face a unique set of challenges. Our counselors understand the realities of placement, attachment, and transition, and offer support built around them.&rdquo;</h2><Link href="/contact" className="fs-btn fs-light">Connect With Open Arms</Link></div><img src="/n3.jpg" alt="Community support circle connected to Open Arms Initiative" /><aside>You don&apos;t have to navigate foster care alone.<br /><br />Reach out, and we&apos;ll help you find the right kind of support.</aside></div></section>

  <section id="counseling" className="fs-section"><div className="fs-container"><div className="fs-counseling reveal reveal-from-bottom">
    <h2>Sometimes Counseling Is Part of the Support</h2>
    <p>If a child in your care is working through trauma, attachment concerns, or a difficult transition, our <Link href="/services/foster-care-adoption-counseling">Foster Care &amp; Adoption Counseling</Link> service provides trauma-informed clinical care built around foster and adoptive family dynamics.</p>
    <p><strong>Our goal is to help you understand the support available — not make you figure out the whole path by yourself.</strong></p>
    <Link href="/services" className="fs-link-arrow">View Our Services <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13.5M13 6l6 6-6 6" /></svg></Link>
  </div></div></section>

  <section className="fs-section"><div className="fs-container"><div className="fs-faq"><aside className="reveal reveal-from-left"><h2>Questions About Foster Care Support</h2><p>Find answers to common questions about how our foster care support works.</p></aside><div className="reveal reveal-from-right">{faqs.map(([q, a]) => <details key={q} name="foster-faq-group"><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></div></div></section>

  <section className="fs-final"><div className="fs-container fs-final-grid reveal reveal-scale-in">
    <div>
      <h2>You Don&rsquo;t Have to Navigate Foster Care Alone</h2>
      <p>Whether you&apos;re just starting the foster care journey or you&apos;ve been at it for years, real support makes a difference.</p>
      <h3>Your Family Deserves Support Built Around Your Reality.</h3>
      <p>Open Arms Initiative is here to help you find the next step.</p>
    </div>
    <Link href="/contact" className="fs-btn fs-solid">Connect With Open Arms</Link>
  </div></section>
</main>}
