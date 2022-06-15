import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../../assets/img/logo.png'
import "./Navbar.scss";
import CartWidget from "../CartWidget/CartWidget";

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="header"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <div className="header__logo d-flex align-items-center text-black">
              <img src={logo} alt="" />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="mt-3 mb-3">
            <Link className="header__link" to="/">
              Home
            </Link>
            <NavLink className="header__link" to="/category/remeras">
              Remeras
            </NavLink>
            <NavLink className="header__link" to="/category/donaciones">
              Donaciones
            </NavLink>
            <NavLink className="header__link" to="/category/mate">
              Materos
            </NavLink>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
