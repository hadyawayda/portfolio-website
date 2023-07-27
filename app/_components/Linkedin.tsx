"use client"
import { useState } from "react"

function Linkedin() {
  const [hover, setHover] = useState(false)

  const style = {
    ...(hover ? { fill: "#0072b1" } : null),
  }
  return (
    <svg
      fill="#111"
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      viewBox="0 0 8.5 8.49">
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <path
            className="transition duration-500 ease-in-out"
            style={style}
            d="m1.98,2.72H.27c-.08,0-.14.06-.14.14v5.49c0,.08.06.14.14.14h1.7c.08,0,.14-.06.14-.14V2.86c0-.08-.06-.14-.14-.14Z"
          />
          <path
            className="transition duration-500 ease-in-out"
            style={style}
            d="m1.13,0C.51,0,0,.5,0,1.12s.51,1.13,1.13,1.13,1.13-.5,1.13-1.13c0-.62-.5-1.12-1.13-1.12Z"
          />
          <path
            className="transition duration-500 ease-in-out"
            style={style}
            d="m6.32,2.6c-.68,0-1.19.29-1.5.63v-.37c0-.08-.06-.14-.14-.14h-1.64c-.08,0-.14.06-.14.14v5.49c0,.08.06.14.14.14h1.7s.14-.06.14-.14v-2.71c0-.91.25-1.27.89-1.27.69,0,.75.57.75,1.32v2.67c0,.08.14.15.14.15h1.7c.08,0,.14-.06.14-.14v-3.01c0-1.36-.26-2.75-2.18-2.75Z"
          />
        </g>
      </g>
    </svg>
  )
}

export default Linkedin
