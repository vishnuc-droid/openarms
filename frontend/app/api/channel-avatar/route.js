const CHANNEL_ID = 'UC71KnbvtzVAk9AZ4J3dVo2A';
const CHANNEL_URL = `https://www.youtube.com/channel/${CHANNEL_ID}`;

export async function GET() {
  try {
    const channelRes = await fetch(CHANNEL_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      next: { revalidate: 86400 },
    });
    if (!channelRes.ok) throw new Error('channel fetch failed');
    const html = await channelRes.text();
    const match = html.match(/"avatar":\{"thumbnails":\[\{"url":"([^"]+)"/);
    if (!match) throw new Error('avatar not found');

    const imgRes = await fetch(match[1], { next: { revalidate: 86400 } });
    if (!imgRes.ok) throw new Error('avatar image fetch failed');

    const buffer = await imgRes.arrayBuffer();
    return new Response(buffer, {
      headers: {
        'Content-Type': imgRes.headers.get('content-type') || 'image/jpeg',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (err) {
    return new Response(null, { status: 404 });
  }
}
