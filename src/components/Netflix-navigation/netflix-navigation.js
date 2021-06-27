import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './netflix-navigation.css'

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
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Life at Netflix</a>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#">Netflix culture memo</a>
                  </li>
                  <li>
                    <a href="#">Work life balance</a>
                  </li>
                  <li>
                    <a href="#">Inclusion & diversity</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
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
