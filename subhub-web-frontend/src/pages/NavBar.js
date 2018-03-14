import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar className='navbar navbar-expand-lg navbar-dark bg-primary '>
        <Navbar.Header>
          <Navbar.Brand className='navbar-brand nav-header'>
            <a href='/'>SuhHub</a>
          </Navbar.Brand>
        </Navbar.Header>
        
        <Nav pullLeft className='collapse navbar-collapse' id='navbarColor02'>
          <NavItem className='nav-link-color' eventKey={1} href='/'>
            Home
          </NavItem>
          <NavItem className='nav-link-color' eventKey={2} href='/addassignment'>
            + Add Assignment
          </NavItem>
          <NavItem className='nav-link-color'  eventKey={3} href='/assignments'>
            View Assignments
          </NavItem>
          <NavItem className='nav-link-color'  eventKey={4} href='/goldlist'>
            Gold List
          </NavItem>
          <NavItem className='nav-link-color'  eventKey={5} href='/avoidlist'>
            Avoid List
          </NavItem>
        </Nav>
        <Nav pullRight>
          <FormGroup className='form-inline my-2 my-lg-0'>
            <FormControl className='form-control mr-sm-2' type='text' placeholder='Search SubHub' />
          </FormGroup>{' '}
          <Button className='btn btn-secondary my-2 my-sm-0' type='submit'>Submit</Button>
        </Nav>
      </Navbar>
    ); 
  }
}

export default NavBar;