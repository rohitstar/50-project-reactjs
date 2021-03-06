import React, { useState, useEffect, useRef } from 'react'
import './split-landing-page.css'
import { Link } from 'react-router-dom'
// import { SCROLL_CONTENT } from '../../constants/imageConstant'

const SplitLandingPage = () => {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  const mouseEnterChangeHandler = () => {
    console.log('mouse enter')
    setHovered(true)
  }

  const mouseLeaveChangeHandler = () => {
    console.log('mouse leave')
    setHovered(false)
  }

  useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener('mouseenter', mouseEnterChangeHandler)
      node.addEventListener('mouseleave', mouseLeaveChangeHandler)
      return () => {
        node.removeEventListener('mouseenter', mouseEnterChangeHandler)
        node.removeEventListener('mouseleave', mouseLeaveChangeHandler)
      }
    }
  }, [])

  return (
    <div className="App-split-landing-page">
      <div
        ref={ref}
        // onMouseEnter={mouseEnterChangeHandler}
        // onMouseLeave={mouseLeaveChangeHandler}
        className={`container-split-landing-page ${
          hovered ? 'hover-right' : 'hover-left'
        }`}
      >
        <div className="split left">
          <h1 className="split-heading">Play Rammy Game</h1>
          <Link className="btn-split">Buy Now</Link>
        </div>
        <div className="split right">
          <h1 className="split-heading">XBox Series Now</h1>
          <Link className="btn-split">Buy Now</Link>
        </div>
      </div>
    </div>
  )
}

export default SplitLandingPage
