import Image from "next/image"

function Me() {
  return (
    <Image
      src="/me.jpg"
      alt="Me"
      width={300}
      height={300}
      className="rounded-full w-40 md:w-full mb-6 mt-2 md:mt-6 animate vlate"
    />
  )
}

export default Me
