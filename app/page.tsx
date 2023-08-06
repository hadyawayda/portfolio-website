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
      setTimeout(() => {
        span.classList.add("cssshow")
      }, 75 * index)
    })
    setIsAnimating(true)
  }, [])

  return (
    <main className="flex flex-col justify-start items-center w-full h-full text-lg px-4">
      <section className="flex flex-col lg:flex-row justify-between items-start w-full gap-2">
        <div className="lg:w-5/12 mt-10 md:mt-15 lg:mt-20 h-full order-2">
          <h1 className="bg-clip-text text-center lg:text-left tracking-tight vlate text-5xl md:text-6xl lg:text-7xl font-medium expanded cssgradient bg-contain">
            <span className="css transition-all duration-20">S</span>
            <span className="css transition-all duration-200">o</span>
            <span className="css transition-all duration-200">f</span>
            <span className="css transition-all duration-200">t</span>
            <span className="css transition-all duration-200">w</span>
            <span className="css transition-all duration-200">a</span>
            <span className="css transition-all duration-200">r</span>
            <span className="css transition-all duration-200">e </span>
            <span className="css transition-all duration-200">& </span>
            <span className="css transition-all duration-200">W</span>
            <span className="css transition-all duration-200">e</span>
            <span className="css transition-all duration-200">b </span>
            <span className="css transition-all duration-200">D</span>
            <span className="css transition-all duration-200">e</span>
            <span className="css transition-all duration-200">v</span>
            <span className="css transition-all duration-200">e</span>
            <span className="css transition-all duration-200">l</span>
            <span className="css transition-all duration-200">o</span>
            <span className="css transition-all duration-200">p</span>
            <span className="css transition-all duration-200">e</span>
            <span className="css transition-all duration-200">r</span>
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
        <div className="flex lg:flex-col justify-center gap-20 lg:gap-0 w-full lg:justify-start items-center h-full lg:w-4/12 xl:w-5/12  order-1 lg:order-3">
          <div className="w-72 flex justify-center">
            <Me />
          </div>
          <div className="hidden md:flex flex-col">
            <Socials />
            <Download />
          </div>
        </div>
      </section>
    </main>
  )
}
