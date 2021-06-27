import React, { useState } from 'react'
import './faq-collapse.css'
import { FAQ_COLLAPSE } from '../../constants/imageConstant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'

const FAQCollapse = () => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="App-faq-collapse">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        {FAQ_COLLAPSE.faq_collapse.map((data, index) => (
          <div className={`faq ${selected === index ? 'active' : ''}`}>
            <h3 className="faq-title">{data.question}</h3>
            <p className="faq-text">{data.answer}</p>
            <button className="faq-toggle">
              <FontAwesomeIcon
                className="fa-chevron-down"
                icon={faChevronDown}
                onClick={() => {
                  setSelected(index)
                  //   console.log(index)
                }}
              />

              <FontAwesomeIcon
                onClick={() => {
                  setSelected({ selected: index })
                }}
                className="fa-times"
                icon={faTimes}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQCollapse
