import React, { useState } from 'react'
import './github-profile.css'
import axios from 'axios'

const GithubProfile = () => {
  const APIURL = 'https://api.github.com/users/'
  const [username, setUsername] = useState()
  const [passData, setPassData] = useState([])
  const [reposToCard, setReposToCard] = useState([])

  // const getUser = () => {
  //   return fetch(`https://api.github.com/users/${username}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //     })
  // }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios(`https://api.github.com/users/${username}`)
      console.log(data)
      setPassData(data)
      getRepos(username)
    } catch (err) {
      if (err.response.status == 404) {
        createError('No Profile with the username')
      }
    }
  }

  const getRepos = async () => {
    try {
      const { dataRepo } = await axios(
        `https://api.github.com/users/${username}/repos`
      )
      console.log('repos data', dataRepo)
      // setReposToCard(dataRepo)
    } catch (err) {
      createError('Problem fetching Repos')
    }
  }

  const createError = (userError) => {
    return <div className="card">{userError}</div>
  }

  return (
    <div className="App-github-profile">
      <form onSubmit={handleSubmit} className="user-form-profile" id="form">
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="search"
          placeholder="Search a Github User"
        />
      </form>

      <main id="main">
        <div className="card-profile">
          <div>
            <img
              src={passData.avatar_url}
              alt={passData.name}
              className="avatar-profile"
            />
          </div>
          <div className="user-info-profile">
            <h2>{passData.name}</h2>
            <p>{passData.bio}</p>
            <ul>
              <li>
                {passData.followers} <strong>Followers</strong>
              </li>
              <li>
                {passData.following} <strong>Following</strong>
              </li>
              <li>
                {passData.public_repos} <strong>Repos</strong>
              </li>
            </ul>

            {/* <div className="repos">
              {reposToCard.map((data, index) => (
                <a key={index} href={data.repo.html_url} className="repo">
                  {data.repo.name}
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default GithubProfile
