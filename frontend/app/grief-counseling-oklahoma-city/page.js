import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import GriefCounselingRequestForm from '@/components/GriefCounselingRequestForm';

export const metadata = { title: 'Grief Counseling Oklahoma City | Open Arms Initiative', description: 'Find compassionate grief counseling in Oklahoma City. Open Arms Initiative provides supportive therapy for bereavement, loss, life changes, and healing.', alternates: { canonical: 'https://www.openarmsinitiative.com/grief-counseling-oklahoma-city/' } };

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Grief & Loss Counseling', item: 'https://www.openarmsinitiative.com/grief-counseling-oklahoma-city/' },
  ],
};

const SCHEMA_SERVICE = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Grief Counseling',
  provider: {
    '@type': 'Organization',
    name: 'Open Arms Initiative',
    url: 'https://www.openarmsinitiative.com/',
  },
  areaServed: 'Oklahoma City, OK',
  description: 'Compassionate grief counseling in Oklahoma City, providing supportive therapy for bereavement, loss, life changes, and healing.',
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I know if I need grief counseling?', acceptedAnswer: { '@type': 'Answer', text: 'There is no specific level of grief you must reach before seeking counseling. You may consider support if your loss feels difficult to process, you’re struggling with everyday responsibilities or relationships, you feel isolated in your grief, or you simply want a private place to talk about what you’re experiencing.' } },
    { '@type': 'Question', name: 'Is grief counseling only for someone who has experienced a death?', acceptedAnswer: { '@type': 'Answer', text: 'No. People can experience grief following many kinds of loss, including the end of a relationship, pregnancy loss, estrangement, major life changes, changes in independence, or the loss of an expected future.' } },
    { '@type': 'Question', name: 'How long does grief last?', acceptedAnswer: { '@type': 'Answer', text: 'There is no universal timeline for grief. Everyone experiences and adjusts to loss differently. Grief can also change over time rather than simply disappearing. Counseling provides support based on your individual experience rather than expecting you to follow a particular schedule.' } },
    { '@type': 'Question', name: 'What happens during grief counseling?', acceptedAnswer: { '@type': 'Answer', text: 'Grief counseling provides space to talk about your loss and explore the emotions, memories, changes, and concerns connected with it. Your therapist can help you better understand your grief experience and develop ways to navigate difficult emotions and adjustments.' } },
    { '@type': 'Question', name: 'Do you provide grief counseling in Oklahoma City?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open Arms Initiative provides Grief Counseling in Oklahoma City for people seeking compassionate, professional support while navigating bereavement, significant loss, and major life changes.' } },
    { '@type': 'Question', name: 'Can I attend grief counseling individually?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Individual grief counseling can provide private, one-on-one support tailored to your experience and needs. You can also learn more about our Individual Counseling services if you’re seeking broader one-on-one therapeutic support.' } },
  ],
};

const trustIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z" /><path d="m9.3 12 1.9 1.9 3.6-3.9" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.2" /><path d="M5.5 20c.8-4.2 3.1-6.4 6.5-6.4s5.7 2.2 6.5 6.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.4" /><path d="m3 8 9 6 9-6" /></svg>,
];

const feelingIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.2s5.5 6.7 5.5 11a5.5 5.5 0 0 1-11 0c0-4.3 5.5-11 5.5-11Z" /><path d="M9.3 15.2a2.7 2.7 0 0 0 2.7 2.7" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5c-3 3.4-6.5 6.7-6.5 10.8a6.5 6.5 0 0 0 13 0c0-4.1-3.5-7.4-6.5-10.8Z" strokeDasharray="2.2 2.6" /><path d="M12 4.5v15" strokeDasharray="1.5 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4.2 20c1-5.6 3.4-9.5 4.6-11.3.5 1.4 1.6 2.7 2.6 2 .5-2.8 2.3-5.2 4-6.2-.6 2-.4 3.7.7 4.6 1.6 1.3 3.7 3.9 3.7 7.9" /><path d="M8 20a4 4 0 0 1 8 0" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15.5v-.6c0-1 .6-1.6 1.4-2.2.9-.7 1.6-1.5 1.6-2.9A3 3 0 0 0 12 7a3 3 0 0 0-3 2.6" /><circle cx="12" cy="19.2" r=".4" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="9" strokeDasharray="2 2.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12a7.5 7.5 0 0 1 12.6-5.5" /><path d="M17.5 3.5v3.4h-3.4" /><path d="M19.5 12a7.5 7.5 0 0 1-12.6 5.5" /><path d="M6.5 20.5v-3.4h3.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7.5" r="3" /><path d="M2.8 19.5c.6-3.8 2.8-5.8 6.2-5.8s5.6 2 6.2 5.8" /><path d="M16 4.3c1.3.3 2.3 1.5 2.3 3s-1 2.7-2.3 3" strokeDasharray="1.4 1.8" /><path d="M17 14c2 .4 3.4 2 3.9 4.8" strokeDasharray="1.4 1.8" /></svg>,
];

const feelings = [
  ['Deep Sadness', 'Waves of sadness may arrive unexpectedly, even long after the loss occurred.'],
  ['Numbness & Disconnection', 'Sometimes grief feels less like intense emotion and more like feeling distant from yourself, other people, or everyday life.'],
  ['Anger & Frustration', 'You may feel angry about what happened, circumstances surrounding the loss, other people’s reactions, or the unfairness of having to experience it at all.'],
  ['Guilt & “What If” Thoughts', 'You may replay conversations, decisions, or moments and wonder whether something could have happened differently.'],
  ['Difficulty Adjusting', 'Loss can change routines, roles, relationships, responsibilities, and plans for the future. Learning to live within those changes can take time.'],
  ['Feeling Alone in Your Grief', 'Even when people care deeply about you, it can sometimes feel as though no one fully understands what you’re carrying.'],
];

const supportIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 12A8.5 8.5 0 1 1 12 3.5" /><path d="M20.5 12 17 8.5m3.5 3.5L17 15.5" /><path d="M12 8v4l2.5 1.5" strokeDasharray="1.4 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21c0-4.4 2.4-6.7 5.2-7.3M20 21c0-4.4-2.4-6.7-5.2-7.3" /><circle cx="9.2" cy="8" r="3" /><circle cx="14.8" cy="8" r="3" strokeDasharray="1.3 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l2.2-6.5L13 17.5 15 12h6" /></svg>,
];

const lossIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19.5s-5.5-3.4-7.6-6.9C.3 10.3 1.5 7.5 4 7c1.6-.3 2.9.4 3.6 1.6" /><path d="M15 19.5s5.5-3.4 7.6-6.9c1.1-2.3-.1-5.1-2.6-5.6-1.6-.3-2.9.4-3.6 1.6" /><path d="M10.5 6.5 9 10l2 1.3-1.3 2.4" /><path d="m13.5 6.5 1.5 3.5-2 1.3 1.3 2.4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 4.5c1 0 1.8.9 1.8 2s-.8 2-1.8 2-1.8-.9-1.8-2 .8-2 1.8-2Z" /><path d="M7.2 10.3c.5-.5 1.3-.8 2.3-.8s1.8.3 2.3.8c.6.6.9 1.6.5 2.6-.4 1.1-1.5 1.8-2.8 1.8s-2.4-.7-2.8-1.8c-.4-1 0-2 .5-2.6Z" /><path d="M16 12c.8 0 1.4.7 1.4 1.5s-.6 1.5-1.4 1.5-1.4-.7-1.4-1.5.6-1.5 1.4-1.5Z" /><path d="M14.3 16.4c.4-.4 1-.6 1.7-.6s1.3.2 1.7.6c.4.5.6 1.2.4 1.9-.3.8-1.1 1.3-2.1 1.3s-1.8-.5-2.1-1.3c-.2-.7 0-1.4.4-1.9Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5" /><path d="m15 9-4.2 2.2L9 15l4.2-2.2L15 9Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 19 9 8l3 5 2.5-4 6 10" /><path d="M3 19h18" /></svg>,
];

const losses = [
  ['Death of Someone You Love', 'The death of a family member, partner, friend, or another important person can change everyday life in profound ways.'],
  ['Relationship Loss', 'Divorce, separation, estrangement, and the ending of meaningful relationships can involve genuine grief.'],
  ['Pregnancy or Infant Loss', 'Pregnancy and infant loss can involve deeply personal grief that others may not always know how to acknowledge.'],
  ['Major Life Changes', 'Retirement, relocation, changes in independence, caregiving transitions, or losing an important role can involve grieving the life you previously knew.'],
  ['Loss of a Future You Expected', 'Sometimes grief comes from losing plans, possibilities, relationships, or a future you imagined for yourself.'],
];

const stepIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 4.5h3.2l1.6 4-2 1.6a11 11 0 0 0 5.6 5.6l1.6-2 4 1.6v3.2a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 3 6.2a1.6 1.6 0 0 1 1.5-1.7Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 1 1 3 6.2L4 19l.9-3A7.9 7.9 0 0 1 4 12Z" /><path d="M8.5 10.5h7M8.5 14h4.5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M20.5 12A8.5 8.5 0 1 1 12 3.5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg>,
];

const faqs = [
  ['How do I know if I need grief counseling?', 'There is no specific level of grief you must reach before seeking counseling. You may consider support if your loss feels difficult to process, you’re struggling with everyday responsibilities or relationships, you feel isolated in your grief, or you simply want a private place to talk about what you’re experiencing.'],
  ['Is grief counseling only for someone who has experienced a death?', 'No. People can experience grief following many kinds of loss, including the end of a relationship, pregnancy loss, estrangement, major life changes, changes in independence, or the loss of an expected future.'],
  ['How long does grief last?', 'There is no universal timeline for grief. Everyone experiences and adjusts to loss differently. Grief can also change over time rather than simply disappearing. Counseling provides support based on your individual experience rather than expecting you to follow a particular schedule.'],
  ['What happens during grief counseling?', 'Grief counseling provides space to talk about your loss and explore the emotions, memories, changes, and concerns connected with it. Your therapist can help you better understand your grief experience and develop ways to navigate difficult emotions and adjustments.'],
  ['Do you provide grief counseling in Oklahoma City?', <>Yes. Open Arms Initiative provides <strong>Grief Counseling in Oklahoma City</strong> for people seeking compassionate, professional support while navigating bereavement, significant loss, and major life changes.</>],
  ['Can I attend grief counseling individually?', 'Yes. Individual grief counseling can provide private, one-on-one support tailored to your experience and needs. You can also learn more about our Individual Counseling services if you’re seeking broader one-on-one therapeutic support.'],
];

export default function GriefCounselingPage() { return <main className="grief-page">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SERVICE) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />
  <ScrollReveal />
  <section className="grief-hero-split"><div className="grief-hero-split-inner"><div className="grief-hero-split-copy reveal reveal-from-left"><p className="grief-kicker">YOU DON&rsquo;T HAVE TO GRIEVE ALONE.</p><h1>Grief Counseling<br />in Oklahoma City</h1><i /><p className="grief-lead">There Is No Right Way or Right Timeline to Grieve</p><p>Loss can change the way everything feels.</p><p>The world keeps moving, but part of you may feel like it has stopped. Some days bring sadness. Others bring anger, confusion, guilt, numbness, or emotions you weren&apos;t expecting at all.</p><p>You don&apos;t have to rush yourself through any of it.</p><p>At Open Arms Initiative, our Grief Counseling in Oklahoma City provides a compassionate space to process loss, understand what you&apos;re experiencing, and find support as you learn to carry what has changed.</p><div className="grief-actions"><Link href="/contact" className="grief-btn grief-req-btn-primary">Request an Appointment</Link><a href="#support" className="grief-btn grief-req-btn-outline">Explore Grief Support</a></div></div><div className="grief-hero-form-card reveal reveal-from-right"><div className="grief-hero-form-body"><h3>Request an Appointment</h3><span className="grief-hero-form-underline" /><p className="grief-hero-form-sub">Tell us a bit about what you&rsquo;re going through and we&rsquo;ll help you find the right support.</p><GriefCounselingRequestForm /></div><div className="grief-hero-form-photo"><img src="/nh8.jpg.jpg" alt="Woman finding a quiet moment while processing grief with her counselor" /></div></div></div></section>
  <section className="grief-trust-section"><div className="grief-container grief-trust">{['Compassionate Support', 'Safe & Confidential', 'Personalized Care', 'In-Person & Online'].map((x, i) => <div key={x}><span>{trustIcons[i]}</span><p>{x}</p></div>)}</div></section>
  <section className="grief-section grief-heavy"><div className="grief-container reveal reveal-from-bottom"><h2>Grief Doesn&rsquo;t Always Look Like Sadness</h2><p>Some days, you may cry. Other days, you may feel nothing at all.</p><p>You may be angry. Exhausted. Distracted. Relieved and then guilty for feeling relieved. You may find yourself laughing at a memory one moment and overwhelmed by it the next.</p><p>Grief can affect your emotions, relationships, routines, concentration, and the way you imagine your future.</p><p><strong>There is no single way you&apos;re supposed to experience loss. Your grief is personal because what you lost mattered to you.</strong></p></div></section>
  <section className="grief-section grief-feelings"><div className="grief-container"><div className="grief-feelings-head reveal reveal-from-bottom"><h2>What Can<br />Grief Feel <em>Like?</em></h2><i className="grief-feelings-line" /></div><div className="grief-feelings-row reveal-stagger">{feelings.map(([h, p], i) => <article className="reveal reveal-from-bottom grief-feel-card" key={h}><span className="grief-feel-icon">{feelingIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>
  <section id="approach" className="grief-section"><div className="grief-container"><div className="grief-more"><img className="reveal reveal-from-left" src="/woman-hat-walking-nature-100kb.jpg" alt="Woman walking outdoors in nature, taking time to process grief" /><div className="reveal reveal-from-right"><p className="grief-kicker-label">BEREAVEMENT THERAPY OKC</p><h2>You Don&rsquo;t Have to &ldquo;Move On&rdquo; to Move Forward</h2><p>Grief counseling isn&apos;t about forgetting. It isn&apos;t about forcing yourself to stop feeling sad. And it isn&apos;t about following someone else&apos;s timeline for when you should feel better.</p><p>Through <strong>Bereavement Therapy in OKC</strong>, you can have space to talk about the person, relationship, experience, or future you lost, and explore how that loss has affected your life.</p><p>Counseling may support you as you:</p><ul>{['Process difficult emotions', 'Understand your individual grief experience', 'Adjust to changes following a loss', 'Explore guilt, anger, confusion, or unanswered questions', 'Develop ways to cope with difficult days', 'Navigate changes in relationships and family dynamics', 'Find ways to honor meaningful memories', 'Reconnect with everyday life at your own pace', 'Consider what moving forward means for you'].map(x => <li key={x}>{x}</li>)}</ul><p><strong>Moving forward doesn&apos;t mean leaving what mattered behind.</strong></p></div></div></div></section>
  <section className="grief-statement"><div className="grief-container reveal reveal-scale-in"><div><h2>&ldquo;You don&rsquo;t have to stop missing them to begin caring for yourself again.&rdquo;</h2><Link href="/contact" className="grief-btn grief-light">Request a Grief Counseling Appointment</Link></div><img src="/gf4.jpg" alt="Man reflecting quietly while processing grief" /><aside>There is no deadline for grief.<br /><br />There is no moment when you are required to be &ldquo;over it.&rdquo;<br /><br />There is simply your experience, and a place where you don&apos;t have to carry it by yourself.</aside></div></section>
  <section id="support" className="grief-section grief-losses-section"><div className="grief-container"><h2 className="grief-center reveal reveal-from-bottom">Support for Different Kinds of Loss</h2><i className="grief-line-center" /><p className="grief-losses-intro reveal reveal-from-bottom">Grief isn&apos;t limited to one kind of experience. Our <strong>Loss Support Counseling in Oklahoma City</strong> can provide a compassionate space for people navigating many forms of loss.</p><div className="grief-losses reveal-stagger"><div className="grief-losses-corners"><article className="reveal reveal-from-bottom grief-losses-tl"><span>{lossIcons[0]}</span><h3>{losses[0][0]}</h3><p>{losses[0][1]}</p></article><article className="reveal reveal-from-bottom grief-losses-tr"><span>{lossIcons[1]}</span><h3>{losses[1][0]}</h3><p>{losses[1][1]}</p></article><article className="reveal reveal-from-bottom grief-losses-bl"><span>{lossIcons[3]}</span><h3>{losses[3][0]}</h3><p>{losses[3][1]}</p></article><article className="reveal reveal-from-bottom grief-losses-br"><span>{lossIcons[4]}</span><h3>{losses[4][0]}</h3><p>{losses[4][1]}</p></article><article className="grief-losses-center reveal reveal-scale-in"><span>{lossIcons[2]}</span><h3>{losses[2][0]}</h3><p>{losses[2][1]}</p></article></div><aside className="reveal reveal-from-bottom">Whatever brought grief into your life, your loss does not need to look like someone else&apos;s to deserve support.</aside></div></div></section>
  <section className="grief-section grief-support-section"><div className="grief-container grief-support"><div className="reveal reveal-from-left"><h2>A Place Where You Don&rsquo;t Have to Be &ldquo;Strong&rdquo;</h2><p>People may tell you to stay strong. They may mean well. But constantly trying to appear okay can become exhausting.</p><p><strong>Grief and Loss Therapy in OKC</strong> gives you space where you don&apos;t need to protect other people from your emotions or pretend you&apos;re doing better than you are.</p></div><div className="reveal reveal-from-right">{[['Your Feelings Have Space Here', 'Sadness, anger, confusion, numbness, guilt, relief, fear, and even moments of happiness can all be part of an individual grief experience.'], ['Your Story Has Space Here', 'You can talk about what happened, what you miss, what changed, and what you’re still trying to understand.'], ['Your Pace Has Space Here', 'Grief doesn’t follow a calendar. Counseling can meet you where you are rather than where someone else thinks you should be.']].map(([h, p], i) => <article key={h}><span>{supportIcons[i]}</span><div><h3>{h}</h3><p>{p}</p></div></article>)}</div></div></section>
  <section className="grief-section grief-steps-section"><div className="grief-container"><h2 className="grief-center reveal reveal-from-bottom">What to Expect</h2><i className="grief-line-center" /><div className="grief-steps reveal-stagger">{[['Connect', 'Reach out to Open Arms Initiative and request an appointment.'], ['Be Heard', 'Your therapist gives you space to share your loss, your experience, and what life has been like since things changed.'], ['Process', 'Together, you can explore emotions, memories, changes, concerns, and the ways grief has been affecting your everyday life.'], ['Move at Your Pace', 'Counseling can support you as you develop ways to cope, adjust, reconnect, and determine what moving forward means for you.']].map(([h, p], i) => <article className="reveal reveal-from-bottom" key={h}><span className="grief-step-icon">{stepIcons[i]}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>
  <section className="grief-section"><div className="grief-container"><div className="grief-faq"><aside className="reveal reveal-from-left"><h2>Questions About Grief &amp; Loss Counseling</h2><p>Find answers to common questions about grief counseling and what to expect.</p></aside><div className="reveal reveal-from-right">{faqs.map(([q, a]) => <details key={q} name="grief-faq-group"><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></div></div></section>
  <section className="grief-final"><div className="grief-container grief-final-grid reveal reveal-scale-in"><div><h2>You Don&rsquo;t Have to Leave the Love Behind to Find a Way Forward</h2><p>Some losses become part of our story.<br />Healing doesn&apos;t require erasing that story.<br />It can mean learning how to carry the memories, the changes, the love, and the grief while gradually making room for life around them.</p><h3>Take the Time You Need. We&rsquo;ll Meet You Where You Are.</h3><p>When you&apos;re ready to talk, Open Arms Initiative is here to listen.</p></div><Link href="/contact" className="grief-btn grief-solid">Request an Appointment</Link></div></section>
</main>}
