import React from "react";
import styles from "./Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Footer = ({footerClassName, containerFooterClassName, textFooterClassName, linkFooterClassName}) => {
  return (
    <footer className={`${styles.footer} ${footerClassName}`}>
      <Container className={`${styles.containerFooter} ${containerFooterClassName}`}>
        <p className={`${styles.textFooter} ${textFooterClassName}`}>
          &copy; {new Date().getFullYear()} Anvetcorp S.A.S.. All rights reserved.
        </p>
        <a className={`${styles.linkFooter} ${linkFooterClassName}`} href="https://www.anvetcorp.com">
          www.anvetcorp.com
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
