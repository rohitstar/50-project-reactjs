import React, { useEffect, useState } from 'react'
import './pokedex.css'

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([])
  const pokemon_count = 20
  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
  }

  //   const fetchPokemons = async () => {
  //     for (let i = 1; i <= pokemon_count; i++) {
  //       await getPokemon(i)
  //     }
  //   }

  const getPokemon = async (id) => {
    // const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const url = `https://pokeapi.co/api/v2/pokemon`
    const res = await fetch(url)
    const data = await res.json()
    setPokemonData(data.results)
    console.log(data.results, data)
  }

  //   const getPokemonDetails = async (data) => {
  //     // const url = `https://pokeapi.co/api/v2/pokemon`
  //     const res = await fetch(data)
  //     // const data1 = await res.json()
  //     // setPokemonData(data1)
  //     console.log('getPokemonDetails', res)
  //   }

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
              //   onClick={() => {
              //     getPokemonDetails(data)
              //   }}
              key={index}
              className="pokemon"
              style={{ backgroundColor: 'rgb(222, 253, 224)' }}
            >
              <div className="poke-img-container">
                <img
                  src={`https://pokeres.bastionbot.org/images/pokemon/${
                    index + 1
                  }.png`}
                  // src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`}
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
