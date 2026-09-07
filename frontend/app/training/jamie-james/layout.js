export const metadata = {
  title: 'Jamie James, LPC | Trauma-Informed Training & Speaking | Open Arms Initiative',
  description:
    'Jamie James, LPC is a Licensed Professional Counselor, Founder & President of Open Arms Initiative, and founder of Open Arms Foster Care. She leads trauma-informed training and speaking for organizations, schools, churches, and businesses across Oklahoma City.',
  alternates: {
    canonical: 'https://www.openarmsinitiative.com/training/jamie-james/',
  },
  openGraph: {
    title: 'Jamie James, LPC | Trauma-Informed Training & Speaking | Open Arms Initiative',
    description:
      'Licensed Professional Counselor, Founder & President of Open Arms Initiative, and founder of Open Arms Foster Care. Trauma-informed training and speaking for organizations across Oklahoma City.',
    url: 'https://www.openarmsinitiative.com/training/jamie-james/',
    type: 'profile',
  },
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Training & Speaking', item: 'https://www.openarmsinitiative.com/training/jamie-james/' },
    { '@type': 'ListItem', position: 3, name: 'Jamie James, LPC', item: 'https://www.openarmsinitiative.com/training/jamie-james/' },
  ],
};

const SCHEMA_PERSON = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jamie James',
  jobTitle: 'Licensed Professional Counselor',
  description: 'Jamie James, LPC, is a Licensed Professional Counselor and the Founder & President of Open Arms Initiative. She also founded and leads Open Arms Foster Care, a licensed therapeutic foster care agency serving Oklahoma City, Tulsa, and Lawton. She provides trauma-informed training and speaking for organizations, schools, churches, and businesses.',
  url: 'https://www.openarmsinitiative.com/training/jamie-james/',
  image: 'https://www.openarmsinitiative.com/Training/upscaled_portrait_4e.jpg',
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Open Arms Initiative',
      url: 'https://www.openarmsinitiative.com/',
    },
    {
      '@type': 'Organization',
      name: 'Open Arms Foster Care',
    },
  ],
  knowsAbout: [
    'Trauma-Informed Leadership',
    'Mental Health Training',
    'Leadership Burnout & Boundaries',
    'Compassion Fatigue',
    'Foster Care & Child Welfare Training',
    'Faith-Based Mental Health Training',
  ],
};

export default function JamieJamesLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_PERSON) }} />
      {children}
    </>
  );
}
