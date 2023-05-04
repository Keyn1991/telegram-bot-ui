import React, { useState } from 'react';

import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Button, Container, Table } from 'react-bootstrap';
import { ServerComparisonTableProps } from '../../types';
import styles from './TablePage.module.css';
import {useTranslation} from "react-i18next";

const TablePage: React.FC<ServerComparisonTableProps> = ({
  freeServer,
  paidServer,
}) => {
  const [showFreeServer, setShowFreeServer] = useState(true);
  const { t } = useTranslation();
  const toggleServer = () => {
    setShowFreeServer(!showFreeServer);
  };

  const paidServerIcon = showFreeServer ? (
    <FaTimesCircle size={32} color="red" />
  ) : (
    <FaCheckCircle size={32} color="green" />
  );
  const freeServerIcon = showFreeServer ? (
    <FaCheckCircle size={32} color="green" />
  ) : (
    <FaTimesCircle size={32} color="red" />
  );

  return (
    <div className="text-center">
      <Container className={styles.container}>
        <h2>{t('text1')}</h2>
        <Button type="button" onClick={toggleServer}>
          {showFreeServer ? 'Show Paid Server' : 'Show Free Server'}
        </Button>
        <Table className={styles.text}>
          <thead>
            <tr>
              <th></th>
              <th className={styles.text}>
                {' '}
                {showFreeServer ? 'TELEGRAM БОТ' : 'TELEGRAM ЮЗЕРБОТ'}
              </th>
              <th className={styles.text}>
                {showFreeServer ? 'TELEGRAM ЮЗЕРБОТ' : 'TELEGRAM БОТ'}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.text}>
                {t('text2')}
              </td>
              <td>{freeServer.feature1 ? freeServerIcon : paidServerIcon}</td>
              <td>{paidServer.feature1 ? paidServerIcon : freeServerIcon}</td>
            </tr>
            <tr>
              <td className={styles.text}>
                {t('text3')}
              </td>
              <td>{freeServer.feature2 ? freeServerIcon : paidServerIcon}</td>
              <td>{paidServer.feature2 ? paidServerIcon : freeServerIcon}</td>
            </tr>
            <tr>
              <td className={styles.text}>
                {t('text4')}
              </td>
              <td>{freeServer.feature3 ? freeServerIcon : paidServerIcon}</td>
              <td>{paidServer.feature3 ? paidServerIcon : freeServerIcon}</td>
            </tr>
            <tr>
              <td className={styles.text}>
                {t('text5')}
              </td>
              <td>{freeServer.feature4 ? freeServerIcon : paidServerIcon}</td>
              <td>{paidServer.feature4 ? paidServerIcon : freeServerIcon}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TablePage;
