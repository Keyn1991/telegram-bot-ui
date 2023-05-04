import React from 'react';

import styles from './ActivationPage.module.css';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import {useTranslation} from "react-i18next";

const ActivationPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <Container className={` w-50 mx-auto`}>
          <div className={styles.userbot_text}>
            <h1>{t('text6')}</h1>
          </div>

          <hr />
          <Row className={styles.container} container spacing={2} columns={16}>
            <Col className="w-75">
              <Tabs id="controlled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Відправити повідомлення">
                  <code>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    curl\
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    -d "\
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    -H accept: application/json\
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    -H "Authorization: Bearer &lt;Your token&gt;\
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    -X 'POST'\
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    https:\/\/userbot-api.tech\/api\/v1\/telegram\/send_message?
                    <br />
                    chat_id=1234567890&amp;message=Hello%20World%21\
                  </code>
                </Tab>
                <Tab eventKey="profile" title="Відправити фото">
                  <code>
                    curl \
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    -d '' \
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    -H 'accept: application/json'\
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    -H 'Authorization: Bearer &lt;Your token&gt;\
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    -X 'POST' \
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    'https://userbot-api.tech/api/v1/telegram/send_photo?
                    <br />
                    chat_id=1234567890&photo_url=https%3A%2F%2Fvia.placeholder.com%2
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    F300%3Ftext%3DTest' \
                  </code>
                </Tab>
                <Tab eventKey="contact" title="Знайти користувача">
                  <code>
                    curl \
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    -d '' \
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    -H 'accept: application/json' \
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    -H 'Authorization: Bearer &lt;Your token&gt;'\
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    -X 'GET' \
                    <br />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    'https://userbot-api.tech/api/v1/telegram/search_user?phone=79000000000'
                    \
                  </code>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ActivationPage;
