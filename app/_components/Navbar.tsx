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
    <div className="flex justify-between items-center w-full h-32 py-10 pr-2">
      <Link href="/" className="animate">
        <button className="px-5 py-2 hover:bg-black hover:text-white font-semibold text-sm rounded-full transition-all ease-in-out duration-700">
          Hady Awayda
        </button>
      </Link>
      <div className="flex justify-between items-center lg:w-96">
        <Link href="#projects" className=" animate early">
          <button className="px-4 py-2 hover:bg-black hover:text-white font-semibold text-sm rounded-full transition-all ease-in-out duration-700">
            Projects
          </button>
        </Link>
        <Link href="#projects" className="animate mid">
          <button className="px-4 py-2 hover:bg-black hover:text-white font-semibold text-sm rounded-full transition-all ease-in-out duration-700">
            About me
          </button>
        </Link>
        <Link href="#projects" className="animate late">
          <button className="px-4 py-2 hover:bg-black hover:text-white font-semibold text-sm rounded-full transition-all ease-in-out duration-700">
            Contact me
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
