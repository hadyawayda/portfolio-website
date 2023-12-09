import Image from 'next/image'

function Me() {
  return (
    <Image
      src="/me.jpg"
      alt="Me"
      width={600}
      height={600}
      className="rounded-full w-44 sm:w-60 md:w-72
       mt-4 md:mt-6 animate vlate"
    />
  )
}

export default Me
