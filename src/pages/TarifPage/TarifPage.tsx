import React, { useState } from 'react';

import { Plan, Props } from '../../types';
import { Button, Container, Image, Modal } from 'react-bootstrap';
import styles from './TarifPage.module.css';

const TarifPage: React.FC<Props> = ({ plans }) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const handleChoosePlan = () => {
    if (selectedPlan) {
      setShowModal(true);
    } else {
      alert('Будь ласка, спочатку виберіть тариф');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container id="tarif" className="text-center">
      <div className={`card ${styles.card} w-50 mx-auto`}>
        <div className="card-body">
          <h2 className="card-title">Оберіть тариф</h2>
          <div className="list-group list-group-flush">
            {plans.map((plan) => (
              <div key={plan.id} className="list-group-item">
                <label>
                  <input
                    type="checkbox"
                    name="plan"
                    value={plan.id}
                    checked={selectedPlan?.id === plan.id}
                    onChange={() => handleSelectPlan(plan)}
                  />
                  <span className="ms-2">
                    {plan.name} - {plan.price} грн
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <div className={styles.tarif_text}>
        <h1>{selectedPlan ? `${selectedPlan.price}₽/месяц` : ''}</h1>
      </div>
      <Button
        variant="success"
        className={`rounded-pill ${styles.button} mt-3`}
        onClick={handleChoosePlan}
      >
        Обрати
      </Button>
      <div className={styles.images}>
        <div className={styles.card_images}>
          <Image
            className="m-2"
            data-original="https://static.tildacdn.com/tild3736-6132-4666-b363-313666616161/visa.svg"
            src="https://static.tildacdn.com/tild3736-6132-4666-b363-313666616161/visa.svg"
          />
          <Image
            className="m-2"
            data-original="https://static.tildacdn.com/tild3334-3461-4033-a635-653665373666/master_card.svg"
            src="https://static.tildacdn.com/tild3334-3461-4033-a635-653665373666/master_card.svg"
          />
          <Image
            className="m-2"
            data-original="https://static.tildacdn.com/tild3435-3564-4833-a230-383464396563/1920px-Bitcoin_logos.png"
            src="https://thumb.tildacdn.com/tild3435-3564-4833-a230-383464396563/-/resize/150x/-/format/webp/1920px-Bitcoin_logos.png"
          />
          <Image
            className="m-2"
            data-original="https://static.tildacdn.com/tild3564-6162-4733-b933-366662323034/2000px-Tether_Logosv.png"
            src="https://thumb.tildacdn.com/tild3564-6162-4733-b933-366662323034/-/resize/136x/-/format/webp/2000px-Tether_Logosv.png"
          />
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ви обрали тариф</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Тарифи:
          {selectedPlan ? (
            <ul>
              <li>
                Тариф: {selectedPlan.name}
                <br />
                Ціна: {selectedPlan.price} грн
              </li>
            </ul>
          ) : (
            <p>Нічого не обрано</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Закрити
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export { TarifPage };
