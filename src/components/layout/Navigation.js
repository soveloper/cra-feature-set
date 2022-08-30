import {Nav, NavItem, NavLink} from 'reactstrap';

const Navigation = () => {
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink active
            href="#">
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Another Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled
            href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;