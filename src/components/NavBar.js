 import {Container, Navbar, Nav} from "react-bootstrap";
import CartWidget from "./CartWidget";
 
 
 const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#lahuella">La Huella Pet-Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar> 
    )
}

export default NavBar; 
 










