import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import logo from './logo.svg';
import Home from './Home.js';
import Calculator from './Calculator';
import About from './About.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar color="faded" light expand="md">
            <NavbarBrand href={process.env.PUBLIC_URL + "/"}>CGPA calculator</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>

          {/* route passes history location */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/calculate/:uni/:year/:branch" component={Calculator} />
        </div>
      </Router>
    );
  }
}

export default App;
