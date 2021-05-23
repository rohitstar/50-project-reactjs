import React, { useState, useLayoutEffect, useRef } from 'react'
import './scroll-animation.css'
import { SCROLL_CONTENT } from '../../constants/imageConstant'

const ScrollAnimation = () => {
  //   const inputRef = useRef(null)
  const ourRef = useRef(null)

  const [show, setShow] = useState(false)

  useLayoutEffect(() => {
    const topPosition = ourRef.current.getBoundingClientRect().top
    const onScroll = () => {
      const scrollPosition = (window.innerHeight / 5) * 3
      if (topPosition < scrollPosition) {
        // trigger animation
        setShow((state) => ({}))
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  //   useEffect(() => {
  //     const topPos = (element) => element.getBoundingClientRect().top
  //     const boxTop = topPos(inputRef.current)

  //     const onScroll = () => {
  //       const triggerBottom = (window.innerHeight / 5) * 3
  //       if (boxTop < triggerBottom) {
  //         setShow((state) => ({ ...state, true }))
  //       }
  //     //   console.log(show)
  //     }
  //     window.addEventListener('scroll', onScroll, true)
  //     return () => {
  //       window.removeEventListener('scroll', onScroll, true)
  //     }
  //   }, [])

  return (
    <div className="App-Scroll-Animation">
      <h1>Scroll to see the animation</h1>
      {SCROLL_CONTENT.scroll_content.map((data) => (
        <div
          //   animate={show}
          ref={ourRef}
          //   onScroll={animationChangeHandler}
          className={`box-scroll ${show ? '' : 'show'}`}
        >
          <h3>{data.content}</h3>
        </div>
      ))}
    </div>
  )
}

export default ScrollAnimation
