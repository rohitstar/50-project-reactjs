import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-nav">
      <ul>
        <li>
          <a href="/">
            {/* <a href="/"> */}
            <FontAwesomeIcon icon={faArrowLeft} />
            &nbsp; home Page
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* </a> */}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
