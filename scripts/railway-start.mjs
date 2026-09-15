// Railway supplies RAILWAY_PUBLIC_DOMAIN after a public domain is generated.
// Use it automatically for canonical URLs and tenant share links, while still
// allowing an explicit NEXT_PUBLIC_APP_URL override for a custom domain.
if (!process.env.NEXT_PUBLIC_APP_URL && process.env.RAILWAY_PUBLIC_DOMAIN) {
  process.env.NEXT_PUBLIC_APP_URL = `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`;
}

await import('./server.js');
