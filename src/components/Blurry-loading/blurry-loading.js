import React, { useEffect, useState } from 'react'
import './blurry-loading.css'

let intervalId = ''
const BlurryLoading = () => {
  const [loadingStatus, setLoadingStatus] = useState(100)

  useEffect(() => {
    intervalId = setInterval(() => {
      setLoadingStatus((Count) => Count - 1)
    }, 50)
    // console.log(loadingStatus)
    // if (loadingStatus > 99) {
    //   clearInterval(intervalId)
    // }
  }, [])

  useEffect(() => {
    if (loadingStatus < 1) {
      clearInterval(intervalId)
    }
  }, [loadingStatus])

  return (
    <div className="App-blurry">
      <section
        style={{ filter: `blur(${loadingStatus}px)` }}
        className="bg"
      ></section>
      <div style={{ opacity: `${loadingStatus}` }} className="loading-text">
        {loadingStatus}%
      </div>
    </div>
  )
}

export default BlurryLoading
