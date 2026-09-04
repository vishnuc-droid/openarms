export const metadata = {
  title: 'Community Outreach & Support Programs | Open Arms Initiative',
  description:
    'Free mental health education, family support resources, and community care brought directly into underserved Oklahoma City neighborhoods by Open Arms Initiative.',
  alternates: {
    canonical: 'https://www.openarmsinitiative.com/services/community-outreach-support/',
  },
  openGraph: {
    title: 'Community Outreach & Support Programs | Open Arms Initiative',
    description:
      'Free mental health education, family support resources, and community care brought directly into underserved Oklahoma City neighborhoods.',
    url: 'https://www.openarmsinitiative.com/services/community-outreach-support/',
    type: 'website',
  },
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Non-Profit Services', item: 'https://www.openarmsinitiative.com/services/community-outreach-support/' },
    { '@type': 'ListItem', position: 3, name: 'Community Outreach & Support Programs', item: 'https://www.openarmsinitiative.com/services/community-outreach-support/' },
  ],
};

const SCHEMA_SERVICE = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Community Outreach & Support Programs',
  provider: {
    '@type': 'Organization',
    name: 'Open Arms Initiative',
    url: 'https://www.openarmsinitiative.com/',
  },
  areaServed: 'Oklahoma City, OK',
  description:
    'Free mental health education, family support resources, and community care brought directly into underserved Oklahoma communities.',
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a cost to attend a community outreach program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Our community outreach and support programs are offered free of charge, thanks to the generosity of donors and community partners who share our belief that mental health support should be accessible to everyone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need insurance or documentation to participate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. These programs are intentionally designed to remove the usual barriers, no insurance, referral, or paperwork required to attend a workshop or connect with a resource navigator.',
      },
    },
    {
      '@type': 'Question',
      name: 'What neighborhoods or areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We bring programming directly into local Oklahoma City neighborhoods, partnering with community centers, schools, churches, and other trusted local spaces. Reach out and we can tell you what is currently available near you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my organization partner with Open Arms Initiative on an outreach event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we regularly collaborate with other nonprofits, schools, and community groups to bring resources and education into shared spaces. Contact us to talk about what a partnership could look like.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from your counseling services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Community outreach is about education, connection, and access, workshops, resource navigation, and family support brought directly into the community. It often serves as a bridge that helps families find their way to our pro bono and sliding-scale counseling services when more individualized care is needed.',
      },
    },
  ],
};

export default function CommunityOutreachSupportLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SERVICE) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />
      {children}
    </>
  );
}
