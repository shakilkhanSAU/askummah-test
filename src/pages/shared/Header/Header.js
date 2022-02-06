import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/edulogo.jpg';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout()
    }

    return (
        <div>
            <Navbar style={{ fontFamily: 'Mochiy Pop P One' }} collapseOnSelect expand="lg" className="navbar" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={logo} className="img-fluid header-logo" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="me-lg-3 nav-link manu-items fonts" as={Link} to="/home">Home</Link>
                            <Nav.Link className="me-lg-3 nav-link fonts" as={Link} to="/allcourses">Explore Academy</Nav.Link>
                            <Nav.Link className="me-lg-2 fonts nav-link" as={Link} to="/dashboard">Dashboard</Nav.Link>

                            {
                                user?.email ?
                                    <Nav.Link as={Link} to="/home" onClick={handleLogout} className="me-lg-3 fonts">Sign Out</Nav.Link>
                                    :
                                    <Nav.Link className="me-lg-3 nav-link fonts" as={Link} to="/login">Sign In</Nav.Link>
                            }




                            {/* {
                                user.email ? <>
                                    <Nav.Link className="me-lg-2 fonts nav-link" as={Link} to="/dashboard">Dashboard</Nav.Link>
                                    <Nav.Link onClick={handleLogOut} as={Link} to="/home" className="me-lg-3 fonts">Sign Out</Nav.Link>
                                </>
                                    :
                                    <Nav.Link className="me-lg-3 nav-link fonts" as={Link} to="/login">Sign In</Nav.Link>
                            } */}
                            <Navbar.Text>
                                <Link to="/user">
                                    {user.photoURL ? <img className="user-img" src={user?.photoURL} alt="" /> :
                                        <span className="user-logo fonts"><i className="fas fa-user"></i></span>
                                    }
                                </Link>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;