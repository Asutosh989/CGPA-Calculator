import React from 'react';
import syllabus from './syllabus';
import { Button, Input, Table, Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { calculateGpa } from './gpa-calculator';
import 'react-accordion-component';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: {},
      gpa: 0,
      dirty: true
    };
  }

  calculate = () => {
    const { uni, year, branch } = this.props.match.params;

    const grades = [];
    for (let semester of syllabus[uni][year][branch]) {
      for (let subject of semester.subjects) {
        grades.push({
          ...subject,
          grade: this.state.grades[subject.code] || 'O'
        });
      }
    }
    this.setState({
      gpa: calculateGpa(grades),
      dirty: false
    });
  };

  render() {
    const { uni, year, branch } = this.props.match.params;

    return (
      <Container>
        <Row>
          <Col md={8}>
            {syllabus[uni][year][branch].map(semester => (
              <div key={semester.id}>
                <h1>{semester.name}</h1>
                <Table>
                  <thead>
                    <tr>
                      <th>Subject Code</th>
                      <th>Subject</th>
                      <th>Credits</th>
                      <th>Grades</th>
                    </tr>
                  </thead>
                  <tbody>
                    {semester.subjects.map(subject => (
                      <tr key={subject.code}>
                        <td>{subject.code}</td>
                        <td>{subject.name}</td>
                        <td>{subject.credits}</td>
                        <td>
                          <Input
                            type="select"
                            name="select"
                            value={this.state.grades[subject.code] || 'O'}
                            onChange={e =>
                              this.setState({
                                grades: {
                                  // ... is the spread syntax. It copies all properties of arrays and objects here
                                  ...this.state.grades,
                                  // [subject.code] computed object property name
                                  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names

                                  [subject.code]: e.target.value
                                },
                                dirty: true
                              })
                            }
                          >
                            <option value="O">O</option>
                            <option value="E">E</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="F">F</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="excluded">Exclude</option>
                          </Input>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            ))}
            <Button onClick={this.calculate}>Calculate</Button>
          </Col>
          <Col md={4}>
            {!this.state.dirty && (
              <Card style={{ position: 'sticky', top: '4em' }}>
                <CardTitle>GPA</CardTitle>
                <CardBody>
                  <h2>CGPA {this.state.gpa.toFixed(2)}</h2>
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
