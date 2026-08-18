import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Family Therapy Oklahoma City | Open Arms Initiative',
  description: 'Find compassionate Family Therapy Oklahoma City families trust. Open Arms Initiative offers counseling for family issues Oklahoma City and relationship counseling OKC to help families improve communication, navigate conflict, and build stronger relationships.',
  alternates: {
    canonical: 'https://www.openarmsinitiative.com/family-therapy-oklahoma-city/',
  },
};

const stepIcons = [
  <img src="/icon10.png" alt="" aria-hidden="true" />,
  <img src="/icon11.png" alt="" aria-hidden="true" />,
  <img src="/icon12.png" alt="" aria-hidden="true" />,
  <img src="/icon13.png" alt="" aria-hidden="true" />,
];

const trustIcons = [
  <img src="/3.png" alt="" aria-hidden="true" />,
  <img src="/2.png" alt="" aria-hidden="true" />,
  <img src="/4.png" alt="" aria-hidden="true" />,
  <img src="/icon%201%20copy.png" alt="" aria-hidden="true" />,
];

const supportIcons = [
  <img src="/icon5.png" alt="" aria-hidden="true" />,
  <img src="/icon6.png" alt="" aria-hidden="true" />,
  <img src="/icon8.png" alt="" aria-hidden="true" />,
];

const challengeIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5c0 4.7-4 8.5-9 8.5a9.5 9.5 0 0 1-3.2-.55L4 21l1.4-3.9A8.4 8.4 0 0 1 3 11.5C3 6.8 7 3 12 3s9 3.8 9 8.5Z" /><path d="M12 13.6s-2.4-1.4-2.4-3.1a1.65 1.65 0 0 1 2.4-1.5 1.65 1.65 0 0 1 2.4 1.5c0 1.7-2.4 3.1-2.4 3.1Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 6.5 17 4a3 3 0 0 1 4 4l-2.5 2.5" /><path d="m9 12-6 6a2.1 2.1 0 0 0 3 3l6-6" /><path d="m12.5 8.5 3 3" /><path d="m14 4 2 2M18 8l2 2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V10.5L12 4l9 6.5V21" /><path d="M9 21v-7h6v7" /><path d="M15 10.5a3 3 0 0 0 5-2.2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v2.2" /><path d="m6.2 6.2 1.55 1.55" /><path d="M3 13h2.2" /><path d="m6.2 19.8 1.55-1.55" /><path d="M16.25 7.75 17.8 6.2" /><path d="M18.8 13H21" /><circle cx="12" cy="13" r="4.3" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="6.5" r="2.4" /><path d="M4.4 18.3c.5-3.3 2.2-5.2 4.6-5.2s4.1 1.9 4.6 5.2" /><circle cx="17.5" cy="10.5" r="1.7" /><path d="M14.7 18.3c.34-2.2 1.5-3.5 3-3.5s2.66 1.3 3 3.5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4v16" /><path d="M4 5h9l-1.8 3.5L13 12H4" /><path d="m16 15 4 4m0-4-4 4" /></svg>,
];

const challenges = [
  ['Communication Breakdowns', 'Improve listening, understanding, and respect at home.'],
  ['Conflicts & Arguments', 'Work through recurring disagreements in healthier, more constructive ways.'],
  ['Blended Family Adjustments', 'Build trust, understanding, and connection in blended or stepfamilies.'],
  ['Stress, Anxiety & Overwhelm', 'Learn healthier ways to support one another during difficult seasons.'],
  ['Parent-Child Challenges', 'Strengthen connection, improve communication, and navigate behavioral concerns.'],
  ['Life Transitions', 'Find support through separation, loss, relocation, changing roles, and other major family changes.'],
];

const faqs = [
  ['How do I know if my family needs counseling?', 'Family counseling may help when communication feels difficult, arguments keep repeating, relationships feel strained, or your family is navigating a major life change. You do not need to wait for a crisis to seek support.'],
  ['What happens during family counseling?', 'Your therapist will take time to understand your family’s concerns, relationships, communication patterns, and goals. Sessions provide a supportive place to talk openly, identify recurring patterns, and develop healthier ways of relating to one another.'],
  ['Does everyone in the family need to attend therapy?', 'Not always. Participation depends on your family’s needs, circumstances, and goals. Your therapist can help determine who should be involved in different parts of the counseling process.'],
  ['Can family therapy help with parent-child conflict?', 'Yes. Family therapy can help parents and children better understand one another, improve communication, strengthen boundaries, and address recurring conflict in a supportive environment.'],
  ['Do you offer family therapy in Oklahoma City?', 'Yes. Open Arms Initiative provides Family Therapy Oklahoma City families rely on, including counseling for family issues Oklahoma City and Relationship Counseling OKC, for families experiencing communication difficulties, conflict, parent-child concerns, life transitions, and other family relationship challenges.'],
  ['Is family counseling only for serious family problems?', 'No. Families seek counseling for many reasons. Some are facing significant challenges, while others simply want to communicate better, strengthen their relationships, or address concerns before they become more difficult.'],
];

export default function FamilyTherapyPage() {
  return <main className="family-page">
    <ScrollReveal />
    <section className="family-hero-outer"><div className="family-hero-bg"><img className="family-hero-img-desktop" src="/Openarms Banner 3.jpg" alt="Family spending time together outdoors" /><img className="family-hero-img-mobile" src="/fam9.jpg" alt="Family spending time together outdoors" /><div className="family-hero-content reveal reveal-from-bottom">
      <p className="family-kicker">HEAL TOGETHER. GROW TOGETHER.</p>
      <h1>Family Counseling<br />in Oklahoma City</h1><i className="family-line" />
      <p className="family-lead">Every family faces challenges. You don’t have to face them alone. We help families heal, communicate, and build stronger, healthier relationships.</p>
      <div className="family-actions"><Link href="/contact" className="family-btn family-btn-solid">Request an Appointment</Link><a href="#approach" className="family-btn family-btn-outline">Learn Our Approach</a></div>
    </div></div></section>

    <section className="family-trust-section"><div className="family-container"><div className="family-trust">{[['Compassionate Care'],['Safe & Confidential'],['Experienced Therapists'],['In-Person & Online','Sessions']].map((lines, i) => <div key={lines.join(' ')}><span>{trustIcons[i]}</span>{lines[0]}{lines[1] && <><br />{lines[1]}</>}</div>)}</div></div></section>

    <section className="family-section family-challenges"><div className="family-container reveal reveal-from-bottom"><p className="family-kicker center">WE HELP FAMILIES NAVIGATE</p><h2 className="family-title center">Challenges Families Commonly Face</h2><div className="family-challenge-grid">{challenges.map(([title, text], i) => <article className="reveal reveal-from-bottom" key={title}><span className="family-icon">{challengeIcons[i]}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section id="approach" className="family-section"><div className="family-container family-container-wide family-approach"><img className="reveal reveal-from-left" src="/happy-family-with-dog-moving-new-home-100kb.jpg" alt="A peaceful, welcoming space" /><div className="family-approach-copy reveal reveal-from-right"><p className="family-kicker">COUNSELING FOR FAMILY ISSUES OKLAHOMA CITY</p><h2 className="family-title">Support That Brings Your Family Closer</h2><p><strong>Sometimes the hardest part is not knowing how to talk to the people you love most.</strong></p><p>At Open Arms Initiative, our Family Therapy Oklahoma City gives families a supportive place to slow down, understand what is happening beneath the conflict, and begin rebuilding connection. Our therapists also provide Relationship Counseling OKC for parents, couples, and family members working through strained or distant relationships.</p><p>Together, we can work toward:</p><ul>{['Stronger communication','Healing past hurts','Greater trust and connection','Healthier boundaries','More constructive conflict resolution','A calmer, more supportive home'].map(x => <li key={x}>{x}</li>)}</ul><p>Family counseling is not about deciding who is right or wrong. It is about helping your family understand one another and find a healthier way forward.</p></div></div></section>

    <section className="family-statement"><div className="family-container reveal reveal-from-bottom"><h2>“You don’t have to have it all figured out to take the first step.”</h2><p>We’re here to walk with your family through the difficult conversations, the uncertainty, and the changes that can feel overwhelming.</p><p>Sometimes the first step toward healing is simply knowing you do not have to handle everything alone.</p></div></section>
    <section className="family-section"><div className="family-container family-support-grid reveal-stagger">{[['A Safe Space for Every Voice','Every family member deserves to feel heard. We create a respectful, non-judgmental environment where family members can speak openly, understand each other more clearly, and begin rebuilding trust.'],['Evidence-Based Support','Our therapists use professional, evidence-informed approaches while tailoring counseling to your family’s relationships, experiences, and goals. There is no one-size-fits-all family.'],['Tools for Lasting Change','Counseling is not only about what happens during the session. We help families develop practical tools for healthier communication, stronger relationships, and more effective problem-solving at home.']].map(([title,text], i) => <article className="reveal reveal-from-bottom" key={title}><span>{supportIcons[i]}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="family-growth"><img className="family-growth-photo-mobile" src="/fam12.jpg" alt="Family healing together" /><div className="family-container reveal reveal-from-bottom"><div><h2>Healing happens together.<br />Growth lasts a lifetime.</h2><p>Your family may be going through a difficult chapter, but that chapter does not have to define what comes next.</p></div><Link href="/contact" className="family-btn family-btn-light">Book Your Appointment Today</Link></div></section>
    <section className="family-section family-expect"><div className="family-container reveal reveal-from-bottom"><h2 className="family-title center">What to Expect</h2><i className="family-line family-line-center" /><div className="family-steps">{[['1. Connect','Reach out to schedule an appointment that works for your family.'],['2. Understand','We listen, learn, and understand your family’s unique experiences and concerns.'],['3. Create a Plan','Together, we develop a personalized approach focused on healing, communication, and growth.'],['4. Grow Together','We support your family as you build healthier patterns, stronger connections, and greater understanding.']].map(([title,text], i) => { const [num, ...rest] = title.split('. '); return <article key={title}><span className="family-step-icon">{stepIcons[i]}</span><span className="family-step-num">{num}</span><h3>{rest.join('. ')}</h3><i className="family-step-line" /><p>{text}</p></article>; })}</div></div></section>
    <section className="family-section"><div className="family-container family-container-wide reveal reveal-from-bottom"><div className="family-faq-card"><div className="family-faq"><aside><h2>It’s okay to have questions before asking for help.</h2><p>We’re here to provide answers, guidance, and support so you can feel more comfortable taking the next step.</p></aside><div><h2>Questions Families Often Ask</h2>{faqs.map(([q,a]) => <details key={q} name="family-faq-group"><summary>{q}<b>+</b></summary><p>{a}</p></details>)}<p className="family-faq-more">Still have questions? We’re happy to help. <Link href="/contact">Contact Us</Link></p></div></div></div></div></section>
    <section className="family-final"><div className="family-container reveal reveal-from-bottom"><div><h2>Hope. Healing. A Stronger Family.</h2><p>Your family does not need to be perfect to become stronger. With support, understanding, and the willingness to take one step forward, healthier relationships can begin to grow.</p></div><Link href="/contact" className="family-btn family-btn-light">Request an Appointment</Link></div></section>
  </main>;
}
