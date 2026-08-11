import Link from 'next/link';

export const metadata = {
  title: 'Location & Oklahoma City Support | Open Arms Initiative',
  description: 'Find our Oklahoma City clinic location, hours, parking, accessibility details, and local community referrals.',
};

function Arrow() { return <span aria-hidden="true">→</span>; }

export default function LocationPage() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
      <section className="section-intro" style={{ textAlign: 'left', marginBottom: '3rem' }}>
        <span className="services-kicker">Our Location</span>
        <h1 style={{ fontSize: '3rem', margin: '0.5rem 0 1rem', color: '#052E26' }}>
          Serving Oklahoma City & Surrounding Communities
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#4a5568', maxWidth: '800px' }}>
          Conveniently located in Oklahoma City, Open Arms Initiative provides a warm, safe, and accessible clinic environment for therapy sessions, workshops, and family support.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem', alignItems: 'center' }}>
        <div style={{ background: '#f8faf9', padding: '2.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <p className="eyebrow olive" style={{ color: '#8DC540', marginBottom: '0.5rem' }}>CLINIC ADDRESS</p>
          <h2 style={{ fontSize: '2rem', color: '#052E26', marginBottom: '1rem' }}>1101 Sovereign Row, Unit A</h2>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Oklahoma City, OK 73108<br />
            United States
          </p>

          <h3 style={{ fontSize: '1.2rem', color: '#052E26', marginBottom: '0.5rem' }}>Accessibility & Directions</h3>
          <ul style={{ color: '#4a5568', paddingLeft: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            <li>Free dedicated client parking available on site.</li>
            <li>Wheelchair accessible entrance and restroom facilities.</li>
            <li>Located near major transit corridors for easy access across OKC metro area.</li>
          </ul>

          <Link href="/contact" className="button button-dark">
            Schedule a Visit <Arrow />
          </Link>
        </div>

        <div style={{ borderRadius: '16px', overflow: 'hidden', height: '400px', background: '#e2e8f0', border: '1px solid #cbd5e1', position: 'relative' }}>
          <iframe
            title="Open Arms Initiative OKC Map"
            src="https://maps.google.com/maps?q=1101%20Sovereign%20Row%20Oklahoma%20City%20OK%2073108&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>

      <section style={{ background: '#052E26', color: '#fff', padding: '3.5rem 2.5rem', borderRadius: '16px', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>Local Community Referrals</h2>
        <p style={{ fontSize: '1.1rem', color: '#e2e8f0', maxWidth: '800px', marginBottom: '2rem' }}>
          We work closely with local Oklahoma healthcare providers, school districts, child welfare services, and community organizations to ensure comprehensive care continuity for every family.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1.5rem', borderRadius: '10px' }}>
            <h3 style={{ color: '#8DC540', marginBottom: '0.5rem' }}>OKC School Districts</h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>School staff trauma awareness & educator support modules.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1.5rem', borderRadius: '10px' }}>
            <h3 style={{ color: '#8DC540', marginBottom: '0.5rem' }}>Foster & Family Agencies</h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>Coordinated placement support & 24/7 foster parent training.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1.5rem', borderRadius: '10px' }}>
            <h3 style={{ color: '#8DC540', marginBottom: '0.5rem' }}>Health & Wellness Partners</h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>Seamless medical and psychiatric referral networks.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
