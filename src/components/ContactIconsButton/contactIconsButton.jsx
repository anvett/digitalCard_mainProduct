import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactIconButton from "./ContactIconButton"; 
import styles from "./contactIconsButton.module.scss";

const ContactIconsButton = ({
  phone,
  email,
  whatsapp,
  telegram,
  location,
  phoneIcon,
  emailIcon,
  whatsappIcon,
  telegramIcon,
  locationIcon,
  phoneTitle,
  emailTitle,
  whatsappTitle,
  telegramTitle,
  locationTitle,
  buttonClassName,
  titleClassName,
  iconClassName,
  colClassName,
  containerContactButton,

}) => {
  return (
    <Container fluid className={`${styles.contactIconsContainer} ${containerContactButton}` }>
      <Row className={styles.contactIconsRow}>
        <Col className={ `${styles.contactIconsCol} ${colClassName}` }>
          {phone && (
            <ContactIconButton
              href={`tel:${phone}`}
              src={phoneIcon || "/icons/call_c.png"}
              alt="Phone"
              title={phoneTitle || "Phone"}
              colClassName={colClassName}
              buttonClassName={buttonClassName}
              titleClassName={titleClassName}
              iconClassName={iconClassName} 
              
            />
          )}
          {email && (
            <ContactIconButton
              href={`mailto:${email}`}
              src={emailIcon || "/icons/email_c.png"}
              alt="Email"
              title={emailTitle || "Email"}
              buttonClassName={buttonClassName}
              titleClassName={titleClassName}
              
            />
          )}
          {whatsapp && (
            <ContactIconButton
              href={`https://wa.me/${whatsapp}`}
              src={whatsappIcon || "/icons/whatsapp_c.png"}
              alt="WhatsApp"
              title={whatsappTitle || "WhatsApp"}
              buttonClassName={buttonClassName}
              titleClassName={titleClassName}
              
            />
          )}
          {telegram && (
            <ContactIconButton
              href={`https://t.me/${telegram}`}
              src={telegramIcon || "/icons/telegram_c.png"}
              alt="Telegram"
              title={telegramTitle || "Telegram"}
              buttonClassName={buttonClassName}
              titleClassName={titleClassName}
              
            />
          )}
          {location && (
            <ContactIconButton
              href={`https://maps.google.com/?q=${location}`}
              src={locationIcon || "/icons/location_c.png"}
              alt="Location"
              title={locationTitle || "Location"}
              buttonClassName={buttonClassName}
              titleClassName={titleClassName}
              
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactIconsButton;
