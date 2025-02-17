import './globals.css'

import type { Metadata } from 'next'

import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'aspirity',
  description: 'task',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen max-w-[1494px] m-auto bg-[black] text-[white]">
        <Header />
        <>{children}</>
      </body>
    </html>
  )
}
