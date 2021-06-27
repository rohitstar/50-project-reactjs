import React, { useState } from 'react'
import './hidden-search-widget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const HiddenSearch = () => {
  const [selected, setSelected] = useState(false)

  const openChangeHandler = () => {
    setSelected(!selected)
  }

  return (
    <div className="App-hidden">
      <div className={`search-hidden ${selected ? 'active' : ''}`}>
        <input type="text" class="input-hidden" placeholder="Search...." />
        <button onClick={openChangeHandler} class="btn-search-hidden">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  )
}

export default HiddenSearch
