import { NextResponse } from "next/server";

export async function GET() {
  // Bing-compatible sitemap without anchor links
  const pages = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/about", priority: "0.8", changefreq: "monthly" },
  ];
  const baseUrl = "https://uipirate.com";
  const currentDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
  .map(
    (page) =>
      `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { 
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
