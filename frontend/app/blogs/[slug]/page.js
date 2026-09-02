import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../blogData';
import { blogContent } from '../blogContent';
import FaqAccordion from '../FaqAccordion';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return { title: 'Post Not Found | Open Arms Initiative' };
  }
  return {
    title: `${post.title} | Open Arms Initiative`,
    description: post.excerpt,
  };
}

function ArticleBlock({ block, index }) {
  switch (block.type) {
    case 'intro-heading':
      return <p className="blog-post-intro-heading" dangerouslySetInnerHTML={{ __html: block.html }} />;
    case 'h2':
      return block.html
        ? <h2 className="blog-post-h2" dangerouslySetInnerHTML={{ __html: block.html }} />
        : <h2 className="blog-post-h2">{block.text}</h2>;
    case 'h3':
      return <h3 className="blog-post-h3">{block.text}</h3>;
    case 'p':
      return block.html
        ? <p className="blog-post-p" dangerouslySetInnerHTML={{ __html: block.html }} />
        : <p className="blog-post-p">{block.text}</p>;
    case 'figure':
      return (
        <figure className="blog-post-figure">
          <img src={block.image} alt={block.alt || ''} loading="lazy" />
        </figure>
      );
    case 'list':
      return (
        <ul className="blog-post-list">
          {block.items.map((item, i) => (
            item.html
              ? <li key={i} dangerouslySetInnerHTML={{ __html: item.html }} />
              : <li key={i}>{item.text}</li>
          ))}
        </ul>
      );
    case 'ordered-list':
      return (
        <ol className="blog-post-list blog-post-list-ordered">
          {block.items.map((item, i) => (
            item.html
              ? <li key={i} dangerouslySetInnerHTML={{ __html: item.html }} />
              : <li key={i}>{item.text}</li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <div className="blog-post-table-wrap">
          <table className="blog-post-table">
            <thead>
              <tr>
                {block.headers.map((h, i) => <th key={i}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

function QuoteGroup({ lines }) {
  return (
    <div className="blog-post-quote">
      {lines.map((line, i) => (
        <p className="blog-post-quote-line" key={i}>{line}</p>
      ))}
    </div>
  );
}

function groupFaqBlocks(blocks) {
  const grouped = [];
  for (const block of blocks) {
    if (block.type === 'faq') {
      const last = grouped[grouped.length - 1];
      if (last && last.type === 'faq-group') {
        last.items.push(block);
      } else {
        grouped.push({ type: 'faq-group', items: [block] });
      }
    } else if (block.type === 'quote') {
      const last = grouped[grouped.length - 1];
      if (last && last.type === 'quote-group') {
        last.lines.push(block.text);
      } else {
        grouped.push({ type: 'quote-group', lines: [block.text] });
      }
    } else {
      grouped.push(block);
    }
  }
  return grouped;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const content = blogContent[slug];

  if (!post || !content) {
    notFound();
  }

  return (
    <main className="blog-post-page">
      {/* Hero */}
      <section className="blog-post-hero">
        <h1 className="blog-post-title">{post.title}</h1>
        <div className="blog-post-meta">
          <span className="blog-post-date">{post.date}</span>
          <span className="blog-post-meta-dot" aria-hidden="true">&middot;</span>
          <Link href="/blogs" className="blog-post-cat">{post.category}</Link>
        </div>
      </section>

      {/* Article body */}
      <section className="blog-post-section">
        <div className="blog-post-container">
          <div className="blog-post-card">
            <div className="blog-post-thumb">
              <img src={post.image} alt={post.alt} />
            </div>

            <article className="blog-post-content">
              {groupFaqBlocks(content.blocks).map((block, i) => {
                if (block.type === 'faq-group') return <FaqAccordion items={block.items} key={i} />;
                if (block.type === 'quote-group') return <QuoteGroup lines={block.lines} key={i} />;
                return <ArticleBlock block={block} index={i} key={i} />;
              })}
            </article>

            {(content.previousPost || content.nextPost) && (
              <div className="blog-post-nav">
                {content.previousPost && (
                  <Link href={`/blogs/${content.previousPost.slug}`} className="blog-post-nav-card">
                    <span className="blog-post-nav-thumb">
                      <img src={content.previousPost.image} alt="Previous post thumbnail" />
                    </span>
                    <span className="blog-post-nav-text">
                      <span className="blog-post-nav-label">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6"/></svg>
                        Previous Post
                      </span>
                      <span className="blog-post-nav-title">{content.previousPost.title}</span>
                    </span>
                  </Link>
                )}
                {content.nextPost && (
                  <Link href={`/blogs/${content.nextPost.slug}`} className="blog-post-nav-card blog-post-nav-card-next">
                    <span className="blog-post-nav-text">
                      <span className="blog-post-nav-label">
                        Next Post
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
                      </span>
                      <span className="blog-post-nav-title">{content.nextPost.title}</span>
                    </span>
                    <span className="blog-post-nav-thumb">
                      <img src={content.nextPost.image} alt="Next post thumbnail" />
                    </span>
                  </Link>
                )}
              </div>
            )}
          </div>

          <div className="blog-comment-card">
            <h2 className="blog-comment-title">Leave a Comment</h2>
            <form className="blog-comment-form">
              <textarea
                className="blog-comment-textarea"
                placeholder="Write Your Comment...."
                rows={7}
              />
              <label className="blog-comment-checkbox-row">
                <input type="checkbox" />
                Save my name, email, and website in this browser for the next time I comment.
              </label>
              <button type="submit" className="blog-comment-submit">Post Comment</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
