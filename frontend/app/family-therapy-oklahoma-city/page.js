import Link from 'next/link';

export const metadata = {
  title: 'Family Therapy Oklahoma City | Open Arms Initiative',
  description: 'Find compassionate family therapy in Oklahoma City. Open Arms Initiative helps families improve communication, navigate conflict, and build stronger relationships.',
};

const stepIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12.5h4.5l2.3-2.3a1.6 1.6 0 0 1 2.26 0l1.68 1.68a1.6 1.6 0 0 0 2.26 0L17.5 9.5" /><path d="M2 9.5h4l3.2-2.8a2 2 0 0 1 2.6 0L15 9.5" /><path d="M22 12.5h-4.5l-2.2 2.2a1.6 1.6 0 0 1-2.26 0" /><path d="M22 9.5h-4l-1.6 1.4" /><path d="M6.5 9.5v6M17.5 9.5v6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v11H8l-4 4Z" /><path d="M12 8.5s-1.6-1.2-2.8-.3a1.7 1.7 0 0 0 0 2.7L12 13l2.8-2.1a1.7 1.7 0 0 0 0-2.7c-1.2-.9-2.8.3-2.8.3Z" strokeWidth="1.3" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 3.5h6v2H9Z" /><path d="m8.5 11 1.5 1.5L13 9.5" /><path d="M8.5 16h7" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="7.5" r="2.4" /><circle cx="15.5" cy="7.5" r="2.4" /><path d="M3.5 19c.4-3.2 2.3-5 5-5s4.6 1.8 5 5" /><path d="M10.5 19c.4-3.2 2.3-5 5-5s4.6 1.8 5 5" /></svg>,
];

const trustIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-7-4.4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.3 1 4 2.3.7-1.3 2-2.3 4-2.3 3.2 0 5 3.3 3.2 6.8-2 3.8-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5 5 6v5.5c0 4.6 3 8 7 9 4-1 7-4.4 7-9V6l-7-2.5Z" /><path d="m9 12 2 2 4-4.2" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="6.5" width="13" height="11" rx="2.2" /><path d="m15.5 10.5 6-3.3v9.6l-6-3.3" /></svg>,
];

const supportIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5 5 6v5.5c0 4.6 3 8 7 9 4-1 7-4.4 7-9V6l-7-2.5Z" /><path d="M9.5 12c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.7-2.5 3.5c-1.4-.8-2.5-2.1-2.5-3.5Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5.5c2.5-1 5.3-1 8 0v13c-2.7-1-5.5-1-8 0Z" /><path d="M12 5.5c2.7-1 5.5-1 8 0v13c-2.5-1-5.3-1-8 0Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 6.5 17.5 3.5 20.5 6.5 17.5 9.5Z" /><path d="m16 8-11 11" /><path d="m5 19 2 2" /><path d="M3.5 17.5 6.5 20.5" /></svg>,
];

const challengeIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" /><path d="M12 13.2s-2.3-1.4-2.3-3a1.6 1.6 0 0 1 2.3-1.45A1.6 1.6 0 0 1 14.3 10.2c0 1.6-2.3 3-2.3 3Z" strokeWidth="1.1" strokeLinejoin="round" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8.5" cy="7.5" r="2.6" /><circle cx="16" cy="8.3" r="2.1" /><path d="M3.5 19c.5-3.3 2.4-5.2 5-5.2s4.5 1.9 5 5.2" /><path d="M14 14.4c2.1.2 3.7 1.9 4.1 4.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 11.5 12 4l8 7.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 10v9.5h12V10" strokeLinejoin="round" /><path d="M10 19.5v-5h4v5" strokeLinejoin="round" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6.5 16a4 4 0 1 1 1.2-7.82A4.6 4.6 0 0 1 16.5 9a3.2 3.2 0 0 1 0 6.4H6.5Z" /><path d="M9 5.2V3.6M13.8 6.3l1-1.4M4.6 8.5l-1.3-.9" strokeLinecap="round" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="6.3" r="2.3" /><path d="M4.6 18c.5-3.2 2.1-5 4.4-5s3.9 1.8 4.4 5" /><circle cx="17.3" cy="10.3" r="1.6" strokeWidth="1.3" /><path d="M14.6 18c.32-2.1 1.4-3.4 2.9-3.4s2.58 1.3 2.9 3.4" strokeWidth="1.3" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 21V6" strokeLinecap="round" /><path d="M6 7h11l-2.2 2.6L17 12H6" strokeLinejoin="round" /></svg>,
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
  ['Do you offer family therapy in Oklahoma City?', 'Yes. Open Arms Initiative provides Family Therapy in Oklahoma City for families experiencing communication difficulties, conflict, parent-child concerns, life transitions, and other family relationship challenges.'],
  ['Is family counseling only for serious family problems?', 'No. Families seek counseling for many reasons. Some are facing significant challenges, while others simply want to communicate better, strengthen their relationships, or address concerns before they become more difficult.'],
];

export default function FamilyTherapyPage() {
  return <main className="family-page">
    <section className="family-hero-outer"><div className="family-hero-bg"><img className="family-hero-img-desktop" src="/f9.jpg" alt="Family spending time together outdoors" /><img className="family-hero-img-mobile" src="/fam9.jpg" alt="Family spending time together outdoors" /><div className="family-hero-content">
      <p className="family-kicker">Healing Starts When Your Family Feels Heard</p>
      <h1>Family Counseling<br />in Oklahoma City</h1><i className="family-line" />
      <p className="family-lead">Every family faces challenges. You don’t have to face them alone. We help families heal, communicate, and build stronger, healthier relationships.</p>
      <div className="family-actions"><Link href="/contact" className="family-btn family-btn-solid">Request an Appointment</Link><a href="#approach" className="family-btn family-btn-outline">Learn Our Approach</a></div>
      <div className="family-trust">{[['Compassionate Care'],['Safe & Confidential'],['Experienced Therapists'],['In-Person & Online','Sessions']].map((lines, i) => <div key={lines.join(' ')}><span>{trustIcons[i]}</span>{lines[0]}{lines[1] && <><br />{lines[1]}</>}</div>)}</div>
    </div></div></section>

    <section className="family-section family-challenges"><div className="family-container"><p className="family-kicker center">WE HELP FAMILIES NAVIGATE</p><h2 className="family-title center">Challenges Families Commonly Face</h2><div className="family-challenge-grid">{challenges.map(([title, text], i) => <article key={title}><span className="family-icon">{challengeIcons[i]}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section id="approach" className="family-section"><div className="family-container family-container-wide family-approach"><img src="/bn.jpg" alt="A peaceful, welcoming space" /><div className="family-approach-copy"><p className="family-kicker">COUNSELING FOR FAMILY ISSUES</p><h2 className="family-title">Support That Brings Your Family Closer</h2><p>Sometimes the hardest part is not knowing how to talk to the people you love most.</p><p>At Open Arms Initiative, our Family Therapy in Oklahoma City gives families a supportive place to slow down, understand what is happening beneath the conflict, and begin rebuilding connection.</p><p>Together, we can work toward:</p><ul>{['Stronger communication','Healing past hurts','Greater trust and connection','Healthier boundaries','More constructive conflict resolution','A calmer, more supportive home'].map(x => <li key={x}>{x}</li>)}</ul><p>Family counseling is not about deciding who is right or wrong. It is about helping your family understand one another and find a healthier way forward.</p></div></div></section>

    <section className="family-statement"><div className="family-container"><h2>“You don’t have to have it all figured out to take the first step.”</h2><p>We’re here to walk with your family through the difficult conversations, the uncertainty, and the changes that can feel overwhelming.</p><p>Sometimes the first step toward healing is simply knowing you do not have to handle everything alone.</p></div></section>
    <section className="family-section"><div className="family-container family-support-grid">{[['A Safe Space for Every Voice','Every family member deserves to feel heard. We create a respectful, non-judgmental environment where family members can speak openly, understand each other more clearly, and begin rebuilding trust.'],['Evidence-Based Support','Our therapists use professional, evidence-informed approaches while tailoring counseling to your family’s relationships, experiences, and goals. There is no one-size-fits-all family.'],['Tools for Lasting Change','Counseling is not only about what happens during the session. We help families develop practical tools for healthier communication, stronger relationships, and more effective problem-solving at home.']].map(([title,text], i) => <article key={title}><span>{supportIcons[i]}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="family-growth"><img className="family-growth-photo-mobile" src="/fam12.jpg" alt="Family healing together" /><div className="family-container"><div><h2>Healing happens together.<br />Growth lasts a lifetime.</h2><p>Your family may be going through a difficult chapter, but that chapter does not have to define what comes next.</p></div><Link href="/contact" className="family-btn family-btn-light">Book Your Appointment Today</Link></div></section>
    <section className="family-section family-expect"><div className="family-container"><p className="family-kicker center">WHAT TO EXPECT</p><h2 className="family-title center">What to Expect</h2><i className="family-line family-line-center" /><div className="family-steps">{[['1. Connect','Reach out to schedule an appointment that works for your family.'],['2. Understand','We listen, learn, and understand your family’s unique experiences and concerns.'],['3. Create a Plan','Together, we develop a personalized approach focused on healing, communication, and growth.'],['4. Grow Together','We support your family as you build healthier patterns, stronger connections, and greater understanding.']].map(([title,text], i) => { const [num, ...rest] = title.split('. '); return <article key={title}><span className="family-step-icon">{stepIcons[i]}</span><span className="family-step-num">{num}</span><h3>{rest.join('. ')}</h3><i className="family-step-line" /><p>{text}</p></article>; })}</div></div></section>
    <section className="family-section"><div className="family-container family-container-wide"><div className="family-faq-card"><img className="family-faq-leaf" src="/family2.jpg" alt="" aria-hidden="true" /><div className="family-faq"><aside><h2>It’s okay to have questions before asking for help. ♡</h2><p>We’re here to provide answers, guidance, and support so you can feel more comfortable taking the next step.</p></aside><div>{faqs.map(([q,a]) => <details key={q} name="family-faq-group"><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></div><p className="family-faq-more">✦ Still have questions? We’re happy to help. <Link href="/contact">Contact Us</Link></p></div></div></section>
    <section className="family-final"><div className="family-container"><div><h2>Hope. Healing. A Stronger Family.</h2><p>Your family does not need to be perfect to become stronger. With support, understanding, and the willingness to take one step forward, healthier relationships can begin to grow.</p></div><Link href="/contact" className="family-btn family-btn-light">Request an Appointment</Link></div></section>
  </main>;
}
