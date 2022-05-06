import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../../assets/img/logo.png'
import "./Navbar.scss";
import CartWidget from "../CartWidget/CartWidget";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="header">
      <Container>
        <Navbar.Brand href="#home">
          <div className="header__logo d-flex align-items-center text-black">
            <img
              src={logo}
              alt=""
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="mt-3 mb-3">
            <Nav.Link className="active" href="">Home</Nav.Link>
            <Nav.Link href="">Productos</Nav.Link>
            <Nav.Link href="">Perfil</Nav.Link>
            <Nav.Link href="">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
