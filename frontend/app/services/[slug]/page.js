import Link from 'next/link';
import { allServices } from '@/lib/servicesData';

function Arrow() { return <span aria-hidden="true">→</span>; }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);
  if (!service) {
    return { title: 'Service Not Found | Open Arms Initiative' };
  }
  return {
    title: `${service.title} | Open Arms Initiative`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main style={{ maxWidth: '800px', margin: '5rem auto', textAlign: 'center', padding: '0 1.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#052E26', marginBottom: '1rem' }}>Service Not Found</h1>
        <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '2rem' }}>
          The requested service page does not exist or has been relocated.
        </p>
        <Link href="/" className="button button-dark">
          Return to Home <Arrow />
        </Link>
      </main>
    );
  }

  const relatedServices = allServices
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, 3);

  return (
    <main className="sd-page">
      <section className="sd-hero">
        <div className="sd-hero-inner">
          <span className="services-kicker">{service.category}</span>
          <h1 className="sd-hero-title">{service.title}</h1>
          <div className="hero-divider" aria-hidden="true">
            <span className="hero-divider-line"></span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0170ED" strokeWidth="1.6"><path d="M12 21c-4-1-8-5-8-10a8 8 0 0 1 8-8c5 0 9 4 9 9 0 5-4.5 9-9 9Z"/><path d="M12 21c0-6 2-13 8-16"/></svg>
            <span className="hero-divider-line"></span>
          </div>
          <p className="sd-hero-summary">{service.summary}</p>
          <Link href="/contact" className="reference-hero-button">
            Book a Counseling Session
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>

      <section className="sd-section">
        <div className="sd-container">
          <h2>Overview &amp; Clinical Approach</h2>
          <p className="sd-details">{service.details}</p>

          <h3 className="sd-subheading">Key Care Benefits</h3>
          <div className="why-choose-grid sd-benefits-grid">
            {service.benefits.map((benefit, index) => (
              <article className="why-choose-card" key={index}>
                <div className="icon-box">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5 10 17 19 7" /></svg>
                </div>
                <div className="why-choose-card-copy">
                  <p>{benefit}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="sd-section sd-section-alt">
          <div className="sd-container">
            <h2>Related Services in {service.category}</h2>
            <div className="help-grid sd-related-grid">
              {relatedServices.map((rel) => (
                <article className="help-card" key={rel.slug}>
                  <h3><Link href={`/services/${rel.slug}`}>{rel.title}</Link></h3>
                  <p>{rel.summary}</p>
                  <Link href={`/services/${rel.slug}`} className="teaser-card-link">Read Details &rsaquo;</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="final-cta-section">
        <div className="final-cta-inner">
          <h2>Get Started with Open Arms</h2>
          <p>Take the first step toward compassionate, trauma-informed care for you and your family.</p>
          <div className="final-cta-buttons">
            <Link href="/contact" className="final-cta-btn primary">Book an Appointment</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
