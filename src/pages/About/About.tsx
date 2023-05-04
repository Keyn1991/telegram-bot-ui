import React from 'react';

import styles from './About.module.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import bot from '..//../assets/images/chat-bot.png';
import {useTranslation} from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.main}>
      <Container className={`card ${styles.card} w-50 mx-auto`}>
        <div className={styles.userbot_text}>
          <h1>Telegram Userbot</h1>
        </div>

        <hr />
        <Row container spacing={2} columns={16}>
          <Col className="w-50">
            <p>
              {t('tex11')}
            </p>
          </Col>
          <Col className="w-50">
            <Image
              className={styles.img_chat}
              src={bot}
              alt="chatBot"
              width={600}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { About };
