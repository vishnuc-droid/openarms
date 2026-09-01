import BlogListClient from './BlogListClient';

export const metadata = {
  title: 'Blog | Open Arms Initiative',
  description: 'Helpful articles, mental health insights, and community stories from the Open Arms Initiative team.',
};

export default function BlogsPage() {
  return <BlogListClient page={1} />;
}
