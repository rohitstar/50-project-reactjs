import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './background-slider.css'

// const slideImage = [
//   {
//     id: 1,
//     slide_Image:
//       'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
//   },
//   {
//     id: 2,
//     slide_Image:
//       'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
//   },
//   {
//     id: 3,
//     slide_Image:
//       'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
//   },
//   {
//     id: 4,
//     slide_Image:
//       'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
//   },
//   {
//     id: 5,
//     slide_Image:
//       'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
//   },
// ]

const slideImage = [
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',

  'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',

  'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',

  'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',

  'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
]

const BackgroundSlider = () => {
  const [currentSlider, setCurrentSlider] = useState(0)

  const rightBtnChangeHandler = () => {
    setCurrentSlider((prevSlider) => prevSlider + 1)

    if (currentSlider === slideImage.length - 1) {
      setCurrentSlider(0)
    } else {
      setCurrentSlider(currentSlider + 1)
    }
  }

  const leftBtnChangeHandler = () => {
    setCurrentSlider((prevSlider) => prevSlider - 1)

    if (currentSlider > 0) {
      setCurrentSlider(currentSlider - 1)
    } else {
      setCurrentSlider(slideImage.length - 1)
    }
  }

  return (
    <div
      className="App-background-slider"
      style={{ backgroundImage: 'url(' + slideImage[currentSlider] + ')' }}
    >
      <div className="slider-container">
        {slideImage.map((data, index) => (
          <div
            className={`slide ${currentSlider === index ? 'active' : ''}`}
            style={{ backgroundImage: 'url(' + data + ')' }}
          ></div>
        ))}

        <button
          onClick={leftBtnChangeHandler}
          className="arrow left-arrow"
          id="left"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <button
          onClick={rightBtnChangeHandler}
          className="arrow right-arrow"
          id="right"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  )
}

export default BackgroundSlider
