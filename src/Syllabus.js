import React from 'react';
import { Button, Navbar, NavbarBrand, NavLink, Nav, NavItem, FormGroup, Form, Label, Input } from 'reactstrap';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import './syllabus.css';
import About from './About.js';
// import Calculator from './Calculator';



class Syllabus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      branch: 'cse',
    };
  }

  handleBranchDropdownChange = (e) => {
    this.setState({
      branch: e.target.value
    });
  }
  handleFormSubmit = (e) => {
    // prevent default action of making a GET request
    e.preventDefault();

    // navigate to other component on form submit
    this.props.history.push(`/calculate/${this.state.branch}`);
  }
  render() {
    return (
      <div className="Syllabus">
        
        <h1> CGPA calculator </h1>
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" value={this.state.branch} onChange={this.handleBranchDropdownChange}>
              <option value="cse">CSE</option>
              <option value="ie">I&amp;E</option>
              <option value="me">MECH</option>
              <option value="ce">CIVIL</option>
              <option value="it">IT</option>
            </Input>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>

      </div>
    );
  }
}
export default Syllabus;
