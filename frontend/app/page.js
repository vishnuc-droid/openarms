'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const GROWTH_VIDEO_ID = 'TAKbCOIbNF0';

const howWeCanHelp = [
  {
    slug: 'adult-counseling',
    title: 'Individual Counseling',
    summary: 'When anxiety, low mood, stress, or just feeling stuck starts affecting daily life, one-on-one counseling gives you space to work through it with someone trained to help.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.2"/><path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6"/></svg>
    ),
  },
  {
    slug: 'child-adolescent-counseling',
    href: '/child-counseling-services-oklahoma-city/',
    title: 'Child & Adolescent Counseling',
    summary: "Kids and teens don't always have the words for what they're feeling. Our counselors help children process big emotions, behavior changes, and hard experiences in age-appropriate ways.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="2.6"/><circle cx="5" cy="9" r="2.1"/><circle cx="19" cy="9" r="2.1"/><path d="M12 12c-3 0-5.2 1.8-5.2 4.6V19h10.4v-2.4C17.2 13.8 15 12 12 12Z"/><path d="M5 12.4c-2 .3-3.2 1.7-3.2 3.7V18h3.6M19 12.4c2 .3 3.2 1.7 3.2 3.7V18h-3.6"/></svg>
    ),
  },
  {
    slug: 'family-counseling',
    href: '/family-therapy-oklahoma-city/',
    title: 'Family Counseling',
    summary: "When communication breaks down or a family is going through a hard transition, family counseling creates a space to be heard and to rebuild how you talk to each other.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg>
    ),
  },
  {
    slug: 'marriage-couples-therapy',
    href: '/marriage-counseling-oklahoma-city/',
    title: 'Couples Counseling',
    summary: 'For couples navigating conflict, disconnection, or a major life change together, counseling offers practical tools and an outside perspective.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5.5c2.5-1 5.3-1 8 0v13c-2.7-1-5.5-1-8 0Z"/><path d="M12 5.5c2.7-1 5.5-1 8 0v13c-2.5-1-5.3-1-8 0Z"/></svg>
    ),
  },
  {
    slug: 'trauma-informed-care-training',
    title: 'Trauma-Informed Care',
    summary: 'Whether trauma is recent or from years ago, our counselors are trained to recognize how it shows up and to help clients move through it safely, at their own pace.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>
    ),
  },
  {
    slug: 'grief-loss-counseling',
    href: '/grief-counseling-oklahoma-city/',
    title: 'Grief & Loss Support',
    summary: "Loss doesn't follow a schedule. Our counselors help individuals and families process grief, from the death of a loved one to other significant losses, for as long as it takes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21c-4-1-8-5-8-10a8 8 0 0 1 8-8c5 0 9 4 9 9 0 5-4.5 9-9 9Z"/><path d="M12 21c0-6 2-13 8-16"/></svg>
    ),
  },
  {
    slug: 'depression-anxiety-counseling',
    href: '/depression-anxiety-counseling-oklahoma/',
    title: 'Anxiety & Depression Support',
    summary: "When worry, fear, or overwhelm starts affecting everyday life, or when depression makes it hard to function, our counselors help clients understand what they're experiencing and build practical ways forward.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>
    ),
  },
  {
    slug: 'foster-care-adoption-counseling',
    title: 'Foster Care & Adoption Counseling',
    summary: 'Foster and adoptive families face a unique set of challenges. Our counselors understand the realities of placement, attachment, and transition, and offer support built around them.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.3s-7-4.4-9.5-9C1 8 2.8 4.5 6.2 4.5c2 0 3.4 1.1 4 2.3.6-1.2 2-2.3 4-2.3 3.4 0 5.2 3.5 3.7 6.8-2.5 4.6-9.5 9-9.5 9Z"/></svg>
    ),
  },
];

const whyChooseReasons = [
  {
    title: 'Licensed, trauma-informed counselors',
    text: 'Trained specifically in trauma-informed approaches to care.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5 19 6v6c0 4.5-3 7-7 8.5-4-1.5-7-4-7-8.5V6Z"/></svg>
    ),
  },
  {
    title: 'Local to Oklahoma City',
    text: "Not a national telehealth platform; part of this community.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.1-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 14.9 12 21 12 21Z"/><circle cx="12" cy="9.8" r="2.4"/></svg>
    ),
  },
  {
    title: 'Experience with foster and adoptive families',
    text: 'A perspective many general practices don’t have.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg>
    ),
  },
  {
    title: 'Support beyond the counseling room',
    text: 'Foster parents working with us have access to guidance beyond scheduled sessions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>
    ),
  },
  {
    title: 'Connected to the community',
    text: 'Through training and speaking work with schools, churches, and businesses across Oklahoma.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="8" r="2.8"/><path d="M2.5 19c0-3 2.7-5.2 6-5.2s6 2.2 6 5.2"/><circle cx="17" cy="8.5" r="2.2"/><path d="M15.8 13.9c2.6.3 4.7 2.3 4.7 5"/></svg>
    ),
  },
  {
    title: 'Accessible payment options',
    text: 'Insurance and private pay, with a limited pro bono program for families without other options.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M3 9h18"/><path d="M8 2v4M16 2v4"/></svg>
    ),
  },
];

const teamMembers = [
  { name: 'Jamie James, LPC', title: 'President & Founder', photo: '/Jamie James - LPC.jpg' },
  { name: "D'Fawn Downs, LPC", title: 'Corporate Compliance Officer & Clinical Director', photo: "/D'Fawn Downs - LPC.jpg" },
  { name: 'Brandon Martin', title: 'CFO', photo: '/Brandon Martin.jpg' },
  { name: 'Stephanie Caldwell', title: 'Parent Relations Director', photo: '/Stephanie Caldwell.jpg' },
];

const clientReviews = [
  {
    quote: 'Open Arms has incredible vision with an amazing foundation for what their company represents. An amazing staff and people you want on your side and to just walk with through life!',
    author: '— Kamryn B.',
  },
  {
    quote: 'The owner & staff are caring, supportive, and dedicated to helping both the children and foster families succeed. You can tell they genuinely care and truly make a difference.',
    author: '— Jency M.',
  },
  {
    quote: 'Open Arms Initiative is a wonderful organization. The dedication and support you will receive from their team is unmatched. They are exactly who you want in your corner.',
    author: '— Stephanie V.',
  },
  {
    quote: 'This was a great training for someone who recently moved to a new role which comes with a lot of stress. Recently had the conversation with my supervisor about this topic. This was a full circle moment for me!',
    author: '— Benard K. B.',
  },
  {
    quote: 'I loved the content! The way she dived deeper into the why, of how things happen and how burnout occurs. Giving solutions on how you can prevent, and on what steps you can take if you are already in that season.',
    author: '— Kevin C.',
  },
  {
    quote: 'Jamie was outstanding. Her insight, detail, and wisdom was refreshing! Would 100% love to go deeper and hear more!',
    author: '— JM C.',
  },
];

const REVIEWS_PER_PAGE = 3;

const faqs = [
  ['What types of counseling does Open Arms Initiative offer?', 'We provide individual, child and adolescent, family, and couples counseling, along with specialized support for trauma, anxiety, depression, and grief.'],
  ['Do you work with children and teenagers?', 'Yes, our counselors work with children, teens, and adults.'],
  ['Do you provide family counseling?', 'Yes, we offer family counseling to help improve communication and work through conflict or major transitions together.'],
  ['How long is a counseling session?', 'Standard sessions are 50–55 minutes, with 30-minute and 90-minute options available.'],
  ['How often will I meet with my counselor?', 'Weekly sessions are typically recommended when starting out.'],
  ['Do you accept insurance?', 'Yes. We currently accept Humana, Aetna, Oklahoma Complete Health, and SoonerCare, as well as private pay. Coverage varies by plan, so we’ll verify your specific benefits before your first session.'],
  ['Do you accept SoonerCare?', 'Yes, we accept SoonerCare.'],
  ['Are you currently accepting new clients?', 'Yes, we’re currently accepting new counseling clients.'],
  ['Is pro bono counseling available?', 'We offer a limited number of pro bono counseling slots for families without insurance or with limited income. Because demand is high, availability varies.'],
  ['Where is Open Arms Initiative located?', 'We’re located at 1101 Sovereign Row, Unit A, in Oklahoma City.'],
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [expectVideoPlaying, setExpectVideoPlaying] = useState(false);
  const [reviewsPage, setReviewsPage] = useState(0);
  const totalReviewPages = Math.ceil(clientReviews.length / REVIEWS_PER_PAGE);
  const revealRootRef = useRef(null);

  useEffect(() => {
    const root = revealRootRef.current;
    if (!root) return;
    const revealEls = root.querySelectorAll('.reveal');
    if (revealEls.length === 0) return;
    if (typeof IntersectionObserver === 'undefined') {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={revealRootRef}>
      {/* Hero Section */}
      <section id="home" className="reference-hero">
        <div className="hero-banner-bg" aria-hidden="true"></div>
        <div className="reference-hero-overlay"></div>
        <div className="reference-hero-copy reveal reveal-from-bottom">
          <h1 className="hero-accent-heading">Mental Health Counseling for Children, Adults &amp; Families <span className="hero-accent-heading-highlight">in Oklahoma City</span></h1>
          <div className="hero-divider" aria-hidden="true">
            <span className="hero-divider-line"></span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#29C4E0" strokeWidth="1.6"><path d="M12 21c-4-1-8-5-8-10a8 8 0 0 1 8-8c5 0 9 4 9 9 0 5-4.5 9-9 9Z"/><path d="M12 21c0-6 2-13 8-16"/></svg>
            <span className="hero-divider-line"></span>
          </div>
          <p className="reference-hero-text">Whether you're working through anxiety, trauma, grief, or a hard season as a family, our licensed, trauma-informed counselors are here to help, right here in Oklahoma City.</p>
          <p className="hero-trust-line">Licensed, trauma-informed counselors &middot; Oklahoma City based &middot; Currently accepting new clients</p>
          <div className="hero-cta-row">
            <a className="reference-hero-button" href="/contact">
              Book an Appointment
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a className="reference-hero-button-secondary" href="tel:14059208934">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z"/></svg>
              Call Us
            </a>
          </div>
          <div className="hero-mobile-cta">
            <Link href="/contact" className="hero-mobile-cta-btn">Book an Appointment</Link>
            <a href="tel:14059208934" className="hero-mobile-cta-btn secondary">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z"/></svg>
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Insurance & Payment Trust Strip */}
      <section className="insurance-strip-section">
        <div className="insurance-strip-inner">
          <div className="insurance-strip-intro reveal reveal-from-bottom">
            <span className="insurance-strip-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4.5 5.5v5c0 4.8 3.2 8.9 7.5 10.5 4.3-1.6 7.5-5.7 7.5-10.5v-5L12 3Z"/><path d="m9 12 2 2 4-4"/></svg>
            </span>
            <h2>Insurance &amp; Payment Made Simple</h2>
            <p>We accept most major insurance plans, including SoonerCare, and we're currently accepting new clients.</p>
          </div>
          <div className="insurance-strip-bar reveal reveal-from-bottom">
            <div className="insurance-strip-marquee">
              <div className="insurance-strip-track">
                {[0, 1].map((copy) => (
                  <div className="insurance-strip-payers" key={copy} aria-hidden={copy === 1}>
                    <span className="insurance-strip-logo"><img src="/Logo 4.png" alt="Humana" /></span>
                    <span className="insurance-strip-logo"><img src="/Logo 3.png" alt="Aetna" /></span>
                    <span className="insurance-strip-logo"><img src="/Logo 2.png" alt="Oklahoma Complete Health" /></span>
                    <span className="insurance-strip-logo"><img src="/Logo 5.png" alt="SoonerCare" /></span>
                  </div>
                ))}
              </div>
            </div>
            <span className="insurance-strip-pay">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3.2"/><path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6"/></svg>
              Private Pay
            </span>
          </div>
          <div className="insurance-strip-cta reveal reveal-from-bottom">
            <Link href="/faq" className="insurance-strip-link">
              View Insurance &amp; Payment Options
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section id="services" className="services-section">
        <div className="services-inner">
          <div className="section-intro reveal reveal-from-bottom">
            <span className="services-kicker">How We Can Help</span>
            <h2>Support for Every Chapter of Life</h2>
            <p>Everyone's reason for reaching out is different. Here's where our counselors spend the most time.</p>
          </div>
          <div className="help-grid reveal-stagger">
            {howWeCanHelp.map((service, i) => (
              <article className={`help-card reveal reveal-from-bottom`} key={service.slug}>
                <span className="help-card-icon">{service.icon}</span>
                <h3>
                  <Link href={service.href || `/services/${service.slug}`}>{service.title}</Link>
                </h3>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>
          <div className="services-view-all reveal reveal-from-bottom">
            <Link href="/services" className="services-view-all-link">
              View All Counseling Services
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect at Open Arms Section */}
      <section className="expect-section">
        <div className="expect-inner">
          <div className="expect-media reveal reveal-from-left">
            {expectVideoPlaying ? (
              <iframe
                className="expect-video-iframe"
                src={`https://www.youtube.com/embed/${GROWTH_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Open Arms Initiative - What to Expect at Your First Visit"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="expect-video-poster"
                onClick={() => setExpectVideoPlaying(true)}
                aria-label="Play video: What to Expect at Open Arms"
              >
                <img src={`https://img.youtube.com/vi/${GROWTH_VIDEO_ID}/maxresdefault.jpg`} alt="" />
                <span className="expect-video-play-btn">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5v14l11-7Z"/></svg>
                </span>
              </button>
            )}
          </div>
          <div className="expect-copy reveal reveal-from-right">
            <span className="services-kicker">What to Expect</span>
            <h2 className="expect-title">What to Expect at Open Arms</h2>
            <p className="expect-subtitle">
              Starting counseling can feel like a big step, especially if it's your first time. This is a quick look at who we are and what your first visit is actually like.
            </p>
            <a className="expect-cta" href="/contact">
              Ready to talk to someone? Book an Appointment.
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section id="reviews" className="reviews-section">
        <div className="reviews-inner">
          <div className="reviews-layout">
            <div className="reviews-heading-col reveal reveal-from-left">
              <h2 className="reviews-heading">What Our<br />Clients Say</h2>
              <span className="reviews-heading-divider" aria-hidden="true"></span>
              <div className="reviews-rating">
                <span className="reviews-stars" aria-hidden="true">★★★★★</span>
                <span className="reviews-rating-label">Google Reviews</span>
              </div>
              <a
                href="https://www.google.com/search?q=Open+Arms+Initiative+Oklahoma+City+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="reviews-cta-link"
              >
                Read More Reviews
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
            </div>
            <div className="reviews-cards-col">
              <div className="reviews-grid">
                {clientReviews
                  .slice(reviewsPage * REVIEWS_PER_PAGE, reviewsPage * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE)
                  .map((review) => (
                    <article className="review-card" key={review.author}>
                      <span className="review-quote-mark" aria-hidden="true">&ldquo;</span>
                      <p>{review.quote}</p>
                      <span className="review-author">{review.author}</span>
                    </article>
                  ))}
              </div>
              {totalReviewPages > 1 && (
                <div className="reviews-nav">
                  <button
                    type="button"
                    className="reviews-nav-btn"
                    onClick={() => setReviewsPage((p) => (p - 1 + totalReviewPages) % totalReviewPages)}
                    aria-label="Previous reviews"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6"/></svg>
                  </button>
                  <button
                    type="button"
                    className="reviews-nav-btn"
                    onClick={() => setReviewsPage((p) => (p + 1) % totalReviewPages)}
                    aria-label="Next reviews"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Open Arms */}
      <section className="why-choose-section">
        <div className="why-choose-blob why-choose-blob-tr" aria-hidden="true"></div>
        <div className="why-choose-container">
          <div className="why-choose-header">
            <div className="reveal reveal-from-left">
              <span className="care-badge">Why Open Arms</span>
              <h2 className="why-choose-title">
                Why Families Choose<br />
                Open Arms
              </h2>
            </div>
          </div>
          <div className="why-choose-grid reveal-stagger">
            {whyChooseReasons.map((reason) => (
              <article className="why-choose-card reveal reveal-from-bottom" key={reason.title}>
                <div className="icon-box">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Real Team / Human Connection */}
      <section id="about" className="team-connect-section">
        <div className="team-connect-container">
          <div className="team-connect-copy reveal reveal-from-left">
            <span className="care-badge">Our Team</span>
            <h2 className="team-connect-title">
              Care Starts With People You Can Trust
              <svg className="team-connect-underline" viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8c30-10 60-10 90 0s90 10 126-2" fill="none" stroke="#29C4E0" strokeWidth="3" strokeLinecap="round"/></svg>
            </h2>
            <p>Behind every session is a real person who's chosen this work, not a call center, not an algorithm.</p>
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

      {/* Location + Map */}
      <section id="location" className="location-band-section">
        <div className="location-band-container">
          <div className="location-band-copy reveal reveal-from-left">
            <span className="care-badge">Location</span>
            <h2>Counseling in Oklahoma City</h2>
            <p>We're based right here in Oklahoma City, at 1101 Sovereign Row, Unit A.</p>
            <ul className="location-band-details">
              <li>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.1-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 14.9 12 21 12 21Z"/><circle cx="12" cy="9.8" r="2.4"/></svg>
                1101 Sovereign Row Unit A, Oklahoma City, OK 73108
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z"/></svg>
                (405) 920-8934
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>
                Mon&ndash;Fri, 8:30 AM&ndash;5:00 PM
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="8" r="2.8"/><path d="M2.5 19c0-3 2.7-5.2 6-5.2s6 2.2 6 5.2"/><circle cx="17" cy="8.5" r="2.2"/><path d="M15.8 13.9c2.6.3 4.7 2.3 4.7 5"/></svg>
                Serving families throughout the Oklahoma City area
              </li>
            </ul>
            <div className="location-band-ctas">
              <a
                href="https://www.google.com/maps/place/Open+Arms+Initiative/@35.4553146,-97.5991007,17z/data=!3m1!4b1!4m6!3m5!1s0x87b2115b2214b573:0x9f7f9c5bde6f356d!8m2!3d35.4553146!4d-97.5991007!16s%2Fg%2F11xd49f53w"
                target="_blank"
                rel="noopener noreferrer"
                className="location-band-btn"
              >
                Get Directions
              </a>
              <a href="tel:14059208934" className="location-band-btn secondary">Call Our Office</a>
            </div>
          </div>
          <div className="location-band-map reveal reveal-from-right">
            <iframe
              title="Open Arms Initiative OKC Map"
              src="https://maps.google.com/maps?q=Open+Arms+Initiative,35.4553146,-97.5991007&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Foster Care / Training / Pro Bono teasers */}
      <section className="teaser-row-section">
        <div className="teaser-row-container reveal-stagger">
          <article className="teaser-card reveal reveal-from-bottom">
            <span className="teaser-card-icon foster">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg>
            </span>
            <h3>Foster Care Support</h3>
            <p>Foster care comes with its own set of challenges, and its own kind of support. We offer training, guidance, and placement support to help foster families build stable, loving homes.</p>
            <Link href="/services/foster-care-adoption-counseling" className="teaser-card-link">Learn About Foster Care Support &rsaquo;</Link>
          </article>
          <article className="teaser-card reveal reveal-from-bottom">
            <span className="teaser-card-icon training">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="2.6"/><circle cx="5" cy="9" r="2.1"/><circle cx="19" cy="9" r="2.1"/><path d="M12 12c-3 0-5.2 1.8-5.2 4.6V19h10.4v-2.4C17.2 13.8 15 12 12 12Z"/><path d="M5 12.4c-2 .3-3.2 1.7-3.2 3.7V18h3.6M19 12.4c2 .3 3.2 1.7 3.2 3.7V18h-3.6"/></svg>
            </span>
            <h3>Training &amp; Speaking</h3>
            <p>We also train schools, churches, businesses, and organizations across Oklahoma on trauma-informed care, mental health awareness, and practical leadership skills, led by Jamie James, LPC.</p>
            <Link href="/training-speaking/trauma-mental-health-training" className="teaser-card-link">Explore Training &amp; Speaking &rsaquo;</Link>
          </article>
          <article className="teaser-card reveal reveal-from-bottom">
            <span className="teaser-card-icon probono">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.3s-7-4.4-9.5-9C1 8 2.8 4.5 6.2 4.5c2 0 3.4 1.1 4 2.3.6-1.2 2-2.3 4-2.3 3.4 0 5.2 3.5 3.7 6.8-2.5 4.6-9.5 9-9.5 9Z"/></svg>
            </span>
            <h3>Pro Bono Counseling</h3>
            <p>For families without insurance or with limited income, we offer a limited number of pro bono counseling slots. Because demand is high, availability and response times vary.</p>
            <Link href="/services/pro-bono-therapy" className="teaser-card-link">See If You Qualify &rsaquo;</Link>
          </article>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section-outer">
        <div className="mission-container">
          <div className="mission-card">
            <div className="mission-grid">
              <div className="mission-text-block reveal reveal-from-left">
                <div className="mission-badge">Why We Do This</div>
                <h2 className="mission-title">
                  Transforming Families,<br />Empowering Communities
                </h2>
                <svg className="mission-title-underline" viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8c30-10 60-10 90 0s90 10 126-2" fill="none" stroke="#29C4E0" strokeWidth="3" strokeLinecap="round"/></svg>
                <p>
                  Open Arms Initiative started with a simple belief: every child deserves a stable, loving home, and every family deserves real support to get there.
                </p>
                <p>
                  That belief shows up in our counseling rooms, in our foster care program, and in the schools, churches, and businesses we work with across Oklahoma.
                </p>
                <Link className="mission-button" href="/about-us">
                  About Open Arms Initiative
                </Link>
              </div>
              <div className="mission-image-wrap reveal reveal-from-right">
                <img
                  src="/counseling-conversation.jpg"
                  alt="Open Arms Initiative team supporting families across Oklahoma City"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Center / FAQ Section */}
      <section id="faq" className="faq-new-section">
        <div className="faq-new-container reveal reveal-from-bottom">
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
              <svg className="faq-title-underline" viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8c30-10 60-10 90 0s90 10 126-2" fill="none" stroke="rgb(0, 163, 245)" strokeWidth="3" strokeLinecap="round"/></svg>
            </h2>
            <p className="faq-new-desc">
              Quick answers to questions you may have. Can't find what you're looking for? Get in touch with us.
            </p>
          </div>
          <div className="faq-new-right reveal-stagger">
            {faqs.map(([question, answer], index) => (
              <article key={question} className="faq-new-item reveal reveal-from-right">
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

      {/* Final Conversion Section */}
      <section id="contact" className="final-cta-section">
        <div className="final-cta-inner reveal reveal-from-bottom">
          <h2>You Don't Have to Figure This Out Alone</h2>
          <p>Whether you're just starting to look for support or you've been thinking about it for a while, reaching out is the hardest part, and we're glad to help with what comes next.</p>
          <div className="final-cta-buttons">
            <Link href="/contact" className="final-cta-btn primary">Book an Appointment</Link>
            <Link href="/contact" className="final-cta-btn secondary">Call Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
