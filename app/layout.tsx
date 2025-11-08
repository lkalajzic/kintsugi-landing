import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kintsugi Class - Learn The Ancient Japanese Art of Golden Repair',
  description: 'Learn how to repair broken ceramics with gold from a 30-year Kyoto master. Turn worthless into priceless with this ancient Japanese technique.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
