import React, { useEffect } from 'react'
import './random-image-feed.css'

const RandomImageFeed = () => {
  const unsplashURL = 'https://source.unsplash.com/random/'
  const rows = 5
  //   const [randomImage, setRandomImage] = useState()

  useEffect(() => {
    const container = document.querySelector('.random-image-container')

    for (let i = 0; i < rows * 3; i++) {
      //   console.log(`${unsplashURL}${getRandomSize()}`)
      //   setRandomImage(`${unsplashURL}${getRandomSize()}`)
      //   console.log(randomImage)
      const img = document.createElement('img')
      img.src = `${unsplashURL}${getRandomSize()}`
      container.appendChild(img)
    }
  }, [])

  //   console.log(`${unsplashURL}${getRandomSize()}`)

  function getRandomSize() {
    // console.log(`${getRandomNr()}x${getRandomNr()}`)
    return `${getRandomNr()}x${getRandomNr()}`
  }

  function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
  }

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
