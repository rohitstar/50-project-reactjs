import React, { useState } from 'react'
import './drag-n-drop.css'

const EmptyClasses = [
  {
    emptyData: '1',
    draggable: 'true',
    fillClassName: 'fill',
  },
  {
    emptyData: '2',
  },
  {
    emptyData: '3',
  },
  {
    emptyData: '4',
  },
  {
    emptyData: '5',
  },
]

const DragNDrop = () => {
  const [fill, setFill] = useState(false)
  const [emptiers, setEmptiers] = useState(false)
  const [invisible, setInvisible] = useState(false)

  const dragStart = () => {
    console.log('drag Start')
    setFill(fill)
    setTimeout(() => setInvisible(invisible), 0)
    // setTimeout(() => setFill((prevState) => ({ fill: !prevState.fill })), 0)
  }

  const dragEnd = () => {
    console.log('drag End')
    setFill(fill)
  }

  const dragOver = (e) => {
    console.log('drag Over')
    e.preventDefault()
  }

  const dragEnter = (e) => {
    console.log('drag Enter')
    e.preventDefault()
    setEmptiers(emptiers)
  }

  const dragLeave = () => {
    console.log('drag Leave')
  }

  const dragDrop = () => {
    console.log('drag Drop')
  }

  return (
    <div className="App-drag-n-drop">
      {EmptyClasses.map((data, index) => (
        <div
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={dragDrop}
          key={index}
          className={`empty ${emptiers ? 'hovered' : ''} `}
        >
          {!invisible && (
            <div
              className={`${data.fillClassName} ${fill ? ' ' : 'hold'}`}
              draggable={data.draggable}
              onDragStart={dragStart}
              onDragEnd={dragEnd}
            ></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default DragNDrop
