import {useState} from 'react'

export const ItemCount = () => {
    const [counter, setCounter] = useState(0)

    let handleSuma = () => {
        setCounter(counter + 1)
    }

    let handleResta = () => {
        setCounter(counter - 1)
    }

  return (
    <div>
      
      <button onClick = {handleSuma}> + 1 </button>

      <p>Clicks: {counter}</p>

      <button onClick = {handleResta}> - 1 </button>
    </div>
  )
}


