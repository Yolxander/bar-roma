import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bar Roma',
  description: 'Experience the enchanting midnight garden vibe',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <head>
          {/* Google Analytics */}
          <Script
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-DBVYFK7C8F"
          />
          <Script id="google-analytics" strategy="afterInteractive">
              {`
                   window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
             
                      gtag('config', 'G-DBVYFK7C8F');
                `}
          </Script>
      </head>
      <body className={inter.className}>{children}</body>
      </html>
  )
}