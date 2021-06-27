import React, { useEffect, useState } from 'react'
import './auto-text-effect.css'

const AutoTextEffect = () => {
  const textWrite = 'We Love Programming!!'
  const [index, setIndex] = useState(1)
  const [text, setText] = useState('')
  //   const [speed, setSpeed] = useState(1)
  //   let idx = 1

  useEffect(() => {
    if (index < textWrite.length) {
      setTimeout(() => {
        setText(textWrite.slice(0, index))
        setIndex(index + 1)
      }, 200)

      //   if (index > textWrite.length) {
      //     setIndex(1)
      //     console.log(index)
      //   }
    }
  }, [index])

  //   const writeTextData = () => {
  //     if (index < textWrite.length) {
  //       setText(textWrite.slice(0, index))
  //       console.log(index)
  //       setIndex(index + 1)
  //     }
  //   }

  //   setTimeout(writeTextData, 1000)

  // ------------==============------------
  //   const speedChangehandler = (e) => {
  //     setSpeed(100 * e.target.value)
  //     console.log(speed)
  //   }

  return (
    <div className="App-auto-text-effect">
      <h1 id="text">{text}</h1>

      {/* <div className="speed">
        <label for="speed">Speed: </label>
        <input
          className="speedInput"
          type="number"
          onChange={speedChangehandler}
          name="speed"
          id="speed"
          //   value={speed}
          min="1"
          max="10"
          step="1"
        />
      </div> */}
    </div>
  )
}

export default AutoTextEffect
