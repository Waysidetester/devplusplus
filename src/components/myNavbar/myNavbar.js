import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './myNavbar.scss';

class MyNav extends React.Component {
  static propTypes = {
    authState: PropTypes.bool,
    login: PropTypes.func,
    logout: PropTypes.func,
  }

  state = {
    isOpen: false,
  }

  render() {
    const { authState, login, logout } = this.props;
    const loginNav = <NavLink onClick={login}>Login with Github</NavLink>;
    const logoutNav = <NavLink onClick={logout}>Logout</NavLink>;

    return (
      <div>
        <Navbar color="dark" dark expand="md">
        <div className='container'>
          <NavbarBrand href="/">Dev++</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {authState ? logoutNav : loginNav}
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default MyNav;
