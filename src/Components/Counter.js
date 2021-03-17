import React, {useState, useEffect} from "react"
import randomColor from "randomcolor"
import Toggler from "./Toggler"


function Counter() {

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
      <Toggler render={(on, toggle) => (
        <div className="counter">
          <button onClick={toggle}>{on ? "Close" : "Open"} counter</button>
          <nav style={{display: on ? "block" : "none"}}>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increase!</button>
            <button onClick={decrement}>Decrease!</button>
            <button onClick={double}>Double!</button>
            <button onClick={halve}>Halve!</button>
          </nav>
        </div>
      )}/>
      
    )
  }

export default Counter