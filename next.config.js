/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://www.googleadservices.com https://*.doubleclick.net https://connect.facebook.net https://*.clarity.ms",
              "img-src 'self' data: https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://www.googleadservices.com https://*.doubleclick.net https://www.google.hr https://www.facebook.com https://*.clarity.ms https://fonts.gstatic.com",
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://region1.analytics.google.com https://*.doubleclick.net https://www.facebook.com https://*.clarity.ms",
              "frame-src https://www.googletagmanager.com",
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
