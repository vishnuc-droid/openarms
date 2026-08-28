import Link from 'next/link';

const serviceColumns = [
  [
    { name: 'Child & Adolescent Counseling', href: '/child-counseling-services-oklahoma-city/' },
    { name: 'Foster Care & Adoption Counseling', href: '/services/foster-care-adoption-counseling' },
    { name: 'Depression & Anxiety Counseling', href: '/depression-anxiety-counseling-oklahoma/' },
  ],
  [
    { name: 'Adult & Individual Counseling', href: '/adult-counseling-oklahoma-city/' },
    { name: 'Grief and Loss Counseling', href: '/grief-counseling-oklahoma-city/' },
    { name: 'Pro Bono Therapy Services', href: '/pro-bono-counseling-okc/' },
  ],
  [
    { name: 'Marriage & Couples Therapy', href: '/marriage-counseling-oklahoma-city/' },
    { name: 'Family Counseling', href: '/family-therapy-oklahoma-city/' },
    { name: 'Community Outreach & Support Programs', href: '/services/community-outreach-support' },
  ],
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-card">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Link className="footer-logo" href="/" aria-label="Open Arms Initiative home">
              <img src="/images/logo-full.png" alt="Open Arms Initiative" />
            </Link>
            <p className="footer-tagline">Compassionate care. Stronger communities. Brighter futures.</p>
            <div className="footer-contact-list">
              <div className="footer-contact-row">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10.5c0 6-8 11.5-8 11.5S4 16.5 4 10.5a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10.5" r="2.6" /></svg>
                <span>1101 Sovereign Row Unit A<br />Oklahoma City, OK 73108</span>
              </div>
              <div className="footer-contact-row footer-contact-row-inline">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z" /></svg>
                <a href="tel:+14059208934">(405) 920-8934</a>
              </div>
              <div className="footer-contact-row footer-contact-row-inline">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 6.5 8 6 8-6" /></svg>
                <a href="mailto:info@openarmsinitiative.org">info@openarmsinitiative.org</a>
              </div>
            </div>
          </div>

          <div className="footer-services-col">
            <h3>Services</h3>
            <div className="footer-underline footer-underline-services" />
            <div className="footer-services-grid">
              {serviceColumns.map((col, i) => (
                <div className="footer-services-column" key={i}>
                  {col.map((s) => (
                    <Link key={s.name} href={s.href}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
                      {s.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-social">
          <a href="https://www.instagram.com/openarms_initiative/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1"/></svg>
          </a>
          <a href="https://www.facebook.com/people/Open-Arms-Initiative/61570443695509/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13.5 21v-7.9h2.65l.4-3.08H13.5V8.05c0-.89.25-1.5 1.52-1.5h1.63V3.8C16.36 3.75 15.36 3.66 14.19 3.66c-2.44 0-4.11 1.49-4.11 4.22v2.35H7.42v3.08h2.66V21h3.42Z"/></svg>
          </a>
          <a href="https://www.youtube.com/@OpenArmsInitiativeokc" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 12s0-3.13-.4-4.63a2.5 2.5 0 0 0-1.76-1.77C18.35 5.2 12 5.2 12 5.2s-6.35 0-7.84.4A2.5 2.5 0 0 0 2.4 7.37C2 8.87 2 12 2 12s0 3.13.4 4.63a2.5 2.5 0 0 0 1.76 1.77c1.49.4 7.84.4 7.84.4s6.35 0 7.84-.4a2.5 2.5 0 0 0 1.76-1.77c.4-1.5.4-4.63.4-4.63ZM10 15.02V8.98L15.27 12 10 15.02Z"/></svg>
          </a>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <Link href="/blogs">Blog</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <p className="copyright">© Openarms Initiative 2026<br />Developed by <a href="https://www.echo5digital.com/" target="_blank" rel="noopener noreferrer">Echo5 Digital</a>.</p>
        </div>
      </div>
    </footer>
  );
}
