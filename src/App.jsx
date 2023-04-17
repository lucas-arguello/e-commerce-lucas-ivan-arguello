//import { useState } from 'react'

//import './App.css'

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';

import 'bootstrap/dist/css/bootstrap.min.css';








function App() {
  
return (
      <div className="App">

       <NavBar/>
       <ItemListContainer/> 
       <ItemCount/>
        
      </div>
      
  )
}

export default App


