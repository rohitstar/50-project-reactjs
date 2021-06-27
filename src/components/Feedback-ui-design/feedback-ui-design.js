import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './feedback-ui-design.css'

const ratingData = [
  {
    id: 1,
    src: 'https://image.flaticon.com/icons/svg/187/187150.svg',
    title: 'Unhappy',
    active: 'active',
  },
  {
    id: 2,
    src: 'https://image.flaticon.com/icons/svg/187/187136.svg',
    title: 'Neutral',
  },
  {
    id: 3,
    src: 'https://image.flaticon.com/icons/svg/187/187133.svg',
    title: 'Satisfied',
  },
]

const FeedbackUIDesign = () => {
  const [selected, setSelected] = useState(1)
  const [rating, setRating] = useState(true)
  //   let selectedRating = 'Satisfied'

  const getSubmithandler = () => {
    setRating(false)
  }

  return (
    <div className="App-feedback">
      <div id="panel" className="panel-container">
        {rating ? (
          <>
            <strong>
              How satisfied are you with our
              <br />
              customer support performance?
            </strong>

            <div className="ratings-container">
              {ratingData.map((rated) => (
                <div
                  onClick={() => setSelected(rated.id)}
                  key={rated.id}
                  className={`rating ${selected === rated.id ? 'active' : ''}`}
                >
                  <img src={rated.src} alt={rated.title} />
                  <small>{rated.title}</small>
                </div>
              ))}
            </div>

            <button
              onClick={getSubmithandler}
              className="feedback-btn"
              id="send"
            >
              Send Review
            </button>
          </>
        ) : (
          <div
            style={{ display: 'flex', flexDirection: 'column' }}
            className="ratings-container"
          >
            <div className="fa-heart">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <strong>Thank You!</strong>
            <br />

            {/* <strong>Feedback : {ratingData.title[selected]}</strong> */}
            <br />
            <p> We'll use your feedback to improve our customer support </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FeedbackUIDesign
