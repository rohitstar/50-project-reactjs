import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { PROJECT_DATA } from './constants/project-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBehance,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <>
      <div className="App-home">
        <header className="header-our-profile">
          <div className="resume">
            <div className="profile-pic"></div>
            <h1 className="header-name">I am Rohit Chauhan</h1>

            <div className="professions">
              <div className="profession">
                <div className="circle-hole"></div>
                <p>Web Developer</p>
              </div>
              <div className="profession">
                <p>Android Developer</p>
              </div>
              <div className="profession">
                <p>Graphics Designer</p>
              </div>
              <div className="profession">
                <p>UI/UX Designer</p>
              </div>
            </div>
            <div className="social-icons">
              <Link href="" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link href="" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link href="" className="social-icon">
                <FontAwesomeIcon icon={faBehance} />
              </Link>
            </div>
            <div className="email">
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp; rohitstarrc@gmail.com
            </div>
          </div>
        </header>

        <div className="main-header">
          <h1>React Projects</h1>
        </div>

        <main className="main-project">
          {PROJECT_DATA.ourProject.map((item, index) => (
            <div key={index} className="movie-app-project">
              <Link to={item.link}>
                <img src={item.url} alt={item.title} />
                <div className="movie-info-project">
                  <h3>{item.title}</h3>
                  {/* <p>{item.des}</p> */}
                </div>
              </Link>
            </div>
          ))}
        </main>
      </div>
      {/* 
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '50px',
        }}
      >
        <Link to="/expending-card">01 Expending Card</Link>
        <Link to="/progress-step">02 Progress Steps</Link>
        <Link to="/rotating-navigation">03 Rotating Navigation</Link>
        <Link to="/hidden-search-widget">04 Hidden Search</Link>
        <Link to="/blurry-loading">05 Blurry Loading</Link>
        <Link to="/scroll-animation">06 Scroll Animation</Link>
        <Link to="/split-landing-page">07 Split Landing Page(U)</Link>
        <Link to="/form-wave-animation">08 Form Wave Animation</Link>
        <Link to="/sound-board">09 Sound Board</Link>
        <Link to="/dad-joke">10 Dad Jokes</Link>
        <Link to="/event-key-code">11 Event Key Code</Link>
        <Link to="/faq-collapse">12 FAQ Collapse</Link>
        <Link to="/random-choice-picker">13 Random Choice Picker (U)</Link>
        <Link to="/animated-navigation">14 Animated Navigation</Link>
        <Link to="/incrementing-counter">15 Incrementing Counter</Link>
        <Link to="/drink-water">16 Drink Water</Link>
        <Link to="/movie-app">17 Movies App</Link>
        <Link to="/background-slider">18 Background Slider</Link>
        <Link to="/clock-theme">19 Clock Theme</Link>
        <Link to="/button-ripple-effect">20 Button Ripple Effect(U)</Link>
        <Link to="/drag-n-drop">21 Drag And Drop(U)</Link>
        <Link to="/drawing-app">22 Drawing App(U)</Link>
        <Link to="/kinetic-loader">23 kinetic Loader</Link>
        <Link to="/content-placeholder">24 Content Placeholder</Link>
        <Link to="/sticky-navbar">25 Sticky Navbar</Link>
        <Link to="/double-vertical">26 Double Vertical</Link>
        <Link to="/github-profile">27 Github Profile</Link>
        <Link to="/toast-notification">28 Toast Notification</Link>

        <Link to="/auto-text-effect">30 Auto Text Effect</Link>
        <Link to="/password-generator">31 Password Generator</Link>
        <Link to="/checkboxes">32 Checkboxes</Link>
        <Link to="/note-app">33 Note App</Link>
        <Link to="/count-down">34 Count Down(U)</Link>
        <Link to="/image-carousal">35 Image Carousal</Link>
        <Link to="/hoverboard">36 Hoverboard[some work]</Link>
        <Link to="/pokedex">37 Pokedex[1359-1350]</Link>
        <Link to="/mobile-app-navigation">38 Mobile App Navigation</Link>
        <Link to="/password-strength">39 Password Strength Background</Link>
        <Link to="/3d-background-boxes">40 3D Background Boxes</Link>
        <Link to="/verify-account">41 Verify Account UI(U)</Link>
        <Link to="/live-user-filter">42 Live User Filter</Link>
        <Link to="/feedback-ui-design">43 Feedback UI Design[U]</Link>
        <Link to="/custom-range-slider">44 Custom Range Slider</Link>
        <Link to="/netflix-navigation">45 Netflix Mobile Navigation</Link>
        <Link to="/quiz-app">46 Quiz App(U)</Link>
        <Link to="/testimonial-box">47 Testimonial Box(C.P.)</Link>
        <Link to="/random-image-feed">48 Random Image Feed</Link>
        <Link to="/todo-list">49 Todo List</Link>
        <Link to="/insect-catch-game">50 Insect Catch Game</Link>
        <Link to="/card-project">Card</Link>
      </div> */}
    </>
  )
}
export default Home
