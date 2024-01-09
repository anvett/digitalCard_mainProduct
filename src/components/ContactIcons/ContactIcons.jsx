


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactIcon from "./ContactIcon"; 
import styles from "./ContactIcons.module.scss";

const ContactIcons = ({
  title,
  phone,
  email,
  whatsapp,
  telegram,
  location,
  phoneIcon,
  emailIcon,
  whatsappIcon,
  telegramIcon,
  locationIcon
}) => {
  return (
    <Container fluid className={styles.contactIconsContainer}>
      {title && (
        <Row className={styles.contactIconsRow}>
          <Col>
            <h3 className={styles.contactIconsTitle}>{title}</h3>
          </Col>
        </Row>
      )}
      <Row className={styles.contactIconsRow}>
        <Col className={styles.contactIconsCol}>
          {phone && (
            <ContactIcon
              href={`tel:${phone}`}
              src={phoneIcon || "/icons/call_c.png"}
              alt="Phone"
            />
          )}
          {email && (
            <ContactIcon
              href={`mailto:${email}`}
              src={emailIcon || "/icons/email_c.png"}
              alt="Email"
            />
          )}
          {whatsapp && (
            <ContactIcon
              href={`https://wa.me/${whatsapp}`}
              src={whatsappIcon || "/icons/whatsapp_c.png"}
              alt="WhatsApp"
            />
          )}
          {telegram && (
            <ContactIcon
              href={`https://t.me/${telegram}`}
              src={telegramIcon || "/icons/telegram_c.png"}
              alt="Telegram"
            />
          )}
          {location && (
            <ContactIcon
              href={`https://maps.google.com/?q=${location}`}
              src={locationIcon || "/icons/ubicacion_t.png"}
              alt="Location"
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactIcons;
