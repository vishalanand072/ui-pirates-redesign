import { NextResponse } from "next/server";

export async function GET() {
  const pages = ["/", "/#Work", "/#Services", "/#Pricing", "/#FAQs"];
  const baseUrl = "https://yourwebsite.com";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) =>
          `<url><loc>${baseUrl}${page}</loc><priority>0.8</priority></url>`
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
