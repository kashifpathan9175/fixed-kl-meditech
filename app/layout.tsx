import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KL Meditech',
  description: 'Leading provider of medical technology solutions',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
