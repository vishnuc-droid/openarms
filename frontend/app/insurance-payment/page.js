import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

function Arrow() { return <span aria-hidden="true">→</span>; }

export const metadata = {
  title: 'Insurance & Payment Options | Open Arms Initiative',
  description: 'Open Arms Initiative accepts most major insurance plans, including SoonerCare, Aetna, Humana, and Oklahoma Complete Health, plus private pay options.',
  alternates: { canonical: 'https://www.openarmsinitiative.com/insurance-payment/' },
};

const payers = [
  { src: '/Logo 4.png', alt: 'Humana' },
  { src: '/Logo 3.png', alt: 'Aetna' },
  { src: '/Logo 2.png', alt: 'Oklahoma Complete Health' },
  { src: '/Logo 5.png', alt: 'SoonerCare' },
];

const coverageIcons = [
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 1 1 3 6.2L4 19l.9-3A7.9 7.9 0 0 1 4 12Z" /><path d="M8.5 10.5h7M8.5 14h4.5" /></svg>,
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5 11 15l4.5-5.5" /></svg>,
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>,
];

const coverageCards = [
  ['We Verify Your Benefits', 'Coverage and copays vary by plan. Our intake team checks your specific benefits before your first session, so there are no surprises.'],
  ['Not Listed? Ask Anyway', 'If you don’t see your plan above, reach out. We may still be in-network, or can walk you through private pay options.'],
  ['Pro Bono Program', 'A limited pro bono program is available for qualifying families without insurance or other payment options.'],
];

export default function InsurancePaymentPage() {
  return (
    <main className="fs-page ip-page">
      <ScrollReveal />
      <section className="insurance-strip-section ip-hero">
        <div className="insurance-strip-inner section-reveal section-reveal-left">
          <div className="insurance-strip-intro reveal reveal-from-bottom">
            <span className="services-kicker">Insurance &amp; Payment</span>
            <h1>Insurance &amp; Payment Made Simple</h1>
            <p>We accept most major insurance plans, including SoonerCare, and we&rsquo;re currently accepting new clients.</p>
          </div>
          <div className="insurance-strip-bar reveal reveal-from-bottom">
            <div className="insurance-strip-marquee">
              <div className="insurance-strip-track">
                {[0, 1].map((copy) => (
                  <div className="insurance-strip-payers" key={copy} aria-hidden={copy === 1}>
                    {payers.map((p) => (
                      <span className="insurance-strip-logo insurance-strip-logo--zoom" key={`${copy}-${p.alt}`}>
                        <img src={p.src} alt={p.alt} />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <span className="insurance-strip-pay insurance-strip-pay-desktop">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3.2" /><path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" /></svg>
              Private Pay
            </span>
          </div>
        </div>
      </section>

      <section className="ip-section">
        <div className="ip-container">
          <h2 className="ip-center">How Coverage Works</h2>
          <i className="ip-line-center" />
          <div className="ip-cards">
            {coverageCards.map(([h, p], i) => (
              <article className="ip-card" key={h}>
                <span className="ip-card-icon">{coverageIcons[i]}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ip-final">
        <div className="ip-container ip-final-inner">
          <div>
            <h2>Have a Question About Your Coverage?</h2>
            <p>Our intake specialists are happy to help you verify your benefits before you book.</p>
          </div>
          <Link href="/contact" className="fs-btn fs-light">
            Contact Our Team <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
