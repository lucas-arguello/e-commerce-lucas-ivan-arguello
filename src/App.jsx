import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemCount } from './components/ItemCount/ItemCount';


import 'bootstrap/dist/css/bootstrap.min.css';





 



function App() {
  
return (
      <Router>
        <NavBar/>

        <Routes>

            <Route 
            path="/" 
            element={<ItemListContainer/>} 
            />

            <Route 
            path="/categoria/:categoria" 
            element={<ItemListContainer/>} 
            />

            <Route 
            path="/detail/:pid" 
            element={<ItemDetailContainer/>} 
            />

            {/* <Route 
            path= "/cart" 
            element= {<CartContainer/>}
            /> */}

            <Route 
            path= " * " 
            element= { <Navigate to= "/" />}
            />

        </Routes>
        {/* <ItemCount/> */}
        {/* <Footer/> */}
      </Router>
      
  )
}

export default App


