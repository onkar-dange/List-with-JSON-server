import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class MYNavigationbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="Navbarstyle" bg="" variant="dark">
          <Nav className="mr-auto">
            <NavItem eventKey={1}>
              <NavLink className="link_style" to="/" activeClassName="selected">
                MyList
              </NavLink>
            </NavItem>
            <NavItem eventKey={2}>
              <NavLink
                className="link_style"
                to="List"
                activeClassName="selected">
                List
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default MYNavigationbar;
