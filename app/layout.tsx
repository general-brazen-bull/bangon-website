import React from "react"
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { AgeGate } from "@/components/AgeGate"


export const metadata: Metadata = {
  title: 'Bang On | 99 Proof Super Concentrated Liqueur',
  description: 'Bang On is a Canadian-made, 99-proof, super-concentrated flavoured liqueur. Bold flavours. Big energy. Made in British Columbia.',
  generator: 'v0.app',
  keywords: ['liqueur', 'flavoured liqueur', '99 proof', 'Canadian spirits', 'BC distillery', 'Bang On'],
  authors: [{ name: 'Brazen Bull Creative' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Bang On | 99 Proof Super Concentrated Liqueur',
    description: 'Canadian-made, 99-proof, super-concentrated flavoured liqueur. Big Banana. Ripe Raspberry. Made in BC.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#f3db03',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
        <AgeGate />

      </body>
    </html>
  )
}