export const metadata = {
  title: 'Corporate Mental Health Training for Leadership Teams | Open Arms Initiative',
  description:
    'Burnout, turnover, and quiet conflict don\'t resolve themselves. Jamie James, LPC leads practical leadership and workplace mental health training for teams in Oklahoma City and beyond — built around your organization, not a fixed curriculum.',
  alternates: {
    canonical: 'https://www.openarmsinitiative.com/corporate-business-training/',
  },
  openGraph: {
    title: 'Corporate Mental Health Training for Leadership Teams | Open Arms Initiative',
    description:
      'Burnout, turnover, and quiet conflict don\'t resolve themselves. Jamie James, LPC leads practical leadership and workplace mental health training for teams in Oklahoma City and beyond.',
    url: 'https://www.openarmsinitiative.com/corporate-business-training/',
    type: 'website',
  },
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Training & Speaking', item: 'https://www.openarmsinitiative.com/training/jamie-james/' },
    { '@type': 'ListItem', position: 3, name: 'Leadership & Workplace Wellness', item: 'https://www.openarmsinitiative.com/corporate-business-training/' },
  ],
};

const SCHEMA_SERVICE = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Corporate Mental Health & Leadership Training',
  provider: {
    '@type': 'Organization',
    name: 'Open Arms Initiative',
    url: 'https://www.openarmsinitiative.com/',
  },
  areaServed: 'Oklahoma City, OK',
  description:
    'Leadership and workplace mental health training for HR directors, executives, and managers, led by a licensed professional counselor.',
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can this training be customized for our organization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — sessions are built around your team\'s specific situation rather than a fixed curriculum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is this training designed for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anyone responsible for leading people through stress — HR directors, executives, department leaders, and managers, in businesses, nonprofits, and other organizations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from a generic corporate wellness workshop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It's led by a licensed clinician who also currently leads two organizations, so the training is grounded in a clinical understanding of stress and behavior, not just leadership theory.",
      },
    },
  ],
};

export default function CorporateTrainingLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SERVICE) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }}
      />
      {children}
    </>
  );
}
