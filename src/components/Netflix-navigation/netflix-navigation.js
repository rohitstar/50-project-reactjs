import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './netflix-navigation.css'
import { Link } from 'react-router-dom'

const NetflixNavigation = () => {
  const [selected, setSelected] = useState(false)

  const getOpenChangeHandler = () => {
    setSelected(true)
  }

  const getCloseChangeHandler = () => {
    setSelected(false)
  }

  return (
    <div className="App-netflix">
      <button
        onClick={getOpenChangeHandler}
        className="nav-btn-netflix open-btn-netflix"
      >
        {/* <i className="fas fa-bars"></i> */}
        <FontAwesomeIcon icon={faBars} />
      </button>

      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014.png"
        alt="Logo"
        className="logo-netflix"
      />

      <p className="text-netflix">Mobile Navigation</p>

      <div className={`nav-netflix nav-black ${selected && 'visiable'}`}>
        <div className={`nav-netflix nav-red ${selected && 'visiable'}`}>
          <div className={`nav-netflix nav-white ${selected && 'visiable'}`}>
            <button
              onClick={getCloseChangeHandler}
              className="nav-btn-netflix close-btn-netflix"
            >
              {/* <i className="fas fa-times"></i> */}
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <img
              src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014.png"
              alt="Logo"
              className="logo-netflix"
            />

            <ul className="list-netflix">
              <li>
                <Link>Teams</Link>
              </li>
              <li>
                <Link>Locations</Link>
              </li>
              <li>
                <Link>Life at Netflix</Link>
              </li>
              <li>
                <ul>
                  <li>
                    <Link>Netflix culture memo</Link>
                  </li>
                  <li>
                    <Link>Work life balance</Link>
                  </li>
                  <li>
                    <Link>Inclusion & diversity</Link>
                  </li>
                  <li>
                    <Link>Blog</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NetflixNavigation
