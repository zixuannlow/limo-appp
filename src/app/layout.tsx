import "./globals.css"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TSS LIMOs - Quality Limo Services",
  description: "Providing Quality Limo Services",
  icons: {
    icon: [
      {
        url: "/images/favicon.png",
        href: "/images/favicon.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}