import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css';
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="d-flex justify-content-center">
            <ul className="social-icons">
              <Link
                target={'_blank'}
                rel="noreferrer"
                to={'https://www.facebook.com/genoszczedzania'}
              >
                {' '}
                <img
                  width={50}
                  src={
                    'https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png'
                  }
                  alt={'facebook'}
                />
              </Link>
              <Link
                target={'_blank'}
                rel="noreferrer"
                to={'https://twitter.com'}
              >
                {' '}
                <img
                  width={50}
                  src={'https://cdn-icons-png.flaticon.com/512/124/124021.png'}
                  alt={'twitter'}
                />
              </Link>
              <Link
                target={'_blank'}
                rel="noreferrer"
                to={'https://telegram.com'}
              >
                {' '}
                <img
                  width={50}
                  src={
                    'https://user-images.githubusercontent.com/49933115/139837223-bf23d3a9-4638-4e17-994a-ac8678d5f517.png'
                  }
                  alt={'telegram'}
                />{' '}
              </Link>
              <Link
                target={'_blank'}
                rel="noreferrer"
                to={'https://www.instagram.com'}
              >
                {' '}
                <img
                  width={50}
                  src={
                    'https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png'
                  }
                  alt={'instagram'}
                />
              </Link>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>Авторські права © 2023 My Website. Усі права захищені.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export { Footer };
