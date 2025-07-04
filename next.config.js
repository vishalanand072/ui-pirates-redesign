/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images for better performance
  images: {
    domains: ["res.cloudinary.com"],
    formats: ["image/webp", "image/avif"],
  },

  // Enable compression
  compress: true,

  // Generate sitemap and robots.txt
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      {
        source: "/bing-sitemap.xml",
        destination: "/api/bing-sitemap",
      },
    ];
  },

  // Add security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
