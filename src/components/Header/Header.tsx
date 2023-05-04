import React from 'react';
import { Button, Nav, Navbar, Image } from 'react-bootstrap';

import styles from './Header.module.css';
import { useTranslation } from 'react-i18next';



const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <header className={styles.main}>
      <Navbar bg="light" expand="lg" className="shadow-sm py-3 ms-2">
        <Navbar.Brand href="#" className="font-weight-bold text-uppercase m-2">
          <Image
            src={require('../../assets/images/telegram-logo.jpg')}
            height={50}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/tarif" className={styles.navLink}>
              {t('Tarif')}
            </Nav.Link>
            <Nav.Link
              href="https://docs.userbot-api.tech/docs"
              className={styles.navLink}
            >
              {t('Documentation')}
            </Nav.Link>
            <Nav.Link
              href="https://t.me/userbot_support_bot"
              className={styles.navLink}
            >
              {t('Support')}
            </Nav.Link>
            <Nav.Link href="/" className={styles.navLink}>
              {t('Main')}
            </Nav.Link>
            <Nav.Link
              href="https://userbot-api.tech/blog"
              className={styles.navLink}
            >
              {t('Useful articles')}
            </Nav.Link>
          </Nav>
          <Nav className="me-3">
            <Nav.Link href="https://lk.userbot-api.tech/#/login?next=/">
              <Button variant="success" className="rounded-pill px-4 ms-2 m-2">
                {t('Office')}
              </Button>
            </Nav.Link>
            <Button
              variant="success"
              className="rounded-pill px-4 ms-2 m-2"
              onClick={() => changeLanguage('en')}
            >
              EN
            </Button>
            <Button
              variant="success"
              className="rounded-pill px-4 ms-2 m-2"
              onClick={() => changeLanguage('ua')}
            >
              UA
            </Button>
            <Button
              variant="success"
              className="rounded-pill px-4 ms-2 m-2"
              onClick={() => changeLanguage('ru')}
            >
              RU
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export { Header };
