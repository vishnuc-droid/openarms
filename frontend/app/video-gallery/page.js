'use client';

import { useEffect, useState } from 'react';

const PAGE_SIZE = 9;
const CHANNEL_URL = 'https://www.youtube.com/@OpenArmsInitiativeokc';

export default function VideoGalleryPage() {
  const [videos, setVideos] = useState([]);
  const [channelAvatar, setChannelAvatar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/youtube-videos')
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        setVideos(data.videos || []);
        setChannelAvatar(data.channelAvatar || null);
        setActiveVideo((data.videos && data.videos[0]) || null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const selectVideo = (video) => {
    setActiveVideo(video);
    if (typeof window !== 'undefined') {
      document.getElementById('featured-video-player')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const visibleVideos = videos.slice(0, visibleCount);

  return (
    <main style={{ background: '#ffffff' }}>
      <section style={{
        background: '#F4F9F0',
        padding: '80px 24px 60px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            background: '#DCEFC7',
            color: '#052E26',
            padding: '8px 20px',
            borderRadius: 4,
            fontWeight: 600,
            fontSize: 15,
            marginBottom: 24,
          }}>Our Video Library</span>
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            fontWeight: 800,
            marginBottom: 16,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: '#1a1a2e',
          }}>
            Find Us On YouTube
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#334155',
            maxWidth: 640,
            lineHeight: 1.6,
          }}>
            New videos are added regularly and can be watched here without signing in or using social media.
          </p>
        </div>
      </section>

      <section id="featured-video-player" style={{ padding: '48px 24px 0', maxWidth: 1100, margin: '0 auto' }}>
        {loading ? (
          <div className="video-player-frame" style={{ background: '#e5e7eb' }} />
        ) : activeVideo ? (
          <>
            <div className="video-player-header">
              {channelAvatar ? (
                <img src={channelAvatar} alt="Open Arms Initiative" className="video-player-avatar" />
              ) : (
                <span className="video-player-avatar video-player-avatar-fallback" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>
                </span>
              )}
              <div>
                <p className="video-player-title">{activeVideo.title}</p>
                <p className="video-player-channel">Open Arms Initiative</p>
              </div>
            </div>
            <div className="video-player-frame">
              <iframe
                key={activeVideo.videoId}
                className="video-player-iframe"
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </>
        ) : (
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
            }}>Videos Coming Soon</h2>
            <p style={{ color: '#334155', lineHeight: 1.6, maxWidth: 560, margin: '0 auto' }}>
              We're unable to load videos right now. Check back shortly, or visit our YouTube channel directly.
            </p>
          </div>
        )}
      </section>

      {videos.length > 1 && (
        <section style={{ padding: '48px 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
          <div className="video-gallery-grid">
            {visibleVideos.map((video) => (
              <button
                type="button"
                key={video.videoId}
                className={`video-gallery-thumb${activeVideo?.videoId === video.videoId ? ' active' : ''}`}
                onClick={() => selectVideo(video)}
              >
                <span className="video-gallery-thumb-img" style={{ backgroundImage: `url(${video.thumbnail})` }}>
                  <span className="video-gallery-thumb-play" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff"><path d="M8 5v14l11-7Z"/></svg>
                  </span>
                </span>
                <span className="video-gallery-thumb-title">{video.title}</span>
              </button>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40, display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            {visibleCount < videos.length && (
              <button
                type="button"
                className="video-gallery-loadmore"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              >
                Load More...
              </button>
            )}
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="video-gallery-subscribe"
            >
              <svg viewBox="0 0 28 20" width="22" height="16" aria-hidden="true"><rect width="28" height="20" rx="5" fill="#FF0000"/><path d="M11 6.2 19 10l-8 3.8Z" fill="#ffffff"/></svg>
              Subscribe
            </a>
          </div>
        </section>
      )}
    </main>
  );
}
