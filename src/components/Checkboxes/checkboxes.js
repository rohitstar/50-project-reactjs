import React, { useEffect, useState } from 'react'
import './checkboxes.css'

const Checkboxes = () => {
  const [good, setGood] = useState()
  const [cheap, setCheap] = useState()
  const [fast, setFast] = useState()
  const [toggle, setToggle] = useState()

  //   const getChangeGoodToggle = () => {
  //     if (good === cheap) {
  //       setFast(false)
  //     }
  //     // setGood(true)
  //     // setCheap(true)
  //     console.log(fast)
  //   }

  //   const getChangeCheapToggle = () => {
  //     if (cheap === fast) {
  //       setCheap(false)
  //     }
  //     // setGood(true)
  //     // setFast(true)
  //     console.log(cheap)
  //   }

  //   const getChangeFastToggle = () => {
  //     if (fast === good) {
  //       setGood(false)
  //     }
  //     // setGood(false)
  //     // setCheap(true)
  //     console.log(good)
  //   }
  /////////////////////////////////////////////////////////////
  //   function getCheckboxData(e) {
  //     setToggle(e.target)

  //     if (good && cheap && fast) {
  //       if (good === toggle) {
  //         fast = false
  //         console.log(good, cheap, fast)
  //       }

  //       if (cheap === toggle) {
  //         good = false
  //         console.log(good, cheap, fast)
  //       }

  //       if (fast === toggle) {
  //         cheap = false
  //         console.log(good, cheap, fast)
  //       }
  //     }
  //   }

  useEffect(() => {
    const toggles = document.querySelectorAll('.toggle-checkbox')
    const good = document.querySelector('#good')
    const cheap = document.querySelector('#cheap')
    const fast = document.querySelector('#fast')

    toggles.forEach((toggle) =>
      toggle.addEventListener('change', (e) => doTheTrick(e.target))
    )

    function doTheTrick(clickedBox) {
      if (good.checked && cheap.checked && fast.checked) {
        if (good === clickedBox) {
          fast.checked = false
          console.log(fast)
        }
        if (cheap === clickedBox) {
          good.checked = false
          console.log(good)
        }
        if (fast === clickedBox) {
          cheap.checked = false
          console.log(cheap)
        }
      }
    }
  }, [])

  //   const getChangeToggle = (e) => {
  //     if (good === cheap) {
  //       setFast(fast)
  //     }

  //     if (cheap === fast) {
  //       setGood(good)
  //     }

  //     if (fast === good) {
  //       setCheap(cheap)
  //     }
  //   }

  return (
    <div className="App-checkboxes">
      <h2>How do you want your project to be ?</h2>

      <div className="toggle-checkbox-container">
        <input
          type="checkbox"
          id="good"
          className="toggle-checkbox"
          //   checked={good}
          //   onChange={getCheckboxData}
        />
        <label htmlFor="good" className="label-checkbox">
          <div className="ball"></div>
        </label>
        <span>Good</span>
      </div>

      <div className="toggle-checkbox-container">
        <input
          type="checkbox"
          id="cheap"
          className="toggle-checkbox"
          //   checked={cheap}
          //   checked={cheap ? 'true' : 'false'}
          //   onChange={getCheckboxData}
        />
        <label htmlFor="cheap" className="label-checkbox">
          <div className="ball"></div>
        </label>
        <span>Cheap</span>
      </div>

      <div className="toggle-checkbox-container">
        <input
          type="checkbox"
          id="fast"
          className="toggle-checkbox"
          //   checked={fast}
          //   checked={fast ? 'true' : 'false'}
          //   onChange={getCheckboxData}
        />
        <label htmlFor="fast" className="label-checkbox">
          <div className="ball"></div>
        </label>
        <span>Fast</span>
      </div>
    </div>
  )
}

export default Checkboxes
