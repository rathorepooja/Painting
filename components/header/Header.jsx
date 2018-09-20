import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import {Link } from "react-router-dom";

export const Header  = (props) => {

  return (
    <header className="main-header">
    <Navbar inverse >
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={'/'}> HOME</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text>
          <Navbar.Link>
          WELCOME
            </Navbar.Link>
        </Navbar.Text>
        <Navbar.Text pullRight>
          <Button href="/cart">Link</Button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    </header>
  );
}