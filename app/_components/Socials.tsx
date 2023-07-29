import Link from "next/link"
import Linkedin from "./SocialIcons/Linkedin"
import Github from "./SocialIcons/Github"
import Leetcode from "./SocialIcons/Leetcode"
import Hackerrank from "./SocialIcons/Hackerrank"
import FrontEndMentor from "./SocialIcons/FrontEndMentor"
import CSSBattle from "./SocialIcons/Cssbattle"

function Socials() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex items-center justify-between w-6/12 pt-4 animate vvlate">
        <Link
          className="w-10 h-10 flex justify-center items-center"
          href="https://www.linkedin.com/in/hadyawayda">
          <div className="w-7 h-7 flex justify-center items-center">
            <Linkedin />
          </div>
        </Link>
        <Link
          className="w-10 h-10 flex justify-center items-center"
          href="https://github.com/hadyawayda">
          <div className="w-7 h-7 flex justify-center items-center">
            <Github />
          </div>
        </Link>
        <Link
          className="w-10 h-10 flex justify-center items-center"
          href="https://leetcode.com/hadyawayda">
          <div className="w-6 h-6 pt-px flex justify-center items-center">
            <Leetcode />
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-between w-6/12 pt-4 animate vvvlate">
        <Link
          className="w-10 h-10 flex justify-center items-center"
          href="https://www.hackerrank.com/hady_awayda">
          <div
            className="w-8 h-8 pt-0.5 flex justify-center items-center"
            style={{ paddingLeft: 3 + "px" }}>
            <Hackerrank />
          </div>
        </Link>
        <Link
          className="w-10 h-10 flex justify-center items-center"
          href="https://www.frontendmentor.io/profile/hAdy994">
          <div className="w-7 h-7 pl-px pt-0.5 flex justify-center items-center">
            <FrontEndMentor />
          </div>
        </Link>
        <Link
          className="w-10 h-10 flex justify-center items-center"
          href="https://cssbattle.dev/player/hady_994">
          <div className="w-9 h-9 pl-px flex justify-center items-center">
            <CSSBattle />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Socials
