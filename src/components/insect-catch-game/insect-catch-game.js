import React from 'react'
import './insect-catch-game.css'

const InsectCatchGame = () => {
  return (
    <div className="App-catch-game">
      <div className="screen-game">
        <h1 className="game-heading">Catch The Insect</h1>
        <div className="btn-game" id="start-btn-game">
          Play Game
        </div>
      </div>

      <div className="screen">
        <h1>What is your "favorite" insect?</h1>
        <ul className="insects-list-game">
          <li>
            <button className="choose-insect-btn-game">
              <p>Fly</p>
              <img
                src="http://pngimg.com/uploads/fly/fly_PNG3946.png"
                alt="fly"
              />
            </button>
          </li>

          <li>
            <button className="choose-insect-btn-game">
              <p>Mosquito</p>
              <img
                src="http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png"
                alt="mosquito"
              />
            </button>
          </li>

          <li>
            <button className="choose-insect-btn-game">
              <p>Spider</p>
              <img
                src="http://pngimg.com/uploads/spider/spider_PNG12.png"
                alt="spider"
              />
            </button>
          </li>

          <li>
            <button className="choose-insect-btn-game">
              <p>Roach</p>
              <img
                src="http://pngimg.com/uploads/roach/roach_PNG12163.png"
                alt="roach"
              />
            </button>
          </li>
        </ul>
      </div>

      <div className="screen-game game-container" id="game-container">
        <h3 id="time" className="time-game">
          Time: 00:00
        </h3>
        <h3 id="score" className="score-game">
          Score: 0
        </h3>
        <h5 id="message" className="message-game">
          Are you annnoyed yet? <br />
          You are playing an impossible game!!
        </h5>

        <div className="insect-game">
          <img
            src="http://pngimg.com/uploads/spider/spider_PNG12.png"
            alt="spider"
          />
        </div>
      </div>
    </div>
  )
}

export default InsectCatchGame
