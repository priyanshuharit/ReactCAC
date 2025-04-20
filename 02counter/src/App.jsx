import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  let addValue=()=>{


    let c= counter+1;
    if(c>20)
    {
      c=20;
    }
    setCounter(c);

  }

  let removeValue=()=>{

    let c=counter -1;
    if(c<0)
    {
      c=0;
    }
    setCounter(c);
  }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>

      <br />
      <button onClick={removeValue}>
        remove value {counter}
      </button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
