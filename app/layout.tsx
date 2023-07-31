import "./globals.css"
import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import Footer from "./_components/Footer"
import Navbar from "./_components/Navbar"

// const inter = Inter({ subsets: ["latin"] })

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
        className={` flex min-h-screen min-w-full flex-col items-center justify-between font-semibold text-sm scrollbar-none px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
