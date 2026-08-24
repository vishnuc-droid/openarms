'use client';

export default function BlogsPage() {
  return (
    <main style={{ background: '#ffffff' }}>
      <section style={{
        background: '#052E26',
        padding: '130px 24px 80px',
        textAlign: 'center',
        color: '#ffffff',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            background: '#2E6935',
            padding: '8px 20px',
            borderRadius: 4,
            fontWeight: 600,
            fontSize: 16,
            marginBottom: 24,
          }}>Blog</span>
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            fontWeight: 700,
            marginBottom: 16,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            Insights & Articles
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#e5e7eb',
            maxWidth: 640,
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Coming soon. Stay tuned for helpful articles, mental health insights, and community stories from the Open Arms Initiative team.
          </p>
        </div>
      </section>

      <section style={{
        padding: '80px 24px',
        maxWidth: 1100,
        margin: '0 auto',
      }}>
        <div style={{
          background: '#EDFFE1',
          borderRadius: 12,
          padding: '60px 40px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 700,
            color: '#052E26',
            marginBottom: 16,
          }}>Blog Posts Coming Soon</h2>
          <p style={{
            color: '#334155',
            lineHeight: 1.6,
            marginBottom: 24,
            maxWidth: 560,
            margin: '0 auto 24px',
          }}>
            We are preparing thoughtful articles on mental health, family wellness, trauma-informed care, and community support.
          </p>
          <a href="/contact" style={{
            display: 'inline-flex',
            padding: '14px 28px',
            background: '#8DC540',
            color: '#052E26',
            fontWeight: 700,
            borderRadius: 4,
          }}>Get In Touch</a>
        </div>
      </section>
    </main>
  );
}
