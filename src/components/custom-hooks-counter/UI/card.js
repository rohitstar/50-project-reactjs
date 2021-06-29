import React from 'react'
import './card-custom.css'

function Card(props) {
  return <div className="card">{props.children}</div>
}

export default Card
