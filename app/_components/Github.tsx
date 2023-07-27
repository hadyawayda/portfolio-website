"use client"

import { useState } from "react"

function Github() {
  const [hover, setHover] = useState(false)

  const style = {
    ...(hover ? { fill: "#F1502F" } : null),
  }
  return (
    <svg
      fill="#111"
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      viewBox="0 0 9 9">
      <g id="Layer_1-2" data-name="Layer 1">
        <g id="Page-1">
          <g id="Dribbble-Light-Preview">
            <g id="icons">
              <path
                id="github-_142_"
                data-name="github-[#142]"
                style={style}
                className="transition duration-500 ease-in-out"
                d="m4.5,0c2.49,0,4.5,2.07,4.5,4.61,0,2.04-1.29,3.77-3.07,4.38-.23.05-.31-.1-.31-.22,0-.15,0-.65,0-1.27,0-.43-.14-.71-.31-.85,1-.11,2.06-.5,2.06-2.28,0-.5-.17-.92-.46-1.24.05-.12.2-.59-.04-1.22,0,0-.38-.12-1.24.47-.36-.1-.74-.15-1.13-.16-.38,0-.77.05-1.13.16-.86-.6-1.24-.47-1.24-.47-.24.64-.09,1.1-.04,1.22-.29.32-.46.73-.46,1.24,0,1.77,1.05,2.16,2.05,2.28-.13.12-.25.32-.29.62-.26.12-.91.32-1.31-.38,0,0-.24-.44-.69-.48,0,0-.44,0-.03.28,0,0,.29.14.5.67,0,0,.26.82,1.52.54,0,.39,0,.75,0,.86,0,.12-.08.26-.31.22-1.79-.61-3.08-2.34-3.08-4.38C0,2.07,2.02,0,4.5,0"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Github
