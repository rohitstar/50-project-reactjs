import React, { useState } from 'react'
import './content-placeholder.css'

const ContentPlaceholder = () => {
  const [header, setHeader] = useState()
  const [title, setTitle] = useState()
  const [excerpt, setExcerpt] = useState()
  const [profileImg, setProfileImg] = useState()
  const [name, setName] = useState()
  const [date, setDate] = useState()
  const [animated_bgs, setAnimated_bgs] = useState(true)
  const [animated_bg_texts, setAnimated_bg_texts] = useState(true)

  const getData = () => {
    setHeader(
      'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'
    )
    setTitle('Lorem ipsum dolor sit')
    setExcerpt('Lorem ipsum dolor sit nam in, assumenda accusantium at!')
    setProfileImg(
      <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="profile" />
    )
    setName('Jone Doe')
    setDate('Jun 04, 2021')
    setAnimated_bgs(false)
    setAnimated_bg_texts(false)
  }

  setTimeout(getData, 2500)

  return (
    <div className="App-content-placeholder">
      <div className="card">
        <div
          className={`card-header ${animated_bgs ? 'animated-bg' : ''}`}
          id="header"
        >
          <img src={header} alt="Image" />
        </div>

        <div className="card-container">
          <h3
            className={`card-title ${animated_bgs ? 'animated-bg' : ''} ${
              animated_bg_texts ? 'animated-bg-text' : ''
            }`}
            id="title"
          >
            {title}
          </h3>
          <p className="card-excerpt" id="excerpt">
            {excerpt}
            <span
              className={`${animated_bgs ? 'animated-bg' : ''} ${
                animated_bg_texts ? 'animated-bg-text' : ''
              }`}
            >
              &nbsp;
            </span>
            <span
              className={`${animated_bgs ? 'animated-bg' : ''} ${
                animated_bg_texts ? 'animated-bg-text' : ''
              }`}
            >
              &nbsp;
            </span>
            <span
              className={`${animated_bgs ? 'animated-bg' : ''} ${
                animated_bg_texts ? 'animated-bg-text' : ''
              }`}
            >
              &nbsp;
            </span>
          </p>

          <div className="author">
            <div
              className={`profile-img ${animated_bgs ? 'animated-bg' : ''}`}
              id="profile_img"
            >
              {profileImg}
            </div>
            <div className="author-info">
              <strong
                className={`${animated_bgs ? 'animated-bg' : ''} ${
                  animated_bg_texts ? 'animated-bg-text' : ''
                }`}
                id="name"
              >
                {name}
              </strong>
              <small
                className={`${animated_bgs ? 'animated-bg' : ''} ${
                  animated_bg_texts ? 'animated-bg-text' : ''
                }`}
                id="date"
              >
                {date}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentPlaceholder
