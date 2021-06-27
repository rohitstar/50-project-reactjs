import * as React from 'react'
import useInterval from './useInterval'

function useSlider({
  total = 0,
  enabled = false,
  useLoaded = false,
  speed = 2000,
  loop = true,
}) {
  // const offset = React.useRef(0);
  const [offset, setOffset] = React.useState(0)
  const [items, setItems] = React.useState([])

  function incrementOffset() {
    if (offset === total - 1) {
      setOffset(loop ? 0 : offset)
    } else {
      setOffset(offset + 1)
    }
  }

  function addItem(ref) {
    setItems([...items, ref])
  }

  const loaded = useLoaded ? items.length === total : true

  useInterval(() => {
    if (loaded && enabled && offset < total) {
      incrementOffset()
    }
  }, speed)

  const leftChangeHandler = () => {
    setOffset((prev) => prev - 1)

    if (offset > 0) {
      setOffset(offset - 1)
    } else {
      setOffset(total - 1)
    }
    console.log(offset)
  }

  const rightChangeHandler = () => {
    setOffset((prev) => prev + 1)
    if (offset === total - 1) {
      setOffset(0)
    } else {
      setOffset(offset + 1)
    }
    console.log(offset)
  }

  return { offset, addItem, leftChangeHandler, rightChangeHandler }
}

export default useSlider
