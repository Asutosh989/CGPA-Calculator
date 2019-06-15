import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Form, Label, Input, Container, Card, CardBody } from 'reactstrap';
import syllabus from './syllabus';
import './home.css';



class Home extends React.Component {
  state = {
    university: 'none',
    batch: 'none',
    branch: 'none',
  };

  handleDropdownChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleFormSubmit = (e) => {
    const { university, batch, branch } = this.state;
    // prevent default action of making a GET request
    e.preventDefault();

    // navigate to other component on form submit
    this.props.history.push(`/calculate/${university}/${batch}/${branch}`);
  }
  render() {
    console.log(this.state);
    const { university, batch, branch } = this.state;
    return (
      <div className="Syllabus">

        <h1> CGPA calculator </h1>
        <Container className="d-flex align-item-center justify-content-center">
          <Card className="branch">
            <CardBody>
              <Form onSubmit={this.handleFormSubmit}>
                <FormGroup>
                  <Label>University</Label>
                  <Input type="select" name="university" value={university} onChange={this.handleDropdownChange}>
                    {console.log(syllabus)}
                    {Object.keys(syllabus).map(uni => (
                      <option key={uni} value={uni}>{uni.toUpperCase()}</option>
                    ))}
                    <option value="none">Select university...</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Batch</Label>
                  <Input disabled={university === 'none'} type="select" name="batch" value={batch} onChange={this.handleDropdownChange}>
                    <option value="none">Select batch...</option>
                    {university !== 'none' && (
                      Object.keys(syllabus[university]).map(x => (
                        <option key={x} value={x}>{x}</option>
                      ))
                    )}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Branch</Label>
                  <Input disabled={university === 'none' || batch === 'none'} type="select" name="branch" value={branch} onChange={this.handleDropdownChange}>
                    <option value="none">Select branch...</option>
                    {university !== 'none' && batch !== 'none' && (
                      Object.keys(syllabus[university][batch]).map(x => (
                        <option key={x} value={x}>{x.toUpperCase()}</option>
                      ))
                    )}
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
