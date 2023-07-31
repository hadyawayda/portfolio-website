"use client"

import { Popover, Transition } from "@headlessui/react"
import { Fragment } from "react"
import Link from "next/link"
import { useEffect, useState } from "react"
import "./HamburgerMenuLogo.css"

// learn react lazy loading
// learn react suspense

const Menu = () => {
  // const [menu, setMenu] = useState(false)

  // function handleMenuToggle(o) {
  //   setMenu(o)
  // }

  return (
    <Popover className="md:hidden z-10">
      {({ open }) => (
        <>
          <Popover.Button
            className={
              "focus:outline-none flex justify-center items-center z-20 menu-btn" +
              (open ? " open" : "")
            }
            // onClick={() => handleMenuToggle(open)}
          >
            <div className="menu-btn__burger flex justify-center"></div>
          </Popover.Button>
          <Transition
            enter="transition-opacity ease-out duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Popover.Overlay className="fixed inset-0 bg-black opacity-40" />
          </Transition>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-500"
            enterFrom="opacity-0 translate-x-full"
            enterTo="opacity-100 translate-x-5"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full">
            <Popover.Panel className="fixed w-6/12 min-h-full rounded-3xl bg-white right-0 top-0">
              <div className="flex flex-col">
                <Link
                  href="/"
                  className="pl-16 h-32 flex items-center border-b mb-6">
                  <button className="text-white text-lg bg-black p-2.5 rounded-md tracking-wider">
                    HA
                  </button>
                </Link>
                <Link className="pl-10" href="#projects">
                  <button className="px-4 py-6 hover:bg-black hover:text-white font-semibold text-lg rounded-full transition-all ease-in-out duration-700">
                    Projects
                  </button>
                </Link>
                <Link className="pl-10" href="#about">
                  <button className="px-4 py-6 hover:bg-black hover:text-white font-semibold text-lg rounded-full transition-all ease-in-out duration-700">
                    About me
                  </button>
                </Link>
                <Link className="pl-10" href="#contact">
                  <button className="px-4 py-6 hover:bg-black hover:text-white font-semibold text-lg rounded-full transition-all ease-in-out duration-700">
                    Contact me
                  </button>
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Menu

// useEffect(() => {
//   function handleResize() {
//     setMenu(false)
//   }
//   window.addEventListener("resize", handleResize)
//   return () => {
//     window.removeEventListener("resize", handleResize)
//   }
// })
