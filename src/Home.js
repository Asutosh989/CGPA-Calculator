import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Form, Label, Input, Container, Card, CardBody } from 'reactstrap';

import './home.css';



class Home extends React.Component {
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
        <Container className="d-flex align-item-center justify-content-center">
        <Card className="branch">
        <CardBody>
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" value={this.state.branch} onChange={this.handleBranchDropdownChange}>
              <option value="cse">CSE</option>
              <option value="ie">I&amp;E</option>
              <option value="me">MECH</option>
              <option value="ce">CIVIL</option>
              <option value="it">IT</option>
              <option value="tex">TEXTILE</option>
              <option value="ee">ELECTRICAL</option>
            </Input>
          </FormGroup>
          <Button type="submit" color="success">Submit</Button>
        </Form>
        </CardBody>
        </Card>
        </Container>
        Check the  <Link to="/about">about</Link> page for more information
      </div>
    );
  }
}
export default Home;
