import React from 'react';

import styles from './UserBotPage.module.css';
import { Button, Col, Container, Image, Nav, Row } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const UserBotPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.main}>
        <Container
          className={`card  ${styles.myContainer} ${styles.cardHover}`}
        >
          <div className={styles.userbot_text}>
            <h1>TELEGRAM USERBOT API</h1>
          </div>

          <hr />
          <Row container spacing={2} columns={20}>
            <Col className="w-50">
              <h4>{t('top_bar')}</h4>
              <p>{t('bar')}</p>
              <h6>
                {' '}
                <FaCheckCircle size={32} color="green" />
                <span className={styles.text_span}>{t('dsa')}</span>
                {t('das')}
              </h6>
              <h6>
                {' '}
                <FaCheckCircle size={32} color="green" />
                {t('Suqwepport')}{' '}
                <span className={styles.text_span}>{t('Mainada')}</span>
              </h6>
              <h6>
                {' '}
                <FaCheckCircle size={32} color="green" />
                {t('Possibility')}{' '}
                <span className={styles.text_span}>{t('Ofe')} </span>
              </h6>
            </Col>
            <Col className="w-50">
              <div>
                <div className="tn-atom">
                  <div>
                    <div className={styles.image_img}>
                      <Image
                        width={300}
                        className="tn-atom__img"
                        src="https://static.tildacdn.com/tild3266-3436-4838-b963-653031663266/Group_42_1.jpg"
                      />

                      <div className={styles.image_1}>
                        <Image src="https://thumb.tildacdn.com/tild6130-6565-4364-b133-386366653964/-/resize/54x/-/format/webp/photo.png" />
                      </div>
                    </div>
                    <div>
                      <div className={styles.image_img_1}>
                        <Image
                          width={300}
                          className="tn-atom__img"
                          src="https://static.tildacdn.com/tild3030-3237-4866-a463-653934636566/Group_26.jpg"
                        />
                      </div>
                    </div>
                  </div>
                  <Image
                    className={styles.image_2}
                    data-original="https://static.tildacdn.com/tild6130-6565-4364-b133-386366653964/photo.png"
                    src="https://thumb.tildacdn.com/tild6130-6565-4364-b133-386366653964/-/resize/60x/-/format/webp/photo.png"
                  />
                  <Image
                    width={300}
                    className="tn-atom__img"
                    src="https://static.tildacdn.com/tild6235-3461-4466-b436-396665663533/6_1566.png"
                  />
                  <Image
                    className={styles.image_3}
                    data-original="https://static.tildacdn.com/tild6130-6565-4364-b133-386366653964/photo.png"
                    src="https://thumb.tildacdn.com/tild6130-6565-4364-b133-386366653964/-/resize/60x/-/format/webp/photo.png"
                  />
                </div>
                <div>
                  <div className={styles.image_img_2}>
                    <Image
                      width={300}
                      className="tn-atom__img"
                      src="https://static.tildacdn.com/tild6433-3135-4331-a662-373137633966/Group_27.jpg"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Nav.Link href="https://lk.userbot-api.tech/#/login?next=/">
            <Button variant="success" className="rounded-pill px-4 ms-2 m-2">
              {t('free')}
            </Button>
          </Nav.Link>
        </Container>
      </div>
    </>
  );
};

export { UserBotPage };
