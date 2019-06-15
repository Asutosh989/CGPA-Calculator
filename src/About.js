import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => (
  <div>
    <h2>
      This is a CGPA Calculator. <br /> Hope you enjoy it.
    </h2>
    <br />
    <h3>How it works?</h3>
    <ul className="outer">
      <li>
        Select your branch from the dropdown at the Home page and Click 'Submit'
      </li>
      <li>
        You will be redirected to the page containing list of all subjects in
        all semesters.
      </li>
      <li>
        Enter the respective grades <br /> Note
        <ul className="inner">
          <li>'S' for Skip</li>
          <li>'M' for Malpractise</li>
        </ul>
      </li>
      <li>
        The 'Exclude' options provide an extra feature for excluding the
        subject. This option can be used as follows:
        <ul className="inner">
          <li>If the GPA of the subject is not out</li>
          <li>If one has not opted for Honours</li>
        </ul>
      </li>
    </ul>
    <br />
    Go to <Link to="/">Home</Link>
  </div>
);

export default About;
