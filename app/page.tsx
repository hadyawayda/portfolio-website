"use client"

import TechStack from "./_components/TechStack"
import Socials from "./_components/Socials"
import Me from "./_components/Me"
import Download from "./_components/Download"
import "./page.css"
import { useEffect, useState } from "react"

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const spans = document.querySelectorAll(".css")
    spans.forEach((span, index) => {
      setTimeout(
        () => {
          span.classList.add("cssshow")
          span.classList.add("cssblack")
        },
        75 * index + 1350
      )
    })
    setIsAnimating(true)
  }, [])

  return (
    <main className="flex flex-col justify-start items-center w-full h-full text-lg px-4">
      <section className="flex flex-col justify-between items-center w-full gap-2">
        <div className="lg:w-9/12 flex flex-col items-center mt-10 md:mt-15 lg:mt-20 h-full order-2">
          <h1 className="bg-clip-text text-center lg:text-left tracking-tight animate vvvlate text-5xl md:text-6xl lg:text-7xl font-medium expanded cssgradient bg-contain">
            <span className="css">S</span>
            <span className="css">o</span>
            <span className="css">f</span>
            <span className="css">t</span>
            <span className="css">w</span>
            <span className="css">a</span>
            <span className="css">r</span>
            <span className="css">e </span>
            <span className="css">& </span>
            <span className="css">W</span>
            <span className="css">e</span>
            <span className="css">b </span>
            <span className="css">D</span>
            <span className="css">e</span>
            <span className="css">v</span>
            <span className="css">e</span>
            <span className="css">l</span>
            <span className="css">o</span>
            <span className="css">p</span>
            <span className="css">e</span>
            <span className="css">r</span>
          </h1>
          <TechStack />
          <h2 className=" font-normal vvlate text-2xl mb-8">
            Hi, I'm Hady, I'm an aspiring Developer based in Beirut, Lebanon.
          </h2>
          <p className=" font-normal vvvlate text-2xl">
            I love what I do, and I am very passionate about learning new
            technologies.
          </p>
        </div>
        <div className="flex lg:flex-col justify-center gap-20 lg:gap-0 w-full lg:justify-start items-center h-full lg:w-4/12 xl:w-5/12  order-1">
          <div className="w-72 flex justify-center">
            <Me />
          </div>
        </div>
      </section>
    </main>
  )
}
