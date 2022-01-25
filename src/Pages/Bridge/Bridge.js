import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './bridge.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BridgeText from '../../Components/BridgeText/BridgeText';
import BridgeModal from '../../Components/BridgeModal/BridgeModal';

import useMediaQuery from '../../hooks/mediaQuery';

import TransactionHistory from '../../Components/TransactionHistory/TransactionHistory';

const Bridge = () => {
  const isMobile = useMediaQuery('(max-width: 991px)');
  const [transaction, setTransaction] = useState(false);

  return (
    <>
      <Container fluid>
        <Row className={clsx('row justify-content-center', !isMobile && styles.govContainerInner)}>
          <Col xs={20} sm={8} md={10} lg={5} xl={5}>
            <BridgeText />
          </Col>
          <Col xs={20} sm={5} md={10} lg={6} xl={5}>
            {!isMobile &&
              (!transaction ? (
                <BridgeModal transaction={transaction} setTransaction={setTransaction} />
              ) : (
                <TransactionHistory transaction={transaction} setTransaction={setTransaction} />
              ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Bridge;
