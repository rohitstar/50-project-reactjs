import React, { useState } from 'react'
import './hoverboard.css'

const Hoverboard = () => {
  const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
  const SQUARES = 500
  //   const [square, setSquare] = useState([])
  const [bg, setBg] = useState()
  const [shadow, setShadow] = useState()

  //   for (let i = 0; i < SQUARES; i++) {
  //    console.log(i)
  //     setSquare(i)
  //   }

  function buildOptions(Bg, Shadow) {
    var square = []

    for (let i = 0; i < SQUARES; i++) {
      square.push(
        //   console.log(i)
        <div
          key={i}
          value="{i}"
          onMouseOver={setColor}
          onMouseOut={removeColor}
          style={{ backgroundColor: Bg, boxShadow: Shadow }}
          className="hoverboard-square"
        ></div>
      )
    }

    return square
  }

  function setColor() {
    const color = getRandomColor()

    setBg(color)
    setShadow(`0 0 2px ${color}, 0 0 10px ${color}`)
    // console.log(bg, shadow)
  }

  function removeColor() {
    setBg('#333333')
    setShadow(`0 0 2px #000, 0 0 10px #000`)
    // console.log(bg, shadow)
  }

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div className="App-hoverboard">
      <div className="hoverboard-container" id="hoverboard-container">
        {buildOptions(bg, shadow)}
      </div>
    </div>
  )
}

export default Hoverboard
