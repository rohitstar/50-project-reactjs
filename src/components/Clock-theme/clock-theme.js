import React, { useState } from 'react'
import './clock-theme.css'

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const months = [
  'Jun',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const ClockTheme = () => {
  const [theme, setTheme] = useState(true)
  const [hourEl, setHourEl] = useState()
  const [minuteEl, setMinuteEl] = useState()
  const [secondEl, setSecondEl] = useState()
  const [timeEl, setTimeEl] = useState()
  const [dateEl, setDateEl] = useState()
  const [isDate, setIsDate] = useState()

  const color = theme ? '' : 'Dark'

  if (theme) {
    document.body.classList.remove('DarkMode')
    document.body.classList.add('WhiteMode')
  } else {
    document.body.classList.remove('WhiteMode')
    document.body.classList.add('DarkMode')
  }

  function setTimes() {
    const time = new Date()
    const month = time.getMonth()
    const date = time.getDate()
    const day = time.getDay()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    setHourEl(
      `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    )

    setMinuteEl(
      `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    )

    setSecondEl(
      `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
    )

    setTimeEl(
      `${hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    )

    setDateEl(`${days[day]}, ${months[month]}`)

    setIsDate(date)
  }
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

  setInterval(setTimes, 1000)

  return (
    // <div className="App-clock-theme">
    <div className={`App-clock ${color}`}>
      <div className="App-clock">
        <button onClick={() => setTheme(!theme)} class="toggle">
          {theme ? 'Dark Mode' : 'Light Mode'}
        </button>

        <div class="clock-container">
          <div class="clock">
            <div style={{ transform: hourEl }} class="needle hour"></div>
            <div style={{ transform: minuteEl }} class="needle minute"></div>
            <div style={{ transform: secondEl }} class="needle second"></div>
            <div class="center-point"></div>
          </div>

          <div class="time">{timeEl}</div>
          {/* <div class="date">
            Monday, Nov <span class="circle">2</span>
          </div> */}
          <div class="date">
            {dateEl} <span class="circle">{isDate}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClockTheme
