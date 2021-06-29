import React from 'react'
import './custom-counter.css'
import ForwordCounter from './forwordCounter'
import BackwordCounter from './backwordCounter'

function CustomCounter() {
  return (
    <div className="App-custom">
      <div className="app-header-custom">
        <ForwordCounter />
        <BackwordCounter />
      </div>
    </div>
  )
}

export default CustomCounter
