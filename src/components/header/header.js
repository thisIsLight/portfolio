import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import './header.css';

function Header() {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false)
    
    const handleResize = () => {
        if (window.innerWidth < 801) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        if (window.innerWidth < 801) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [isMobile])

    const logoClickHandler = (eventKey) => {
        navigate('/portfolio'+eventKey.toString());
    }

    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container className="HeaderContainer" >
        <Navbar.Brand className="Name" href="/portfolio">Sahil Kumar Rao</Navbar.Brand>
            {!isMobile && <Nav>
                <Nav.Link className="Tabs" href="/portfolio">Home</Nav.Link>
                <Nav.Link className="Tabs" href="/portfolio/explore">Explore</Nav.Link>
                <Nav.Link className="Tabs" href="/portfolio/about">About Me</Nav.Link>
                <Nav.Link className="Tabs" href="/portfolio/contact">Contact</Nav.Link>
            </Nav>}
          
            {isMobile && <Nav variant="pills" activeKey="1" onSelect={logoClickHandler}>
                <NavDropdown className="Tabs" title="More" id="nav-dropdown">
                    <NavDropdown.Item className="Tabs" eventKey="/explore">Explore</NavDropdown.Item>
                    <NavDropdown.Item className="Tabs" eventKey="/about">About Me</NavDropdown.Item>
                    <NavDropdown.Item className="Tabs" eventKey="/contact">Contact</NavDropdown.Item>
                </NavDropdown>
            </Nav>}

        </Container>
      </Navbar>
  );
}

export default Header;