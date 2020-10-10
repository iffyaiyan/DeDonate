import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar color="black" dark fixed expand="md">
                    <div className="container">
                    <NavbarToggler dark onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto nav-brand" href="/home">
                        DeDonate
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="nav" navbar>
                            <NavItem className="nav-item">
                                <NavLink onClick={this.toggleNav} className="nav-link" to="/home">
                                <i className="fa fa-home fa-lg"></i> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.toggleNav} className="nav-link" to="/explore">
                                    <i className="fa fa-child fa-lg"></i> Explore
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.toggleNav} className="nav-link" to="/request">
                                <i className="fa fa-users"></i> Request
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default NavBar;