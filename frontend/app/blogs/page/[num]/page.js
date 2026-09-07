import { notFound } from 'next/navigation';
import BlogListClient from '../../BlogListClient';
import { blogPosts } from '../../blogData';

const SITE_URL = 'https://www.openarmsinitiative.com';
const POSTS_PER_PAGE = 10;
const TOTAL_PAGES = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

export function generateStaticParams() {
  return Array.from({ length: TOTAL_PAGES - 1 }, (_, i) => ({ num: String(i + 2) }));
}

export async function generateMetadata({ params }) {
  const { num } = await params;
  return {
    title: `Blog | Page ${num} | Open Arms Initiative`,
    description: 'Helpful articles, mental health insights, and community stories from the Open Arms Initiative team.',
    alternates: { canonical: `${SITE_URL}/blogs/page/${num}/` },
  };
}

export default async function BlogPagePage({ params }) {
  const { num } = await params;
  const page = Number(num);
  if (!Number.isInteger(page) || page < 2 || page > TOTAL_PAGES) {
    notFound();
  }

  const start = (page - 1) * POSTS_PER_PAGE;
  const posts = blogPosts.slice(start, start + POSTS_PER_PAGE);

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blogs/` },
      { '@type': 'ListItem', position: 3, name: `Page ${page}`, item: `${SITE_URL}/blogs/page/${page}/` },
    ],
  };

  const schemaBlog = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Open Arms Initiative Blog',
    description: 'Helpful articles, mental health insights, and community stories from the Open Arms Initiative team.',
    url: `${SITE_URL}/blogs/page/${page}/`,
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${SITE_URL}/blogs/${post.slug}/`,
      image: `${SITE_URL}${encodeURI(post.image)}`,
      datePublished: new Date(post.date).toISOString(),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBlog) }} />
      <BlogListClient page={page} />
    </>
  );
}
