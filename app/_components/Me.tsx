import Image from "next/image"

function Me() {
  return (
    <Image
      src="/me.jpg"
      alt="Me"
      width={1000}
      height={1000}
      className="rounded-full w-36 md:w-full md:mt-6 vlate"
    />
  )
}

export default Me
