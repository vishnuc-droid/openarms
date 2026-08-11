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
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
      <nav style={{ marginBottom: '2rem', fontSize: '0.95rem', color: '#64748b' }}>
        <Link href="/" style={{ color: '#052E26', textDecoration: 'none' }}>Home</Link>
        {' / '}
        <span style={{ color: '#8DC540', fontWeight: '500' }}>{service.category}</span>
        {' / '}
        <span>{service.title}</span>
      </nav>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center', marginBottom: '4rem' }}>
        <div>
          <span className="services-kicker">{service.category}</span>
          <h1 style={{ fontSize: '3rem', margin: '0.5rem 0 1rem', color: '#052E26', lineHeight: '1.2' }}>
            {service.title}
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.7', marginBottom: '2rem' }}>
            {service.summary}
          </p>
          <Link href="/contact" className="button button-dark" style={{ padding: '0.85rem 1.75rem' }}>
            Book a Counseling Session <Arrow />
          </Link>
        </div>

        <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <img src={service.image} alt={service.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </section>

      <section style={{ background: '#f8faf9', padding: '3rem', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#052E26', marginBottom: '1.5rem' }}>Overview & Clinical Approach</h2>
        <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.8', marginBottom: '2.5rem' }}>
          {service.details}
        </p>

        <h3 style={{ fontSize: '1.5rem', color: '#052E26', marginBottom: '1rem' }}>Key Care Benefits</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {service.benefits.map((benefit, index) => (
            <div key={index} style={{ background: '#fff', padding: '1.25rem 1.5rem', borderRadius: '10px', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ color: '#8DC540', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
              <span style={{ color: '#1e293b', fontWeight: '500' }}>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#052E26', marginBottom: '1.5rem' }}>Related Services in {service.category}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {relatedServices.map((rel) => (
              <article key={rel.slug} style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <img src={rel.image} alt={rel.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: '#052E26', marginBottom: '0.5rem' }}>{rel.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '1rem', lineHeight: '1.5' }}>{rel.summary}</p>
                  <Link href={`/services/${rel.slug}`} className="text-link olive">
                    Read Details <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section style={{ background: '#052E26', color: '#fff', padding: '3.5rem 2.5rem', borderRadius: '16px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '1rem' }}>Get Started with Open Arms</h2>
        <p style={{ fontSize: '1.1rem', color: '#e2e8f0', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Take the first step toward compassionate, trauma-informed care for you and your family.
        </p>
        <Link href="/contact" className="button button-light">
          Book an Appointment <Arrow />
        </Link>
      </section>
    </main>
  );
}
