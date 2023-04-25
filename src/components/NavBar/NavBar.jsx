
import {Link, NavLink} from "react-router-dom"
import { Navbar, Container, Nav, } from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {

  return (
      
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
          <Container >

            <Link to= "/" > 
               MI VIVERO VIRTUAL 
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
             <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                 <NavLink to="/categoria/Planta de interior" className= { ({isActive}) => isActive ? "btn btn-primary" : "btn btn-outline-primary"}>   Plantas de interior</NavLink>
                 <NavLink to="/categoria/Planta de exterior" className= { ({isActive}) => isActive ? "btn btn-primary" : "btn btn-outline-primary"}>   Plantas de exterior</NavLink>
               </Nav>
               <Nav>
                 <Link to= "cart">
                      <CartWidget/>
                 </Link>
               </Nav>
             </Navbar.Collapse>
           </Container>
          
       </Navbar>

   )
}




















