import Link from "next/link"

function Navbar() {
  return (
    <div className="flex justify-between w-full h-32 lg:py-10 lg:px-20">
      <Link href="/">Logo</Link>
      <div className="flex justify-between lg:w-80">
        <Link href="#projects">Projects</Link>
        <Link href="#projects">About Me</Link>
        <Link href="#projects">Contact Me</Link>
      </div>
    </div>
  )
}

export default Navbar
