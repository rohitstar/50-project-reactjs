import React, { useEffect, useState } from 'react'
import './live-user-filter.css'

const LiveUserFilter = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  //     set search query to empty string
  const [q, setQ] = useState('')

  useEffect(() => {
    fetch('https://randomuser.me/api?results=50')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.results)
          console.log(result.results)
        },

        (error) => {
          setIsLoaded(true)
          setError('Fetch data not Found!!')
        }
      )
  }, [])

  function search(items) {
    return items.filter(
      (item) =>
        item.name.first.toString().toLowerCase().indexOf(q.toLowerCase()) > -1
    )
  }

  return (
    <div className="App-user-filter">
      <div className="user-filter-container">
        <header className="user-filter-header">
          <h4 className="user-filter-title">Live User Filter</h4>
          <small className="user-filter-subtitle">
            Search by name and/or location
          </small>
          <input
            onChange={(e) => setQ(e.target.value)}
            value={q}
            type="search"
            name="search-form"
            id="search-form"
            placeholder="Search"
          />
        </header>

        <ul id="result" className="user-list">
          {error && <li>{error}</li>}
          {!isLoaded && (
            <li>
              <h3>Loading...</h3>
            </li>
          )}

          {search(items).map((user, index) => (
            <li key={index}>
              <img src={user.picture.large} alt={user.name.first} />
              <div className="user-info">
                <h5 className="user-info-h4">
                  {user.name.first} {user.name.last}
                </h5>
                <p>
                  {user.location.city} {user.location.country}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LiveUserFilter
