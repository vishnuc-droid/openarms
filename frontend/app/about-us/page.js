import AboutClient from './AboutClient';

export const metadata = {
  title: 'About Open Arms Initiative | Oklahoma City',
  description: 'Meet Open Arms Initiative, an Oklahoma City nonprofit providing trauma-informed counseling, foster family support, education, and compassionate community care.',
  alternates: { canonical: 'https://www.openarmsinitiative.com/about-us/' },
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.openarmsinitiative.com/about-us/' },
  ],
};

const SCHEMA_ORG = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: 'Open Arms Initiative',
  url: 'https://www.openarmsinitiative.com/',
  description: 'Open Arms Initiative is an Oklahoma City nonprofit providing trauma-informed counseling, foster family support, parenting education, and compassionate community care.',
  areaServed: 'Oklahoma City, OK',
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ORG) }} />
      <AboutClient />
    </>
  );
}
