import Image from "next/image"

function Me() {
  return (
    <Image
      src="/me.jpg"
      alt="Me"
      width={600}
      height={600}
      className="rounded-full w-52 sm:w-60 md:w-full md:mt-6 vlate"
    />
  )
}

export default Me
