import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
  } from 'reactstrap';

import { Container } from 'reactstrap';

import Dropdown from './dropdown/Dropdown';



export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Container>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Sur la lune</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Dropdown />
                </NavItem>
                <NavItem>
                  <NavLink>Connexion</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>FAQ</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>  
    );
  }
}