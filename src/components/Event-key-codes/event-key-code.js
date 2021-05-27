import React, { useState, useEffect } from 'react'
import './event-key-code.css'
// import { SCROLL_CONTENT } from '../../constants/imageConstant'

const EventKeyCode = () => {
  const [data, setIsData] = useState([])
  //   const [isSet, setIsSet] = useState(false)

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      //   console.log(isSet)
      setIsData(event)
      //   setIsSet({isSet})
    })
  }, [])

  return (
    <div className="App-dad-joke">
      <div className="insert">
        <div className="key">
          {data.key === '' ? 'Space' : data.key}
          <small>EventKey</small>
        </div>

        <div className="key">
          {data.keyCode}
          <small>EventKeyCodes</small>
        </div>

        <div className="key">
          {data.code}
          <small>EventCode</small>
        </div>

        <div className="keyBox">Press any key to get the keyCode</div>
      </div>
    </div>
  )
}

export default EventKeyCode
