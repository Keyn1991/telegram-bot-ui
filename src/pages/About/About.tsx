import React from 'react';

import styles from './About.module.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import bot from '..//../assets/images/chat-bot.png';

const About: React.FC = () => {
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
              Наша компанія спеціалізується на наданні програмного забезпечення,
              яке допоможе Вам у створенні користувачів для Telegram.
              Користувачі допоможуть Вам автоматизувати роботу в месенджері.
              Користувальницькі роботи можуть виконувати різні завдання, такі як
              автоматичний постинг контенту, повідомлення про активність
              користувачів та багато іншого. Розробка користувачів у Telegram -
              це ефективний інструмент для автоматизації Вашого бізнесу, який
              допоможе Вам збільшити продажі. Використання користувача - це
              швидкий і ефективний спосіб зберегти час і збільшити рівень
              взаємодії в Telegram. За допомогою нашого програмного забезпечення
              Ви зможете опрацювати кожен юзербот, щоб він максимально
              відповідав Вашим індивідуальним потребам та очікуванням. Наша
              компанія – експерти в галузі програмного забезпечення для Telegram
              мовою програмування Python. Ми пропонуємо індивідуальні рішення,
              які найкраще підійдуть для вашого бізнесу. А ще у нас Ви зможете
              отримати високу якість послуг, швидку реакцію на Ваші запити та
              адекватні ціни. Ми використовуємо найсучасніші технології та
              алгоритми, щоб забезпечити нашим клієнтам надійне та професійне
              програмне забезпечення.
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