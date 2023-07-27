import Image from "next/image"
import Link from "next/link"
import Linkedin from "./_components/Linkedin"
import Github from "./_components/Github"
import Leetcode from "./_components/Leetcode"
import Hackerrank from "./_components/Hackerrank"
import FrontEndMentor from "./_components/FrontEndMentor"
import CSSBattle from "./_components/Cssbattle"

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center w-full h-full text-lg px-4">
      <section className="flex justify-between items-start w-full">
        <div className="w-1/2 mt-40 h-full">
          <h1 className="animate vlate text-7xl w-full font-medium mb-8">
            Software & Web Developer
          </h1>
          <h2 className="animate vvlate text-2xl mb-6">
            Hi, I'm Hady, I'm an aspiring Developer based in Beirut, Lebanon.
          </h2>
          <p className="animate vvvlate text-2xl mb-4">
            I love what I do, and I am very passionate about learning new
            technologies.
          </p>
        </div>
        <div className="w-1/2 flex flex-col justify-start items-center h-full">
          <Image
            src="/me.jpg"
            alt="Me"
            width={300}
            height={300}
            className="rounded-full mb-6 mt-10 animate vlate"
          />
          <div className="flex items-center justify-between w-4/12 pt-4 animate vvlate">
            <Link
              className="w-10 h-10 flex justify-center items-center"
              href="https://www.linkedin.com/in/hadyawayda">
              <div className="w-7 h-7 flex justify-center items-center">
                <Linkedin />
              </div>
            </Link>
            <Link
              className="w-10 h-10 flex justify-center items-center"
              href="https://github.com/hadyawayda">
              <div className="w-7 h-7 flex justify-center items-center">
                <Github />
              </div>
            </Link>
            <Link
              className="w-10 h-10 flex justify-center items-center"
              href="https://leetcode.com/hadyawayda">
              <div className="w-6 h-6 pt-px flex justify-center items-center">
                <Leetcode />
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between w-4/12 pt-4 animate vvvlate">
            <Link
              className="w-10 h-10 flex justify-center items-center"
              href="https://www.hackerrank.com/hady_awayda">
              <div
                className="w-8 h-8 pt-0.5 flex justify-center items-center"
                style={{ paddingLeft: 3 + "px" }}>
                <Hackerrank />
              </div>
            </Link>
            <Link
              className="w-10 h-10 flex justify-center items-center"
              href="https://www.frontendmentor.io/profile/hAdy994">
              <div className="w-7 h-7 pl-px pt-0.5 flex justify-center items-center">
                <FrontEndMentor />
              </div>
            </Link>
            <Link
              className="w-10 h-10 flex justify-center items-center"
              href="https://cssbattle.dev/player/hady_994">
              <div className="w-9 h-9 pl-px flex justify-center items-center">
                <CSSBattle />
              </div>
            </Link>
          </div>
          <Link
            href="/Hady-Awayda-Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            download="Hady Awayda Resumé.pdf"
            className="mt-8 animate xlate">
            <button className="flex justify-between gap-4 items-center rounded-xl border-2 border-transparent hover:border-red-500 hover:bg-red-500 hover:text-white text-base bg-gray-900 py-5 px-12 tracking-widest text-white transition-all duration-500 ease-in-out">
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
      <section></section>
    </main>
  )
}
