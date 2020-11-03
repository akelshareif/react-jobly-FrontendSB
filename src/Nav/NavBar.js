import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

import './Navbar.css';

const NavBar = ({ logout }) => {
    const history = useHistory();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        logout();
        history.push('/');
    };

    return (
        <div className="NavBar">
            <Navbar light expand="md">
                <NavbarBrand tag={Link} to="/">
                    Jobly
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/companies">
                                Companies
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/jobs">
                                Jobs
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/profile">
                                Profile
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <Button outline size="sm" color="secondary" className="mt-1" onClick={handleLogout}>
                                Logout
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;
