import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

import {
  BrowserRouter as Router,
  Route, NavLink
} from 'react-router-dom';
// import logo from './logo.svg';
import Home from './Home.js';
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
          <Route exact path="/" component={Home}/>
          <Route path="/calculate/:branch" component={Calculator} />
        </div>
      </Router>
    );
  }
}

export default App;
