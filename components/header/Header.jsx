import React from 'react';
import { Button, Navbar } from 'react-bootstrap';

export const Header  = (props) => {

  return (
    <header className="main-header">
    <Navbar inverse >
      <Navbar.Header>
        <Navbar.Brand>
          <a>HOME</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text>
          <Navbar.Link>Buy Some</Navbar.Link>
        </Navbar.Text>
        <Navbar.Text pullRight>Welcome!</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    </header>
  );
}