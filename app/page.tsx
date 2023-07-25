import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center w-full h-full text-lg px-4">
      <section className="flex justify-between items-start w-full">
        <div className="w-1/2 mt-40 h-full">
          <h1 className="animate vlate text-7xl w-full font-medium mb-8">
            Software & Web Developer
          </h1>
          <h2 className="animate vvlate text-2xl mb-6">
            Hi, I'm Hady, and I'm an aspiring Developer based in Beirut,
            Lebanon.
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
              <Image
                src="/LinkedIn.svg"
                width={30}
                height={30}
                alt="Linkedin"
              />
            </Link>
            <Link
              className="w-10 h-10 flex justify-center items-center"
              href="https://github.com/hadyawayda">
              <Image
                className="pt-0.5"
                src="/Github.svg"
                width={30}
                height={30}
                alt="Github"
              />
            </Link>
            <Link
              className="w-10 h-10 flex justify-center items-center"
              href="https://leetcode.com/hadyawayda">
              <Image
                className="pl-1"
                src="/Leetcode.svg"
                width={30}
                height={30}
                alt="LeetCode"
              />
            </Link>
          </div>
          <div className="flex items-center justify-between w-4/12 pt-4 animate vvvlate">
            <Link
              className="w-10 h-10 flex justify-center items-center"
              href="https://www.hackerrank.com/hady_awayda">
              <Image
                src="/Hackerrank.svg"
                width={28}
                height={28}
                alt="HackerRank"
              />
            </Link>
            <Link
              className="w-10 h-10 flex justify-center items-center"
              href="https://www.frontendmentor.io/profile/hAdy994">
              <Image
                src="/FrontEnd-Mentor.svg"
                width={28}
                height={28}
                alt="FrontEnd Mentor"
              />
            </Link>
            <Link
              className="w-10 h-10 flex justify-center items-center"
              href="https://cssbattle.dev/player/hady_994">
              <Image
                src="/cssbattle.svg"
                width={36}
                height={36}
                alt="CSSBattle.dev"
              />
            </Link>
          </div>
          <div className="mt-8 animate xlate">
            <button className="rounded-2xl border-4 border-transparent hover:border-orange-500 hover:bg-white hover:text-orange-500 hover:font-black bg-black py-4 px-10 tracking-widest text-white transition-all duration-500 ease-in-out">
              Download Resumé
            </button>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  )
}
