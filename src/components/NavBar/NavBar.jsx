import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './NavBar.css';
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Link , NavLink } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/activos/img/Logo.png';
import CarritoDeCompras from '../../assets/activos/img/CarritoDeCompras.gif';

const NavBar = () => {
    return (
        <Navbar  expand="lg" className="nav-style">
            {/*<Container className="nav-style">*/}
            <Navbar.Brand to="/" as={NavLink}> <Image className="logo-image" src= {Logo}/> Tus Les Pepe's </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Secciones" id="basic-nav-dropdown">
                        <NavDropdown.Item> <Link to="/category/children"> Niños </Link> </NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/category/woman"> Damas </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/category/unisex"> Unisex </Link> </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item> <Link to="/category/accessories"> Accesorios </Link> </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="https://www.instagram.com/tus.lespepes/" target="_blank">Instagram</Nav.Link>
                </Nav>
                <CartWidget />
            </Navbar.Collapse>
        {/*</Container>*/}
        </Navbar>

    );
}

export default NavBar;