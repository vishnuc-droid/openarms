const CHANNEL_ID = 'UC71KnbvtzVAk9AZ4J3dVo2A';
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

function extractAll(pattern, xml) {
  return [...xml.matchAll(pattern)].map((m) => m[1]);
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export async function GET() {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) {
      throw new Error(`Feed request failed with status ${res.status}`);
    }
    const xml = await res.text();
    const entries = xml.split('<entry>').slice(1);

    const videos = entries.map((entry) => {
      const videoId = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? '';
      const title = decodeEntities(entry.match(/<title>([^<]+)<\/title>/)?.[1] ?? '');
      const published = entry.match(/<published>([^<]+)<\/published>/)?.[1] ?? '';
      return {
        videoId,
        title,
        published,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      };
    }).filter((v) => v.videoId);

    return Response.json({ videos: videos.slice(0, 18) });
  } catch (err) {
    return Response.json({ videos: [], error: 'Unable to load videos right now.' }, { status: 200 });
  }
}
