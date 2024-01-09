

import React from "react";
import Image from "next/image";
import styles from "./ContactIcons.module.scss"; 

const ContactIcon = ({ href, src, alt }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.contactIcon}
    >
      <Image src={src} alt={alt} width={50} height={50} />
    </a>
  );
};

export default ContactIcon;
