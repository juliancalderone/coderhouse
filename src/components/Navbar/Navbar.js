import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.scss";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="header">
      <Container>
        <Navbar.Brand href="#home">
          <div className="header__logo d-flex align-items-center text-black">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2917/2917995.png"
              alt=""
            />
            <h5 className="mb-0 company">Jane Shop</h5>
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
            <Nav.Link eventKey={2} href="">
              Perfil
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
