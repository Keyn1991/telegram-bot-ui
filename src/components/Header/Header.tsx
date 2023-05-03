import React from 'react';
import { Button, Nav, Navbar, Image } from 'react-bootstrap';

import style from './Header.module.css';
const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <Navbar bg="light" expand="lg" className="shadow-sm py-3 ms-2">
        <Navbar.Brand href="#" className="font-weight-bold text-uppercase">
          <Image
            src={require('../../assets/images/telegram-logo.jpg')}
            height={50}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-dark me-3">
              Тариф
            </Nav.Link>
            <Nav.Link href="#" className="text-dark me-3">
              Документація
            </Nav.Link>
            <Nav.Link href="#" className="text-dark me-3">
              Підтримка
            </Nav.Link>
            <Nav.Link href="#" className="text-dark me-3">
              Головна
            </Nav.Link>
            <Nav.Link href="#" className="text-dark me-3">
              Про нас
            </Nav.Link>
            <Nav.Link href="#" className="text-dark me-3">
              Контакт
            </Nav.Link>
          </Nav>
          <Nav className="me-3">
            <Button variant="success" className="rounded-pill px-4">
              Особистий кабінет
            </Button>
            <Button variant="success" className="rounded-pill px-4  ms-2">
              UA
            </Button>
            <Button variant="success" className="rounded-pill px-4  ms-2">
              RU
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export { Header };
