/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vz-e9524ece-36a.b-cdn.net',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://www.googleadservices.com https://*.doubleclick.net https://connect.facebook.net https://*.clarity.ms https://js.stripe.com",
              "img-src 'self' data: https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://www.googleadservices.com https://*.doubleclick.net https://www.google.hr https://www.google.com https://www.facebook.com https://*.clarity.ms https://c.bing.com https://fonts.gstatic.com https://*.stripe.com",
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://analytics.google.com https://region1.analytics.google.com https://*.doubleclick.net https://www.google.com https://www.facebook.com https://*.clarity.ms https://api.stripe.com",
              "frame-src https://www.googletagmanager.com https://js.stripe.com https://hooks.stripe.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
