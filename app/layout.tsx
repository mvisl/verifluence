import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Verifluence - Crypto Casino Prototype',
  description: 'Прототип криптоказино с навигацией по экранам Figma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}


