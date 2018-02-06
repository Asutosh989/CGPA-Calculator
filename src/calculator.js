import React, {Component} from 'react'

import { Button, Navbar,
NavbarToggler,
NavbarBrand, NavLink,
Nav,
NavItem,Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
      {/*


            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input placeholder="username" />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Check it out" />
            </InputGroup>
            <br />
            <InputGroup>
              <Input placeholder="username" />
              <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
            </InputGroup>
            <br />

 */}

    </div>
    );
  }
}
