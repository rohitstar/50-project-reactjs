import React from 'react'
import './card-project.css'

const imgData =
  'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'

const CardProject = () => {
  return (
    <div className="App-cards">
      <div className="card-project">
        <div className="card-header-project">
          <img src={imgData} alt="getImage" />
        </div>

        <div className="card-project-container">
          <h3 className="card-title">Expend card</h3>
          <p className="card-project-excerpt">description</p>
        </div>
      </div>
    </div>
  )
}

export default CardProject
