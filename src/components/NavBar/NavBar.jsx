import {Container, Nav, Navbar,} from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MI VIVERO VIRTUAL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#pInterior">   Plantas de interior</Nav.Link>
              <Nav.Link href="#pExterior">   Plantas de exterior</Nav.Link>
            </Nav>
            <Nav>
              
              <Nav.Link eventKey={2} href="#widget">
              
                <CartWidget/>
                
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar