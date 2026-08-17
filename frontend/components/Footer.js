import Link from 'next/link';
import { allServices } from '@/lib/servicesData';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand-col">
          <Link className="footer-logo" href="/" aria-label="Open Arms Initiative home">
            <img src="/images/logo.svg" alt="Open Arms Initiative" />
          </Link>
          <p className="footer-address">
            1101 Sovereign Row Unit A<br />Oklahoma City, OK 73108
          </p>
        </div>

        <div className="footer-services-col">
          <h3>Services</h3>
          <div className="footer-services-grid">
            {allServices.map((s) => (
              <Link key={s.slug} href={s.slug === 'corporate-business-training' ? '/corporate-business-training' : `/services/${s.slug}`}>{s.title}</Link>
            ))}
          </div>
        </div>

        <div className="footer-quicklinks-col">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/location">Locations</Link>
          <Link href="/blogs">Blog</Link>
          <Link href="/contact">Contact</Link>
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
        <p className="copyright">© Openarms Initiative 2025 | Developed by Echo5 Digital .</p>
      </div>
    </footer>
  );
}
