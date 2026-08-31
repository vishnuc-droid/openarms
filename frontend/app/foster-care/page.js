import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FosterCareRequestForm from '@/components/FosterCareRequestForm';

export const metadata = {
  title: 'Foster Care Support Oklahoma City | Open Arms Initiative',
  description: 'Find foster care support in Oklahoma City with Open Arms Initiative, including foster parent guidance, training, counseling, and support for foster and adoptive families.',
  alternates: { canonical: 'https://www.openarmsinitiative.com/foster-care/' },
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Foster Care Support', item: 'https://www.openarmsinitiative.com/foster-care/' },
  ],
};

const SCHEMA_SERVICE = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Foster Care Support',
  provider: {
    '@type': 'Organization',
    name: 'Open Arms Initiative',
    url: 'https://www.openarmsinitiative.com/',
  },
  areaServed: 'Oklahoma City, OK',
  description: 'Foster care support in Oklahoma City including foster parent guidance, training, counseling, and support for foster and adoptive families.',
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What support does Open Arms provide for foster families?', acceptedAnswer: { '@type': 'Answer', text: 'Open Arms Initiative currently describes its foster support as including comprehensive training, 24/7 guidance, child placement support, and trauma-focused counseling for foster families.' } },
    { '@type': 'Question', name: 'Does Open Arms provide counseling for children in foster care?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open Arms has a dedicated Foster Care & Adoption Counseling service and also provides Child & Adolescent Counseling using trauma-informed approaches.' } },
    { '@type': 'Question', name: 'Does Open Arms support foster parents too?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open Arms states that it provides ongoing support for foster parents, including foster parent training and 24/7 guidance.' } },
    { '@type': 'Question', name: 'Can adoptive families receive support?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open Arms’ existing Foster Care & Adoption Counseling program specifically supports both foster and adoptive families through the emotional complexities associated with their journeys.' } },
    { '@type': 'Question', name: 'What if our entire family is struggling with the transition?', acceptedAnswer: { '@type': 'Answer', text: 'Depending on your family’s needs, Foster Care & Adoption Counseling, Family Counseling, Child & Adolescent Counseling, or broader Family Support Services may be appropriate.' } },
    { '@type': 'Question', name: 'How do we get started?', acceptedAnswer: { '@type': 'Answer', text: 'Contact Open Arms Initiative and explain what kind of foster, adoption, counseling, or family support you’re looking for. The organization can then guide you toward the appropriate available service.' } },
  ],
};

const trustIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z" /><path d="m9.3 12 1.9 1.9 3.6-3.9" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.2 2" /></svg>,
];

const carryIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 13.5A7.5 7.5 0 1 1 12 21" /><path d="M4.5 13.5 2.7 12M4.5 13.5l1.6-2" /><path d="M9.5 11.3a2.6 2.6 0 1 1 2.6 2.6" strokeDasharray="1.3 2" /><circle cx="12" cy="16.3" r=".3" fill="currentColor" stroke="none" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 12A8.5 8.5 0 1 1 12 3.5" /><path d="M20.5 12 17 8.5m3.5 3.5L17 15.5" /><path d="M12 8v4l2.5 1.5" strokeDasharray="1.4 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h15.5" /><path d="m13.5 6 6 6-6 6" strokeDasharray="1.4 1.8" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.2s5.5 6.7 5.5 11a5.5 5.5 0 0 1-11 0c0-4.3 5.5-11 5.5-11Z" /><path d="M9.3 15.2a2.7 2.7 0 0 0 2.7 2.7" strokeDasharray="1.3 1.8" /></svg>,
];

const carry = [
  ['Helping a Child Feel Safe', 'Children entering foster care may have experienced significant disruption or uncertainty. Building trust and a sense of safety can take patience, consistency, and understanding.'],
  ['Understanding Behavior', 'Sometimes behaviors that appear difficult on the surface may be connected to experiences, emotions, fear, or unmet needs.'],
  ['Building Connection', 'Attachment and trust don’t happen according to a schedule. Caregivers may need support as relationships develop.'],
  ['Navigating Transitions', 'Placements, reunification, school changes, family contact, adoption, and other transitions can bring complicated emotions for both children and caregivers.'],
  ['Supporting the Whole Household', 'Foster care can affect biological children, partners, extended family members, routines, and relationships throughout the household.'],
  ['Caring for Yourself', 'When so much attention is focused on supporting a child, caregivers can forget that they need support too.'],
];

const supportIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5c0 4.7-4 8.5-9 8.5a9.5 9.5 0 0 1-3.2-.55L4 21l1.4-3.9A8.4 8.4 0 0 1 3 11.5C3 6.8 7 3 12 3s9 3.8 9 8.5Z" /><path d="m8.5 11.7 2.2 2.2 4.8-4.8" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="8" r="3" /><path d="M2.5 19.2c.6-3.4 2.7-5.1 6-5.1s5.4 1.7 6 5.1" /><path d="M16 4.6c1.3.3 2.2 1.4 2.2 2.9s-.9 2.6-2.2 2.9" strokeDasharray="1.3 1.7" /><path d="M17 14.2c1.9.5 3.1 1.9 3.5 4.6" strokeDasharray="1.3 1.7" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
];

const supportKindsList = [
  'Trauma and its potential impact',
  'Emotional and behavioral responses',
  'Building safety and trust',
  'Healthy boundaries and routines',
  'Communication',
  'Family adjustment',
  'Caregiver stress',
  'Transitions within foster care',
  'Supporting relationships within the household',
  'When additional professional support may be appropriate',
];

const wholeFamilyIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.2" /><path d="M5.5 20c.8-4.2 3.1-6.4 6.5-6.4s5.7 2.2 6.5 6.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z" /><path d="m9.3 12 1.9 1.9 3.6-3.9" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" /></svg>,
];

const wholeFamily = [
  ['For the Child', 'A compassionate environment focused on safety, emotional well-being, connection, and development.'],
  ['For Foster Parents', 'Training, guidance, resources, and support for navigating the realities of foster parenting.'],
  ['For Adoptive Parents', 'Support for adjustment, relationships, emotional concerns, and the unique experiences that can accompany adoption.'],
  ['For the Family', 'Help understanding how foster care or adoption may affect relationships, communication, routines, and the household as a whole.'],
];

const stepIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 4.5h3.2l1.6 4-2 1.6a11 11 0 0 0 5.6 5.6l1.6-2 4 1.6v3.2a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 3 6.2a1.6 1.6 0 0 1 1.5-1.7Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 1 1 3 6.2L4 19l.9-3A7.9 7.9 0 0 1 4 12Z" /><path d="M8.5 10.5h7M8.5 14h4.5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 12A8.5 8.5 0 1 1 12 3.5" /><path d="M20.5 12 17 8.5m3.5 3.5L17 15.5" /><path d="M12 8v4l2.5 1.5" strokeDasharray="1.4 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg>,
];

const teamMembers = [
  { name: 'Henri Jo Ball, LPC', title: 'Therapist', photo: '/Henri.jpg' },
  { name: 'Emeka Nnaka, LPC', title: 'Therapist', photo: '/Emeka Nnaka - LPC.jpg' },
  { name: 'Brenda Mitchell, LPC', title: 'Therapist', photo: '/Brenda Mitchell - LPC.jpg' },
  { name: 'Victori Swinford', title: 'Therapist', photo: '/Victori.jpg' },
  { name: 'Jamira Alexander', title: 'Therapist', photo: '/Jamira Alexander.jpg' },
  { name: 'Mattea Lear', title: 'Therapist', photo: '/Mattea.jpg' },
];

const faqs = [
  ['What support does Open Arms provide for foster families?', 'Open Arms Initiative currently describes its foster support as including comprehensive training, 24/7 guidance, child placement support, and trauma-focused counseling for foster families.'],
  ['Does Open Arms provide counseling for children in foster care?', <>Yes. Open Arms has a dedicated <Link href="/services/foster-care-adoption-counseling">Foster Care &amp; Adoption Counseling</Link> service and also provides <Link href="/child-counseling-services-oklahoma-city/">Child &amp; Adolescent Counseling</Link> using trauma-informed approaches.</>],
  ['Does Open Arms support foster parents too?', 'Yes. Open Arms states that it provides ongoing support for foster parents, including foster parent training and 24/7 guidance.'],
  ['Can adoptive families receive support?', 'Yes. Open Arms’ existing Foster Care & Adoption Counseling program specifically supports both foster and adoptive families through the emotional complexities associated with their journeys.'],
  ['What if our entire family is struggling with the transition?', <>Depending on your family&rsquo;s needs, Foster Care &amp; Adoption Counseling, <Link href="/family-therapy-oklahoma-city/">Family Counseling</Link>, <Link href="/child-counseling-services-oklahoma-city/">Child &amp; Adolescent Counseling</Link>, or broader <Link href="/family-support-services-oklahoma-city/">Family Support Services</Link> may be appropriate.</>],
  ['How do we get started?', 'Contact Open Arms Initiative and explain what kind of foster, adoption, counseling, or family support you’re looking for. The organization can then guide you toward the appropriate available service.'],
];

export default function FosterCarePage() { return <main className="grief-page foster-care-page team-boost">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SERVICE) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />
  <ScrollReveal />

  <section className="marriage-hero-split grief-hero-split"><div className="marriage-hero-split-inner"><div className="marriage-hero-split-copy reveal reveal-from-left"><p className="marriage-kicker">SUPPORT FOR THE JOURNEY. CARE FOR THE WHOLE FAMILY.</p><h1>Foster Care Support<br />in Oklahoma City</h1><i /><p className="marriage-lead">Opening Your Home Takes Heart. You Don&rsquo;t Have to Navigate Everything That Comes Next Alone.</p><p>Foster care can bring moments of connection, growth, uncertainty, joy, and challenge, sometimes all at once.</p><p>You may be trying to understand a child&apos;s behavior while helping them feel safe. You may be navigating new routines, appointments, transitions, relationships, or questions you never expected to face.</p><p>At Open Arms Initiative, we support foster and adoptive families with compassionate guidance, training, counseling, and ongoing support designed to help children and caregivers move forward together.</p><div className="marriage-actions"><Link className="marriage-btn marriage-req-btn-primary" href="/contact">Connect With Foster Care Support</Link><Link className="marriage-btn marriage-req-btn-outline" href="/services">Explore Our Services</Link></div></div><div className="marriage-hero-form-card reveal reveal-from-right"><div className="marriage-hero-form-body"><h3>Request an Appointment</h3><span className="marriage-hero-form-underline" /><p className="marriage-hero-form-sub">Tell us a bit about your family and we&rsquo;ll help you find the right support.</p><FosterCareRequestForm /></div><div className="marriage-hero-form-photo"><img src="/fs.jpg" alt="Foster family spending time together outdoors in Oklahoma City" /></div></div></div></section>

  <section className="grief-trust-section"><div className="grief-container grief-trust">{['Trauma-Informed', 'Foster Family Focused', 'Ongoing Guidance', 'Compassionate Care'].map((x, i) => <div key={x}><span>{trustIcons[i]}</span><p>{x}</p></div>)}</div></section>

  <section className="grief-section grief-heavy"><div className="grief-container reveal reveal-from-bottom"><h2>You Opened Your Home. That Doesn&rsquo;t Mean You Have to Have Every Answer.</h2><p>You may have prepared.</p><p>You may have attended training.</p><p>You may have read, planned, asked questions, and done everything you could to get ready.</p><p>And then a child enters your home with their own story, experiences, fears, needs, and ways of responding to the world.</p><p>Suddenly, what seemed simple in theory can feel very different in everyday life.</p><p><strong>Needing support does not mean you&apos;re unprepared. It means you&apos;re navigating something important, and you shouldn&apos;t have to navigate it alone.</strong></p></div></section>

  <section className="grief-section grief-feelings"><div className="grief-container"><div className="grief-feelings-head reveal reveal-from-bottom"><h2>Foster Families<br />Can Carry <em>a Lot</em></h2><i className="grief-feelings-line" /></div><div className="grief-feelings-row reveal-stagger">{carry.map(([h, p], i) => <article className="reveal reveal-from-bottom grief-feel-card" key={h}><span className="grief-feel-icon">{carryIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>

  <section id="approach" className="grief-section"><div className="grief-container"><div className="grief-more grief-more-navy"><img className="reveal reveal-from-left" src="/fs2.jpg" alt="Caregiver taking time to reflect and plan while supporting a foster child" /><div className="reveal reveal-from-right"><p className="grief-kicker-label">UNDERSTANDING BEHAVIOR</p><h2>Behind Every Behavior Is a Story</h2><p>A child may struggle to trust.</p><p>They may test boundaries.</p><p>They may withdraw.</p><p>They may become overwhelmed by situations that seem ordinary to everyone else.</p><p>The question isn&apos;t always: &ldquo;How do we stop this behavior?&rdquo;</p><p>Sometimes a more useful question is: &ldquo;What might this child be communicating?&rdquo;</p><p>Open Arms emphasizes trauma-informed support for foster children and families, including counseling intended to help families understand and respond to the emotional complexities surrounding foster care.</p><p><strong>Understanding doesn&apos;t mean removing boundaries. It means responding with greater awareness of what may be happening underneath the behavior.</strong></p></div></div></div></section>

  <section className="grief-section"><div className="grief-container"><div className="grief-more grief-more-reverse"><div className="reveal reveal-from-left"><p className="grief-kicker-label">SUPPORT FOR FOSTER PARENTS &amp; CAREGIVERS</p><h2>You&rsquo;re Supporting the Child. We&rsquo;re Here to Support You.</h2><p>Open Arms currently states that it provides foster families with training and ongoing guidance, including round-the-clock support for foster parents.</p><p>Support can help caregivers better understand:</p><ul>{supportKindsList.map(x => <li key={x}>{x}</li>)}</ul><p><strong>Caregivers need somewhere to ask questions too.</strong></p></div><img className="reveal reveal-from-right" src="/fs3.jpg" alt="Foster father embracing his daughter in a warm family moment" /></div></div></section>

  <section className="grief-statement"><div className="grief-container reveal reveal-scale-in"><div><h2>&ldquo;A child doesn&rsquo;t need you to have every answer. They need to know they are not facing everything alone, and neither are you.&rdquo;</h2><Link href="/contact" className="grief-btn grief-light">Connect With Open Arms</Link></div><img src="/fs4.jpg" alt="Foster family talking together with their counselor during a session" /><aside>Foster parenting can ask a lot of your heart.<br /><br />There will be things you can prepare for.<br /><br />And there may be things no training could completely prepare you for.<br /><br />Support is here for those moments too.</aside></div></section>

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

  <section className="grief-section grief-heavy foster-adoptive-bg"><div className="grief-container reveal reveal-from-bottom"><h2>Counseling for Children in Foster Care</h2><p>Children in foster care may be navigating experiences and emotions that are difficult to put into words.</p><p>Open Arms currently provides <Link href="/services/foster-care-adoption-counseling">Foster Care &amp; Adoption Counseling</Link> and describes its approach as collaborative, involving children, parents, and the wider community where appropriate.</p><p>Counseling can provide a supportive environment for children to explore emotions, experiences, relationships, transitions, and concerns at an appropriate pace.</p><p>When relevant, families can also explore our <Link href="/child-counseling-services-oklahoma-city/">Child &amp; Adolescent Counseling</Link> services.</p></div></section>

  <section id="support" className="grief-section grief-losses-section"><div className="grief-container"><h2 className="grief-center reveal reveal-from-bottom">Support for the Whole Foster Family</h2><i className="grief-line-center" /><div className="grief-whole-family reveal-stagger">{wholeFamily.map(([h, p], i) => <article className="reveal reveal-from-bottom" key={h}><span>{wholeFamilyIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>

  <section className="grief-section grief-heavy foster-adoptive-bg"><div className="grief-container reveal reveal-from-bottom"><h2>Support for Adoptive Families</h2><p>Adoption can be deeply meaningful while still bringing questions and adjustments.</p><p>Children and parents may be navigating identity, attachment, family relationships, past experiences, expectations, or major transitions.</p><p>Open Arms&rsquo; existing program specifically supports both foster and adoptive families, so adoption remains part of this page rather than being treated as an unrelated service.</p><p><strong>Support isn&apos;t about suggesting something is wrong with your family. It&apos;s about recognizing that every family&apos;s story is different, and sometimes having professional support can make that journey feel less isolating.</strong></p></div></section>

  <section className="grief-section grief-steps-section foster-steps-tan"><div className="grief-container"><h2 className="grief-center reveal reveal-from-bottom">How Foster Family Support Works</h2><i className="grief-line-center" /><div className="grief-steps reveal-stagger">{[['Connect', 'Reach out to Open Arms Initiative and tell us what kind of foster or adoptive family support you’re looking for.'], ['Understand', 'Our team works to understand your family’s circumstances, questions, and current needs.'], ['Find the Right Support', 'Depending on your circumstances and available programs, appropriate support may involve training, guidance, counseling, placement-related assistance, or other foster-family resources.'], ['Keep Growing', 'Foster care isn’t a single event. Support can continue as children, caregivers, relationships, and circumstances change.']].map(([h, p], i) => <article className="reveal reveal-from-bottom" key={h}><span className="grief-step-icon">{stepIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>

  <section className="grief-section"><div className="grief-container"><div className="grief-faq"><aside className="reveal reveal-from-left"><h2>Questions About Foster Care Support</h2><p>Find answers to common questions about foster and adoptive family support and what to expect.</p></aside><div className="reveal reveal-from-right">{faqs.map(([q, a]) => <details key={q} name="foster-faq-group"><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></div></div></section>

  <section className="grief-final"><div className="grief-container grief-final-grid reveal reveal-scale-in"><div><h2>You&rsquo;re Giving a Child Somewhere to Land. You Deserve Somewhere to Turn.</h2><p>You don&apos;t need to handle every difficult moment perfectly.<br />You don&apos;t need to understand every behavior immediately.<br />And you don&apos;t need to navigate every transition by yourself.</p><h3>Stronger Support for Children. Stronger Support for Families.</h3><p>When your family needs guidance, Open Arms Initiative is here to help you explore the next step.</p></div><Link href="/contact" className="grief-btn grief-solid">Connect With Foster Care Support</Link></div></section>
</main>}
