 import {Container, Navbar, Nav} from "react-bootstrap";
 import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
 
 
 const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to='/'> La Huella Pet-Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to="/category/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/category/alimentos">Alimentos</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar> 
    )
}

export default NavBar; 
 










