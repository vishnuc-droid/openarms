<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html>
<head>
<title>XML Sitemap — Open Arms Initiative</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
  * { box-sizing: border-box; }
  body { margin: 0; padding: 40px 24px; font-family: 'Segoe UI', Arial, sans-serif; background: #F3FBFD; color: #072B3A; }
  .wrap { max-width: 1000px; margin: 0 auto; }
  h1 { font-size: 24px; margin: 0 0 6px; color: #072B3A; }
  .sub { color: #4a5c66; font-size: 14px; margin: 0 0 24px; }
  .count { display: inline-block; background: #E4F8FC; color: #0170ED; font-weight: 700; font-size: 13px; padding: 6px 14px; border-radius: 999px; margin-bottom: 20px; }
  table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 24px rgba(7,43,58,.08); }
  thead th { text-align: left; background: linear-gradient(100deg, #072B3A 0%, #0170ED 100%); color: #fff; font-size: 13px; text-transform: uppercase; letter-spacing: .04em; padding: 14px 16px; }
  tbody td { padding: 12px 16px; font-size: 14px; border-top: 1px solid #E4F8FC; vertical-align: top; }
  tbody tr:hover { background: #F3FBFD; }
  a { color: #0170ED; text-decoration: none; word-break: break-all; }
  a:hover { text-decoration: underline; }
  .meta { color: #6b7f88; font-size: 13px; white-space: nowrap; }
  .prio { display: inline-block; min-width: 34px; text-align: center; font-weight: 700; color: #0170ED; }
  footer { margin-top: 24px; font-size: 12px; color: #8ca0a8; text-align: center; }
</style>
</head>
<body>
<div class="wrap">
  <h1>XML Sitemap</h1>
  <p class="sub">Open Arms Initiative — machine-readable sitemap for search engines. Humans are welcome to look too.</p>
  <span class="count"><xsl:value-of select="count(sm:urlset/sm:url)" /> URLs</span>
  <table>
    <thead>
      <tr>
        <th>URL</th>
        <th>Last Modified</th>
        <th>Change Frequency</th>
        <th>Priority</th>
      </tr>
    </thead>
    <tbody>
      <xsl:for-each select="sm:urlset/sm:url">
        <tr>
          <td><a href="{sm:loc}"><xsl:value-of select="sm:loc" /></a></td>
          <td class="meta"><xsl:value-of select="substring(sm:lastmod, 1, 10)" /></td>
          <td class="meta"><xsl:value-of select="sm:changefreq" /></td>
          <td><span class="prio"><xsl:value-of select="sm:priority" /></span></td>
        </tr>
      </xsl:for-each>
    </tbody>
  </table>
  <footer>Generated automatically from the site's route configuration.</footer>
</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
