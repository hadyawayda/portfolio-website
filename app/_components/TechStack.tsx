import Link from "next/link"
import Image from "next/image"
import Tailwind from "./TechStackIcons/Tailwind"

function TechStack() {
  return (
    <div className="w-full flex justify-center items-center lg:pr-8 xl:pr-20">
      <div className="w-full flex flex-wrap gap-9 md:gap-10 gap-y-8 md:mt-0 py-12 px-4 sm:px-5 md:py-14 md:px-10 lg:gap-9 lg:px-0 xl:gap-12  xl:px-12 xlate justify-center">
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
          <Image src="/react.svg" width={40} height={40} alt="React" />
        </Link>
        <Link href="https://nextjs.org" className="flex">
          <Image src="/nextjs2.svg" width={40} height={40} alt="NextJs" />
        </Link>
        <Link href="https://tailwindcss.com" className="flex">
          <Image src="/tw.svg" width={50} height={50} alt="TailwindCSS" />
        </Link>
      </div>
    </div>
  )
}

export default TechStack
