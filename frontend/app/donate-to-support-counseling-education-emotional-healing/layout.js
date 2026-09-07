export const metadata = {
  title: 'Donate to Support Counseling & Emotional Healing | Open Arms',
  description: 'Your Gift Transforms Lives. Every donation supports emotional healing, healthy relationships, and lifelong skills for children, parents, and professionals across Oklahoma.',
  alternates: { canonical: 'https://www.openarmsinitiative.com/donate-to-support-counseling-education-emotional-healing/' },
  openGraph: {
    title: 'Donate to Support Counseling & Emotional Healing | Open Arms',
    description: 'Your Gift Transforms Lives. Every donation supports emotional healing, healthy relationships, and lifelong skills for children, parents, and professionals across Oklahoma.',
    url: 'https://www.openarmsinitiative.com/donate-to-support-counseling-education-emotional-healing/',
    type: 'website',
  },
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Donate', item: 'https://www.openarmsinitiative.com/donate-to-support-counseling-education-emotional-healing/' },
  ],
};

export default function DonateLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      {children}
    </>
  );
}
