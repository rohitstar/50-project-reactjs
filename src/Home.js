import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '50px' }}>
        <Link to="/expending-card">01 Expending Card</Link>
        <Link to="/progress-step">02 Progress Steps</Link>
        <Link to="/rotating-navigation">03 Rotating Navigation</Link>
        <Link to="/hidden-search-widget">04 Hidden Search</Link>
        <Link to="/blurry-loading">05 Blurry Loading</Link>
        <Link to="/scroll-animation">06 Scroll Animation</Link>
        <Link to="/split-landing-page">07 Split Landing Page</Link>
        <Link to="/form-wave-animation">08 Form Wave Animation</Link>
        <Link to="/sound-board">09 Sound Board</Link>
        <Link to="/dad-joke">10 Dad Jokes</Link>
        <Link to="/event-key-code">11 Event Key Code</Link>
        <Link to="/faq-collapse">12 FAQ Collapse</Link>
        <Link to="/random-choice-picker">13 Random Choice Picker</Link>
      </div>
    </>
  )
}
export default Home
