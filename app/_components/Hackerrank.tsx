"use client"
import { useState } from "react"

function Hackerrank() {
  const [hover, setHover] = useState(false)

  const style = {
    ...(hover ? { fill: "#00eb64" } : null),
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
        <path
          className="transition duration-500 ease-in-out"
          style={style}
          d="m0,0v7.8h7.8V0H0Zm3.24,2.6h.59s.04.02.04.04v2.52s-.02.04-.04.04h-.59s-.04-.02-.04-.04v-.93h-.62v.93s-.02.04-.04.04h-.59s-.04-.02-.04-.04v-2.52s.02-.04.04-.04h.58s.04.02.04.04v.93h.63v-.93s.02-.04.04-.04h0Zm.97,0h1.88s.04.02.04.04v2.52s-.02.04-.04.04c0,0,0,0,0,0h-1.88s-.04-.02-.04-.04v-2.52s.02-.04.04-.04h0Z"
        />
      </g>
    </svg>
  )
}

export default Hackerrank
