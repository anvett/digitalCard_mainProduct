import React from "react";
import Image from "next/image";
import styles from "./SocialMediaIconsButton.module.scss";

const SocialMediaIconButton = ({ href, src, alt, title, buttonClassName, titleClassName }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.socialMediaIconButton}>
      <button className={`${styles.button} ${buttonClassName || ''}`}>
        <Image src={src} alt={alt} width={40} height={40} />
        <span className={`${styles.title} ${titleClassName || ''}`}>{title}</span>
      </button>
    </a>
  );
};

export default SocialMediaIconButton;
