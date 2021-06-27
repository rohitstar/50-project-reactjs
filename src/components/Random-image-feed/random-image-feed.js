import React, { useEffect } from 'react'
import './random-image-feed.css'

const RandomImageFeed = () => {
  useEffect(() => {
    const unsplashURL = 'https://source.unsplash.com/random/'
    const rows = 5
    const container = document.querySelector('.random-image-container')

    for (let i = 0; i < rows * 3; i++) {
      const img = document.createElement('img')
      img.src = `${unsplashURL}${getRandomSize()}`
      container.appendChild(img)
    }
    function getRandomSize() {
      return `${getRandomNr()}x${getRandomNr()}`
    }

    function getRandomNr() {
      return Math.floor(Math.random() * 10) + 300
    }
  }, [])

  return (
    <div className="App-testimonial">
      <h1 className="title-random">Random Image Feed</h1>
      <div className="random-image-container">
        {/* <img src={`${unsplashURL}${getRandomSize()}`} alt="images" /> */}
        {/* {randomImage} */}
        {/* {randomImage.map((data) => (
          <img src={data} alt="images" />
        ))} */}
      </div>
    </div>
  )
}

export default RandomImageFeed
