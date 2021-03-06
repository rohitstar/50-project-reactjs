import React from 'react'
import useSlider from './useSlider'
import './image-carousal.css'

const ImageData = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80',
    name: 'first-image',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    name: 'second-image',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    name: 'third-image',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80',
    name: 'fourth-image',
  },
]

const ImageCarousal = () => {
  const { offset, leftChangeHandler, rightChangeHandler } = useSlider({
    total: ImageData.length,
    enabled: true,
    useLoaded: false,
    speed: 3000,
  })

  return (
    <div className="App-image-carousals">
      <div className="container-carousel">
        <div
          className="image-container"
          style={{
            transform: `translate3d(-${offset * 500}px,0,0)`,
          }}
          id="imgs"
        >
          {ImageData.map((data, index) => (
            <img
              className="img-carousal"
              key={index}
              src={data.src}
              alt={data.name}
            />
          ))}
        </div>

        <div className="buttons-container-btn">
          <button
            onClick={leftChangeHandler}
            id="left"
            className="btn-btnned btn-btnned-prev"
          >
            Prev
          </button>
          <button
            onClick={rightChangeHandler}
            id="right"
            className="btn-btnned btn-btnned-next"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageCarousal
