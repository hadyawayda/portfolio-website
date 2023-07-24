import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "./_components/Footer"
import Navbar from "./_components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hady Awayda",
  description: "Freelance Software & Web Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen min-w-full flex-col items-center justify-between`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
