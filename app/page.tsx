import Image from "next/image"
import Link from "next/link"
import TechStack from "./_components/TechStack"
import Socials from "./_components/Socials"

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center w-full h-full text-lg px-4">
      <section className="flex justify-between items-start w-full">
        <div className="w-7/12 mt-12 h-full">
          <h1 className="animate vlate text-7xl w-full font-medium mb-20">
            Software & Web Developer
          </h1>

          <h2 className="animate vvlate text-2xl mb-8">
            Hi, I'm Hady, I'm an aspiring Developer based in Beirut, Lebanon.
          </h2>
          <p className="animate vvvlate text-2xl">
            I love what I do, and I am very passionate about learning new
            technologies.
          </p>
          <TechStack />
        </div>
        <div className="w-4/12 flex flex-col justify-start items-center h-full">
          <Image
            src="/me.jpg"
            alt="Me"
            width={300}
            height={300}
            className="rounded-full mb-6 mt-6 animate vlate"
          />
          <Socials />
          <Link
            href="/Hady-Awayda-Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            download="Hady Awayda Resumé.pdf"
            className="mt-8 animate xlate">
            <button
              className="flex justify-between gap-1 items-center rounded-xl hover:bg-red-600 hover:text-white text-lg bg-black tracking-wider text-white transition-all duration-500 ease-in-out"
              style={{ padding: 18 + "px " + 40 + "px" }}>
              Download Resumé
              <Image
                src="/acrobat-reader.svg"
                alt="Acrobat Reader"
                width={30}
                height={30}
              />
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
