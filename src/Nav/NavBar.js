import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import './Navbar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="NavBar">
            <Navbar color="light" light expand="md">
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
                            <NavLink tag={Link} to="/login">
                                Login
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;
