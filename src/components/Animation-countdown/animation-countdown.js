import React, { useEffect, useState } from 'react'
import './animation-countdown.css'

const countDown = ['3', '2', '1', '0']

const AnimationCountdown = () => {
  //   const [nums, setNums] = useState(0)
  //   const [goIn, setGoIn] = useState()
  //   const [goOut, setGoOut] = useState()

  //   useEffect(() => {
  //     setCount((prev) => prev + 1)
  //   }, [setCount])

  //   for (i = 0; i >= 3; i--) {
  //     console.log(countDown)
  //   }                                                        __
  //                                                            /\
  //       const getCountDown = () => {                       -//\\-
  //             setCount((prev) => prev + 1)               --//  \\--
  //       console.log(count)                             ---// == \\---
  //   }                                                ----//      \\----

  //   const runAnimation = () => {
  //     setNums((num, idx) => {
  //     const nextToLast = nums.length - 1
  //         const animationEnd = (e) => {
  //             if(e.animationName === goIn && idx !== nextToLast) {

  //             }
  //         }
  //     })
  //   }

  return (
    <div className="App-animation">
      <div className="counter">
        <div className="nums">
          {countDown.map((count) => (
            <span className="in">{count}</span>
          ))}
          {/* <span className="in">3</span>
          <span>2</span>
          <span>1</span>
          <span>0</span> */}
        </div>
        <h4>Get Ready</h4>
      </div>

      <div className="final">
        <h1>Go</h1>
        <button className="replay" id="replay">
          Replay
        </button>
      </div>
    </div>
  )
}

export default AnimationCountdown
