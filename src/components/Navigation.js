import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Navigation(props) {
  return (
    <Nav pills>
      <NavItem>
        <NavLink href="#" active>
          702A
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">702B</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">7022</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navigation;