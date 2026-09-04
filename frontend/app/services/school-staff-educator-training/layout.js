export const metadata = {
  title: 'School Staff & Educator Training | Open Arms Initiative',
  description:
    'Trauma-informed classroom strategies for teachers, counselors, and school administration. Jamie James, LPC equips educators across Oklahoma City with practical tools for student success and staff well-being.',
  alternates: {
    canonical: 'https://www.openarmsinitiative.com/services/school-staff-educator-training/',
  },
  openGraph: {
    title: 'School Staff & Educator Training | Open Arms Initiative',
    description:
      'Trauma-informed classroom strategies for teachers, counselors, and school administration. Practical tools for student success and staff well-being across Oklahoma City.',
    url: 'https://www.openarmsinitiative.com/services/school-staff-educator-training/',
    type: 'website',
  },
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Training & Speaking', item: 'https://www.openarmsinitiative.com/training/jamie-james/' },
    { '@type': 'ListItem', position: 3, name: 'School Staff & Educator Training', item: 'https://www.openarmsinitiative.com/services/school-staff-educator-training/' },
  ],
};

const SCHEMA_SERVICE = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'School Staff & Educator Training',
  provider: {
    '@type': 'Organization',
    name: 'Open Arms Initiative',
    url: 'https://www.openarmsinitiative.com/',
  },
  areaServed: 'Oklahoma City, OK',
  description:
    'Trauma-informed classroom strategies and educator self-care training for teachers, counselors, and school administration, delivered by a licensed professional counselor.',
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this training only for teachers, or can other school staff attend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It works well for anyone on campus, classroom teachers, counselors, administrators, front-office staff, paraprofessionals, coaches, and bus drivers. Trauma shows up across every part of a school day, so sessions are built to be useful across roles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this training tell us how to discipline students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, this isn't a discipline policy. It's a lens for understanding what's actually driving a behavior, so your existing discipline and classroom management approaches can be applied more effectively and with more compassion.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can this fit into an existing professional development day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this is one of the most common ways schools bring us in. We regularly deliver sessions during in-service days, staff development days, and early-release afternoons.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you cover educator burnout and self-care as well as student behavior?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Supporting students well starts with staff who aren't running on empty. Every session includes practical strategies for managing the emotional weight of the work, not just classroom-facing content.",
      },
    },
  ],
};

export default function SchoolStaffEducatorTrainingLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SERVICE) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />
      {children}
    </>
  );
}
