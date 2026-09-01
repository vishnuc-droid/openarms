import { notFound } from 'next/navigation';
import BlogListClient from '../../BlogListClient';
import { blogPosts } from '../../blogData';

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
  };
}

export default async function BlogPagePage({ params }) {
  const { num } = await params;
  const page = Number(num);
  if (!Number.isInteger(page) || page < 2 || page > TOTAL_PAGES) {
    notFound();
  }
  return <BlogListClient page={page} />;
}
