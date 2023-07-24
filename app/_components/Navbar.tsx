"use client"

import Link from "next/link"
import { useEffect } from "react"

function Navbar() {
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
    <div className="flex justify-between items-center w-full h-32 lg:py-10 lg:px-20">
      <Link
        href="/"
        className="px-5 py-2 hover:bg-black hover:text-white font-semibold text-sm rounded-full transition-all ease-in-out duration-700 animate">
        Hady Awayda
      </Link>
      <div className="flex justify-between items-center lg:w-96">
        <Link href="#projects">
          <button className="px-5 py-2 hover:bg-black hover:text-white font-semibold text-sm rounded-full transition-all ease-in-out duration-700 animate early">
            Projects
          </button>
        </Link>
        <Link href="#projects">
          <button className="px-5 py-2 hover:bg-black hover:text-white font-semibold text-sm rounded-full transition-all ease-in-out duration-700 animate mid">
            About Me
          </button>
        </Link>
        <Link href="#projects">
          <button className="px-5 py-2 hover:bg-black hover:text-white font-semibold text-sm rounded-full transition-all ease-in-out duration-700 animate late">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
