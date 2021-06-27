import React from 'react'
import './form-wave-animation.css'
import { Link } from 'react-router-dom'

const FormWaveAnimation = () => {
  return (
    <div className="App-split-landing-page">
      <div className="container-form-wave">
        <h1>Please Login</h1>
        <div class="form">
          <div class="form-control">
            <input type="email" placeholder="" />
            <label>Email</label>
          </div>

          <div class="form-control">
            <input type="password" placeholder="" required />
            <label>Password</label>
          </div>
          <button class="btn-wave">Login</button>
          <p class="text-msg">
            Don't have any account?<Link>Register</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FormWaveAnimation
