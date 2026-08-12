export const metadata = {
  title: 'Location & Oklahoma City Support | Open Arms Initiative',
  description: 'Find our Oklahoma City clinic location, hours, parking, accessibility details, and local community referrals.',
};

export default function LocationPage() {
  return (
    <main>
      {/* Location Hero */}
      <section className="location-hero-section">
        <div className="location-hero-decor" aria-hidden="true"></div>
        <div className="location-hero-container">
          <div className="location-hero-copy">
            <span className="location-hero-badge">Location</span>
            <h1 className="location-hero-title">Available in-person and online</h1>
            <div className="location-hero-divider" aria-hidden="true"></div>
            <p className="location-hero-text">
              Need help with a project, have a question about our work? We're here.
            </p>
          </div>
          <div className="location-hero-map-col">
            <div className="location-hero-address">
              <span className="location-hero-pin" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.1-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 14.9 12 21 12 21Z"/><circle cx="12" cy="9.8" r="2.4"/></svg>
              </span>
              1101 Sovereign Row Unit A Oklahoma City, OK 73108.
            </div>
            <div className="location-hero-map">
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
        </div>
      </section>
    </main>
  );
}
