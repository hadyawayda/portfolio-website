'use client'
import { Fragment, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

function Hady({ onAnimationComplete }: { onAnimationComplete: () => void }) {
  const [start, setStart] = useState(true)

  useEffect(() => {
    const names = document.querySelectorAll('.name')
    const addNameClass = () => {
      names.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add('nameshow')
        }, 130 * index)
      })
    }

    const removeNameClass = () => {
      setTimeout(() => {
        names.forEach((span, index) => {
          setTimeout(() => {
            span.classList.remove('nameshow')
          }, 130 * index)
        })
      }, 60 * names.length)
    }

    const titles = document.querySelectorAll('.title')
    const addTitleClass = () => {
      titles.forEach((span, index) => {
        setTimeout(
          () => {
            span.classList.add('titleshow')
          },
          100 * index + 2000
        )
      })
    }

    const removeTitleClass = () => {
      setTimeout(
        () => {
          titles.forEach((span, index) => {
            setTimeout(() => {
              if (titles.length - 1 === index) {
                setStart(false)
                onAnimationComplete()
              }
              span.classList.remove('titleshow')
            }, 100 * index)
          })
        },
        48 * names.length + 2100
      )
    }

    addNameClass()
    removeNameClass()
    addTitleClass()
    removeTitleClass()
  }, [])

  return (
    <Transition
      appear
      show={start}
      as={Fragment}
      leave="ease-in duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0">
      <div className="fixed inset-0 w-full h-full flex flex-col justify-evenly items-center bg-neutral-950">
        <h1 className="bg-clip-text bg-contain text-center tracking-wider text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium expanded">
          <span className="name">H</span>
          <span className="name">A</span>
          <span className="name">D</span>
          <span className="name">Y </span>
          <span className="name">A</span>
          <span className="name">W</span>
          <span className="name">A</span>
          <span className="name">Y</span>
          <span className="name">D</span>
          <span className="name">A</span>
        </h1>
        <h1>
          <h1 className="bg-clip-text bg-contain text-center tracking-wider text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium expanded ">
            <span className="title">S</span>
            <span className="title">o</span>
            <span className="title">f</span>
            <span className="title">t</span>
            <span className="title">w</span>
            <span className="title">a</span>
            <span className="title">r</span>
            <span className="title">e </span>
            <span className="title">& </span>
            <span className="title">W</span>
            <span className="title">e</span>
            <span className="title">b </span>
            <span className="title">D</span>
            <span className="title">e</span>
            <span className="title">v</span>
            <span className="title">e</span>
            <span className="title">l</span>
            <span className="title">o</span>
            <span className="title">p</span>
            <span className="title">e</span>
            <span className="title">r</span>
          </h1>
        </h1>
      </div>
    </Transition>
  )
}

export default Hady
