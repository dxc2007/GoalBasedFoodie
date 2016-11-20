import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Goal Based Foodie</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Log In</NavItem>
              <NavItem eventKey={2} href="#">About</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}
