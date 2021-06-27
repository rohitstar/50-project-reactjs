import React, { useEffect, useState } from 'react'
import './todo-list.css'

const getLocalItems = () => {
  let list = localStorage.getItem('lists')

  if (list) {
    return JSON.parse(localStorage.getItem('lists'))
  } else {
    return []
  }
}

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('')
  const [items, setItems] = useState(getLocalItems())
  //   const [complete, setComplete] = useState(false)

  const getSubmitHandle = (e) => {
    e.preventDefault()
    if (!newTodo) {
    } else {
      setItems([...items, newTodo])
      setNewTodo('')
    }
  }

  const getRemovehandle = (id) => {
    const filterTodoList = items.filter((list, listIndex) => listIndex !== id)
    setItems(filterTodoList)
  }

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items))
  }, [items])

  //   const getCompletedHandle = () => {}

  return (
    <div className="App-todo-list">
      <h1 className="todo-h1">Todos</h1>
      <form
        onSubmit={(e) => getSubmitHandle(e)}
        className="form-todo"
        id="form"
      >
        <input
          type="text"
          className="input-todo"
          id="input"
          placeholder="Enter Your Todo"
          autocomplete="off"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />

        <ul className="todos-todo" id="todos">
          {items.map((item, index) => (
            <li
              //   className={complete && 'completed'}
              //   onClick={getCompletedHandle}
              onContextMenu={() => getRemovehandle(index)}
              key={index}
            >
              {item}
            </li>
          ))}
          {/* <li className="completed">My Second Todo</li> */}
        </ul>
      </form>
      <small className="small-todo">Right Click to delete todo</small>
    </div>
  )
}

export default TodoList
