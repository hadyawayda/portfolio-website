import Link from "next/link"
import Image from "next/image"
import Tailwind from "./TechStackIcons/Tailwind"

function TechStack() {
  return (
    <div className="w-full flex justify-center items-center pr-24">
      <div className="w-full justify-items-center grid grid-cols-7 gap-x-4 gap-y-6 md:mt-0 py-4 md:py-12 md:px-20 lg:px-20 xlate">
        <Link href="https://en.wikipedia.org/wiki/HTML" className="flex">
          <Image src="/html.svg" alt="HTML" width={40} height={40} />
        </Link>
        <Link href="https://en.wikipedia.org/wiki/CSS" className="flex">
          <Image src="/css.svg" alt="CSS" width={40} height={40} />
        </Link>
        <Link href="https://en.wikipedia.org/wiki/JavaScript" className="flex">
          <Image
            src="/javascript.svg"
            width={40}
            height={40}
            alt="Javascript"
          />
        </Link>
        <Link href="https://www.typescriptlang.org" className="flex">
          <Image
            src="/Typescript.svg"
            width={40}
            height={40}
            alt="TypeScript"
          />
        </Link>
        <Link href="https://react.dev" className="flex">
          <Image src="react.svg" width={40} height={40} alt="React" />
        </Link>
        <Link href="https://nextjs.org" className="flex">
          <Image src="nextjs2.svg" width={40} height={40} alt="NextJs" />
        </Link>
        <Link href="https://tailwindcss.com" className="flex w-10 h-10">
          <Image src="tailwind.svg" width={40} height={40} alt="TailwindCSS" />
        </Link>
      </div>
    </div>
  )
}

export default TechStack
