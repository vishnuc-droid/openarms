'use client';

import ScrollReveal from '@/components/ScrollReveal';

const testimonials = [
  {
    quote: 'Open Arms has incredible vision with an amazing foundation for what their company represents. An amazing staff and people you want on your side and to just walk with through life!',
    author: 'Kamryn B.',
    photo: '/kamyrn.png',
  },
  {
    quote: 'The owner & staff are caring, supportive, and dedicated to helping both the children and foster families succeed. You can tell they genuinely care and truly make a difference.',
    author: 'Jency M.',
    photo: '/unnamed (1).png',
  },
  {
    quote: 'If you are looking for mental health services, please look no further. Do your self a favor and contact this agency! The services they provide are second to none. Their hearts are rooted in helping people become their best selves regardless of any background.',
    author: 'Amber Price',
    photo: '/unnamed (2).png',
  },
  {
    quote: 'Open Arms Initiative truly lives up to its name. I’ve known the owner for many years, and her passion and genuine care for others shows in everything she does. That same care carries through the entire organization and its staff. The work they’re doing for the community is truly inspiring, and I highly recommend Open Arms Initiative to anyone looking to support or connect with a compassionate, people-centered organization.',
    author: 'Shines Mathew',
    photo: '/unnamed (3).png',
  },
];

const avatarColors = ['#6C5CE7', '#0E9CB8', '#E67E22', '#0170ED'];

function initialsFor(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function TestimonialsClient() {
  return (
    <main className="blog-list-page">
      <ScrollReveal />

      {/* Testimonials grid */}
      <section className="testimonials-section-v2 testimonials-section-v2-top">
        <div className="testimonials-container">
          <div className="testimonials-heading reveal reveal-from-bottom">
            <h2>Hear from our clients</h2>
            <p>Our clients love working with us, just read what they have to say!</p>
          </div>

          <div className="testimonials-grid-v2 reveal-stagger">
            {testimonials.map((review, i) => (
              <article className="google-review-card reveal reveal-from-bottom" key={review.author}>
                <div className="google-review-top">
                  <div className="google-review-avatar-row">
                    {review.photo ? (
                      <img src={review.photo} alt={review.author} className="google-review-avatar" />
                    ) : (
                      <span
                        className="google-review-avatar google-review-avatar-initials"
                        style={{ background: avatarColors[i % avatarColors.length] }}
                      >
                        {initialsFor(review.author)}
                      </span>
                    )}
                    <span className="google-review-author">{review.author}</span>
                  </div>
                  <img src="/Training/icon.svg" alt="Google" className="google-review-g-icon" />
                </div>

                <div className="google-review-stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <img key={starIdx} src="/Training/f.svg" alt="" className="google-review-star" />
                  ))}
                </div>

                <p className="google-review-text">{review.quote}</p>
              </article>
            ))}
          </div>

          <div className="testimonials-cta reveal reveal-from-bottom">
            <a
              href="https://www.google.com/search?q=Open+Arms+Initiative+Oklahoma+City+reviews#lrd=0x87b2115b2214b573:0x9f7f9c5bde6f356d,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-cta-link"
            >
              Read More Reviews
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
