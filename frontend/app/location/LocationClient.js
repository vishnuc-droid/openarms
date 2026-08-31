'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Adult & Individual Counseling',
    text: 'One-on-one support for adults navigating stress, relationships, life transitions, personal challenges, and personal growth.',
    href: '/adult-counseling-oklahoma-city/',
    cta: 'Explore Adult & Individual Counseling',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.2"/><path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6"/></svg>
    ),
  },
  {
    title: 'Family Counseling',
    text: 'Support for families working through communication difficulties, conflict, changing relationships, and challenging transitions.',
    href: '/family-therapy-oklahoma-city/',
    cta: 'Explore Family Counseling',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg>
    ),
  },
  {
    title: 'Marriage & Couples Therapy',
    text: 'A supportive environment for couples who want to strengthen communication, understand recurring patterns, and work on their relationship together.',
    href: '/marriage-counseling-oklahoma-city/',
    cta: 'Explore Couples Therapy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5.5c2.5-1 5.3-1 8 0v13c-2.7-1-5.5-1-8 0Z"/><path d="M12 5.5c2.7-1 5.5-1 8 0v13c-2.5-1-5.3-1-8 0Z"/></svg>
    ),
  },
  {
    title: 'Child & Adolescent Counseling',
    text: 'Age-appropriate support designed to help children and teenagers feel heard while navigating emotional, behavioral, family, school, or life challenges.',
    href: '/child-counseling-services-oklahoma-city/',
    cta: 'Explore Child & Adolescent Counseling',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="2.6"/><circle cx="5" cy="9" r="2.1"/><circle cx="19" cy="9" r="2.1"/><path d="M12 12c-3 0-5.2 1.8-5.2 4.6V19h10.4v-2.4C17.2 13.8 15 12 12 12Z"/><path d="M5 12.4c-2 .3-3.2 1.7-3.2 3.7V18h3.6M19 12.4c2 .3 3.2 1.7 3.2 3.7V18h-3.6"/></svg>
    ),
  },
  {
    title: 'Depression & Anxiety Counseling',
    text: 'Professional support for people experiencing depression, anxiety, ongoing stress, overwhelm, or related emotional challenges.',
    href: '/depression-anxiety-counseling-oklahoma/',
    cta: 'Explore Depression & Anxiety Counseling',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>
    ),
  },
  {
    title: 'Grief & Loss Counseling',
    text: 'Compassionate support for people navigating bereavement, significant loss, and major changes in life.',
    href: '/grief-counseling-oklahoma-city/',
    cta: 'Explore Grief Counseling',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21c-4-1-8-5-8-10a8 8 0 0 1 8-8c5 0 9 4 9 9 0 5-4.5 9-9 9Z"/><path d="M12 21c0-6 2-13 8-16"/></svg>
    ),
  },
];

const beyondCounseling = [
  {
    title: 'Foster Care & Adoption Support',
    text: 'Training, guidance, counseling, and ongoing support for foster and adoptive families navigating the realities of caring for children and building strong family connections.',
    href: '/foster-care',
  },
  {
    title: 'Parenting Support & Classes',
    text: 'Practical education and guidance to help parents strengthen communication, understand behavior, establish healthy boundaries, and feel more confident in their parenting.',
    href: '/parenting-classes-okc',
  },
  {
    title: 'Family Support Services',
    text: 'Family-centered resources, education, guidance, and connections designed to help families understand their options and find appropriate support.',
    href: '/family-support-services-oklahoma-city',
  },
  {
    title: 'Pro Bono Counseling',
    text: 'No-fee counseling opportunities designed to help reduce financial barriers for eligible individuals and families, subject to current program availability and requirements.',
    href: '/pro-bono-counseling-okc/',
  },
];

const whoWeSupport = [
  {
    title: 'Adults',
    text: 'A private environment to explore personal concerns, relationships, life changes, emotional well-being, and growth.',
  },
  {
    title: 'Children & Teens',
    text: 'Developmentally appropriate counseling and support for young people navigating emotional, behavioral, social, family, or school-related concerns.',
  },
  {
    title: 'Couples',
    text: 'Relationship-focused counseling for couples seeking healthier communication, stronger connection, and support through challenges.',
  },
  {
    title: 'Families',
    text: 'Counseling, education, and broader support for families navigating conflict, transitions, parenting concerns, or changing relationships.',
  },
  {
    title: 'Foster & Adoptive Families',
    text: 'Trauma-informed support, training, guidance, and counseling for children, foster parents, caregivers, and adoptive families.',
  },
];

const whyOpenArms = [
  {
    title: 'Compassion Comes First',
    text: 'You are more than the challenge that brought you here. We want you to feel heard, respected, and treated as a whole person.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21c-4-1-8-5-8-10a8 8 0 0 1 8-8c5 0 9 4 9 9 0 5-4.5 9-9 9Z"/><path d="M12 21c0-6 2-13 8-16"/></svg>
    ),
  },
  {
    title: 'Trauma-Informed Support',
    text: 'Our approach recognizes that past and present experiences can influence emotions, relationships, behavior, and the way people respond to the world around them.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5 19 6v6c0 4.5-3 7-7 8.5-4-1.5-7-4-7-8.5V6Z"/></svg>
    ),
  },
  {
    title: 'Support for the Whole Family',
    text: 'Our services extend across children, teenagers, adults, couples, parents, foster caregivers, and families.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg>
    ),
  },
  {
    title: 'Community Matters',
    text: 'Open Arms Initiative is a nonprofit organization committed to improving access to counseling, education, family support, and community resources.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="8" r="2.8"/><path d="M2.5 19c0-3 2.7-5.2 6-5.2s6 2.2 6 5.2"/><circle cx="17" cy="8.5" r="2.2"/><path d="M15.8 13.9c2.6.3 4.7 2.3 4.7 5"/></svg>
    ),
  },
];

const steps = [
  { number: '01', title: 'Reach Out', text: 'Call, email, or complete our contact form.' },
  { number: '02', title: 'Tell Us What You’re Looking For', text: "You don't need to know the exact service. Start by explaining what's bringing you to Open Arms." },
  { number: '03', title: 'Understand Your Options', text: 'Our team can help you identify which available service may best match your needs.' },
  { number: '04', title: 'Take the Next Step', text: "We'll explain what comes next based on the service, availability, and your circumstances." },
];

const faqs = [
  ['Where is Open Arms Initiative located in Oklahoma City?', 'Open Arms Initiative is located at 1101 Sovereign Row, Unit A, Oklahoma City, OK 73108.'],
  ['What are your Oklahoma City office hours?', 'Our listed office hours are Monday through Friday, 8:30 AM to 5:00 PM. Contact Open Arms Initiative directly if you need to confirm availability for a specific service or appointment.'],
  ['Do you provide both in-person and online services?', 'Yes. Open Arms Initiative offers in-person and online service options. Availability may vary depending on the particular service and your circumstances.'],
  ['What counseling services are available in Oklahoma City?', 'Open Arms Initiative provides counseling services for adults, individuals, children, adolescents, couples, and families, along with grief support and other specialized services.'],
  ['Do you support foster and adoptive families?', 'Yes. Open Arms Initiative provides foster-family support that includes training, ongoing guidance, placement support, and trauma-focused counseling. Support is also available for foster and adoptive families.'],
  ['Do you offer pro bono counseling in Oklahoma City?', 'Yes. Open Arms Initiative provides pro bono counseling intended to improve access to mental health support. Availability and applicable program requirements may vary, so contact our team for current information.'],
  ['What if I’m not sure which service I need?', "You don't have to decide before contacting us. Tell our team what you're experiencing or what kind of support you're looking for, and we can help you understand the available options."],
];

export default function LocationClient() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="reference-hero">
        <div className="hero-banner-bg" aria-hidden="true"></div>
        <div className="reference-hero-overlay"></div>
        <div className="reference-hero-copy">
          <span className="hero-overline">COMPASSIONATE SUPPORT, CLOSE TO HOME.</span>
          <h1 className="hero-accent-heading">Counseling &amp; Family Support <span className="hero-accent-heading-highlight">in Oklahoma City</span></h1>
          <div className="hero-divider" aria-hidden="true">
            <span className="hero-divider-line"></span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0170ED" strokeWidth="1.6"><path d="M12 21c-4-1-8-5-8-10a8 8 0 0 1 8-8c5 0 9 4 9 9 0 5-4.5 9-9 9Z"/><path d="M12 21c0-6 2-13 8-16"/></svg>
            <span className="hero-divider-line"></span>
          </div>
          <p className="reference-hero-text">
            <strong>A Place to Feel Heard, Supported, and Welcome</strong><br /><br />
            Finding support can feel like a big step. Whether you're looking for counseling for yourself, help for your child, support for your family, or guidance through foster care, you deserve a place where you can begin without judgment.
            At Open Arms Initiative, we provide compassionate counseling and family-focused services in Oklahoma City, helping individuals and families find support for the challenges they're facing.
            You don't have to know exactly what you need before you walk through our doors.
          </p>
          <p className="hero-trust-line">Compassionate Care &middot; Trauma-Informed &middot; Family Focused &middot; In-Person &amp; Online</p>
          <div className="hero-cta-row">
            <a className="reference-hero-button" href="/contact">
              Connect With Open Arms
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a className="reference-hero-button-secondary" href="/services">
              Explore Our Services
            </a>
          </div>
          <div className="hero-mobile-cta">
            <Link href="/contact" className="hero-mobile-cta-btn">Connect With Open Arms</Link>
            <Link href="/services" className="hero-mobile-cta-btn secondary">Explore Our Services</Link>
          </div>
        </div>
      </section>

      {/* Visit Us / Contact Info + Map */}
      <section className="loc-visit-section">
        <div className="loc-visit-container">
          <div className="loc-visit-head">
            <span className="care-badge">Visit Us</span>
            <h2>Visit Open Arms Initiative in Oklahoma City</h2>
          </div>
          <div className="loc-visit-grid">
            <div className="loc-visit-card">
              <span className="loc-visit-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.1-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 14.9 12 21 12 21Z"/><circle cx="12" cy="9.8" r="2.4"/></svg>
              </span>
              <h3>Our Location</h3>
              <p>Open Arms Initiative<br />1101 Sovereign Row, Unit A<br />Oklahoma City, OK 73108</p>
            </div>
            <div className="loc-visit-card">
              <span className="loc-visit-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z"/></svg>
              </span>
              <h3>Call Us</h3>
              <p><a href="tel:+14059208934">405-920-8934</a></p>
            </div>
            <div className="loc-visit-card">
              <span className="loc-visit-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
              </span>
              <h3>Email Us</h3>
              <p><a href="mailto:info@openarmsinitiative.com">info@openarmsinitiative.com</a></p>
            </div>
            <div className="loc-visit-card">
              <span className="loc-visit-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>
              </span>
              <h3>Office Hours</h3>
              <p>Monday&ndash;Friday<br />8:30 AM&ndash;5:00 PM</p>
            </div>
            <div className="loc-visit-card">
              <span className="loc-visit-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20"/></svg>
              </span>
              <h3>Service Options</h3>
              <p>In-Person &amp; Online</p>
            </div>
          </div>
          <div className="loc-visit-map">
            <iframe
              title="Open Arms Initiative OKC Map"
              src="https://maps.google.com/maps?cid=11493076692460582253&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section help-chapters-section">
        <div className="services-inner">
          <div className="section-intro">
            <span className="services-kicker">Our Services</span>
            <h2>Support for You. Support for Your Family.</h2>
            <p>Sometimes you know exactly why you're looking for help. Other times, you simply know something needs to change. Our Oklahoma City services support people at different ages, stages, and circumstances.</p>
          </div>
          <div className="help-grid">
            {services.map((service) => (
              <article className="help-card" key={service.title}>
                <span className="help-card-icon">{service.icon}</span>
                <h3><Link href={service.href}>{service.title}</Link></h3>
                <p>{service.text}</p>
                <Link href={service.href} className="teaser-card-link">{service.cta} &rsaquo;</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Counseling */}
      <section className="teaser-row-section loc-beyond-section">
        <div className="loc-visit-head">
          <h2>Support That Goes Beyond the Counseling Room</h2>
          <p>Open Arms Initiative's work in Oklahoma City extends beyond traditional individual counseling. Our mission also includes strengthening families and helping make appropriate support more accessible within the community.</p>
        </div>
        <div className="teaser-row-container loc-beyond-grid">
          {beyondCounseling.map((item) => (
            <article className="teaser-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link href={item.href} className="teaser-card-link">Learn More &rsaquo;</Link>
            </article>
          ))}
        </div>
      </section>

      {/* Emotional Statement */}
      <section className="loc-statement-section">
        <div className="loc-statement-container">
          <h2>&ldquo;You don&rsquo;t have to travel the whole road today. You just need somewhere to begin.&rdquo;</h2>
          <p>
            Maybe you're reaching out for yourself. Maybe you're worried about your child. Maybe your relationship or family has been going through a difficult season.
            Or maybe you're simply trying to understand what kind of help is available.
          </p>
          <p>Whatever brought you here, the first conversation can be simple. Tell us what you're looking for. We'll help you explore the next step.</p>
          <Link href="/contact" className="final-cta-btn primary">Connect With Open Arms</Link>
        </div>
      </section>

      {/* Who We Support */}
      <section className="loc-who-section">
        <div className="loc-who-container">
          <div className="loc-visit-head">
            <h2>Who We Support</h2>
          </div>
          <div className="loc-who-grid">
            {whoWeSupport.map((item) => (
              <article className="loc-who-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Open Arms */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="why-choose-header">
            <div>
              <span className="care-badge">Why Open Arms</span>
              <h2 className="why-choose-title">Why Oklahoma City Families<br />Turn to Open Arms</h2>
            </div>
          </div>
          <div className="why-choose-grid">
            {whyOpenArms.map((reason) => (
              <article className="why-choose-card" key={reason.title}>
                <div className="icon-box">{reason.icon}</div>
                <div className="why-choose-card-copy">
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* In-Person & Online */}
      <section className="loc-online-section">
        <div className="loc-online-container">
          <div className="loc-visit-head">
            <h2>In-Person &amp; Online Support</h2>
          </div>
          <div className="loc-online-grid">
            <div className="loc-online-card">
              <h3>Prefer Meeting in Person?</h3>
              <p>Visit our Oklahoma City location for available in-person services in a professional, supportive environment.</p>
            </div>
            <div className="loc-online-card">
              <h3>Prefer Online Support?</h3>
              <p>Online service options may provide additional flexibility for eligible services and circumstances. Contact our team to learn about current availability and determine which option may be appropriate for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="loc-steps-section">
        <div className="loc-steps-container">
          <div className="loc-visit-head">
            <h2>Your First Visit Doesn&rsquo;t Have to Feel Complicated</h2>
          </div>
          <div className="loc-steps-grid">
            {steps.map((step) => (
              <article className="loc-step-card" key={step.number}>
                <span className="loc-step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq-new-section">
        <div className="faq-new-container">
          <div className="faq-new-left">
            <div className="faq-new-left-watermark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.4 8.4 2 4.8 5.6 4.2c2.2-.4 4.2.6 6.4 3 2.2-2.4 4.2-3.4 6.4-3 3.6.6 5.2 4.2 3.6 7.5C19.5 16.4 12 21 12 21Z"/></svg>
            </div>
            <span className="care-badge faq-badge">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a7 7 0 0 1-7 7H7l-4 3 1-4.5A7 7 0 1 1 21 12Z"/><path d="M12 8v.01M12 11.5c0-.9.6-1.3 1.1-1.7.5-.4.9-.8.9-1.5A2 2 0 0 0 12 6.3a2 2 0 0 0-2 1.7"/></svg>
              Frequently Asked Questions
            </span>
            <h2 className="faq-new-title">
              Got a question?<br /><span className="faq-title-accent">Get your answer</span>
              <svg className="faq-title-underline" viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8c30-10 60-10 90 0s90 10 126-2" fill="none" stroke="#0170ED" strokeWidth="3" strokeLinecap="round"/></svg>
            </h2>
            <p className="faq-new-desc">Quick answers to questions you may have. Can't find what you're looking for? Get in touch with us.</p>
          </div>
          <div className="faq-new-right">
            {faqs.map(([question, answer], index) => (
              <article key={question} className="faq-new-item">
                <button
                  className={`faq-new-btn${openFaq === index ? ' open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span>{question}</span>
                  <span className="faq-chevron">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="faq-new-answer"><p>{answer}</p></div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="final-cta-section">
        <div className="final-cta-inner">
          <h2>Support May Be Closer Than You Think</h2>
          <p>
            You don't need the perfect words. You don't need to know exactly which service to choose. And you don't have to figure out every step before reaching out.
            <br /><br />
            Start Where You Are. We&rsquo;ll Help You Explore What Comes Next.
          </p>
          <p>Open Arms Initiative<br />1101 Sovereign Row, Unit A<br />Oklahoma City, OK 73108</p>
          <div className="final-cta-buttons">
            <Link href="/contact" className="final-cta-btn primary">Connect With Open Arms</Link>
            <a href="tel:+14059208934" className="final-cta-btn secondary">Call 405-920-8934</a>
          </div>
        </div>
      </section>
    </main>
  );
}
