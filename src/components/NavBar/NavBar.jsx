
//import {Navbar, Container, Nav } from "react-bootstrap"
import { Navbar, Container, Nav, } from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"



export const NavBar = () => {

  return (
      
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">MI VIVERO VIRTUAL</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
             <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                 <Nav.Link href="#features">   Plantas de interior</Nav.Link>
                 <Nav.Link href="#pricing">   Plantas de exterior</Nav.Link>
               </Nav>
               <Nav>
                 <Nav.Link eventKey={2} href="#memes">
                      <CartWidget/>
                 </Nav.Link>
               </Nav>
             </Navbar.Collapse>
           </Container>
          
       </Navbar>

   )
}


















// import {Container, Nav, Navbar} from "react-bootstrap"
// import CartWidget from "../CartWidget/CartWidget"

// export const NavBar = () => {
//     return (
//         <Navbar collapseOnSelect expand="lg" bg="blue" variant="dark">
//           <Container>
//             <Navbar.Brand href="#home">MI VIVERO VIRTUAL</Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//               <Nav className="me-auto">
//                 <Nav.Link href="#pInterior">   Plantas de interior</Nav.Link>
//                 <Nav.Link href="#pExterior">   Plantas de exterior</Nav.Link>
//               </Nav>
//               <Nav>
                
//                 <Nav.Link eventKey={2} href="#widget">
                
//                 CartWidget

//                 </Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
          
//       </Navbar>
//     )
// }

