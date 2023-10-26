import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'UPI ScanMate',
  description: 'Payment QR Code Generator with preset Amounts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
          <meta property="og:image" content="/192.png"></meta>
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
