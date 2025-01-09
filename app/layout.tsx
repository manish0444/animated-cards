import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Course Explorer',
  description: 'Explore our classes and master trending skills!',
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

