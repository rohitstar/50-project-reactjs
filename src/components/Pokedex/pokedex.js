import React, { useEffect, useState } from 'react'
import './pokedex.css'

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([])

  const getPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon`
    const res = await fetch(url)
    const data = await res.json()
    setPokemonData(data.results)
    console.log(data.results, data)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div className="App-pokedex">
      <h1 className="poke-heading">Pokedex</h1>
      <div className="poke-container" id="poke-container">
        {pokemonData.length > 0 &&
          pokemonData.map((data, index) => (
            <div
              key={index}
              className="pokemon"
              style={{ backgroundColor: 'rgb(222, 253, 224)' }}
            >
              <div className="poke-img-container">
                <img
                  src={`https://pokeres.bastionbot.org/images/pokemon/${
                    index + 1
                  }.png`}
                  alt="pokemon"
                />
              </div>

              <div className="poke-info">
                <span className="poke-number">#0{index + 1}</span>
                <h3 className="poke-name">{data.name}</h3>
                <small className="poke-type">
                  Type: <span>grass</span>
                </small>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Pokedex
