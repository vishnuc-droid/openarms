'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const TICKET_URL = 'https://donorbox.org/events/912926/steps/choose_tickets';
const DONATE_URL = '/donate-to-support-counseling-education-emotional-healing';

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12.5 9 18 20 6" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function IconHeartPulse() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.8 8.6c0 4.5-8.8 10.4-8.8 10.4S3.2 13.1 3.2 8.6a4.6 4.6 0 0 1 8.4-2.6 4.6 4.6 0 0 1 9.2 2.6Z" />
      <path d="M6.5 11h2.5l1.5-2.5 2 5 1.5-2.5H16" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 4.5 6v6c0 4.5 3.2 7.7 7.5 9 4.3-1.3 7.5-4.5 7.5-9V6L12 3Z" />
      <path d="M9 12.2 11 14l4-4.2" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v5M12 16v5M3 12h5M16 12h5M5.5 5.5l3 3M15.5 15.5l3 3M18.5 5.5l-3 3M8.5 15.5l-3 3" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <circle cx="17.5" cy="8.5" r="2.5" />
      <path d="M15.5 14.2c2.9.4 5 2.5 5 5.8" />
    </svg>
  );
}

const bokehDots = [
  { left: '4%', top: '18%', width: '90px', height: '90px', animationDelay: '0s' },
  { left: '12%', top: '68%', width: '46px', height: '46px', animationDelay: '1.2s' },
  { left: '22%', top: '38%', width: '22px', height: '22px', animationDelay: '2.4s' },
  { left: '30%', top: '80%', width: '60px', height: '60px', animationDelay: '0.6s' },
  { left: '8%', top: '85%', width: '30px', height: '30px', animationDelay: '3s' },
  { left: '48%', top: '12%', width: '34px', height: '34px', animationDelay: '1.8s' },
  { left: '62%', top: '30%', width: '70px', height: '70px', animationDelay: '0.3s' },
  { left: '70%', top: '75%', width: '40px', height: '40px', animationDelay: '2.1s' },
  { left: '80%', top: '20%', width: '110px', height: '110px', animationDelay: '1s' },
  { left: '88%', top: '55%', width: '26px', height: '26px', animationDelay: '2.7s' },
  { left: '92%', top: '82%', width: '54px', height: '54px', animationDelay: '0.9s' },
  { left: '58%', top: '90%', width: '20px', height: '20px', animationDelay: '3.4s' },
  { left: '38%', top: '55%', width: '18px', height: '18px', animationDelay: '1.5s' },
  { left: '15%', top: '10%', width: '16px', height: '16px', animationDelay: '2.9s' },
  { left: '96%', top: '15%', width: '24px', height: '24px', animationDelay: '0.4s' },
];

const eventFeatures = [
  'Live performance by Montell Jordan',
  'Elegant plated dinner',
  "90's themed gala — dress to impress",
  "Dress code: Cocktail / 90's-inspired",
  'Community connection with local leaders and advocates',
  'Mission moments — hear real stories of impact',
];

const tickets = [
  {
    name: 'General Admission',
    price: '$150',
    description: 'Full gala access, plated dinner, and live performance by Montell Jordan.',
    note: 'Your ticket helps fund a mental health session for someone in need.',
    highlight: false,
  },
  {
    name: 'Premium Seating',
    price: '$300',
    description: 'Priority seating, plated dinner, live performance, and recognition as a Premium Supporter.',
    note: '',
    highlight: false,
  },
  {
    name: 'VIP Experience',
    price: '$500',
    description: 'Exclusive VIP seating, premium table placement, plated dinner, live performance, and special VIP recognition.',
    note: '',
    highlight: true,
    badge: 'Most Popular',
  },
];

const sponsorPerks = [
  {
    title: 'Brand Recognition',
    text: 'Prominent logo placement in gala materials, on-site signage, social media features, and digital promotion before and after the event.',
  },
  {
    title: 'Community Visibility',
    text: "Put your brand in the room with Oklahoma City's community leaders, advocates, and mission-driven supporters.",
  },
  {
    title: 'Direct Mission Impact',
    text: 'Your sponsorship directly funds mental health services, therapeutic foster care support, and pro bono care for families who need it most.',
  },
];

const impactRows = [
  { amount: '$150 Ticket', text: "Helps cover a mental health session for a client who couldn't otherwise afford care.", Icon: IconHeartPulse },
  { amount: '$300 Ticket', text: 'Supports therapeutic resources for a foster family navigating trauma.', Icon: IconShield },
  { amount: '$500 Ticket', text: 'Funds multiple sessions of pro bono care for an individual or family in crisis.', Icon: IconSparkle },
  { amount: 'Sponsorship', text: 'Sustains entire programs reaching dozens of people throughout the year.', Icon: IconUsers },
];

const faqs = [
  {
    q: 'Can anyone come?',
    a: 'Yes! Everyone is welcome. Simply purchase your tickets using the QR code.',
  },
  {
    q: 'When is the last day to buy tickets?',
    a: 'Tickets are available through April 30th — be sure to grab yours before they sell out!',
  },
  {
    q: 'What is this gala about?',
    a: "We're celebrating 5 years of impact through Open Arms and all that God has done. This special evening brings people together to reflect, give back, and continue supporting mental health services, foster care initiatives, and community outreach.",
  },
  {
    q: 'What should I wear?',
    a: "Think 90's elegance — dressy with a fun throwback twist.",
  },
  {
    q: 'What does my ticket include?',
    a: 'Your ticket includes a plated dinner, full event experience, and a live performance by Montell Jordan! Different tier seating includes some extra perks.',
  },
  {
    q: "What if I can't attend?",
    a: 'You can still make an impact by donating — every contribution helps expand access to counseling, training, and support services.',
  },
  {
    q: 'Are seats limited?',
    a: 'Yes, seating is limited, so we encourage you to secure your tickets early.',
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="gala-faq-list">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <article className={isOpen ? 'gala-faq-item active' : 'gala-faq-item'} key={item.q}>
            <button className="gala-faq-question" onClick={() => setOpenIndex(isOpen ? null : index)}>
              <span className="gala-faq-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="gala-faq-q-text">{item.q}</span>
              <span className="gala-faq-toggle" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14" />{!isOpen && <path d="M12 5v14" />}</svg>
              </span>
            </button>
            <div className="gala-faq-answer-wrap" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
              <div className="gala-faq-answer-inner">
                <p className="gala-faq-answer">{item.a}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function GalaClient() {
  return (
    <main className="gala-page">
      {/* Hero */}
      <section id="home" className="gala-hero-v2">
        <div className="gala-hero-v2-bokeh" aria-hidden="true">
          {bokehDots.map((dot, i) => (
            <span key={i} className="gala-bokeh-dot" style={dot} />
          ))}
        </div>
        <div className="gala-hero-v2-inner">
          <h1 className="gala-hero-v2-title reveal reveal-from-bottom">
            One Night. Real Change. A Mission Worth Celebrating.
          </h1>
          <div className="hero-divider gala-hero-v2-divider" aria-hidden="true">
            <span className="hero-divider-line"></span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00AFF7" strokeWidth="1.6"><path d="M12 21c-4-1-8-5-8-10a8 8 0 0 1 8-8c5 0 9 4 9 9 0 5-4.5 9-9 9Z"/><path d="M12 21c0-6 2-13 8-16"/></svg>
            <span className="hero-divider-line"></span>
          </div>
          <p className="gala-hero-v2-script reveal reveal-from-bottom">
            Join us for an evening of music, community, and purpose raising funds to bring mental health care and therapeutic foster care support to families who need it most, at no cost to them.
          </p>
          <div className="gala-hero-v2-details reveal-stagger">
            <div className="gala-hero-v2-detail-card reveal reveal-from-bottom">
              <span className="gala-hero-v2-detail-icon"><IconCalendar /></span>
              <div>
                <span className="gala-hero-v2-detail-label">Date</span>
                <span className="gala-hero-v2-detail-value">Friday, May 8th</span>
              </div>
            </div>
            <div className="gala-hero-v2-detail-card reveal reveal-from-bottom">
              <span className="gala-hero-v2-detail-icon"><IconClock /></span>
              <div>
                <span className="gala-hero-v2-detail-label">Time</span>
                <span className="gala-hero-v2-detail-value">7:00 PM &ndash; 10:00 PM</span>
              </div>
            </div>
            <div className="gala-hero-v2-detail-card reveal reveal-from-bottom">
              <span className="gala-hero-v2-detail-icon"><IconPin /></span>
              <div>
                <span className="gala-hero-v2-detail-label">Venue</span>
                <span className="gala-hero-v2-detail-value">City &amp; State | 19 NE 6th St, Oklahoma City, OK</span>
              </div>
            </div>
          </div>
          <div className="gala-hero-v2-cta-row reveal reveal-from-bottom">
            <a className="gala-hero-v2-btn primary" href={TICKET_URL} target="_blank" rel="noopener noreferrer">
              Reserve Your Seat Tonight
            </a>
            <Link className="gala-hero-v2-btn secondary" href={DONATE_URL}>
              Donate Now
            </Link>
          </div>
          <p className="gala-hero-v2-note reveal reveal-from-bottom">Limited seating available. Secure your tickets today.</p>
        </div>
      </section>

      {/* About the Event */}
      <section className="gala-about-section gala-section-divider">
        <span className="gala-about-watermark" aria-hidden="true">Gala</span>
        <div className="gala-about-container">
          <div className="gala-about-heading section-reveal section-reveal-left">
            <span className="care-badge">About the Event</span>
            <h2 className="gala-about-title">More Than a Gala.<br />A Movement.</h2>
            <span className="gala-about-title-underline" aria-hidden="true"></span>
          </div>
          <div className="gala-about-grid">
            <div className="gala-about-copy reveal reveal-from-left">
              <p>
                Too many people are facing mental health crises, navigating the foster care system, or walking through the hardest seasons of their lives with nowhere to turn.
              </p>
              <p>
                Dressed in your best 90&rsquo;s-inspired look, surrounded by incredible people, you&rsquo;ll enjoy a beautifully plated dinner and a live performance from R&amp;B legend Montell Jordan.
              </p>
            </div>
            <div className="gala-feature-panel reveal reveal-from-right">
              <ul className="gala-feature-list">
                {eventFeatures.map((item) => (
                  <li key={item}><span className="gala-feature-check"><IconCheck /></span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency section */}
      <section className="gala-urgency-section-v2 gala-section-divider">
        <div className="gala-hero-v2-bokeh" aria-hidden="true">
          {bokehDots.slice(0, 8).map((dot, i) => (
            <span key={i} className="gala-bokeh-dot gala-bokeh-dot-small" style={dot} />
          ))}
        </div>
        <div className="gala-urgency-container">
          <svg className="gala-urgency-quote" viewBox="0 0 24 24" width="46" height="46" fill="none" aria-hidden="true">
            <path d="M7.17 6C4.87 8.13 3.5 10.99 3.5 14.1c0 3.31 2.19 5.4 4.72 5.4 2.11 0 3.68-1.65 3.68-3.68 0-2.02-1.42-3.51-3.28-3.51-.36 0-.7.05-.98.15.36-2.03 1.9-3.94 3.68-5.1L7.17 6Zm9.5 0c-2.3 2.13-3.67 4.99-3.67 8.1 0 3.31 2.19 5.4 4.72 5.4 2.11 0 3.68-1.65 3.68-3.68 0-2.02-1.42-3.51-3.28-3.51-.36 0-.7.05-.98.15.36-2.03 1.9-3.94 3.68-5.1L16.67 6Z" fill="#00AFF7" />
          </svg>
          <div className="section-reveal section-reveal-right">
            <span className="care-badge gala-urgency-badge">Why It Matters</span>
            <h2 className="gala-urgency-title">Someone in Our Community Needs This Tonight</h2>
            <p className="gala-urgency-text">
              Cost remains one of the biggest barriers between people and the professional support they desperately need. We provide mental health services, therapeutic foster care support, and pro bono (no-cost) care to individuals and families who couldn&rsquo;t otherwise afford it &mdash; no complex hoops, no income barriers.
            </p>
            <p className="gala-urgency-highlight">
              When you attend this gala &mdash; or sponsor it &mdash; you are directly funding those services. You are the reason someone gets the call back.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Guest */}
      <section className="gala-guest-section gala-section-divider">
        <div className="gala-guest-inner">
          <div className="gala-guest-image reveal reveal-scale-in">
            <img src="https://www.openarmsinitiative.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-27-at-21.48.43.webp" alt="Montell Jordan performing live" loading="lazy" />
          </div>
          <div className="gala-guest-copy reveal reveal-from-right">
            <span className="care-badge">Featured Guest</span>
            <h2>Live Music by Montell Jordan</h2>
            <p>You know the voice. Now experience it live.</p>
            <p>
              Montell Jordan is the iconic R&amp;B artist behind one of the defining hits of the 1990s. This isn&rsquo;t a tribute. This is the real thing &mdash; an artist whose music defined a generation, performing for a cause that&rsquo;s defining our community.
            </p>
          </div>
        </div>
      </section>

      {/* Tickets */}
      <section id="tickets" className="why-choose-section gala-tickets-section gala-section-divider">
        <div className="why-choose-container">
          <div className="why-choose-header section-reveal section-reveal-left">
            <div>
              <span className="care-badge">Tickets</span>
              <h2 className="why-choose-title">Choose Your Seat. Choose Your Impact.</h2>
            </div>
            <div className="gala-qr-block reveal reveal-scale-in">
              <img src="https://www.openarmsinitiative.com/wp-content/uploads/2026/04/open_arms_qr.png" alt="Scan to purchase gala tickets" loading="lazy" />
              <span>Scan to buy tickets</span>
            </div>
          </div>
          <div className="why-choose-grid gala-ticket-grid reveal-stagger">
            {tickets.map((ticket) => (
              <article key={ticket.name} className={`why-choose-card gala-ticket-card reveal reveal-from-bottom${ticket.highlight ? ' gala-ticket-card-highlight' : ''}`}>
                {ticket.badge && <span className="gala-ticket-badge">{ticket.badge}</span>}
                <h3>{ticket.name}</h3>
                <p className="gala-ticket-price">{ticket.price}</p>
                <p className="gala-ticket-desc">{ticket.description}</p>
                {ticket.note && <p className="gala-ticket-note">{ticket.note}</p>}
                <a className="gala-ticket-select" href={TICKET_URL} target="_blank" rel="noopener noreferrer">Select</a>
              </article>
            ))}
          </div>
          <div className="gala-tickets-cta reveal reveal-from-bottom">
            <a className="reference-hero-button" href={TICKET_URL} target="_blank" rel="noopener noreferrer">
              Buy Tickets Now
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Sponsorship */}
      <section className="why-choose-section gala-sponsor-section gala-section-divider">
        <div className="why-choose-container">
          <div className="why-choose-header section-reveal section-reveal-left">
            <div>
              <span className="care-badge">Sponsorship</span>
              <h2 className="why-choose-title">Partner With Us. Amplify Your Impact.</h2>
            </div>
          </div>
          <p className="gala-sponsor-intro reveal reveal-from-bottom">
            There are businesses in this city with the power to do something extraordinary &mdash; not just write a check, but publicly align with a cause that is healing our community from the inside out.
          </p>
          <div className="why-choose-grid reveal-stagger">
            {sponsorPerks.map((perk) => (
              <article key={perk.title} className="why-choose-card reveal reveal-from-bottom">
                <h3>{perk.title}</h3>
                <p>{perk.text}</p>
              </article>
            ))}
          </div>
          <p className="gala-sponsor-note reveal reveal-from-bottom">
            Custom sponsorship packages are available. We&rsquo;ll work with you to make this partnership meaningful for your brand and our mission.
          </p>
          <div className="gala-sponsor-cta reveal reveal-from-bottom">
            <a className="reference-hero-button" href={TICKET_URL} target="_blank" rel="noopener noreferrer">
              Inquire About Sponsorship
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Impact breakdown */}
      <section className="gala-impact-section-v2 gala-section-divider">
        <div className="gala-impact-aurora" aria-hidden="true">
          <span className="gala-aurora-blob gala-aurora-blob-1"></span>
          <span className="gala-aurora-blob gala-aurora-blob-2"></span>
          <span className="gala-aurora-blob gala-aurora-blob-3"></span>
        </div>
        <div className="gala-impact-grid-lines" aria-hidden="true"></div>
        <div className="gala-impact-inner">
          <div className="gala-impact-head section-reveal section-reveal-left">
            <span className="care-badge gala-urgency-badge">How Your Support Helps</span>
            <h2 className="gala-impact-title">Your Investment. Their Turning Point.</h2>
          </div>
          <div className="gala-impact-grid-v2 reveal-stagger">
            {impactRows.map(({ amount, text, Icon }) => (
              <div className="gala-impact-card reveal reveal-from-bottom" key={amount}>
                <span className="gala-impact-icon"><Icon /></span>
                <span className="gala-impact-amount">{amount}</span>
                <span className="gala-impact-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section gala-final-cta gala-section-divider">
        <div className="final-cta-inner section-reveal">
          <div className="final-cta-text">
            <h2>Come Be Part of Something That Matters</h2>
            <p>
              This May 8th, you have the chance to put on something fabulous, hear incredible music, and do something genuinely good for the people in your community. The night will be memorable. The impact will last far longer.
            </p>
          </div>
          <div className="final-cta-buttons">
            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="final-cta-btn primary">Reserve Your Seat Tonight</a>
            <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="final-cta-btn secondary">Become a Sponsor</a>
          </div>
        </div>
      </section>

      {/* Donate fallback */}
      <section className="gala-donate-section-v2 gala-section-divider">
        <div className="gala-donate-card section-reveal">
          <span className="gala-donate-icon" aria-hidden="true"><IconHeartPulse /></span>
          <h2>Unable to Attend? Your Heart Can Still Show Up.</h2>
          <p>
            Your support goes far beyond a single night. Whether it&rsquo;s $10 or $100, every contribution helps Open Arms Initiative continue creating real change in our community.
          </p>
          <Link className="gala-donate-btn" href={DONATE_URL}>
            Donate Now
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="gala-faq-section-v2 gala-section-divider">
        <div className="gala-impact-aurora" aria-hidden="true">
          <span className="gala-aurora-blob gala-aurora-blob-1"></span>
          <span className="gala-aurora-blob gala-aurora-blob-2"></span>
        </div>
        <div className="gala-impact-grid-lines" aria-hidden="true"></div>
        <div className="gala-faq-inner">
          <div className="gala-faq-head section-reveal section-reveal-left">
            <span className="care-badge gala-urgency-badge">FAQ</span>
            <h2 className="gala-faq-title">Quick FAQs</h2>
            <p className="gala-faq-subtitle">Everything you need to know before the big night.</p>
            <a className="gala-faq-head-cta" href={TICKET_URL} target="_blank" rel="noopener noreferrer">
              Get Your Tickets
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
          <div className="section-reveal section-reveal-right">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <ScrollReveal />
    </main>
  );
}
