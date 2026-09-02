import ScrollReveal from '@/components/ScrollReveal';
import ReferralRequestForm from '@/components/ReferralRequestForm';

export const metadata = { title: 'Local Referrals | Open Arms Initiative', description: 'Know someone who could benefit from therapy or family counseling? Refer a friend or community member to Open Arms Initiative in Oklahoma City.', alternates: { canonical: 'https://www.openarmsinitiative.com/local-referrals/' } };

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Local Referrals', item: 'https://www.openarmsinitiative.com/local-referrals/' },
  ],
};

export default function LocalReferralsPage() { return <main className="fs-page referral-only-page">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
  <ScrollReveal />

  <section className="fs-hero"><div className="fs-hero-split-inner referral-only-inner">
    <div className="fs-hero-form-card reveal reveal-from-bottom" id="referral-form"><div className="fs-hero-form-body"><h3>Referral Bonus</h3><span className="fs-hero-form-underline" /><p className="fs-hero-form-sub">Do you know someone who could benefit from therapy or family counseling? Refer a friend or community member to Open Arms Initiative and help us extend our mission of healing and hope. How awesome is that?</p><ReferralRequestForm /></div><div className="fs-hero-form-photo"><img src="/female-wedding-planner-working-with-couple-100kb.jpg" alt="Community members supporting one another" /></div></div>
  </div></section>
</main>}
