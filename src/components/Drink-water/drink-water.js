import React, { useState } from 'react'
import './drink-water.css'

const cupMl = [
  {
    id: 1,
    miliLiter: '250 ml',
  },
  {
    id: 2,
    miliLiter: '250 ml',
  },
  {
    id: 3,
    miliLiter: '250 ml',
  },
  {
    id: 4,
    miliLiter: '250 ml',
  },
  {
    id: 5,
    miliLiter: '250 ml',
  },
  {
    id: 6,
    miliLiter: '250 ml',
  },
  {
    id: 7,
    miliLiter: '250 ml',
  },
  {
    id: 8,
    miliLiter: '250 ml',
  },
]

const DrinkWater = () => {
  const [selected, setSelected] = useState()
  //   const [cupValue, setCupValue] = useState()

  // const getCupChangeHandler = (index) => {

  // }

  return (
    <div className="App-drink-water">
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>

      <div className="cup">
        <div
          style={{
            visibility: selected === cupMl.length ? 'hidden' : 'visible',
            height: selected === cupMl.length ? 0 : '',
          }}
          className="remained"
          id="remained"
        >
          <span id="liters">
            {selected === cupMl.length ? '' : `${(250 * selected) / 1000}L`}
          </span>
          <small>Remained</small>
        </div>

        <div
          style={{
            visibility: selected === 0 ? 'hidden' : 'visible',
            height: selected === 0 ? 0 : `${(selected / cupMl.length) * 330}px`,
          }}
          className="percentage"
          id="percentage"
        >
          {selected === 0 ? 0 : `${(selected / cupMl.length) * 100}%`}
        </div>
      </div>

      <p className="text-cup">
        Select how many glasses of water that you have drunk
      </p>

      <div className="cups">
        {cupMl.map((dataCup) => (
          <div
            key={dataCup.id}
            onClick={() => {
              setSelected(dataCup.id)
              //   console.log(index)
            }}
            className={`cup cup-small ${selected >= dataCup.id ? 'full' : ''}`}
          >
            {dataCup.miliLiter}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DrinkWater
