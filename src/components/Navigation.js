import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  console.log('asdfasdfasdf');
  console.log(process.env.REACT_APP_URL_BASE);

    return (
        <Navbar className="sticky-top ps-3 pe-3" bg="dark" variant="dark">
          <Navbar.Brand href="/">LoaHelper</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/'>캐릭터 정보</Nav.Link>
            <Nav.Link href='/exchange'>거래소 최저가</Nav.Link>
            <NavDropdown title="레이드">
                <NavDropdown.Item href="/raid/0">아브렐슈드</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
    );
}

export default Navigation;