// PersonalInfo.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './PersonalInfo.module.scss';

const PersonalInfo = ({ name, title, description, nameClassName, titleClassName, descriptionClassName, containerClassName }) => {
  return (
    <Container className={`${styles.personalInfo} ${containerClassName} ` }>
      <Row>
        <Col>
          {name && <h1 className={`${styles.name} ${nameClassName}`}>{name}</h1>}
        </Col>
      </Row>
      <Row>
        <Col>
          {title && <h2 className={`${styles.title} ${titleClassName}`}>{title}</h2>}
        </Col>
      </Row>
      <Row>
        <Col>
          {description && <p className={`${styles.description} ${descriptionClassName}`}>{description}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalInfo;
