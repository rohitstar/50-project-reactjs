import React, { useState } from 'react'
import './animation-navigation.css'
import { Link } from 'react-router-dom'

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
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Works</Link>
            </li>
            <li>
              <Link>Contact</Link>
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
