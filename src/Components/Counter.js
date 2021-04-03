import React, {useState, useEffect} from "react"
import randomColor from "randomcolor"
import Toggler from "./Toggler"
import useToggler from "./useToggler"


function Counter() {

  const [show, toggle] = useToggler(false)

  const [count, setCount] = useState(0)
  const [color, setColor] = useState(565554)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  function double() {
    setCount(prevCount => prevCount * 2)
  }

  function halve() {
    setCount(prevCount => Math.round(prevCount / 2))
  }

  useEffect(() => {
      setColor(randomColor)
  }, [count])


  return (
    <div className="counter">
      <button onClick={toggle}>{show ? "Close" : "Open"} counter</button>
      <nav style={{display: show ? "block" : "none"}}>
        <h1 style={{color: color}}>{count}</h1>
        <button onClick={increment}>Increase!</button>
        <button onClick={decrement}>Decrease!</button>
        <button onClick={double}>Double!</button>
        <button onClick={halve}>Halve!</button>
      </nav>
    </div>
  )
}

export default Counter