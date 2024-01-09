import React from "react";
import { Container, Image } from "react-bootstrap";
import styles from "./SocialMediaIcons.module.scss";

const SocialMediaIcon = ({ href, src, alt }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
      <Image src={src} alt={alt} width={40} height={40} />
    </a>
  );
};

const SocialMediaIcons = ({
  facebook,
  twitter,
  instagram,
  linkedin,
  youtube,
  pinterest,
  snapchat,
  reddit,
  tumblr,
  tiktok,
  facebookIcon,
  twitterIcon,
  instagramIcon,
  linkedinIcon,
  youtubeIcon,
  pinterestIcon,
  snapchatIcon,
  redditIcon,
  tumblrIcon,
  tiktokIcon,
}) => {
  return (
    <Container className={styles.socialIconsContainer}>
      {facebook && (
        <SocialMediaIcon
          href={facebook}
          src={facebookIcon || "/icons/facebook_c.png"}
          alt="Facebook"
        />
      )}
      {twitter && (
        <SocialMediaIcon
          href={twitter}
          src={twitterIcon || "/icons/xtwitter_c.png"} 
          alt="X-Twitter"
        />
      )}
      {instagram && (
        <SocialMediaIcon
          href={instagram}
          src={instagramIcon || "/icons/instagram_c.png"}
          alt="Instagram"
        />
      )}
      {linkedin && (
        <SocialMediaIcon
          href={linkedin}
          src={linkedinIcon || "/icons/linkedin_c.png"}
          alt="LinkedIn"
        />
      )}
      {youtube && (
        <SocialMediaIcon
          href={youtube}
          src={youtubeIcon || "/icons/youtube_y.png"}
          alt="YouTube"
        />
      )}
      {pinterest && (
        <SocialMediaIcon
          href={pinterest}
          src={pinterestIcon || "/icons/pinterest_y.png"}
          alt="Pinterest"
        />
      )}
      {snapchat && (
        <SocialMediaIcon
          href={snapchat}
          src={snapchatIcon || "/icons/snapchat_y.png"}
          alt="Snapchat"
        />
      )}
      {reddit && (
        <SocialMediaIcon
          href={reddit}
          src={redditIcon || "/icons/reddit_y.png"}
          alt="Reddit"
        />
      )}
      {tumblr && (
        <SocialMediaIcon
          href={tumblr}
          src={tumblrIcon || "/icons/tumblr_y.png"}
          alt="Tumblr"
        />
      )}
      {tiktok && (
        <SocialMediaIcon
          href={tiktok}
          src={tiktokIcon || "/icons/tiktok_c.png"}
          alt="TikTok"
        />
      )}
    </Container>
  );
};

export default SocialMediaIcons;
