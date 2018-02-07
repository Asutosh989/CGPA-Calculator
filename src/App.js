import React, { Component } from 'react';
import { Button, Navbar, NavbarBrand, Nav, NavItem, FormGroup, Form, Label, Input } from 'reactstrap';

import {
  BrowserRouter as Router,
  Route, NavLink
} from 'react-router-dom';
// import logo from './logo.svg';
import Syllabus from './Syllabus.js';
import Calculator from './Calculator';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
        <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">CGPA calculator</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/calculate">Calculate</NavLink>
            </NavItem>
          </Nav>
      </Navbar>

          {/* route passes history location */}
          <Route exact path="/" component={Syllabus}/>
          <Route path="/calculate/:branch" component={Calculator} />
        </div>
      </Router>
    );
  }
}

export default App;
