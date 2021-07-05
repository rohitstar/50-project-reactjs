import React, { useState, useEffect, useRef } from 'react'
import './typewrite.css'

const text = () =>
  `I had never seen a house on fire before, so, one evening when I heard fire engines with loud alarm bells rushing past my house. I quickly ran out and, a few streets away, joined a large crowd of people.
   We could see the fire only from a distance because the police would not allow any one near the building on fire.`.split(
    ' '
  )

const WordChange = React.memo(function WordChange(props) {
  const { texted, active, correct } = props

  if (correct === true) {
    return <span className="typewiter-correct">{texted} </span>
  }

  if (correct === false) {
    return <span className="typewiter-incorrect">{texted} </span>
  }

  if (active) {
    return <span className="typewiter-active">{texted} </span>
  }

  return <span>{texted} </span>
})

function TypingSpeed() {
  const [Input, setInput] = useState('')
  const writingText = useRef(text())

  const [startCounting, setStartCounting] = useState(false)
  const [activeWord, setActiveWord] = useState(0)
  const [correctWord, setCorrectWord] = useState([])
  const [completed, setCompleted] = useState(true)

  function Counter(startCounted) {
    const [timeEl, setTimeEl] = useState(0)

    useEffect(() => {
      let countId

      if (startCounted) {
        countId = setInterval(() => {
          if (timeEl < 60) {
            setTimeEl((oldTime) => oldTime + 1)
            console.log(timeEl)
          } else {
            setCompleted(false)
          }
        }, 1000)
      }

      return () => {
        clearInterval(countId)
      }
    }, [startCounted, timeEl])

    const wordMinutes = timeEl / 60
    const WordChar = correctWord.filter(Boolean).length

    return (
      <div className="typewiter-result">
        <p className="typewiter-time">
          <b>Time : </b>
          {timeEl}
        </p>
        {/* <p className="completeTime">{completedTime}</p> */}
        <p className="typewiter-speed">
          <b>Speed : </b>
          {(WordChar / wordMinutes || 0).toFixed(2)} WPM
        </p>
      </div>
    )
  }

  function getInputChangeHandler(value) {
    if (activeWord === writingText.current.length) {
      return
    }

    if (!startCounting) {
      setStartCounting(true)
      setCompleted(true)
    }

    if (value.endsWith(' ')) {
      if (activeWord === writingText.current.length - 1) {
        setStartCounting(false)
        setCompleted(false)
      } else {
        setInput('')
      }

      //   if ()

      setActiveWord((idx) => idx + 1)

      setCorrectWord((data) => {
        const word = value.trim()
        const newResult = [...data]
        newResult[activeWord] = word === writingText.current[activeWord]
        return newResult
      })
    } else {
      setInput(value)
    }
  }

  return (
    <div className="App-typewiter">
      <div className="typewiter-container">
        {Counter(startCounting)}

        <div>
          <h1 className="typewiter-heading">Typing Master</h1>

          <div className="typewiter-text">
            {writingText.current.map((text, index) => {
              return (
                <WordChange
                  key={index}
                  texted={text}
                  active={index === activeWord}
                  correct={correctWord[index]}
                />
              )
            })}
            {completed ? (
              <input
                className="typewiter-input"
                placeholder="Start Typing......"
                onChange={(e) => getInputChangeHandler(e.target.value)}
                type="text"
                value={Input}
              />
            ) : (
              <div>
                <h1 className="typewiter-time-over">Time Over</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypingSpeed
