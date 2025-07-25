import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import MaintenanceModal from '../components/maintenance-modal'

export const metadata: Metadata = {
  title: 'Mythbots',
  description: 'Created with Mythbots',
  generator: 'Mythbots',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {/* Modal de mantenimiento, aparece primero */}
        <MaintenanceModal />
        {children}
      </body>
    </html>
  )
}
