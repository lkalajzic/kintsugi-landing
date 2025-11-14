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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://*.clarity.ms",
              "img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com https://www.facebook.com https://*.clarity.ms https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.facebook.com https://*.clarity.ms",
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
