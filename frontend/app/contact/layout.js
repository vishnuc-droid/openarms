export const metadata = {
  title: 'Contact Open Arms Initiative | Oklahoma City',
  description: 'Contact Open Arms Initiative in Oklahoma City for counseling, family support, foster care services, parenting support, and community resources.',
  alternates: { canonical: 'https://www.openarmsinitiative.com/contact/' },
  openGraph: {
    title: 'Contact Open Arms Initiative | Oklahoma City',
    description: 'Contact Open Arms Initiative in Oklahoma City for counseling, family support, foster care services, parenting support, and community resources.',
    url: 'https://www.openarmsinitiative.com/contact/',
    type: 'website',
  },
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.openarmsinitiative.com/' },
    { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://www.openarmsinitiative.com/contact/' },
  ],
};

const SCHEMA_CONTACT = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Open Arms Initiative',
  about: {
    '@type': 'Organization',
    name: 'Open Arms Initiative',
    url: 'https://www.openarmsinitiative.com/',
    telephone: '+1-405-920-8934',
    email: 'info@openarmsinitiative.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1101 Sovereign Row, Unit A',
      addressLocality: 'Oklahoma City',
      addressRegion: 'OK',
      postalCode: '73108',
      addressCountry: 'US',
    },
  },
};

const SCHEMA_FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I know which counseling service I need?', acceptedAnswer: { '@type': 'Answer', text: 'You don’t have to determine that before contacting us. Tell our team a little about what you’re experiencing and the type of support you’re seeking. We can help you understand which available service may be appropriate.' } },
    { '@type': 'Question', name: 'Do you offer in-person and online counseling?', acceptedAnswer: { '@type': 'Answer', text: 'Open Arms Initiative offers in-person and online service options. Contact our team to discuss current availability and what may be appropriate for your needs.' } },
    { '@type': 'Question', name: 'Do you provide counseling for children and families?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open Arms Initiative provides services for children, adolescents, adults, couples, and families, along with broader family and foster support programs.' } },
    { '@type': 'Question', name: 'Do you offer pro bono counseling?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Open Arms Initiative provides pro bono counseling as part of its commitment to increasing access to mental health support. Eligibility and availability may vary, so please contact us for current program information.' } },
    { '@type': 'Question', name: 'How soon can I get an appointment?', acceptedAnswer: { '@type': 'Answer', text: 'Appointment availability can vary depending on the service, provider availability, and your scheduling needs. Contact Open Arms Initiative for current availability.' } },
    { '@type': 'Question', name: 'What if I’m not sure whether I need counseling?', acceptedAnswer: { '@type': 'Answer', text: 'That’s okay. You don’t need to know exactly what kind of support you need before contacting us. Start by telling us what’s happening, and we can help you explore the available options.' } },
  ],
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_CONTACT) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_FAQ) }} />
      {children}
    </>
  );
}
