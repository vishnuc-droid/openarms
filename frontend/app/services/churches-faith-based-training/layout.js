export const metadata = {
  title: 'Churches & Faith-Based Training | Open Arms Initiative',
  description:
    'Trauma-informed training for pastors, ministry staff, and volunteers. Jamie James, LPC equips churches and faith communities across Oklahoma City with practical mental health and crisis response tools.',
  alternates: {
    canonical: 'https://www.openarmsinitiative.com/services/churches-faith-based-training/',
  },
  openGraph: {
    title: 'Churches & Faith-Based Training | Open Arms Initiative',
    description:
      'Trauma-informed training for pastors, ministry staff, and volunteers. Practical mental health and crisis response tools for churches and faith communities across Oklahoma City.',
    url: 'https://www.openarmsinitiative.com/services/churches-faith-based-training/',
    type: 'website',
  },
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Training & Speaking', item: 'https://www.openarmsinitiative.com/training/jamie-james/' },
    { '@type': 'ListItem', position: 3, name: 'Churches & Faith-Based Training', item: 'https://www.openarmsinitiative.com/services/churches-faith-based-training/' },
  ],
};

const SCHEMA_SERVICE = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Churches & Faith-Based Training',
  provider: {
    '@type': 'Organization',
    name: 'Open Arms Initiative',
    url: 'https://www.openarmsinitiative.com/',
  },
  areaServed: 'Oklahoma City, OK',
  description:
    'Trauma-informed training and mental health crisis response tools for pastors, ministry leaders, and faith communities, delivered by a licensed professional counselor.',
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does this training conflict with our church’s theology or beliefs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. This training complements your ministry’s spiritual care rather than replacing it. We focus on the clinical realities of trauma and mental health, how to recognize warning signs and respond with wisdom, while leaving matters of doctrine and pastoral counsel entirely to your church’s own leadership.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should attend, just pastors or the whole team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This works well for pastors, associate pastors, and staff, but it is just as valuable for small group leaders, deacons, greeters, children’s and youth ministry volunteers, and anyone in a caregiving or first-contact role. Many churches bring their whole volunteer team.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this be built around a specific concern our church is facing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every session starts with a conversation about what your congregation and leadership team are actually seeing, whether that’s grief after a loss in the church family, a member in crisis, or a broader desire to become a safer, more informed community.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this appropriate for a small church with an all-volunteer staff?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this training is built to be useful regardless of church size or budget. Many of the churches we work with rely entirely on volunteer leadership, and the content is designed to be practical for exactly that setting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long is a typical session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your church’s schedule and needs. We’ve delivered this as a single Sunday morning session, a weeknight training, a half-day retreat for leadership teams, and a recurring series. Reach out and we’ll find a format that fits.',
      },
    },
  ],
};

export default function ChurchesFaithBasedTrainingLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_SERVICE) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />
      {children}
    </>
  );
}
