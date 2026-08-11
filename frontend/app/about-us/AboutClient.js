'use client';

import { useState } from 'react';
import Link from 'next/link';

const ABOUT_VIDEO_ID = 'TAKbCOIbNF0';

const teamMembers = [
  { name: 'Jamie James - LPC', title: 'President & Founder', photo: '/Jamie James - LPC.jpg' },
  { name: "D'Fawn Downs - LPC", title: 'Corporate Compliance Officer & Clinical Director', photo: "/D'Fawn Downs - LPC.jpg" },
  { name: 'Brandon Martin', title: 'CFO', photo: '/Brandon Martin.jpg' },
  { name: 'Stephanie Caldwell', title: 'Parent Relations Director', photo: '/Stephanie Caldwell.jpg' },
  { name: 'Amber Price', title: 'Director of foster care', photo: '/Amber Price.jpg' },
  { name: 'Chloe Burke', title: 'Lead Admin', photo: '/Chloe Burke.jpg' },
  { name: 'Destinee Curry', title: 'Administrative Assistant', photo: '/Destinee Curry.jpg' },
  { name: 'Kamryn Bass', title: 'Administrative Assistant', photo: '/Kamryn-Bass.jpg' },
  { name: 'Stephanie Vaughn', title: 'Billing & Placement Specialist', photo: '/Stephanie Vaughn.jpg' },
  { name: 'Jessena Varghese - LPC', title: 'Clinical Director', photo: '/Jessena Varghese - LPC.jpg' },
  { name: 'Henri Jo Ball - LPC', title: 'Therapist', photo: '/Henri.jpg' },
  { name: 'Emeka Nnaka - LPC', title: 'Therapist', photo: '/Emeka Nnaka - LPC.jpg' },
  { name: 'Brenda Mitchell - LPC', title: 'Therapist', photo: '/Brenda Mitchell - LPC.jpg' },
  { name: 'Karli Burch - LPC', title: 'Therapist', photo: '/Karli Burch - LPC.jpg' },
  { name: 'Lori Baker LMFT-S', title: 'Therapist', photo: '/lori.jpg' },
  { name: 'Breanna White - LPC', title: 'Therapist', photo: '/Breanna White - LPC.jpg' },
  { name: 'Rebekah Thomas LPC-C', title: 'Therapist', photo: '/rebekah.jpg' },
  { name: 'Jamira Alexander', title: 'Therapist Intern', photo: '/Jamira Alexander.jpg' },
  { name: 'Victori Swinford', title: 'Therapist Intern', photo: '/Victori.jpg' },
  { name: 'Mattea Lear', title: 'Therapist Intern', photo: '/Mattea.jpg' },
];

export default function AboutClient() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <main>
      {/* Hero Banner */}
      <section className="about-hero">
        <img src="/12th.jpg" alt="Making a Positive Impact" className="about-hero-bg" />
        <div className="about-hero-overlay"></div>
        <div className="about-hero-copy">
          <h1>Making a Positive Impact</h1>
          <p>
            Open Arms Initiative's Community Outreach &amp; Support Programs connect individuals and families with
            essential resources and support. Through collaboration, we empower and foster a sense of belonging in our
            community.
          </p>
        </div>
      </section>

      {/* Quick Link Buttons */}
      <section className="about-quicklinks">
        <div className="about-quicklinks-inner">
          <a href="#our-story" className="about-quicklink-btn">Our Story</a>
          <a href="#meet-the-staff" className="about-quicklink-btn">Meet the Staff</a>
          <a href="#board-members" className="about-quicklink-btn">Board Members</a>
        </div>
      </section>

      {/* Mission Section */}
      <section id="our-story" className="about-mission-section">
        <div className="about-mission-container">
          <div className="about-mission-media">
            <div className="growth-video-card">
              <div className="growth-video-titlebar">
                <span className="growth-video-avatar">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>
                </span>
                <div className="growth-video-titletext">
                  <p className="growth-video-title">🌞 Open Arms Initiative - Transforming Lives Through Mental Health &amp; Foster Care Support 🌞</p>
                </div>
                <span className="growth-video-menu" aria-hidden="true">⋮</span>
              </div>
              <div className="growth-video-stage">
                {videoPlaying ? (
                  <iframe
                    className="growth-video-iframe"
                    src={`https://www.youtube.com/embed/${ABOUT_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                    title="Open Arms Initiative - Transforming Lives Through Mental Health & Foster Care Support"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="growth-video-poster"
                    onClick={() => setVideoPlaying(true)}
                    aria-label="Play video: Open Arms Initiative - Transforming Lives Through Mental Health & Foster Care Support"
                    style={{ backgroundImage: `url(https://img.youtube.com/vi/${ABOUT_VIDEO_ID}/maxresdefault.jpg)` }}
                  >
                    <span className="growth-video-playbtn" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="26" height="26" fill="#ffffff"><path d="M8 5v14l11-7Z"/></svg>
                    </span>
                    <span className="growth-video-watch">
                      Watch on
                      <svg viewBox="0 0 28 20" width="22" height="16" aria-hidden="true"><rect width="28" height="20" rx="5" fill="#FF0000"/><path d="M11 6.2 19 10l-8 3.8Z" fill="#ffffff"/></svg>
                      YouTube
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="about-mission-copy">
            <span className="about-mission-badge">Mission</span>
            <h2>Our Mission and Unique Approach</h2>
            <p>
              At Open Arms Initiative, we believe in providing compassionate, trauma-informed care to individuals and
              families in need. Our focus goes beyond conventional therapy, addressing core challenges related to
              mental health, family dynamics, and community well-being. Through our tailored therapeutic programs, we
              help people gain the skills and insights they need to overcome adversity and thrive. Our focus goes
              beyond conventional therapy, addressing the core challenges that children face due to limited guidance
              and knowledge about their situations. Through our tailored therapeutic programs, we help children gain
              the skills and insights they need to overcome their circumstances and thrive.
            </p>
            <ul className="about-mission-checklist">
              <li>
                <span className="about-check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L19 7"/></svg>
                </span>
                Tailored Therapeutic Support
              </li>
              <li>
                <span className="about-check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L19 7"/></svg>
                </span>
                Outpatient-Level Care
              </li>
              <li>
                <span className="about-check-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L19 7"/></svg>
                </span>
                Comprehensive Foster Family Resources
              </li>
            </ul>
            <Link href="/contact" className="about-getstarted-btn">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Support Services */}
      <section className="about-support-section">
        <div className="about-support-container">
          <div className="about-support-copy">
            <span className="about-mission-badge">Support</span>
            <h2>Comprehensive Support Services</h2>
            <div className="about-support-list">
              <div className="about-support-item">
                <span className="about-support-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </span>
                <div>
                  <h3>High-Quality Care</h3>
                  <p>Our licensed counselors and experienced advocates provide compassionate, professional care, ensuring that every child and family receives the support they need.</p>
                </div>
              </div>
              <div className="about-support-item">
                <span className="about-support-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </span>
                <div>
                  <h3>Empowerment through Understanding</h3>
                  <p>We help children not only cope with their situations but gain the knowledge and tools to overcome them, fostering resilience and confidence.</p>
                </div>
              </div>
              <div className="about-support-item">
                <span className="about-support-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </span>
                <div>
                  <h3>Guidance for Foster Families</h3>
                  <p>Our team offers resources and support for foster families, helping them navigate the emotional needs of each child in their care.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-support-media">
            <div className="about-support-blob" aria-hidden="true"></div>
            <img src="/13th.jpg" alt="Comprehensive Support Services" className="about-support-img" />
          </div>
        </div>
      </section>

      {/* Our Team Intro */}
      <section id="meet-the-staff" className="about-team-intro-section">
        <div className="about-team-intro-container">
          <span className="about-mission-badge">Our Team</span>
          <h2>Your Support Network for a Brighter Future</h2>
          <p>
            At Open Arms Initiative, our team is committed to ensuring that every child and family receives the compassionate,
            professional care they need to overcome challenges and embrace a hopeful future. Your journey matters to us, and
            we're ready to help you take the next step with confidence and support.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="about-team-grid-section">
        <div className="about-team-grid-header">
          <h2>Open Arms Initiative</h2>
          <p className="about-team-grid-kicker">Team Members</p>
        </div>
        <div className="about-team-grid">
          {teamMembers.map((member, i) => (
            <div className="about-team-card" key={`${member.name}-${i}`}>
              <img src={member.photo} alt={member.name} className="about-team-photo" />
              <div className="about-team-caption">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Board Members */}
      <section id="board-members" className="about-board-section">
        <div className="about-board-scroll">
          <img src="/Openarms-Board-members (1).jpg" alt="Open Arms Initiative Board Members" className="about-board-img" />
        </div>
      </section>

      {/* Request A Free Consultation */}
      <section className="about-consult-section">
        <div className="about-consult-copy">
          <p className="about-consult-kicker">Looking for Compassionate Support?</p>
          <h2 className="about-consult-title">
            Request A Free Consultation To See How We Can Help.
          </h2>
          <Link href="/contact" className="about-consult-btn">Contact Us</Link>
        </div>
        <div className="about-consult-media">
          <img src="/new1.jpg" alt="Compassionate support at Open Arms Initiative" className="about-consult-img" />
        </div>
      </section>
    </main>
  );
}
