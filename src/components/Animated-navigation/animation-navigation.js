import React, { useState } from 'react'
import './animation-navigation.css'

const AnimationNavigation = () => {
  const [selected, setSelected] = useState(false)

  const getNavigationChangeHandler = () => {
    setSelected(!selected)
  }

  return (
    <div className="App-animation-navigation">
      <div className="container-animation-navigation">
        <nav className={`nav-animated ${selected ? 'active' : ''}`} id="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <button
            onClick={getNavigationChangeHandler}
            className="icon-nav"
            id="toggle"
          >
            <div className="line line1"></div>
            <div className="line line2"></div>
          </button>
        </nav>
      </div>
    </div>
  )
}

export default AnimationNavigation
