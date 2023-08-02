"use client"

import Link from "next/link"
import { useEffect } from "react"
import Menu from "./HamMenu"

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
        <button className="px-5 py-2 hover:bg-black hover:text-white font-semibold rounded-full transition-all ease-in-out duration-700 text-lg expanded tracking-tight">
          Hady Awayda
        </button>
      </Link>
      <Menu />
      <div className="md:flex justify-between hidden items-center lg:w-96">
        <Link href="#projects" className=" animate early">
          <button className="px-4 py-2 hover:bg-black hover:text-white font-semibold rounded-full transition-all ease-in-out duration-700 text-lg expanded tracking-tight">
            My Work
          </button>
        </Link>
        <Link href="#about" className="animate mid">
          <button className="px-4 py-2 hover:bg-black hover:text-white font-semibold rounded-full transition-all ease-in-out duration-700 text-lg expanded tracking-tight">
            About me
          </button>
        </Link>
        <Link href="#contact" className="animate late">
          <button className="px-4 py-2 hover:bg-black hover:text-white font-semibold rounded-full transition-all ease-in-out duration-700 text-lg expanded tracking-tight">
            Contact me
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
