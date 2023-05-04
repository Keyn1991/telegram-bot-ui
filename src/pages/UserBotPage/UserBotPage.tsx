import React from 'react';
import styles from './UserBotPage.module.css';
import { Col, Container, Image, Row } from 'react-bootstrap';

const UserBotPage = () => {
  return (
    <div>
      <div>
        <Container className={`card ${styles.card} mx-auto`}>
          <div className={styles.userbot_text}>
            <h1>TELEGRAM USERBOT API</h1>
          </div>

          <hr />
          <Row container spacing={2} columns={16}>
            <Col className="w-50">
              <h4>
                Стабільний REST API для персонального (номерного) Telegram для
                надсилання та читання повідомлень через HTTP запити
              </h4>
              <p>
                Для інтеграції номерного Telegram у CRM або будь-яку іншу
                систему
              </p>
              <h5>Можна писати першим за номером телефону</h5>
              <h5>Є можливість читати повідомлення у групах</h5>
              <h5>Можливість спілкуватися через інтерфейс Telegram</h5>
            </Col>
            <Col className="w-50">
              <div>
                <div className="tn-atom">
                  <div>
                    <div className="tn-atom">
                      <Image
                        width={300}
                        className="tn-atom__img"
                        src="https://static.tildacdn.com/tild3266-3436-4838-b963-653031663266/Group_42_1.jpg"
                      />
                    </div>
                  </div>
                  <Image
                    className={styles.image}
                    data-original="https://static.tildacdn.com/tild6130-6565-4364-b133-386366653964/photo.png"
                    src="https://thumb.tildacdn.com/tild6130-6565-4364-b133-386366653964/-/resize/60x/-/format/webp/photo.png"
                  />
                  <Image
                    width={300}
                    className="tn-atom__img"
                    src="https://static.tildacdn.com/tild6235-3461-4466-b436-396665663533/6_1566.png"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export { UserBotPage };
