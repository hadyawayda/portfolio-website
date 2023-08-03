import Link from "next/link"
import Image from "next/image"

function Download() {
  return (
    <Link
      href="/Hady-Awayda-Resume.pdf"
      rel="noopener noreferrer"
      target="_blank"
      download="Hady Awayda Resumé.pdf"
      className="md:mt-8  xlate">
      <button className="flex justify-between gap-1 px-7 py-4 sm:px-6 sm:py-3 lg:py-3.5 xl:py-4 lg:px-7 xl:px-10 items-center rounded-xl hover:bg-red-600 text-xs sm:text-sm bg-neutral-950 md:font-normal lg:font-semibold tracking-wider md:tracking-normal lg:tracking-wider text-white transition-all duration-500 ease-in-out expanded">
        Download Resumé
        <Image
          src="/acrobat-reader.svg"
          alt="Acrobat Reader"
          width={30}
          height={30}
          className="hidden md:block"
        />
      </button>
    </Link>
  )
}

export default Download
