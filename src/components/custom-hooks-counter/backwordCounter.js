import Card from './UI/card'
import useCounter from './hook/use-counter'

function BackwordCounter() {
  const counter = useCounter(false)

  return <Card>{counter}</Card>
}

export default BackwordCounter
