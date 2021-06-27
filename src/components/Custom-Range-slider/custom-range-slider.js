import React, { useState, useEffect } from 'react'
import './custom-range-slider.css'

const CustomRangeSlider = () => {
  const [value, onChange] = useState(50)
  const [range, setRange] = useState()

  useEffect(() => {
    setRange(`${Number((value / 2) * 4.5)}px`)
    // console.log(`${Number((value / 2) * 4.5)}px`)
  }, [value])

  return (
    <div className="App-range-slider">
      <h2 className="range-h2">Custom Range Slider</h2>
      <div className="range-container">
        <input
          onChange={({ target: { value: radius } }) => {
            onChange(radius)
          }}
          type="range"
          id="range"
          min="0"
          max="100"
        />
        <label className="buble" style={{ left: range }} htmlFor="range">
          {value}
        </label>
      </div>
    </div>
  )
}

export default CustomRangeSlider

// import React, { useState } from 'react'
// import './custom-range-slider.css'

// const CustomRangeSlider = () => {
//   const [range, setRange] = useState()
//   const [valued, setValued] = useState(50)

//   const getlabelChangeHandler = (e) => {
//     const value = +e.target.value
//     const label = e.target.nextElementSibling

//     const range_width = getComputedStyle(e.target).getPropertyValue('width')
//     const label_width = getComputedStyle(label).getPropertyValue('width')

//     const num_width = +range_width.substring(0, range_width.length - 2)
//     const num_label_width = +label_width.substring(0, label_width.length - 2)

//     const max = +e.target.max
//     const min = +e.target.min

//     const left =
//       value * (num_width / max) -
//       num_label_width / 2 +
//       scale(value, min, max, 10, -10)

//     setRange(left)
//     setValued(value)
//     // console.log(left)
//   }

//   const scale = (num, in_min, in_max, out_min, out_max) => {
//     return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
//   }

//   return (
//     <div className="App-range-slider">
//       <h2 className="range-h2">Custom Range Slider</h2>
//       <div className="range-container">
//         <input
//           onClick={getlabelChangeHandler}
//           type="range"
//           id="range"
//           min="0"
//           max="100"
//         />
//         <label style={{ left: `${range}px` }} htmlFor="range">
//           {valued}
//         </label>
//       </div>
//     </div>
//   )
// }

// export default CustomRangeSlider
