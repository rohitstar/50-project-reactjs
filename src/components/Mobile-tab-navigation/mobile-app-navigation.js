import React, { useState } from 'react'
import './mobile-app-navigation.css'
import {
  faBlog,
  faHome,
  faRainbow,
  faWalking,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const phoneImage = [
  {
    src: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
    alt: 'home',
  },
  {
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    alt: 'working',
  },
  {
    src: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
    alt: 'blog',
    show: 'show',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    alt: 'about',
  },
]

const navbar = [
  {
    name: 'Home',
    icon: <FontAwesomeIcon icon={faHome} />,
    active: 'active',
  },
  {
    name: 'Walking',
    icon: <FontAwesomeIcon icon={faWalking} />,
  },
  {
    name: 'Blog',
    icon: <FontAwesomeIcon icon={faBlog} />,
  },
  {
    name: 'About',
    icon: <FontAwesomeIcon icon={faRainbow} />,
  },
]

const MobileAppNavigation = () => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="App-mobile-navigation">
      <div className="phone-mobile-nav">
        {phoneImage.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className={`nav-content-mobile-nav ${
              selected === index ? 'show' : ''
            }`}
          />
        ))}

        <div className="mobile-nav">
          <ul>
            {navbar.map((navi, index) => (
              <li
                onClick={() => setSelected(index)}
                key={index}
                className={selected === index ? 'active' : ''}
              >
                {/* <i class="fas fa-home"></i> */}
                {navi.icon}
                <p>{navi.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileAppNavigation
