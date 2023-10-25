export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://davidhtnguyen.com/sitemap.xml",
    host: "https://davidhtnguyen.com",
  };
}
