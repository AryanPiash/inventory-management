import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <Navbar className='py-2 fs-4 navbar-bg' sticky='top' expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" id='logo'>Laptop Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '350px' }}
                        navbarScroll>
                        <NavLink className={({ isActive }) =>
                            isActive ? "active-link" : "link"} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "active-link" : "link"} to="/blogs">Blog</NavLink>



                        {
                            user ?
                                <>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? "active-link" : "link"} to="/productList">Manage Item</NavLink>

                                    <NavLink className={({ isActive }) =>
                                        isActive ? "active-link" : "link"} to="/productAdd">Add Item</NavLink>

                                    <NavLink className={({ isActive }) =>
                                        isActive ? "active-link" : "link"} to="/items">My items</NavLink>

                                    <p className='btn btn-gray font-weight-bold' onClick={handleSignout}> {user.displayName}<span className='logout'>Log out</span></p>
                                </>
                                :
                                <>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? "active-link" : "link"} to="/login">Login</NavLink>
                                    <NavLink className={({ isActive }) =>
                                        isActive ? "active-link" : "link"} to="/register">Sign up</NavLink>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;