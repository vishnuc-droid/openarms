'use client';

import Script from 'next/script';

const IconHeart = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>
);
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z" /></svg>
);
const IconMindSupport = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z" /></svg>
);
const IconFamily = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const IconGrad = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></svg>
);
const IconCommunity = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="9" /><path d="M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9Z" /></svg>
);

const IMPACT_ITEMS = [
  { icon: IconMindSupport, label: 'Mental Health Support' },
  { icon: IconFamily, label: 'Youth & Family Services' },
  { icon: IconGrad, label: 'Education Programs' },
  { icon: IconCommunity, label: 'Stronger Communities' },
];

export default function DonatePage() {
  return (
    <main className="fs-page">
      <section className="oa-donate-section">
        <div className="oa-donate-decor oa-donate-decor-a" aria-hidden="true" />
        <div className="oa-donate-decor oa-donate-decor-b" aria-hidden="true" />

        <div className="oa-donate-wrap">
          <div className="oa-donate-grid">
            <div className="oa-donate-copy">
              <span className="oa-donate-badge"><IconHeart width={15} height={15} /> Together We Make a Difference</span>
              <h1 className="oa-donate-heading">
                Donate to Support <span className="oa-donate-heading-accent">Counseling, Education &amp; Emotional Healing</span>
              </h1>
              <p className="oa-donate-sub">
                Help someone take their first step toward healing. Support free mental health services in Oklahoma.
              </p>
              <p className="oa-donate-sub oa-donate-sub-strong">
                <strong>Your Gift Transforms Lives.</strong> Every donation supports emotional healing, healthy relationships, and lifelong skills for children, parents, and professionals across Oklahoma.
              </p>

              <div className="oa-donate-impact-grid">
                {IMPACT_ITEMS.map(({ icon: Icon, label }) => (
                  <div className="oa-donate-impact-item" key={label}>
                    <span className="oa-donate-impact-icon"><Icon /></span>
                    <p>{label}</p>
                  </div>
                ))}
              </div>

              <p className="oa-donate-phone-note">
                <IconPhone />
                Need help? Call <a href="tel:+14059208934">(405) 920-8934</a>
              </p>
            </div>

            <div className="oa-donate-embed-card">
              <iframe
                title="Donate to Open Arms Initiative"
                src="https://donorbox.org/embed/open-arms-mental-health?show_content=true"
                name="donorbox"
                id="dbox-form-embed"
                seamless="seamless"
                frameBorder="0"
                scrolling="no"
                allow="payment"
                style={{ width: '100%', minHeight: 560, border: 'none', display: 'block' }}
              />
              <Script src="https://donorbox.org/widget.js" strategy="lazyOnload" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
