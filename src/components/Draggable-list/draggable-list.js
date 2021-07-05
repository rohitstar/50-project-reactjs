import React, { useState, useRef } from 'react'
import ListCard from './list-item'
import { LISTITEM } from '../../constants/listData'
import './draggable-list.css'

const List = () => {
  const dragList = useRef()
  const dragOverList = useRef()
  const [list, setList] = useState(LISTITEM.listEl)

  const handleDragStart = (e, idx) => {
    dragList.current = idx
  }

  const handleDragEnter = (e, idx) => {
    dragOverList.current = idx

    const listItems = [...list]
    // console.log(listItems)
    const dragListContent = listItems[dragList.current]
    listItems.splice(dragList.current, 1)
    listItems.splice(dragOverList.current, 0, dragListContent)
    dragList.current = dragOverList.current
    dragOverList.current = null
    setList(listItems)
  }

  return (
    <div className="App-draggable-list">
      <div className="draggable-Container">
        <header className="draggable-header">
          <h1>Draggable List Items</h1>
        </header>
        <ul className="draggable-user-list">
          {list.map((item, index) => (
            <li
              key={index}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => handleDragEnter(e, index)}
              draggable
            >
              <ListCard title={item.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default List
