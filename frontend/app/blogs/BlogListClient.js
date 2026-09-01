'use client';

import Link from 'next/link';
import { blogPosts } from './blogData';

const POSTS_PER_PAGE = 10;
const TOTAL_PAGES = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

export default function BlogListClient({ page = 1 }) {
  const currentPage = Math.min(Math.max(page, 1), TOTAL_PAGES);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = blogPosts.slice(start, start + POSTS_PER_PAGE);

  const pageHref = (p) => (p === 1 ? '/blogs' : `/blogs/page/${p}`);

  return (
    <main className="blog-list-page">
      {/* Hero / breadcrumb */}
      <section className="blog-hero-section">
        <div className="blog-hero-breadcrumb">
          <Link href="/" className="blog-hero-breadcrumb-item">Home</Link>
          <span className="blog-hero-breadcrumb-sep" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
          </span>
          <span className="blog-hero-breadcrumb-active">Blog</span>
        </div>
        <h1 className="blog-hero-title">Blog</h1>
      </section>

      {/* Post list */}
      <section className="blog-list-section">
        <div className="blog-list-container">
          {posts.map((post) => (
            <article className="blog-list-card" key={post.slug}>
              <div className="blog-list-content blog-list-content-top">
                <div className="blog-list-cat">
                  <Link href="/blogs">{post.category}</Link>
                </div>
                <h2 className="blog-list-title">
                  <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                </h2>
                <div className="blog-list-date">{post.date}</div>
              </div>
              <Link href={`/blogs/${post.slug}`} className="blog-list-thumb">
                <img src={post.image} alt={post.alt} loading="lazy" />
              </Link>
              <div className="blog-list-content blog-list-content-bottom">
                <p className="blog-list-excerpt">{post.excerpt}</p>
                <Link href={`/blogs/${post.slug}`} className="blog-list-readmore">Continue reading...</Link>
              </div>
            </article>
          ))}

          {/* Pagination */}
          {TOTAL_PAGES > 1 && (
            <nav className="blog-pagination" aria-label="Blog pagination">
              {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={pageHref(p)}
                  className={`blog-pagination-item${p === currentPage ? ' active' : ''}`}
                  aria-current={p === currentPage ? 'page' : undefined}
                >
                  {p}
                </Link>
              ))}
              {currentPage < TOTAL_PAGES && (
                <Link href={pageHref(currentPage + 1)} className="blog-pagination-item blog-pagination-next" aria-label="Next page">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>
    </main>
  );
}
