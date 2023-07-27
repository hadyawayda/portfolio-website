"use client"
import { useState } from "react"

function Linkedin() {
  const [hover, setHover] = useState(false)

  const style = {
    ...(hover ? { fill: "hsl(35.79deg 100% 54.31%)" } : null),
  }
  return (
    <svg
      fill="#111"
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      viewBox="0 0 8 9.51">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          className="transition duration-500 ease-in-out"
          style={style}
          d="m5.62,7.11l-1.07,1.03c-.19.19-.44.26-.72.26s-.54-.08-.72-.26l-1.72-1.73c-.18-.19-.28-.46-.28-.74s.09-.54.28-.72l1.71-1.74c.18-.18.45-.26.73-.26s.54.08.72.26l1.07,1.03c.2.2.54.2.75-.02.21-.21.22-.55.01-.75l-1.03-1.04c-.27-.26-.6-.45-.97-.53l.98-.99c.2-.2.2-.54-.01-.75s-.55-.22-.75-.02L.59,4.15c-.39.39-.59.93-.59,1.52s.2,1.15.59,1.54l1.72,1.73c.39.39.93.58,1.52.58s1.13-.2,1.52-.59l1.03-1.05c.2-.2.2-.54-.02-.75s-.55-.22-.75-.02h0Zm1.87-1.96H3.46c-.28,0-.5.24-.5.53s.23.54.5.54h4.04c.28,0,.51-.24.51-.54s-.23-.53-.51-.53Z"
        />
      </g>
    </svg>
  )
}

export default Linkedin
