import React, { useState } from 'react'
import './password-strength.css'

const PasswordStrength = () => {
  const [input, setInput] = useState()

  const getInputChangeHandler = (e) => {
    const inputData = e.target.value
    const length = inputData.length
    const blurValue = 20 - length * 2
    console.log(blurValue)
    setInput(blurValue)
  }

  return (
    <div className="App-password-strength">
      <div
        style={{ filter: `blur(${input}px)` }}
        className="background-strength"
        id="background-strength"
      ></div>
      <div className="strength-container">
        <h1 className="text-3xl">Image Password Strength</h1>
        <p
          style={{ color: 'gray', fontSize: 'small' }}
          className="text-sm text-gray-700"
        >
          Change the password to see the effect
        </p>
        <div style={{ marginTop: '1rem', textAlign: 'left' }}>
          <label for="email" style={{ color: 'gray' }}>
            Email:
          </label>
          <input
            type="text"
            style={{
              border: '1px solid',
              display: 'block',
              width: '100%',
              padding: '10px',
              marginTop: '10px',
              borderRadius: '5px',
            }}
            id="email"
            placeholder="Enter Email"
          />
        </div>

        <div style={{ marginTop: '1rem', textAlign: 'left' }}>
          <label for="email" style={{ color: 'gray' }}>
            Password:
          </label>
          <input
            onChange={getInputChangeHandler}
            type="password"
            style={{
              border: '1px solid',
              display: 'block',
              width: '100%',
              padding: '10px',
              marginTop: '10px',
              borderRadius: '5px',
            }}
            id="password"
            placeholder="Enter Password"
          />
        </div>

        <button
          style={{
            backgroundColor: '#000',
            color: '#fff',
            marginTop: '2em',
            display: 'inline-block',
            borderRadius: '5px',
            width: '100%',
            padding: '10px',
          }}
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default PasswordStrength
