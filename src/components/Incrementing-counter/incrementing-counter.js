import React, { useEffect } from 'react'
import './incrementing-counter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faYoutube,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const IncrementingCounter = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.countered')

    counters.forEach((counter) => {
      counter.innerText = '0'

      const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        console.log(typeof target, target)
        const c = +counter.innerText

        const increment = target / 200

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`

          setTimeout(updateCounter, 1)
        }
      }

      updateCounter()
    })
  })

  return (
    <div className="App-incrementing-countered">
      <div className="counter-containered">
        <FontAwesomeIcon icon={faTwitter} size="3x" />
        <div className="countered" data-target="15000"></div>
        <span>Twitter Followers</span>
      </div>

      <div className="counter-containered">
        <FontAwesomeIcon icon={faYoutube} size="3x" />
        <div className="countered" data-target="5000"></div>
        <span>YouTube Subscriber</span>
      </div>

      <div className="counter-containered">
        <FontAwesomeIcon icon={faFacebook} size="3x" />
        <div className="countered" data-target="7500"></div>
        <span>Facebook</span>
      </div>
    </div>
  )
}

export default IncrementingCounter
