'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { submitForm } from '@/lib/api';

const SERVICE_OPTIONS = [
  'Adult & Individual Counseling',
  'Family Counseling',
  'Marriage & Couples Therapy',
  'Depression & Anxiety Counseling',
  'Grief & Loss Counseling',
  'Child & Adolescent Counseling',
  'Family Support Services',
  'Parenting Support & Classes',
  'Foster Care & Adoption Support',
  'Pro Bono Counseling',
  'Other / I’m Not Sure',
];

const SERVICE_PARAM_MAP = {
  'adult-counseling': 'Adult & Individual Counseling',
  'family-therapy': 'Family Counseling',
  'marriage-counseling': 'Marriage & Couples Therapy',
  'depression-anxiety-counseling': 'Depression & Anxiety Counseling',
  'grief-counseling': 'Grief & Loss Counseling',
  'child-counseling': 'Child & Adolescent Counseling',
  'family-support': 'Family Support Services',
  'parenting-classes': 'Parenting Support & Classes',
  'foster-care': 'Foster Care & Adoption Support',
  'pro-bono-counseling': 'Pro Bono Counseling',
};

const SERVICE_LABEL_TO_SLUG = Object.fromEntries(
  Object.entries(SERVICE_PARAM_MAP).map(([slug, label]) => [label, slug])
);

const trustIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="8" width="17" height="12" rx="2" /><path d="M8 8V6a4 4 0 0 1 8 0v2" /><path d="M12 12v4" strokeDasharray="1.2 1.6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5c0 4.7-4 8.5-9 8.5a9.5 9.5 0 0 1-3.2-.55L4 21l1.4-3.9A8.4 8.4 0 0 1 3 11.5C3 6.8 7 3 12 3s9 3.8 9 8.5Z" /><path d="m8.5 11.7 2.2 2.2 4.8-4.8" /></svg>,
];

const reachIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 6.5 8 6 8-6" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.1-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 14.9 12 21 12 21Z" /><circle cx="12" cy="9.8" r="2.4" /></svg>,
];

const infoIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18" /><path d="M8 2v4M16 2v4" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="8" width="17" height="12" rx="2" /><path d="M8 8V6a4 4 0 0 1 8 0v2" /><path d="M12 12v4" strokeDasharray="1.2 1.6" /></svg>,
];

const stepIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 1 1 3 6.2L4 19l.9-3A7.9 7.9 0 0 1 4 12Z" /><path d="M8.5 10.5h7M8.5 14h4.5" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m20 20-4.3-4.3" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h15.5" /><path d="m13.5 6 6 6-6 6" /></svg>,
];

const steps = [
  ['Reach Out', 'Complete the contact form, call us, or send us an email.'],
  ['Tell Us What You Need', 'Share as much or as little as you comfortably can about the type of support you’re looking for.'],
  ['Explore the Right Option', 'Our team can help you understand which available Open Arms service may be appropriate for your needs.'],
  ['Take the Next Step', 'We’ll explain the appropriate next steps based on the service, availability, and your circumstances.'],
];

const faqs = [
  ['How do I know which counseling service I need?', 'You don’t have to determine that before contacting us. Tell our team a little about what you’re experiencing and the type of support you’re seeking. We can help you understand which available service may be appropriate.'],
  ['Do you offer in-person and online counseling?', 'Open Arms Initiative offers in-person and online service options. Contact our team to discuss current availability and what may be appropriate for your needs.'],
  ['Do you provide counseling for children and families?', 'Yes. Open Arms Initiative provides services for children, adolescents, adults, couples, and families, along with broader family and foster support programs.'],
  ['Do you offer pro bono counseling?', <>Yes. Open Arms Initiative provides <Link href="/pro-bono-counseling-okc/">pro bono counseling</Link> as part of its commitment to increasing access to mental health support. Eligibility and availability may vary, so please contact us for current program information.</>],
  ['How soon can I get an appointment?', 'Appointment availability can vary depending on the service, provider availability, and your scheduling needs. Contact Open Arms Initiative for current availability.'],
  ['What if I’m not sure whether I need counseling?', 'That’s okay. You don’t need to know exactly what kind of support you need before contacting us. Start by telling us what’s happening, and we can help you explore the available options.'],
];

function ContactForm() {
  const searchParams = useSearchParams();

  const [form, setForm] = useState({
    firstName: searchParams.get('name')?.split(' ')[0] || '',
    lastName: searchParams.get('name')?.split(' ').slice(1).join(' ') || '',
    email: searchParams.get('email') || '',
    phone: searchParams.get('phone') || '',
    service: SERVICE_PARAM_MAP[searchParams.get('service')] || '',
    contactMethod: '',
    message: searchParams.get('message') || '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await submitForm({
        service: SERVICE_LABEL_TO_SLUG[form.service] || 'general-contact',
        firstName: form.firstName,
        lastName: form.lastName,
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone,
        contactMethod: form.contactMethod,
        message: form.message,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="oa-contact-success">
        <span className="oa-contact-success-icon"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5 9 18 20 6" /></svg></span>
        <h3>Thank You for Reaching Out</h3>
        <p>Your request has been received. A member of our team will be in touch with you soon.</p>
      </div>
    );
  }

  return (
    <form className="oa-contact-form" onSubmit={handleSubmit}>
      <div className="oa-contact-form-row">
        <label className="oa-contact-field"><span>First Name*</span><input name="firstName" value={form.firstName} onChange={handleChange} required /></label>
        <label className="oa-contact-field"><span>Last Name*</span><input name="lastName" value={form.lastName} onChange={handleChange} required /></label>
      </div>
      <div className="oa-contact-form-row">
        <label className="oa-contact-field"><span>Email Address*</span><input type="email" name="email" value={form.email} onChange={handleChange} required /></label>
        <label className="oa-contact-field"><span>Phone Number</span><input type="tel" name="phone" value={form.phone} onChange={handleChange} /></label>
      </div>
      <label className="oa-contact-field"><span>What type of support are you looking for?*</span>
        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="" disabled>Select an option</option>
          {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </label>
      <label className="oa-contact-field"><span>Preferred contact method</span>
        <select name="contactMethod" value={form.contactMethod} onChange={handleChange}>
          <option value="">No preference</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
          <option value="either">Either</option>
        </select>
      </label>
      <label className="oa-contact-field"><span>Message / How can we help?*</span><textarea name="message" value={form.message} onChange={handleChange} rows={4} required /></label>

      {error && <p className="oa-contact-form-note" style={{ color: '#c0392b' }}>{error}</p>}
      <button type="submit" className="fs-btn fs-req-btn-primary oa-contact-submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send My Request'}</button>
      <p className="oa-contact-form-note">Please avoid including highly sensitive or urgent information in this form. Submitting this form does not establish a therapeutic relationship or confirm an appointment.</p>
    </form>
  );
}

export default function ContactPage() { return <main className="fs-page oa-contact-page">
  <ScrollReveal />

  <section className="fs-hero"><div className="fs-hero-split-inner oa-contact-hero-inner">
    <div className="fs-hero-copy reveal reveal-from-left">
      <p className="fs-kicker">WE&rsquo;RE HERE WHEN YOU&rsquo;RE READY.</p>
      <h1>You Don&rsquo;t Have to Know Exactly What to Say. Just Reach Out.</h1>
      <p>Maybe you know exactly what kind of support you&apos;re looking for.</p>
      <p>Maybe you simply know that you, your child, or your family could use some help.</p>
      <p>Either way, you don&apos;t need to have everything figured out before contacting us.</p>
      <p>Whether you&apos;re looking for counseling, family support, foster care resources, parenting support, or information about our community programs, Open Arms Initiative is here to listen and help you understand the next step.</p>
      <div className="fs-actions"><a href="#connect" className="fs-btn fs-solid">Connect With Open Arms</a><Link href="/#services" className="fs-btn fs-outline">Explore Our Services</Link></div>
    </div>
  </div></section>

  <section className="fs-trust-section"><div className="fs-container fs-trust">{['Compassionate Support', 'Confidential & Respectful', 'In-Person & Online', 'No Wrong Door'].map((x, i) => <div key={x}><span>{trustIcons[i]}</span><p>{x}</p></div>)}</div></section>

  <section id="connect" className="oa-connect-section"><div className="fs-container oa-connect-grid">
    <div className="oa-connect-copy reveal reveal-from-left">
      <h2>Start With What You Know</h2>
      <i className="fs-line" />
      <p>You don&apos;t need a diagnosis.</p>
      <p>You don&apos;t need to choose the perfect service.</p>
      <p>And you don&apos;t need to explain everything in your first message.</p>
      <p>Tell us a little about what brings you here, and our team can help you understand the services and support options that may be appropriate.</p>
      <p className="oa-connect-looking-label">I&rsquo;m Looking For:</p>
      <div className="oa-connect-chip-grid">{SERVICE_OPTIONS.map((s) => <span className="oa-connect-chip" key={s}>{s}</span>)}</div>
    </div>
    <div className="oa-connect-form-card reveal reveal-from-right">
      <Suspense fallback={null}><ContactForm /></Suspense>
    </div>
  </div></section>

  <section className="fs-section oa-reach-section"><div className="fs-container">
    <h2 className="fs-center reveal reveal-from-bottom">Ways to Reach Open Arms</h2><i className="fs-line-center" />
    <div className="oa-reach-grid reveal-stagger">
      <article className="reveal reveal-from-bottom oa-reach-card"><span className="oa-reach-icon">{reachIcons[0]}</span><h3>Call Us</h3><a href="tel:+14059208934" className="oa-reach-value">405-920-8934</a><p>Have questions about our services or aren&apos;t sure where to begin? Give us a call.</p></article>
      <article className="reveal reveal-from-bottom oa-reach-card"><span className="oa-reach-icon">{reachIcons[1]}</span><h3>Email Us</h3><a href="mailto:info@openarmsinitiative.com" className="oa-reach-value">info@openarmsinitiative.com</a><p>Send us a message and tell us what kind of support you&apos;re looking for.</p></article>
      <article className="reveal reveal-from-bottom oa-reach-card"><span className="oa-reach-icon">{reachIcons[2]}</span><h3>Visit Us</h3><p className="oa-reach-value">1101 Sovereign Row, Unit A<br />Oklahoma City, OK 73108</p></article>
    </div>
    <div className="oa-reach-info-strip reveal reveal-from-bottom">
      <div><span>{infoIcons[0]}</span><div><h4>Office Hours</h4><p>8:30 AM &ndash; 5:00 PM</p></div></div>
      <div><span>{infoIcons[1]}</span><div><h4>Counseling Options</h4><p>In-Person &amp; Online Services Available</p></div></div>
    </div>
    <div className="oa-reach-map reveal reveal-from-bottom">
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
  </div></section>

  <section className="fs-section fs-steps-section"><div className="fs-container">
    <h2 className="fs-center reveal reveal-from-bottom">What Happens After You Reach Out?</h2><i className="fs-line-center" />
    <p className="pc-process-lead reveal reveal-from-bottom">Sometimes contacting a counseling or support organization can feel intimidating, especially when you don&apos;t know what happens next. We&apos;ve made the first step simple.</p>
    <div className="fs-steps reveal-stagger">{steps.map(([h, p], i) => <article className="reveal reveal-from-bottom" key={h}><span className="fs-step-icon">{stepIcons[i]}</span><span className="oa-step-number">{String(i + 1).padStart(2, '0')}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
    <p className="fs-understand-close reveal reveal-from-bottom"><strong>You don&apos;t need to navigate the entire process before reaching out. Start with one conversation.</strong></p>
  </div></section>

  <section className="fs-statement"><div className="fs-container reveal reveal-scale-in"><div><h2>&ldquo;You don&rsquo;t need the right words to ask for support.&rdquo;</h2><Link href="#connect" className="fs-btn fs-light">Connect With Open Arms</Link></div><img src="/n1.jpg" alt="Compassionate conversation between two people" /><aside>Maybe you&apos;ve been thinking about reaching out for weeks.<br /><br />Maybe someone you care about encouraged you to contact us.<br /><br />Or maybe today simply feels like the day you&apos;re ready to try something different.<br /><br />Whatever brought you here, we&apos;ll meet you with compassion and respect.</aside></div></section>

  <section className="fs-section"><div className="fs-container"><div className="fs-faq"><aside className="reveal reveal-from-left"><h2>Frequently Asked Questions</h2><p>Find answers to common questions about contacting and connecting with Open Arms Initiative.</p></aside><div className="reveal reveal-from-right">{faqs.map(([q, a]) => <details key={q} name="oa-contact-faq-group"><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></div></div></section>

  <section className="fs-final"><div className="fs-container fs-final-grid reveal reveal-scale-in">
    <div>
      <h2>You&rsquo;ve Already Taken the First Step by Looking for Support.</h2>
      <p>The next one can be simple. Call us. Send us a message. Tell us what you&apos;re looking for, even if you&apos;re not completely sure yet.</p>
      <h3>We&rsquo;re Here to Listen. We&rsquo;re Here to Help You Find the Next Step.</h3>
    </div>
    <div className="oa-final-ctas"><Link href="#connect" className="fs-btn fs-solid">Connect With Open Arms</Link><a href="tel:+14059208934" className="fs-btn fs-outline-light">Call 405-920-8934</a></div>
  </div></section>
</main>}
