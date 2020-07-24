import React from 'react';
import { Greetings, Skills, Exp, Contact } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
// bootstrap import
import { Navbar, Nav, Container, Image } from 'react-bootstrap';

// !Website mengandung beberapa page dengan routing menggunakan  React Router (react-router-dom).
// !Website dibangun menggunakan React JS dengan framework CRA.
// !Component yang digunakan harus ada kedua-duanya yaitu Class dan Function Component.

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <Image src="img/001-profile.png" style={{ width: '50px' }}></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Greetings!</Nav.Link>
                <Nav.Link as={Link} to="/Skills">Skills</Nav.Link>
                <Nav.Link as={Link} to="/Contact">Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Greetings />
          </Route>
          <Route path="/Skills">
            <Skills />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>

      </Router>
    );
  }
}

export default App;
