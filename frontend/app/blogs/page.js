import BlogListClient from './BlogListClient';
import { blogPosts } from './blogData';

const SITE_URL = 'https://www.openarmsinitiative.com';
const POSTS_PER_PAGE = 10;

export const metadata = {
  title: 'Blog | Open Arms Initiative',
  description: 'Helpful articles, mental health insights, and community stories from the Open Arms Initiative team.',
  alternates: { canonical: `${SITE_URL}/blogs/` },
};

const SCHEMA_BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blogs/` },
  ],
};

const SCHEMA_BLOG = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Open Arms Initiative Blog',
  description: 'Helpful articles, mental health insights, and community stories from the Open Arms Initiative team.',
  url: `${SITE_URL}/blogs/`,
  blogPost: blogPosts.slice(0, POSTS_PER_PAGE).map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    url: `${SITE_URL}/blogs/${post.slug}/`,
    image: `${SITE_URL}${encodeURI(post.image)}`,
    datePublished: new Date(post.date).toISOString(),
  })),
};

export default function BlogsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_BLOG) }} />
      <BlogListClient page={1} />
    </>
  );
}
