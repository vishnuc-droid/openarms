'use client';

import { useState } from 'react';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="blog-post-faq">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`blog-post-faq-item${isOpen ? ' blog-post-faq-item-open' : ''}`} key={i}>
            <button
              type="button"
              className="blog-post-faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <span className="blog-post-faq-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <p className="blog-post-faq-a">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
