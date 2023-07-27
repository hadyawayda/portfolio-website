"use client"

import { useState } from "react"

function FrontEndMentor() {
  const [hover, setHover] = useState(false)

  const style = {
    ...(hover ? { fill: "#67BECE" } : null),
  }
  const style2 = {
    ...(hover ? { fill: "#3F54A3" } : null),
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
            d="m3.82.35v5.59c0,.46.72.46.72,0V.35c0-.46-.72-.46-.72,0h0Zm4.05,1.61c-.72.34-1.44.67-2.16,1.01-.06.03-.06.13,0,.16.69.35,1.39.69,2.09,1.04.1.05.19-.1.09-.16-.69-.35-1.39-.69-2.09-1.04v.16c.72-.34,1.44-.67,2.16-1.01.1-.05.01-.2-.09-.16Z"
          />
          <path
            className="transition duration-500 ease-in-out"
            style={style2}
            d="m0,3.95c.41,1.93,1.96,3.46,3.89,3.85.33.06.66.1.99.1.23,0,.23-.36,0-.36-1.8,0-3.46-1.06-4.21-2.7-.14-.31-.25-.65-.32-.99-.05-.23-.39-.13-.35.1h0Z"
          />
        </g>
      </g>
    </svg>
  )
}

export default FrontEndMentor
