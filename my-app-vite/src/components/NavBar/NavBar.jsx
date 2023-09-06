import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './NavBar.css';
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/activos/img/Logo.png';
import CarritoDeCompras from '../../assets/activos/img/CarritoDeCompras.gif';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="nav-style">
            <Navbar.Brand> <Image className="logo-image" src= {Logo}/><Link to='/Home'> Tus Les Pepe's </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link> <Link to='/Home'> Tus Les Pepe's </Link> </Nav.Link>
                    <NavDropdown title="Secciones" id="basic-nav-dropdown">
                        <NavDropdown.Item> <Link to="/children"> Niños </Link> </NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/woman"> Damas </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/unisex"> Unisex </Link> </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item> <Link to="/accessories"> Accesorios </Link> </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="https://www.instagram.com/tus.lespepes/" target="_blank">Instagram</Nav.Link>
                    <image src= {CarritoDeCompras.gif} />
                </Nav>
                <CartWidget />
            </Navbar.Collapse>
        </Container>
        </Navbar>

    );
}

export default NavBar;