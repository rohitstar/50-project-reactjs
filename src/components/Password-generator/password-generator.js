import React, { useState } from 'react'
import './password-generator.css'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PasswordGenerator = () => {
  const [resultEl, setResultEl] = useState()
  const [lengthEl, setLengthEl] = useState(20)
  const [lowercaseEl, setLowercaseEl] = useState(true)
  const [uppercaseEl, setUppercaseEl] = useState(true)
  const [numbersEl, setNumbersEl] = useState(true)
  const [symbolsEl, setSymbolsEl] = useState(true)

  const randomFuncData = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  }

  const getGeneratePd = () => {
    setLengthEl(lengthEl)
    setUppercaseEl(uppercaseEl)
    setLowercaseEl(lowercaseEl)
    setNumbersEl(numbersEl)
    setSymbolsEl(symbolsEl)

    // console.log(uppercaseEl, lowercaseEl, numbersEl, symbolsEl)

    setResultEl(() =>
      generatePassword(uppercaseEl, lowercaseEl, numbersEl, symbolsEl, lengthEl)
    )

    // setResultEl( () => g)
  }

  function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0]
    )

    if (typesCount === 0) {
      return ''
    }

    for (let i = 0; i < length; i = i + typesCount) {
      typesArr.forEach((data) => {
        // console.log(data)
        const funcName = Object.keys(data)[0]
        // console.log('funcName', funcName, randomFuncData)

        generatedPassword += randomFuncData[funcName]()
      })
    }
    const finalGeneratePassword = generatedPassword.slice(0, length)
    console.log(finalGeneratePassword)
    return finalGeneratePassword
  }

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }

  function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
  }

  return (
    <div className="App-password-generator">
      <div className="password-container">
        <h2 className="heading-h2">Password Generator</h2>

        <div className="result-container">
          <span id="result">{resultEl}</span>

          <button className="btn-password" id="clipboard">
            <FontAwesomeIcon icon={faClipboard} />
          </button>
        </div>

        <div className="settings">
          <div className="setting">
            <label>Password Length</label>
            <input
              type="number"
              id="length"
              min="4"
              max="20"
              value={lengthEl}
              onChange={(e) => setLengthEl(e.target.value)}
            />
          </div>
          <div className="setting">
            <label>Include uppercase letters</label>
            <input
              type="checkbox"
              id="uppercase"
              checked={uppercaseEl}
              onChange={() => setUppercaseEl(!uppercaseEl)}
            />
          </div>
          <div className="setting">
            <label>Include lowercase letters</label>
            <input
              type="checkbox"
              id="lowercase"
              checked={lowercaseEl}
              onChange={() => setLowercaseEl(!lowercaseEl)}
            />
          </div>
          <div className="setting">
            <label>Include numbers</label>
            <input
              type="checkbox"
              id="numbers"
              checked={numbersEl}
              onChange={() => setNumbersEl(!numbersEl)}
            />
          </div>
          <div className="setting">
            <label>Include symbols</label>
            <input
              type="checkbox"
              id="symbols"
              checked={symbolsEl}
              onChange={() => setSymbolsEl(!symbolsEl)}
            />
          </div>
        </div>

        <button
          onClick={getGeneratePd}
          className="btn-password btn-password-large"
          id="generate"
        >
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default PasswordGenerator

// const setBackgroundColor = password => {
//     if (password && password.length === 1 && password.length <= 5) {
//         pwdDescription = 'Bad password';
//         return '#cb473e';
//     } else if (password && password.length >= 6 && password.length <= 10) {
//         pwdDescription = 'Weak password';
//         return '#f07d58';
//     } else if (password && password.length > 10) {
//         pwdDescription = 'Strong password';
//         return '#55a95d';
//     } else {
//         pwdDescription = 'Bad password';
//         return '#cb473e';
//     }
// }
