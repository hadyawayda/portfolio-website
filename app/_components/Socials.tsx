import Link from "next/link"
import Linkedin from "./SocialIcons/Linkedin"
import Github from "./SocialIcons/Github"
import Leetcode from "./SocialIcons/Leetcode"
import Hackerrank from "./SocialIcons/Hackerrank"
import FrontEndMentor from "./SocialIcons/FrontEndMentor"
import CSSBattle from "./SocialIcons/Cssbattle"

function Socials() {
  return (
    <div className="flex justify-center sm:justify-start md:justify-center items-center min-w-full md:w-8/12 md:pt-8 vvlate">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-10 md:gap-0 md:grid-cols-3 gap-y-2 md:gap-y-6 sm:w-3/4 justify-items-center">
        <Link
          className="w-10 h-10 flex justify-center items-center"
          href="https://www.linkedin.com/in/hadyawayda"
          target="_blank"
          aria-label="Linkedin">
          <div className="w-5 h-5 md:w-7 md:h-7 flex justify-center items-center">
            <Linkedin />
          </div>
        </Link>
        <Link
          className="w-10 h-10 flex justify-center items-center"
          href="https://github.com/hadyawayda"
          target="_blank"
          aria-label="Github">
          <div className="w-5 h-5 md:w-7 md:h-7 flex justify-center items-center">
            <Github />
          </div>
        </Link>
        <Link
          className="w-10 h-10 flex justify-center items-center"
          href="https://leetcode.com/hadyawayda"
          target="_blank"
          aria-label="Leetcode">
          <div className="w-4 h-4 md:w-6 md:h-6 flex justify-center items-center">
            <Leetcode />
          </div>
        </Link>
        <Link
          className="w-10 h-10 flex justify-center items-center"
          href="https://www.hackerrank.com/hady_awayda"
          target="_blank"
          aria-label="Hackerrank">
          <div
            className="w-6 h-6 md:w-8 md:h-8 pt-0.5 flex justify-center items-center"
            style={{ paddingLeft: 2 + "px" }}>
            <Hackerrank />
          </div>
        </Link>
        <Link
          className="w-10 h-10 flex justify-center items-center"
          href="https://www.frontendmentor.io/profile/hAdy994"
          target="_blank"
          aria-label="Frontend Mentor">
          <div className="w-5 h-5 md:w-7 md:h-7 pl-px pt-0.5 flex justify-center items-center">
            <FrontEndMentor />
          </div>
        </Link>
        <Link
          className="w-10 h-10 flex justify-center items-center"
          href="https://cssbattle.dev/player/hady_994"
          target="_blank"
          aria-label="CSS Battle">
          <div className="w-6 h-6 md:w-9 md:h-9 pl-px flex justify-center items-center">
            <CSSBattle />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Socials
