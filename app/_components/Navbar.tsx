import Link from "next/link"

function Navbar() {
  return (
    <div className="flex justify-between items-center w-full h-32 lg:py-10 lg:px-20">
      <Link
        href="/"
        className="px-5 py-2 hover:bg-black hover:text-white font-semibold text-sm rounded-full transition-all ease-in-out duration-700">
        Hady Awayda
      </Link>
      <div className="flex justify-between items-center lg:w-96">
        <Link href="#projects">
          <button className="px-5 py-2 hover:bg-black hover:text-white font-semibold text-sm rounded-full transition-all ease-in-out duration-700">
            Projects
          </button>
        </Link>
        <Link href="#projects">
          <button className="px-5 py-2 hover:bg-black hover:text-white font-semibold text-sm rounded-full transition-all ease-in-out duration-700">
            About Me
          </button>
        </Link>
        <Link href="#projects">
          <button className="px-5 py-2 hover:bg-black hover:text-white font-semibold text-sm rounded-full transition-all ease-in-out duration-700">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
