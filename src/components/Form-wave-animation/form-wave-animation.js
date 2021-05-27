import React from 'react'
import './form-wave-animation.css'

const FormWaveAnimation = () => {
  //   const [hovered, setHovered] = useState(false)

  return (
    <div className="App-split-landing-page">
      <div className="container-form-wave">
        <h1>Please Login</h1>
        <div class="form">
          <div class="form-control">
            <input type="email" placeholder=" " />
            <label>Email</label>
          </div>

          <div class="form-control">
            <input type="password" placeholder=" " required />
            <label>Password</label>
          </div>
          <button class="btn-wave">Login</button>
          <p class="text-msg">
            Don't have any account?<a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FormWaveAnimation
