import React from 'react'
import './drawing-app.css'

const DrawingApp = () => {
  // const canvasRef = useRef(null)
  // const [isOffset, setIsOffset] = useState()

  // let color = '#000'
  // let isPress = false
  // let size = 20
  // let x
  // let y
  // let x2
  // let y2

  // const mouseDownChangeHandler = (e) => {
  //   isPress = true
  //   setIsOffset()
  //   x = e.nativeEvent.offsetX
  //   y = e.nativeEvent.offsetY
  //   console.log(isPress, x, y)
  // }

  // const mouseUpChangeHandler = () => {
  //   isPress = false
  //   x = undefined
  //   y = undefined
  //   console.log(isPress, x, y)
  // }

  // const mouseMoveChangeHandler = (e) => {
  //   if (isPress) {
  //     const x2 = e.nativeEvent.offsetX
  //     const y2 = e.nativeEvent.offsetY

  //     console.log(x2, y2)

  //     drawCircle(x2, y2)
  //     //   drawLine(x, y, x2, y2)

  //     //   x = x2
  //     //   y = y2
  //   }

  //   // console.log(isPress, x, y)
  // }

  // const drawCircle = (x, y, ctx) => {
  //   ctx.beginPath()
  //   ctx.arc(x, y, size, 0, Math.PI * 2)
  //   ctx.fillStyle = color
  //   ctx.fill()
  // }

  // const drawLine = (x1, y1, x2, y2, ctx) => {
  //   ctx.beginPath()
  //   ctx.moveTo(x1, y1)
  //   ctx.lineTo(x2, y2)
  //   ctx.strokeStyle = color
  //   ctx.lineWidth = size * 2
  //   ctx.stroke()
  // }

  // useEffect(() => {
  //   const canvas = canvasRef.current
  //   const context = canvas.getContext('2d')

  //   // drawCircle(100, 100, ctx)
  //   // drawLine(300, 300, 300, 500, ctx)

  //   drawCircle(x2, y2, context)
  //   // drawLine(x, y, x2, y2, context)
  // }, [])

  return (
    <div className="App-drawing-app">
      <canvas
        // onMouseDown={mouseDownChangeHandler}
        // onMouseUp={mouseUpChangeHandler}
        // onMouseMove={mouseMoveChangeHandler}
        // ref={canvasRef}
        // {...props}
        height="800px"
        width="800px"
      />
      <div className="toolbox">
        <button id="decrease">-</button>
        <span id="size">20</span>
        <button id="increase">+</button>
        <input id="color" type="color" />
        <button id="clear">X</button>
      </div>
    </div>
  )
}

export default DrawingApp
