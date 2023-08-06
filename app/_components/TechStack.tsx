"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

function TechStack() {
  const [logo, setLogo] = useState(false)

  useEffect(() => {
    const logos = document.querySelectorAll(".stack")
    logos.forEach((span, index) => {
      setTimeout(
        () => {
          span.classList.add("logo")
        },
        225 * index + 1700
      )
    })
    setLogo(true)
  }, [])

  return (
    <div className="stack-width flex gap-5 sm:gap-11 md:gap-14 py-16  vvvlate justify-between items-center">
      <Link href="https://en.wikipedia.org/wiki/HTML" className="flex stack">
        <Image src="/html.svg" alt="HTML" width={40} height={40} />
      </Link>
      <Link href="https://en.wikipedia.org/wiki/CSS" className="flex stack">
        <Image src="/css.svg" alt="CSS" width={40} height={40} />
      </Link>
      <Link
        href="https://en.wikipedia.org/wiki/JavaScript"
        className="flex stack">
        <Image src="/javascript.svg" width={40} height={40} alt="Javascript" />
      </Link>
      <Link href="https://www.typescriptlang.org" className="flex stack">
        <Image src="/Typescript.svg" width={40} height={40} alt="TypeScript" />
      </Link>
      <Link href="https://react.dev" className="flex stack">
        <Image src="/react.svg" width={40} height={40} alt="React" />
      </Link>
      <Link href="https://nextjs.org" className="flex stack">
        <Image src="/nextjs2.svg" width={40} height={40} alt="NextJs" />
      </Link>
      <Link href="https://tailwindcss.com" className="flex stack">
        <Image src="/tw.svg" width={50} height={50} alt="TailwindCSS" />
      </Link>
    </div>
  )
}

export default TechStack
