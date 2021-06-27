import React, { useState } from 'react'
import './toast-notification.css'

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']

const ToastsNotification = () => {
  const [toast, setToast] = useState()
  // const [msg, setMsg] = useState()

  const createNotification = () => {
    // console.log(123)
    setToast(() => getRandomMessage())
  }

  const getRandomMessage = () => {
    // console.log(messages[Math.floor(Math.random() * messages.length)])
    return messages[Math.floor(Math.random() * messages.length)]
  }

  return (
    <div className="toast-container">
      <div id="toasts">
        <div className="toast-notific">{toast}</div>
        {/* <div className="toast">Toast Number2</div> */}
      </div>

      <button onClick={createNotification} className="btn-notific" id="button">
        Show Notification
      </button>
    </div>
  )
}

export default ToastsNotification

// import React, { useState } from 'react'
// import './toast-notification.css'

// const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']
// const getRandomMessage = () => {
//   // console.log(messages[Math.floor(Math.random() * messages.length)])
//   return messages[Math.floor(Math.random() * messages.length)]
// }
// const ToastsNotification = () => {
//   const [toast, setToast] = useState(getRandomMessage())
//   const [msg, setMsg] = useState([])

//   const createNotification = () => {
//     setMsg([...msg, toast])
//     // console.log(123)
//     // setToast(() => getRandomMessage())
//   }

//   return (
//     <div className="toast-container">
//       <div id="toasts">
//         {/* <div className="toast-notific">{toast}</div> */}
//         {/* <div className="toast">Toast Number2</div> */}
//       </div>

//       <button onClick={createNotification} className="btn-notific" id="button">
//         Show Notification
//       </button>
//     </div>
//   )
// }

// export default ToastsNotification
