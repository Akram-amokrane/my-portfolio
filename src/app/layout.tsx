"use client"

import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akram Amokrane',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
