import React, { useEffect } from 'react'
import './verify-account.css'

const VerifyAccount = () => {
  useEffect(() => {
    const codes = document.querySelectorAll('.verify-code')
    codes[0].focus()
    codes.forEach((code, idx) => {
      code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
          codes[idx].value = ''
          setTimeout(() => codes[idx + 1].focus(), 10)
        } else if (e.key === 'Backspace') {
          setTimeout(() => codes[idx - 1].focus(), 10)
        }
      })
    })
  }, [])

  // https://stackoverflow.com/questions/47506829/how-to-design-react-native-otp-enter-screen

  return (
    <div className="App-verify-account">
      <div className="verify-account-container">
        <h2>Verify Account</h2>
        <p>
          We emailed you the six digit code to cool_rohit@gmail.com <br /> Enter
          the code below to confirm your email address.
        </p>
        <div className="verify-code-container">
          <input
            type="number"
            className="verify-code"
            placeholder="0"
            min="0"
            max="9"
          />
          <input
            type="number"
            className="verify-code"
            placeholder="0"
            min="0"
            max="9"
          />
          <input
            type="number"
            className="verify-code"
            placeholder="0"
            min="0"
            max="9"
          />
          <input
            type="number"
            className="verify-code"
            placeholder="0"
            min="0"
            max="9"
          />
          <input
            type="number"
            className="verify-code"
            placeholder="0"
            min="0"
            max="9"
          />
          <input
            type="number"
            className="verify-code"
            placeholder="0"
            min="0"
            max="9"
          />
        </div>
        <small className="verify-info">
          This is design only. We didn't actually send you an email as we don't
          have your email, right?
        </small>
      </div>
    </div>
  )
}

export default VerifyAccount
