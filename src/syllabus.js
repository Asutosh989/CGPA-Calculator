import React from 'react';
import Calculator from './calculator.js';
import Branch_Subject from './branch_subject.js'

import './syllabus.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Button, Navbar,
NavbarToggler,
NavbarBrand, NavLink,
Nav,
NavItem,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup,
Form, Label, Input, FormText} from 'reactstrap';

const Syllabus = () => (

  <Router>
    <div>
      {/* <Button color="danger">Danger!</Button> */}
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">CGPA calculator</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/calculate">Calculate</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul> */}
      <hr/>
      <h1> CGPA calculator </h1>


      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/calculate" component={Calculate}/>
    </div>
  </Router>
)

const Home = () => (
  <div className="container">
    <h2>Welcome to Home</h2>
    <Form action="/calculate/branch" method="POST">

        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" value="select" id="exampleSelect">
            <option>CSE</option>
            <option>I&E</option>
            <option>MECH</option>
            <option>CIVIL</option>
            <option>IT</option>
          </Input>
        </FormGroup>

        <Button >Submit</Button>
      </Form>
  </div>
)

const About = () => (
  <div>
    <h2>This is a CGPA Calculator. <br /> Hope you enjoy it.</h2>

  </div>
)

const Calculate = ({ match }) => (
  <div>
    <h2>Calculator</h2>
    <Calculator />
    <Link to={`${match.url}/branch`}>
      <Branch_Subject />
    </Link>

  </div>
)


const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default Syllabus;
