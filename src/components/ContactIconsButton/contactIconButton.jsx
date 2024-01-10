import React from "react";
import Image from "next/image";
import styles from "./contactIconsButton.module.scss"; 

const ContactIconButton = ({ href, src, alt, title, buttonClassName, titleClassName, iconClassName }) => {

  const buttonClass = `${styles.contactIconButton} ${buttonClassName || ''}`;
  const titleClass = `${styles.iconTitle} ${titleClassName || ''}`;
  const iconClass = `${styles.icon} ${iconClassName || ''}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className={buttonClass}>
        <Image className={iconClass} src={src} alt={alt} width={40} height={40} />
        <span className={titleClass}>{title}</span>
      </button>
    </a>
  );
};

export default ContactIconButton;

