'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const GROWTH_VIDEO_ID = 'TAKbCOIbNF0';

const homepageServices = [
  {
    slug: 'child-adolescent-counseling',
    title: 'Counseling Services Oklahoma City',
    summary: 'Expert trauma-informed individual, family, and child counseling services tailored for Oklahoma City communities seeking compassionate clinical care.',
    image: '/images/5th.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12M6 21h12M7 3c0 4 5 5.5 5 9s-5 5-5 9M17 3c0 4-5 5.5-5 9s5 5 5 9"/></svg>
    ),
  },
  {
    slug: 'school-staff-educator-training',
    title: 'Community Training Oklahoma City',
    summary: 'Workshops, speaking engagements, and clinical training for schools, churches, and organizations building trauma-aware communities across OKC.',
    image: '/images/6th.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="2.6"/><circle cx="5" cy="9" r="2.1"/><circle cx="19" cy="9" r="2.1"/><path d="M12 12c-3 0-5.2 1.8-5.2 4.6V19h10.4v-2.4C17.2 13.8 15 12 12 12Z"/><path d="M5 12.4c-2 .3-3.2 1.7-3.2 3.7V18h3.6M19 12.4c2 .3 3.2 1.7 3.2 3.7V18h-3.6"/></svg>
    ),
  },
  {
    slug: 'pro-bono-therapy',
    title: 'Non-Profit Counseling Services Oklahoma City',
    summary: 'Accessible pro-bono therapy and community outreach programs ensuring mental health support reaches every family regardless of income.',
    image: '/images/7th.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>
    ),
  },
  {
    slug: 'foster-care-adoption-counseling',
    title: 'Foster Care in Oklahoma City',
    summary: 'Trauma-informed foster parent training, 24/7 support, and adoption counseling to nurture stable, loving homes for Oklahoma youth.',
    image: '/images/8th.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg>
    ),
  },
];

const faqs = [
  ['How long does the counseling process usually last?', 'Your counseling journey is unique. Some people benefit from 6–8 sessions, while others continue working on evolving goals. We will find the right pace together after your first session.'],
  ['How frequently should I attend counseling sessions?', 'We recommend weekly sessions at the beginning to build a strong foundation. As you make progress, we can adjust the frequency to fit your needs.'],
  ['What is the typical length of a counseling session?', 'Counseling sessions are typically 50–55 minutes. We also offer 30-minute and 90-minute sessions.'],
  ['Can I switch counselors if I don’t feel like it’s the right fit?', 'Absolutely. Your comfort and progress are our priorities, and we will support a smooth transition if another counselor is a better fit.'],
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const revealRootRef = useRef(null);
  const ytPlayerRef = useRef(null);
  const [heroVideoPlaying, setHeroVideoPlaying] = useState(true);

  useEffect(() => {
    let cancelled = false;

    function createPlayer() {
      if (cancelled || ytPlayerRef.current) return;
      ytPlayerRef.current = new window.YT.Player('hero-yt-player', {
        videoId: 'm_YXms2Eu6o',
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
        },
        events: {
          onReady: (e) => e.target.playVideo(),
          onStateChange: (e) => {
            if (e.data === window.YT.PlayerState.ENDED) {
              e.target.seekTo(0);
              e.target.playVideo();
            }
          },
        },
      });
    }

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const existingCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (existingCallback) existingCallback();
        createPlayer();
      };
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
      }
    }

    return () => {
      cancelled = true;
    };
  }, []);

  const toggleHeroVideo = () => {
    const player = ytPlayerRef.current;
    if (!player) return;
    if (heroVideoPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setHeroVideoPlaying(!heroVideoPlaying);
  };

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
        <div className="hero-video" aria-hidden="true">
          <div className="hero-video-cover">
            <div id="hero-yt-player" />
          </div>
        </div>
        <button
          type="button"
          className="hero-video-toggle"
          onClick={toggleHeroVideo}
          aria-label={heroVideoPlaying ? 'Pause background video' : 'Play background video'}
        >
          {heroVideoPlaying ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7Z"/></svg>
          )}
        </button>
        <div className="reference-hero-overlay"></div>
        <div className="reference-hero-copy reveal reveal-from-bottom">
          <p className="hero-overline">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#3F6B2B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12c4-6 12-6 16 0"/><path d="M4 12c4 6 12 6 16 0"/></svg>
            Empowering Lives With
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#3F6B2B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12c4-6 12-6 16 0"/><path d="M4 12c4 6 12 6 16 0"/></svg>
          </p>
          <h1 className="hero-accent-heading">Compassionate Care<br />In Oklahoma</h1>
          <div className="hero-divider" aria-hidden="true">
            <span className="hero-divider-line"></span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#8DC540" strokeWidth="1.6"><path d="M12 21c-4-1-8-5-8-10a8 8 0 0 1 8-8c5 0 9 4 9 9 0 5-4.5 9-9 9Z"/><path d="M12 21c0-6 2-13 8-16"/></svg>
            <span className="hero-divider-line"></span>
          </div>
          <p className="reference-hero-text">Providing counseling, training, and support to heal families and empower communities.</p>
          <a className="reference-hero-button" href="#services">
            Explore Our Services
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <div className="hero-mobile-cta">
            <Link href="/contact" className="hero-mobile-cta-btn">Book a Counseling</Link>
            <Link href="/contact" className="hero-mobile-cta-btn donate">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20s-7-4.4-9.3-9C1.4 8 2.7 5 5.8 5c1.8 0 3.3 1 4.2 2.3C11 6 12.5 5 14.3 5c3.1 0 4.4 3 3.1 6-2.3 4.6-9.4 9-9.4 9Z"/></svg>
              Donate
            </Link>
          </div>
        </div>
        <div className="hero-feature-band reveal reveal-from-bottom">
          <svg className="hero-feature-wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,55 C280,10 480,90 760,50 C1040,10 1220,70 1440,30 L1440,90 L0,90 Z" />
          </svg>
          <div className="hero-feature-row">
            <div className="hero-feature-item">
              <span className="hero-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12M6 21h12M7 3c0 4 5 5.5 5 9s-5 5-5 9M17 3c0 4-5 5.5-5 9s5 5 5 9"/></svg>
              </span>
              <div>
                <h3>Counseling</h3>
                <p>Compassionate guidance for individuals and families through life's challenges.</p>
              </div>
            </div>
            <div className="hero-feature-item">
              <span className="hero-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="2.6"/><circle cx="5" cy="9" r="2.1"/><circle cx="19" cy="9" r="2.1"/><path d="M12 12c-3 0-5.2 1.8-5.2 4.6V19h10.4v-2.4C17.2 13.8 15 12 12 12Z"/><path d="M5 12.4c-2 .3-3.2 1.7-3.2 3.7V18h3.6M19 12.4c2 .3 3.2 1.7 3.2 3.7V18h-3.6"/></svg>
              </span>
              <div>
                <h3>Training</h3>
                <p>Equipping individuals and organizations with skills to make a difference.</p>
              </div>
            </div>
            <div className="hero-feature-item">
              <span className="hero-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>
              </span>
              <div>
                <h3>Support</h3>
                <p>Ongoing support to strengthen families and empower communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Services Section */}
      <section id="services" className="services-section">
        <div className="services-inner">
          <div className="section-intro reveal reveal-from-bottom">
            <span className="services-kicker">Our Services</span>
            <h2>Explore Our Services</h2>
            <p>We offer a range of services to address trauma, promote mental health, and empower families and communities across Oklahoma City.</p>
          </div>
          <div className="service-grid reveal-stagger">
            {homepageServices.map((service, i) => (
              <article
                className={`service-card reveal ${i % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right'}`}
                key={service.slug}
              >
                <div className="service-card-media">
                  <img src={service.image} alt={service.title} />
                  <span className="service-card-icon">{service.icon}</span>
                </div>
                <div>
                  <h3>
                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                  </h3>
                  <p>{service.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plant. Water. Grow. Section */}
      <section className="plant-water-grow-section">
        <div className="plant-water-grow-inner">
          <div className="growth-copy">
            <div className="growth-badge reveal reveal-from-top">Growth Starts Here</div>
            <h2 className="plant-water-grow-title reveal reveal-from-bottom">
              Plant. Water. <span className="growth-highlight">Grow.</span>
            </h2>
            <p className="plant-water-grow-subtitle reveal reveal-from-bottom">
              At Open Arms Initiative, we plant seeds of hope, water them with truth and love, and trust God to grow them in His time.
            </p>
          </div>
          <div className="growth-media reveal reveal-scale-in">
            <iframe
              className="growth-video-plain-iframe"
              src={`https://www.youtube.com/embed/${GROWTH_VIDEO_ID}?autoplay=1&mute=1&rel=0&modestbranding=1`}
              title="Open Arms Initiative - Transforming Lives Through Mental Health & Foster Care Support"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section id="about" className="commitment-section-outer">
        <div className="commitment-container">
          <div className="commitment-image-wrap reveal reveal-from-left">
            <img
              src="/images/Community-Outreach-Programs-OKC.jpg"
              alt="Hope, Healing, New Beginnings - Community Outreach Programs OKC"
            />
            <div className="commitment-stat-badge">
              <span className="commitment-stat-ring" aria-hidden="true"></span>
              <span className="commitment-stat-number">15+</span>
              <span className="commitment-stat-label">Years of<br />Experience</span>
              <svg className="commitment-stat-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>
            </div>
          </div>
          <div className="commitment-card reveal reveal-from-right">
            <svg className="commitment-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>
            <div className="commitment-badge-wrap">
              <div className="commitment-badge">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21c0-8 4-14 14-16-1 8-6 13-14 16Z"/></svg>
                Our Commitment
              </div>
              <span className="commitment-badge-pointer" aria-hidden="true"></span>
            </div>
            <h2 className="commitment-title">
              Supporting Families,<br />Healing Children
              <svg className="commitment-title-underline" viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8c30-10 60-10 90 0s90 10 126-2" fill="none" stroke="#8DC540" strokeWidth="3" strokeLinecap="round"/></svg>
            </h2>
            <p className="commitment-text">
              At <strong>Open Arms Initiative</strong>, we provide trauma-focused counseling services, foster parent training, and community outreach programs designed to uplift families and children. Whether you need individual therapy, parenting workshops, or support as a foster parent, we are here to help at every stage of your journey. Our <strong>Child Welfare Services in Oklahoma</strong> are the best in the state.
            </p>
            <div className="commitment-features">
              <div className="commitment-feature">
                <span className="commitment-feature-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="2.6"/><circle cx="5" cy="9" r="2.1"/><circle cx="19" cy="9" r="2.1"/><path d="M12 12c-3 0-5.2 1.8-5.2 4.6V19h10.4v-2.4C17.2 13.8 15 12 12 12Z"/><path d="M5 12.4c-2 .3-3.2 1.7-3.2 3.7V18h3.6M19 12.4c2 .3 3.2 1.7 3.2 3.7V18h-3.6"/></svg>
                </span>
                <span>Stronger Families</span>
              </div>
              <div className="commitment-feature">
                <span className="commitment-feature-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.3s-7-4.4-9.5-9C1 8 2.8 4.5 6.2 4.5c2 0 3.4 1.1 4 2.3.6-1.2 2-2.3 4-2.3 3.4 0 5.2 3.5 3.7 6.8-2.5 4.6-9.5 9-9.5 9Z"/></svg>
                </span>
                <span>Healthier Children</span>
              </div>
              <div className="commitment-feature">
                <span className="commitment-feature-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5.5c2.5-1 5.3-1 8 0v13c-2.7-1-5.5-1-8 0Z"/><path d="M12 5.5c2.7-1 5.5-1 8 0v13c-2.5-1-5.3-1-8 0Z"/></svg>
                </span>
                <span>Brighter Tomorrows</span>
              </div>
            </div>
            <Link className="commitment-button" href="/about-us">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21c0-8 4-14 14-16-1 8-6 13-14 16Z"/></svg>
              Learn More
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6"/></svg>
            </Link>
            <div className="commitment-card-blob" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Open Arms Initiative Section */}
      <section className="why-choose-section">
        <div className="why-choose-blob why-choose-blob-tr" aria-hidden="true"></div>
        <div className="why-choose-container">
          <div className="why-choose-header">
            <div className="reveal reveal-from-left">
              <div className="why-choose-badge">Commitment</div>
              <h2 className="why-choose-title">
                Why Choose Open Arms<br />
                Initiative?
              </h2>
            </div>
            <div className="reveal reveal-from-right">
              <p className="why-choose-subtitle">
                We understand the challenges foster families face and the importance of trauma-informed care and child welfare services. That’s why Open Arms Initiative is dedicated to providing ongoing support.
              </p>
            </div>
          </div>
          <div className="reason-grid reveal-stagger">
            <article className="reason-card reveal reveal-from-bottom">
              <div className="reason-card-inner">
                <div className="icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>
                </div>
                <h3>24/7 Support</h3>
                <p>We’re here whenever you need us, providing round-the-clock support for foster parents.</p>
              </div>
              <div className="reason-card-photo">
                <img src="/n1.jpg" alt="24/7 support for foster families" />
              </div>
            </article>
            <article className="reason-card reveal reveal-from-bottom">
              <div className="reason-card-inner">
                <div className="icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.1-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 14.9 12 21 12 21Z"/><circle cx="12" cy="9.8" r="2.4"/></svg>
                </div>
                <h3>Expert Trauma Counseling</h3>
                <p>Our licensed counselors are experts in trauma-informed care, helping families heal and build stronger bonds.</p>
              </div>
              <div className="reason-card-photo">
                <img src="/n2.jpg" alt="Expert trauma-informed counseling session" />
              </div>
            </article>
            <article className="reason-card reveal reveal-from-bottom">
              <div className="reason-card-inner">
                <div className="icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="8" r="2.8"/><path d="M2.5 19c0-3 2.7-5.2 6-5.2s6 2.2 6 5.2"/><circle cx="17" cy="8.5" r="2.2"/><path d="M15.8 13.9c2.6.3 4.7 2.3 4.7 5"/></svg>
                </div>
                <h3>Community-Focused</h3>
                <p>Our programs reach beyond individual families, providing training and support to the broader community.</p>
              </div>
              <div className="reason-card-photo">
                <img src="/n3.jpg" alt="Community-focused outreach and training" />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section-outer">
        <div className="mission-container">
          <div className="mission-card">
            <div className="mission-grid">
              <div className="mission-text-block reveal reveal-from-left">
                <div className="mission-badge">Our Mission</div>
                <h2 className="mission-title">
                  Transforming Families,<br />Empowering Communities
                </h2>
                <svg className="mission-title-underline" viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8c30-10 60-10 90 0s90 10 126-2" fill="none" stroke="#8DC540" strokeWidth="3" strokeLinecap="round"/></svg>
                <p>
                  At <strong>Open Arms Initiative</strong>, we believe every child deserves the opportunity to thrive in a loving home, and every family deserves access to the tools they need to succeed.
                </p>
                <p>
                  Through our trauma-focused counseling services, Community Outreach OKC programs, and Non-Profit Counseling in Oklahoma City and <strong>Child Welfare Services in Oklahoma</strong> we aim to provide a safe and supportive environment for children, families, and foster parents.
                </p>
                <p>
                  Backed by licensed counselors, social workers, and family advocates, our mission is to help children overcome trauma and anxiety while empowering families to build stronger, healthier relationships.
                </p>
                <Link className="mission-button" href="/about-us">
                  Learn More
                </Link>
              </div>
              <div className="mission-image-wrap reveal reveal-from-right">
                <img
                  src="/images/Educator-Mental-Health-Training-Oklahoma-City.jpg"
                  alt="Supportive Paths to Wellness - Educator Mental Health Training Oklahoma City"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Zoom CTA Section */}
      <section className="scroll-zoom-section">
        <div className="scroll-zoom-inner reveal reveal-from-left">
          <img
            src="/10th.jpg"
            alt="Get started with Open Arms Initiative today"
            className="scroll-zoom-img"
          />
          <div className="scroll-zoom-overlay" />
          <div className="scroll-zoom-copy">
            <h2 className="scroll-zoom-title">
              Get started with Open Arms today.
            </h2>
            <p className="scroll-zoom-subtitle">
              Your journey to stronger, supported families starts here with Open Arms Initiative.
            </p>
            <Link href="/contact" className="scroll-zoom-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Commitment Section - "We want you to get the care you deserve." */}
      <section className="care-section">
        <div className="care-blob care-blob-tr" aria-hidden="true"></div>
        <div className="hero-dot-grid care-dot-grid" aria-hidden="true"></div>
        <svg className="care-wave" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
          <path className="care-wave-line" d="M0,40 C240,90 480,0 720,30 C960,60 1200,100 1440,50" fill="none" />
          <path className="care-wave-fill" d="M0,40 C240,90 480,0 720,30 C960,60 1200,100 1440,50 L1440,100 L0,100 Z" />
        </svg>
        <div className="care-card">
        <div className="care-container">
          {/* Left: Text */}
          <div className="care-text reveal reveal-from-left">
            <span className="care-badge">Commitment</span>
            <h2 className="care-heading">
              We want you to get<br />the care you deserve.
              <svg className="care-heading-underline" viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8c30-10 60-10 90 0s90 10 126-2" fill="none" stroke="#8DC540" strokeWidth="3" strokeLinecap="round"/></svg>
            </h2>
            <p className="care-description">
              Helping you access the tools, guidance, and care to build a brighter future.
            </p>
            <ul className="care-list reveal-stagger">
              <li className="reveal reveal-from-bottom">
                <span className="care-list-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>
                </span>
                <span>Personalized Support for Your Journey</span>
              </li>
              <li className="reveal reveal-from-bottom">
                <span className="care-list-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5.5c2.5-1 5.3-1 8 0v13c-2.7-1-5.5-1-8 0Z"/><path d="M12 5.5c2.7-1 5.5-1 8 0v13c-2.5-1-5.3-1-8 0Z"/></svg>
                </span>
                <span>Access to Expert Guidance and Resources</span>
              </li>
              <li className="reveal reveal-from-bottom">
                <span className="care-list-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5 19 6v6c0 4.5-3 7-7 8.5-4-1.5-7-4-7-8.5V6Z"/></svg>
                </span>
                <span>Building Confidence and Resilience</span>
              </li>
              <li className="reveal reveal-from-bottom">
                <span className="care-list-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21v-9"/><path d="M12 12C7 12 5 9 5 5c5 0 7 2.5 7 7Z"/><path d="M12 12c0-5 2-7 7-7 0 4-2 7-7 7Z"/></svg>
                </span>
                <span>Empowering You to Create a Brighter Future</span>
              </li>
            </ul>
          </div>
          {/* Right: Image grid */}
          <div className="care-images reveal-stagger">
            <div className="care-img-left reveal reveal-from-right">
              <img src="/a.jpg" alt="Caring support for families" />
            </div>
            <div className="care-img-right">
              <div className="care-img-top reveal reveal-from-top">
                <img src="/b.jpg" alt="Couple in counseling session" />
              </div>
              <div className="care-years-card reveal reveal-scale-in">
                <span className="care-years-number">15+</span>
                <span className="care-years-label">Years of Experience</span>
                <svg className="care-years-underline" viewBox="0 0 140 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 7c18-8 36-8 54 0s54 8 82-1" fill="none" stroke="#8DC540" strokeWidth="2.5" strokeLinecap="round"/></svg>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Our Services Mosaic Grid Section */}
      <section className="services-mosaic-section">
        <div className="services-mosaic-container">
          <div className="services-mosaic-header reveal reveal-from-bottom">
            <span className="care-badge">Our Services</span>
            <h2 className="services-mosaic-title">
              We want you to get the<br />care you deserve.
            </h2>
          </div>
          <div className="services-mosaic-grid reveal-stagger">
            <div className="mosaic-photo reveal reveal-from-top"><img src="/c.jpg" alt="Individual Counseling" /></div>
            <div className="mosaic-card dark reveal reveal-from-bottom">
              <h3>Individual Counseling</h3>
              <p>Personalized care to help you navigate life's challenges and achieve emotional well-being.</p>
              <Link href="/services/individual-counseling" className="mosaic-link">Learn more &rsaquo;</Link>
            </div>
            <div className="mosaic-photo reveal reveal-from-top"><img src="/d.jpg" alt="Child and Adolescent Counseling" /></div>
            <div className="mosaic-card light reveal reveal-from-bottom">
              <h3>Child &amp; Adolescent Counseling</h3>
              <p>Support tailored for young minds to thrive emotionally, socially, and academically.</p>
              <Link href="/services/child-adolescent-counseling" className="mosaic-link">Learn more &rsaquo;</Link>
            </div>
            <div className="mosaic-card light reveal reveal-from-bottom">
              <h3>Adult Counseling</h3>
              <p>Compassionate guidance for managing stress, relationships, and life transitions.</p>
              <Link href="/services/adult-counseling" className="mosaic-link">Learn more &rsaquo;</Link>
            </div>
            <div className="mosaic-photo reveal reveal-from-top"><img src="/e.jpg" alt="Adult Counseling" /></div>
            <div className="mosaic-card dark reveal reveal-from-bottom">
              <h3>Foster Care &amp; Adoption Counseling</h3>
              <p>Specialized support for families navigating the foster and adoption journey.</p>
              <Link href="/services/foster-care-adoption-counseling" className="mosaic-link">Learn more &rsaquo;</Link>
            </div>
            <div className="mosaic-photo reveal reveal-from-top"><img src="/f.jpg" alt="Foster Care Counseling" /></div>
            <div className="mosaic-photo reveal reveal-from-bottom"><img src="/g.jpg" alt="Family Counseling" /></div>
            <div className="mosaic-card light reveal reveal-from-top">
              <h3>Family Counseling</h3>
              <p>Strengthening family bonds through open communication and understanding.</p>
              <Link href="/services/family-counseling" className="mosaic-link">Learn more &rsaquo;</Link>
            </div>
            <div className="mosaic-photo reveal reveal-from-bottom"><img src="/h.jpg" alt="Marriage and Couples Therapy" /></div>
            <div className="mosaic-card dark reveal reveal-from-top">
              <h3>Marriage &amp; Couples Therapy</h3>
              <p>Helping couples build stronger, healthier relationships through expert guidance.</p>
              <Link href="/services/marriage-couples-therapy" className="mosaic-link">Learn more &rsaquo;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Help Center / FAQ Section */}
      <section id="faq" className="faq-new-section">
        <div className="faq-diagonal-lines" aria-hidden="true"></div>
        <div className="faq-paint-stroke" aria-hidden="true"></div>
        <div className="hero-dot-grid faq-dot-grid" aria-hidden="true"></div>
        <div className="faq-new-container">
          <div className="faq-new-left reveal reveal-from-left">
            <span className="care-badge faq-badge">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a7 7 0 0 1-7 7H7l-4 3 1-4.5A7 7 0 1 1 21 12Z"/><path d="M12 8v.01M12 11.5c0-.9.6-1.3 1.1-1.7.5-.4.9-.8.9-1.5A2 2 0 0 0 12 6.3a2 2 0 0 0-2 1.7"/></svg>
              Help center
            </span>
            <h2 className="faq-new-title">
              Got a question?<br /><span className="faq-title-accent">Get your answer</span>
              <svg className="faq-title-underline" viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8c30-10 60-10 90 0s90 10 126-2" fill="none" stroke="#8DC540" strokeWidth="3" strokeLinecap="round"/></svg>
            </h2>
            <p className="faq-new-desc">
              Quick answers to questions you may have. Can't find what you're looking for? Get in touch with us.
            </p>
          </div>
          <div className="faq-new-panel">
            <div className="faq-new-right reveal-stagger">
              {faqs.map(([question, answer], index) => (
                <article key={question} className={`faq-new-item reveal reveal-from-right`}>
                  <button
                    className={`faq-new-btn${openFaq === index ? ' open' : ''}`}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    <span className="faq-new-btn-label">
                      <span className="faq-q-icon">?</span>
                      <span>{question}</span>
                    </span>
                    <span className="faq-chevron">{openFaq === index ? '▲' : '▼'}</span>
                  </button>
                  {openFaq === index && (
                    <div className="faq-new-answer"><p>{answer}</p></div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect / Contact Section */}
      <section id="contact" className="connect-section">
        <div className="connect-container reveal reveal-from-bottom">
          <div className="connect-left">
            <span className="connect-badge">Connect</span>
            <h2 className="connect-title">Need more help?</h2>
            <p className="connect-desc">
              Need help with a project, have a question about our work? We're here.
            </p>
            <form className="connect-form">
              <div className="connect-row">
                <label>
                  <span>First Name</span>
                  <input type="text" name="firstName" placeholder="First Name" />
                </label>
                <label>
                  <span>Last Name</span>
                  <input type="text" name="lastName" placeholder="Last Name" />
                </label>
              </div>
              <div className="connect-row">
                <label>
                  <span>Phone</span>
                  <input type="tel" name="phone" placeholder="Phone" />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="Email" required />
                </label>
              </div>
              <div className="connect-row">
                <label>
                  <span>Date</span>
                  <input type="text" name="date" placeholder="Date" required />
                </label>
                <label>
                  <span>Time</span>
                  <input type="text" name="time" placeholder="Time" />
                </label>
              </div>
              <label className="connect-full">
                <span>Message</span>
                <textarea name="message" rows="4" placeholder="Message" />
              </label>
              <button type="submit" className="connect-submit">Book an Appointment</button>
            </form>
          </div>
          <div className="connect-right">
            <img src="/i.webp" alt="Take the first step towards wellness with Open Arms Initiative counseling" className="connect-img" />
            <div className="connect-img-overlay">
              <p>Take the First Step towards Wellness.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
