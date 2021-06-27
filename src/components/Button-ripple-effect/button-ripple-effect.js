import React, { useState } from 'react'
import './button-ripple-effect.css'

const ButtonRippleEffect = () => {
  const [effectX, setEffectX] = useState()
  const [effectY, setEffectY] = useState()

  //   useEffect(() => {
  //     effectChangeHandler
  //   })

  function effectChangeHandler(e) {
    setEffectX(e.clientX - e.target.offsetLeft)
    setEffectY(e.clientY - e.target.offsetTop)

    console.log(e.clientX - e.target.offsetLeft, e.clientY - e.target.offsetTop)
    // console.log(effectX, effectY)
  }

  return (
    <div className="App-button-ripple-effect">
      <button onClick={effectChangeHandler} className="ripple">
        Click Me
        <div
          className="circle"
          style={{
            top: `${effectY}px`,
            left: `${effectX}px`,
          }}
        ></div>
      </button>
    </div>
  )
}

export default ButtonRippleEffect
