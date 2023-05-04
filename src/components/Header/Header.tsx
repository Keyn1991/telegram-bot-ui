import React from 'react';
import { Button, Nav, Navbar, Image } from 'react-bootstrap';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.main}>
      <Navbar bg="light" expand="lg" className="shadow-sm py-3 ms-2 m-2">
        <Navbar.Brand href="#" className="font-weight-bold text-uppercase m-2">
          <Image
            src={require('../../assets/images/telegram-logo.jpg')}
            height={50}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/tarif"
              className={`text-dark me-3 ${styles.navLink}`}
            >
              Тариф
            </Nav.Link>
            <Nav.Link
              href="https://docs.userbot-api.tech/docs"
              className="text-dark me-3 nav-link"
            >
              Документація
            </Nav.Link>
            <Nav.Link
              href="https://t.me/userbot_support_bot"
              className="text-dark me-3 nav-link"
            >
              Підтримка
            </Nav.Link>
            <Nav.Link href="/" className="text-dark me-3 nav-link">
              Головна
            </Nav.Link>
            <Nav.Link
              href="https://userbot-api.tech/blog"
              className="text-dark me-3 nav-link"
            >
              Корисні статті
            </Nav.Link>
          </Nav>
          <Nav className="me-3">
            <Button variant="success" className="rounded-pill px-4 ms-2 m-2">
              Особистий кабінет
            </Button>
            <Button variant="success" className="rounded-pill px-4  ms-2 m-2">
              UA
            </Button>
            <Button variant="success" className="rounded-pill px-4  ms-2 m-2">
              RU
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export { Header };
