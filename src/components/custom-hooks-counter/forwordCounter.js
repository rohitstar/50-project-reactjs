import React from 'react'

import Card from './UI/card'
import useCounter from './hook/use-counter'

function ForwordCounter() {
  const counter = useCounter(true)

  return <Card>{counter}</Card>
}

export default ForwordCounter
