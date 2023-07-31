import Image from "next/image"
import Link from "next/link"
import TechStack from "./_components/TechStack"
import Socials from "./_components/Socials"
import Me from "./_components/Me"

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center w-full h-full text-lg md:px-4">
      <section className="flex flex-col lg:flex-row justify-between items-start w-full gap-2">
        <div className="lg:w-7/12 mt-5 md:mt-15 lg:mt-20 h-full order-2">
          {/* <div className="md:hidden">
            <Me />
          </div> */}
          <h1 className="animate text-center md:text-left vlate text-5xl md:text-6xl lg:text-7xl w-full font-medium lg:mb-20">
            Software & Web Developer
          </h1>
          <TechStack />
          <h2 className="animate vvlate text-2xl mb-8">
            Hi, I'm Hady, I'm an aspiring Developer based in Beirut, Lebanon.
          </h2>
          <p className="animate vvvlate text-2xl">
            I love what I do, and I am very passionate about learning new
            technologies.
          </p>
        </div>
        <div className="md:w-5/12 flex lg:flex-col justify-between w-full md:justify-start items-center h-full order-1 md:order-3">
          <Me />
          <div className="flex flex-col justify-center items-center w-full">
            <Socials />
            <Link
              href="/Hady-Awayda-Resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
              download="Hady Awayda Resumé.pdf"
              className="mt-2 md:mt-8 animate xlate">
              <button
                className="flex justify-between gap-1 items-center rounded-md md:rounded-xl hover:bg-red-600 hover:text-white text-xs md:text-lg bg-black md:tracking-wider text-white transition-all duration-500 ease-in-out p-2 px-4 mt-2"
                // style={{ padding: 18 + "px " + 40 + "px" }}
              >
                Download Resumé
                <Image
                  src="/acrobat-reader.svg"
                  alt="Acrobat Reader"
                  width={30}
                  height={30}
                  className="hidden md:w-full"
                />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
