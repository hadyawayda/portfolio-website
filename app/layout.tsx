"use client"

import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "./_components/Footer"
import Navbar from "./_components/Navbar"
import { useEffect } from "react"

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
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      })
    })
    document.querySelectorAll(".animate").forEach((el) => observer.observe(el))
  }, [])

  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen min-w-full flex-col items-center justify-between font-semibold text-sm`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
