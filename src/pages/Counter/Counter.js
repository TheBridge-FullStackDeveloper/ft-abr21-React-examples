import React, { useState, useEffect, useContext } from 'react'
import './Counter.scss'
import { ThemeContext } from '../../context/themeContext'

const Counter = () => {

  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(true)

  const { theme } = useContext(ThemeContext)

  // Trabajamos con el ciclo de vida de forma similar a componentDidMount()
  useEffect(() => {
    console.log('mount !')
  }, [])


// Trabajamos con el ciclo de vida de forma similar a componentDidUpdate()
  useEffect(() => {
      console.log('mount and update!')
  })

  useEffect(() => {
    console.log('update count state !')
    if( count === 5){
        setHidden(false)
    } else {
        setHidden(true)
    }
  }, [count])


// Trabajamos con el ciclo de vida de forma similar a componentWillUnmount()

useEffect(() => {
    let interval = setInterval(() => {
        console.log("interval")
    }, 1000);

    return () => clearInterval(interval)
}, []);

// reemplazamos el valor de className por un string literal que admita una variable
  return (
    <div className={`Counter ${theme}`}>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        { hidden ? '' : <p>El contador ha llegado a 5</p> }
      </div>
    </div>
  );
}

export default Counter