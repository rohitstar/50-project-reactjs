import React, { useState, useEffect } from 'react'
import './movie-app.css'
const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
// const SEARCH_API =
//   'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='

const MovieApp = () => {
  const [isMovie, setIsMovie] = useState([])
  // const [searchValue, setSearchValue] = useState()
  const [q, setQ] = useState('')

  useEffect(async () => {
    async function fetchData() {
      const res = await fetch(API_URL)
      const data = await res.json()
      // console.log(data.results)
      setIsMovie(data.results)
    }
    fetchData()
  }, [])

  function getVoteRate(vote) {
    if (vote >= 8) {
      return 'green'
    } else if (vote >= 5) {
      return 'orange'
    } else {
      return 'red'
    }
  }

  // const submitChangeHandler = (e) => {
  //   e.preventDefault()
  //   // const searchTeam = searchValue
  //   // if (searchTeam && searchTeam !== '') {
  //   //   setSearchValue(SEARCH_API + searchTeam)
  //   //   searchValue = ''
  //   // } else {
  //   //   window.location.reload()
  //   // }
  // }

  function search(items) {
    return items.filter(
      (item) =>
        item.title.toString().toLowerCase().indexOf(q.toLowerCase()) > -1
    )
  }

  return (
    <div className="App-movie-app">
      <header className="header-movie-app">
        <div id="form">
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            id="search"
            className="search-movie"
            placeholder="Search"
          />
        </div>
      </header>

      <main id="main">
        {search(isMovie).map((movies, index) => (
          <div key={index} className="movie-app">
            <img src={IMG_PATH + movies.poster_path} alt={movies.title} />
            <div className="movie-info">
              <h3>{movies.title}</h3>
              <span className={getVoteRate(movies.vote_average)}>
                {movies.vote_average}
              </span>
            </div>
            <div className="overview-movie">
              <h3>Overview</h3>
              {movies.overview}
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default MovieApp
