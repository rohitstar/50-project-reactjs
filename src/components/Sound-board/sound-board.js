import React, { useState, useEffect, useRef } from 'react'
import './sound-board.css'
import { SOUND_BOARD } from '../../constants/imageConstant'

const SoundBoard = () => {
  //   const [hovered, setHovered] = useState(false)

  return (
    <div className="App-sound-board">
      <div className="container-sound-board">
        {SOUND_BOARD.sound_board.map((item) => {
          ;<div>
            <audio id="applause" src={item.sound} />
          </div>
        })}
      </div>
    </div>
  )
}

export default SoundBoard
