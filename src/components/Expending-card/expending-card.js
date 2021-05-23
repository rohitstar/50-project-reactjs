import React from 'react'
import './expending-card.css'
import { IMAGE_DATA } from '../../constants/imageConstant'

export default class ExpendingCard extends React.Component {
  state = {
    selected: 0,
  }
  render() {
    return (
      <div className="Apps">
        <div className="container">
          {IMAGE_DATA.image_data.map((data, index) => (
            <div
              // className={`panel ${'active' === data.active ? 'active' : ''}`}
              className={`panel ${
                this.state.selected == index ? 'active' : ''
              }`}
              onClick={() => this.setState({ selected: index })}
              style={{ backgroundImage: `url(${data.url})` }}
            >
              <h3>{data.title}</h3>
              {/* <p>{data.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
