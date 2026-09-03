import { blogPosts } from '../blogs/blogData';

const SITE_URL = 'https://www.openarmsinitiative.com';

const staticRoutes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about-us', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/location', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/careers', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/video-gallery', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/insurance-payment', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blogs', priority: 0.7, changeFrequency: 'weekly' },

  // Counseling & Therapy services
  { path: '/adult-counseling-oklahoma-city', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/child-counseling-services-oklahoma-city', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/marriage-counseling-oklahoma-city', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/family-therapy-oklahoma-city', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/grief-counseling-oklahoma-city', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/depression-anxiety-counseling-oklahoma', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/foster-care', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/family-support-services-oklahoma-city', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/parenting-classes-okc', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/local-referrals', priority: 0.7, changeFrequency: 'monthly' },

  // Non-Profit
  { path: '/pro-bono-counseling-okc', priority: 0.7, changeFrequency: 'monthly' },

  // Training & Speaking
  { path: '/corporate-business-training', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/trauma-mental-health-training', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/training/jamie-james', priority: 0.5, changeFrequency: 'monthly' },
];

function escapeXml(value) {
  return String(value).replace(/[<>&'"]/g, (c) => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;',
  }[c]));
}

export async function GET() {
  const now = new Date().toISOString();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: isNaN(Date.parse(post.date)) ? now : new Date(post.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const entries = [...staticEntries, ...blogEntries];

  const body = entries
    .map(
      (e) => `<url>
<loc>${escapeXml(e.url)}</loc>
<lastmod>${e.lastModified}</lastmod>
<changefreq>${e.changeFrequency}</changefreq>
<priority>${e.priority}</priority>
</url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
