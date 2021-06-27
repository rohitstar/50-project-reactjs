import React, { useState } from 'react'
import './double-vertical-slider.css'
import { doubleSlides } from '../../constants/slider-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const DoubleVerticalSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderHeight = window.innerHeight

  console.log(sliderHeight)

  const getRightSlideChangeHandler = () => {
    setActiveIndex((prev) => prev + 1)
    if (activeIndex === doubleSlides.Sliders.length - 1) {
      setActiveIndex(0)
    } else {
      setActiveIndex(activeIndex + 1)
    }
    // console.log(activeIndex)
  }

  const getLeftSlideChangeHandler = () => {
    setActiveIndex((prev) => prev - 1)
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    } else {
      setActiveIndex(doubleSlides.Sliders.length - 1)
    }
    // console.log(activeIndex)
  }

  return (
    <div className="App-double-vertical">
      <div className="slider-container">
        <div
          style={{ top: `-${(doubleSlides.Sliders.length - 1) * 100}vh` }}
          className="left-slide"
        >
          {doubleSlides.Sliders.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: item.bgcolor,
                transition: `transform 0.5s ease-in-out`,
                transform: `translateY(${activeIndex * sliderHeight}px)`,
              }}
            >
              <h1>{item.title}</h1>
              <p>{item.des}</p>
            </div>
          ))}
        </div>
        <div className="right-slide">
          {doubleSlides.Sliders.map((item, index) => (
            <div
              key={index}
              style={{
                transform: `translateY(-${activeIndex * sliderHeight}px)`,
                transition: `transform 0.5s ease-in-out`,
                backgroundImage: `url(${item.url})`,
              }}
            ></div>
          ))}
        </div>
        <div className="action-buttons">
          <button
            onClick={getLeftSlideChangeHandler}
            className="button-vertical down-button"
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </button>

          <button
            onClick={getRightSlideChangeHandler}
            className="button-vertical up-button"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DoubleVerticalSlider
