import Link from "next/link"
import Image from "next/image"
import Tailwind from "./TechStackIcons/Tailwind"

function TechStack() {
  return (
    <div className="w-full flex justify-between items-center mt-5 py-12 px-4 pr-11 animate xlate">
      <Link href="https://en.wikipedia.org/wiki/HTML" className="flex">
        <Image src="/html.svg" alt="HTML" width={40} height={40} />
      </Link>
      <Link href="https://en.wikipedia.org/wiki/CSS" className="flex">
        <Image src="/css.svg" alt="CSS" width={40} height={40} />
      </Link>
      <Link href="https://en.wikipedia.org/wiki/JavaScript" className="flex">
        <Image src="/javascript.svg" width={40} height={40} alt="Javascript" />
      </Link>
      <Link href="https://www.typescriptlang.org" className="flex">
        <Image src="/Typescript.svg" width={40} height={40} alt="TypeScript" />
      </Link>
      <Link href="https://react.dev" className="flex">
        <Image src="react.svg" width={40} height={40} alt="React" />
      </Link>
      <Link href="https://nextjs.org" className="flex">
        <Image src="nextjs2.svg" width={40} height={40} alt="NextJs" />
      </Link>
      <Link href="https://tailwindcss.com" className="flex w-12 h-12">
        <Tailwind />
      </Link>
    </div>
  )
}

export default TechStack
