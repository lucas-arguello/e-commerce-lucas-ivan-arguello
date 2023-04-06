import { useState } from 'react'

//import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  

  
  return (
      <div className="App" style= {{fontSize: 22, backgroundColor:"ligth-blue"}}>
      
        <NavBar/>
        <ItemListContainer greeting= {"Esto es un ItemListContainer"}/>
        


      </div>
      
  )
}

export default App


{/* <p>Clicks :{Counter}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div> */}