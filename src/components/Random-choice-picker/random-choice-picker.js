import React, { useEffect, useState } from 'react'
import './random-choice-picker.css'

const RandomChoicePicker = () => {
  //   const [tagEl, setIsTagEl] = useState()

  //   const getDataTagChangeHandler = (event) => {
  //     setIsTagEl(event.target.value)

  //   }

  //   function createTags(input) {
  //     const tags = input
  //       .split(',')
  //       .filter((tag) => tag.trim() !== '')
  //       .map((tag) => tag.trim())
  //     //   console.log(tags)

  //     tagsEl.innerHTML = ''

  //     tags.forEach((tag) => {
  //       const tagEl = document.createElement('span')
  //     //   tagEl.classList.add('tag')
  //       tagEl.innerText = tag
  //       tagsEl.appendChild(tagEl)
  //     })
  //   }

  // useEffect(() => {
  //   const interval = setInterval(() => {

  //   }, 100)
  // }, [])

  return (
    <div className="App-random-choice-picker">
      <div className="container-random-choice-picker">
        <h3>
          Enter all the choices divided by the comma (',').
          <br />
          Press enter when you're done
        </h3>

        <textarea
          //   onChange={getDataTagChangeHandler}
          placeholder="Enter choices here...."
          id="textarea"
        />

        <div id="tags">
          <span class="tag">choice 1</span>
          <span class="tag">choice 2</span>
          <span class="tag">choice 3</span>
        </div>
      </div>
    </div>
  )
}

export default RandomChoicePicker
