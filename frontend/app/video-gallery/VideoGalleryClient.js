'use client';

import { useState } from 'react';
import { videos } from './videoData';

const PAGE_SIZE = 9;

export default function VideoGalleryClient() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleVideos = videos.slice(0, visibleCount);
  const hasMore = visibleCount < videos.length;

  return (
    <main className="video-gallery-page">
      <section className="video-gallery-hero">
        <h1 className="video-gallery-title">Find Us On YouTube</h1>
        <p className="video-gallery-subtitle">
          New videos are added regularly and can be watched here without signing in or using social media.
        </p>
      </section>

      <section className="video-gallery-section">
        <div className="video-gallery-featured">
          <div className="video-gallery-featured-frame">
            <iframe
              key={activeVideo.id}
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h2 className="video-gallery-featured-title">{activeVideo.title}</h2>
        </div>

        <div className="video-gallery-grid">
          {visibleVideos.map((video) => (
            <button
              type="button"
              className={`video-gallery-card${video.id === activeVideo.id ? ' active' : ''}`}
              key={video.id}
              onClick={() => setActiveVideo(video)}
              aria-label={`Play video: ${video.title}`}
            >
              <span className="video-gallery-thumb">
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  loading="lazy"
                />
                <span className="video-gallery-play" aria-hidden="true">
                  <svg viewBox="0 0 68 48" width="40" height="28">
                    <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.98 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#0170ED"/>
                    <path d="M45 24 27 14v20" fill="#fff"/>
                  </svg>
                </span>
              </span>
              <span className="video-gallery-card-title">{video.title}</span>
            </button>
          ))}
        </div>

        <div className="video-gallery-actions">
          {hasMore && (
            <button
              type="button"
              className="video-gallery-load-more"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            >
              Load More
            </button>
          )}

          <a
            className="video-gallery-follow"
            href="https://www.youtube.com/channel/UC71KnbvtzVAk9AZ4J3dVo2A"
            target="_blank"
            rel="noopener"
          >
            <svg viewBox="0 0 576 512" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
            </svg>
            Follow on YouTube
          </a>
        </div>
      </section>
    </main>
  );
}
