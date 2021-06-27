import React, { useState } from 'react'
import './progress-step.css'
import { NUMBER } from '../../constants/imageConstant'

const ProgressStep = () => {
  let [progress, setProgress] = useState(1)
  let [percent, setPercent] = useState(1)

  const prevStepChangeHandler = () => {
    setProgress((progressCount) => progressCount - 1)
    setPercent(percent > 0 ? percent - 33.3 : 0)
    if (progress < 1) {
      progress = 1
    }

    console.log(progress)
  }

  const nextStepChangeHandler = () => {
    setProgress((progressCount) => progressCount + 1)
    setPercent((percents) => (percents < 100 ? percents + 33.0 : 100))
    if (progress > 4) {
      progress = 4
    }

    console.log(progress)
  }

  return (
    <div className="Apps-progress">
      <div className="containing">
        <div className="progress-containing">
          <div
            style={{ width: `${percent}%` }}
            className="progress"
            id="progress"
          ></div>
          {NUMBER.number_step.map((data, index) => (
            <div
              key={index}
              className={`circle ${progress > index ? 'active' : ''}`}
            >
              {data.number}
            </div>
          ))}
        </div>
        <button
          disabled={progress === 1}
          onClick={prevStepChangeHandler}
          className="btn"
          id="prev"
          //   disabled
        >
          Prev
        </button>
        <button
          disabled={progress === 4}
          onClick={nextStepChangeHandler}
          className="btn"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ProgressStep
