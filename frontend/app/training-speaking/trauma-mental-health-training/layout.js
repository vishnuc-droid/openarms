export const metadata = {
  title: 'Trauma & Mental Health Training for Nonprofits and Community Organizations | Open Arms Initiative',
  description:
    'Frontline staff see the effects of trauma every day, often without training for it. Jamie James, LPC leads foundational trauma and mental health training for nonprofits, coalitions, and community organizations across Oklahoma City and beyond.',
  alternates: {
    canonical: 'https://www.openarmsinitiative.com/training-speaking/trauma-mental-health-training/',
  },
  openGraph: {
    title: 'Trauma & Mental Health Training for Nonprofits and Community Organizations | Open Arms Initiative',
    description:
      'Frontline staff see the effects of trauma every day, often without training for it. Jamie James, LPC leads foundational trauma and mental health training for nonprofits, coalitions, and community organizations across Oklahoma City and beyond.',
    url: 'https://www.openarmsinitiative.com/training-speaking/trauma-mental-health-training/',
    type: 'website',
  },
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Training & Speaking', item: 'https://www.openarmsinitiative.com/training/jamie-james/' },
    { '@type': 'ListItem', position: 3, name: 'Trauma & Mental Health Training', item: 'https://www.openarmsinitiative.com/training-speaking/trauma-mental-health-training/' },
  ],
};

const SCHEMA_SERVICE = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Trauma & Mental Health Training for Nonprofits and Community Organizations',
  provider: {
    '@type': 'Organization',
    name: 'Open Arms Initiative',
    url: 'https://www.openarmsinitiative.com/',
  },
  areaServed: 'Oklahoma City, OK',
  description:
    'Foundational trauma and mental health training for nonprofits, coalitions, and community organizations, led by a licensed professional counselor.',
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What's the difference between this and Trauma-Informed Care Training?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Trauma & Mental Health Training is our broader foundational offering. It covers everything from recognizing warning signs to supporting grief and building staff resilience. Trauma-Informed Care Training is our flagship program, focused specifically on the core principles of trauma-informed practice. Many organizations start with the flagship and then add topics from this page as needed.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can this training work for a mixed-role staff day, with case workers, volunteers, and admin staff all in the same room?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this is one of the more common formats organizations request, and sessions are built to be useful across roles rather than assuming everyone has the same background.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this appropriate for volunteers, not just paid staff?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this training is regularly built for mixed staff-and-volunteer audiences.',
      },
    },
  ],
};

const SCHEMA_PERSON = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jamie James',
  jobTitle: 'Licensed Professional Counselor',
  description: 'Jamie James, LPC, is a licensed professional counselor and trainer who leads trauma and mental health training for nonprofits, community organizations, and faith-based teams across Oklahoma City.',
  url: 'https://www.openarmsinitiative.com/training/jamie-james/',
  worksFor: {
    '@type': 'Organization',
    name: 'Open Arms Initiative',
    url: 'https://www.openarmsinitiative.com/',
  },
  knowsAbout: [
    'Trauma-Informed Care',
    'Mental Health Training',
    'Nonprofit Staff Development',
    'Grief and Loss Counseling',
    'Compassion Fatigue',
  ],
};

const SCHEMA_COURSE = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Trauma & Mental Health Training for Nonprofits and Community Organizations',
  description: 'Foundational, practical training in trauma and mental health for community and nonprofit teams, covering recognizing warning signs, understanding trauma-driven behavior, grief support, staff resilience, and communication skills.',
  provider: {
    '@type': 'Organization',
    name: 'Open Arms Initiative',
    url: 'https://www.openarmsinitiative.com/',
  },
  instructor: {
    '@type': 'Person',
    name: 'Jamie James',
    jobTitle: 'Licensed Professional Counselor',
  },
  courseMode: ['onsite', 'online'],
  educationalLevel: 'Beginner to Intermediate',
  teaches: [
    'Recognizing Signs of Trauma and Mental Health Concerns',
    'Understanding Human Behavior Through a Trauma Lens',
    'Staff Resilience and Self-Care',
    'Grief and Emotional Support Skills',
    'Communication and Conflict Skills for Human-Service Teams',
  ],
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: ['onsite', 'online'],
    location: {
      '@type': 'Place',
      name: 'Oklahoma City, OK',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Oklahoma City',
        addressRegion: 'OK',
        addressCountry: 'US',
      },
    },
  },
};

export default function TraumaMentalHealthTrainingLayout({ children }) {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_PERSON) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_COURSE) }}
      />
      {children}
    </>
  );
}
