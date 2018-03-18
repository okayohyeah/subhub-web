import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>SuhHub</a>
          </Navbar.Brand>
        </Navbar.Header>
        
        <Nav pullLeft>
          <NavItem eventKey={1} href='/'>
            Home
          </NavItem>
          <NavItem eventKey={2} href='/addassignment'>
            + Add Assignment
          </NavItem>
          <NavItem eventKey={3} href='/viewassignments'>
            View Assignments
          </NavItem>
          <NavItem eventKey={4} href='/goldlist'>
            Gold List
          </NavItem>
          <NavItem eventKey={5} href='/redlist'>
            Red List
          </NavItem>
        </Nav>
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type='text' placeholder='Search SubHub' />
          </FormGroup>{' '}
          <Button type='submit'>Submit</Button>
        </Navbar.Form>
      </Navbar>
    ); 
  }
}

export default NavBar;