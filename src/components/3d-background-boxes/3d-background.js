import React, { useState } from 'react'
import './3d-background.css'

const counterBoxes = [
  {
    id: 1,
    i: 0,
    j: 0,
  },
  {
    id: 2,
    i: 125,
    j: 0,
  },
  {
    id: 3,
    i: 250,
    j: 0,
  },
  {
    id: 4,
    i: 375,
    j: 0,
  },
  {
    id: 5,
    i: 0,
    j: 125,
  },
  {
    id: 6,
    i: 125,
    j: 125,
  },
  {
    id: 7,
    i: 250,
    j: 125,
  },
  {
    id: 8,
    i: 375,
    j: 125,
  },
  {
    id: 9,
    i: 0,
    j: 250,
  },
  {
    id: 10,
    i: 125,
    j: 250,
  },
  {
    id: 11,
    i: 250,
    j: 250,
  },
  {
    id: 12,
    i: 375,
    j: 250,
  },
  {
    id: 13,
    i: 0,
    j: 375,
  },
  {
    id: 14,
    i: 125,
    j: 375,
  },
  {
    id: 15,
    i: 250,
    j: 375,
  },
  {
    id: 16,
    i: 375,
    j: 375,
  },
]

const BackgroundBoxes = () => {
  const [bgBox, setBgBox] = useState(false)

  //   const createBoxes = () => {
  //     for (let i = 0; i < 4; i++) {
  //       for (let j = 0; j < 4; j++) {
  //         console.log(`${-j * 125}px ${-i * 125}px`)
  //         // setBgBox(`${-j * 125}px ${-i * 125}px`)
  //       }
  //     }
  //   }
  //   createBoxes()

  const magicChangeHandler = () => {
    setBgBox(!bgBox)
    // console.log(bgBox)
  }

  return (
    <div className="App-background-boxes">
      <button onClick={magicChangeHandler} id="btn" className="magic">
        Magic
      </button>
      <div id="boxes" className={`boxes ${!bgBox ? 'big' : ''}`}>
        {counterBoxes.map((data, index) => (
          <div
            key={index}
            style={{ backgroundPosition: `${-data.i}px ${-data.j}px` }}
            className="box"
          ></div>
        ))}
        {/* <div style={{ backgroundPosition: bgBox }} className="box"></div> */}
      </div>
    </div>
  )
}

export default BackgroundBoxes
