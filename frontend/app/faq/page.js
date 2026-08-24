'use client';

import { useState } from 'react';
import Link from 'next/link';

function Arrow() { return <span aria-hidden="true">→</span>; }

const faqCategories = [
  {
    category: 'Counseling & Therapy',
    items: [
      {
        q: 'How long does the counseling process usually last?',
        a: 'Your counseling journey is unique. Some individuals benefit from 6–8 targeted sessions, while others continue working on evolving long-term goals. We establish goals and evaluate progress together during your initial sessions.',
      },
      {
        q: 'How frequently should I attend counseling sessions?',
        a: 'We recommend weekly sessions at the beginning to build momentum and establish therapeutic trust. As progress is made, session frequency can be adjusted to bi-weekly or monthly maintenance.',
      },
      {
        q: 'What is the typical length of a counseling session?',
        a: 'Standard individual counseling sessions are 50–55 minutes. Extended 90-minute family or intake sessions are also available upon request.',
      },
      {
        q: 'Can I switch counselors if it is not the right fit?',
        a: 'Yes, absolutely. Therapeutic rapport is vital for effective care. If you feel another counselor on our team would be a better fit, we support a seamless and supportive transition.',
      },
    ],
  },
  {
    category: 'Foster Care & Non-Profit Services',
    items: [
      {
        q: 'What support is available for foster parents?',
        a: 'We provide specialized trauma-informed parenting workshops, 24/7 emergency support guidance, placement support, and peer support groups for foster families across Oklahoma.',
      },
      {
        q: 'How do Pro Bono Therapy Services work?',
        a: 'Our non-profit pro bono program provides no-cost counseling to qualifying low-income individuals and families facing financial barriers. You can inquire about eligibility through our intake contact form.',
      },
      {
        q: 'How can our organization host a clinical workshop?',
        a: 'We customize clinical training for schools, churches, and corporate businesses. Reach out via our contact page to request a speaking engagement or workshop outline.',
      },
    ],
  },
  {
    category: 'Logistics & Appointments',
    items: [
      {
        q: 'Where is your clinic located in Oklahoma City?',
        a: 'Our clinic is located at 1101 Sovereign Row, Unit A, Oklahoma City, OK 73108 with dedicated client parking.',
      },
      {
        q: 'Do you offer telehealth or virtual sessions?',
        a: 'Yes, we offer HIPAA-compliant virtual telehealth sessions for residents throughout Oklahoma.',
      },
      {
        q: 'How do I book my first counseling appointment?',
        a: 'You can submit an appointment request through our Contact page or call our office directly at (405) 555-0199.',
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (catIndex, itemIndex) => {
    const key = `${catIndex}-${itemIndex}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = faqCategories
    .map((cat) => {
      if (activeCategory !== 'All' && cat.category !== activeCategory) return null;
      const matchingItems = cat.items.filter(
        (item) =>
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.a.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matchingItems.length === 0) return null;
      return { ...cat, items: matchingItems };
    })
    .filter(Boolean);

  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '8rem 1.5rem 3rem' }}>
      <section className="section-intro" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span className="services-kicker">Help Center</span>
        <h1 style={{ fontSize: '3rem', margin: '0.5rem 0 1rem', color: '#052E26' }}>
          Frequently Asked Questions
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#4a5568', maxWidth: '700px', margin: '0 auto 2rem' }}>
          Find answers to common questions about counseling, clinical workshops, foster parent support, and appointment logistics.
        </p>

        <div style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1.25rem',
              borderRadius: '30px',
              border: '2px solid #8DC540',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['All', 'Counseling & Therapy', 'Foster Care & Non-Profit Services', 'Logistics & Appointments'].map((catName) => (
            <button
              key={catName}
              onClick={() => setActiveCategory(catName)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '20px',
                border: '1px solid #052E26',
                background: activeCategory === catName ? '#052E26' : '#fff',
                color: activeCategory === catName ? '#fff' : '#052E26',
                cursor: 'pointer',
                fontWeight: '500',
              }}
            >
              {catName}
            </button>
          ))}
        </div>
      </section>

      {filteredCategories.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
          <p>No questions matched your search criteria.</p>
        </div>
      ) : (
        filteredCategories.map((cat, catIndex) => (
          <div key={cat.category} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', color: '#052E26', marginBottom: '1.5rem', borderBottom: '2px solid #EDFFE1', paddingBottom: '0.5rem' }}>
              {cat.category}
            </h2>
            <div className="accordion">
              {cat.items.map((item, itemIndex) => {
                const key = `${catIndex}-${itemIndex}`;
                const isOpen = !!openItems[key];
                return (
                  <article className={isOpen ? 'faq-item active' : 'faq-item'} key={item.q}>
                    <button onClick={() => toggleItem(catIndex, itemIndex)}>
                      {item.q}
                      <span>{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && <p style={{ marginTop: '0.75rem', lineHeight: '1.6', color: '#334155' }}>{item.a}</p>}
                  </article>
                );
              })}
            </div>
          </div>
        ))
      )}

      <section style={{ textAlign: 'center', background: '#EDFFE1', padding: '3rem', borderRadius: '16px', marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#052E26', marginBottom: '0.5rem' }}>Have a question not listed here?</h3>
        <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>Our intake specialists are available to guide you.</p>
        <Link className="button button-dark" href="/contact">
          Contact Our Team <Arrow />
        </Link>
      </section>
    </main>
  );
}
