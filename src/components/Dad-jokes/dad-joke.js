import React, { useState } from 'react'
import './dad-joke.css'
// import { SCROLL_CONTENT } from '../../constants/imageConstant'

const DadJokes = () => {
  const [isdata, setIsData] = useState([])

  async function generteJoke() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    // jokeEle.innerHTML = data.joke
    console.log(data)
    setIsData(data)
  }

  return (
    <div className="App-dad-joke">
      <div className="container-dad-joke">
        <h3>Don't Laugh Challenge</h3>
        <div id="joke" className="joke">
          {isdata.joke}
        </div>
        <button onClick={generteJoke} id="jokebtn" className="btn-joke">
          Get Another Joke
        </button>
      </div>
    </div>
  )
}

export default DadJokes
