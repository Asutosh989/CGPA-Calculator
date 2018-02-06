import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
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
          <Route exact path="/" component={Syllabus}/>
          <Route path="/calculate/:branch" component={Calculator} />
        </div>
      </Router>
    );
  }
}

export default App;
