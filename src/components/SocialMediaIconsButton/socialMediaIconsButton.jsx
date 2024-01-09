import React from "react";
import { Container } from "react-bootstrap";
import SocialMediaIconButton from "./SocialMediaIconButton";
import styles from "./SocialMediaIconsButton.module.scss";

const SocialMediaIconsButton = ({
  facebook, twitter, instagram, linkedin, youtube, pinterest, snapchat, reddit, tumblr, tiktok,
  facebookIcon, twitterIcon, instagramIcon, linkedinIcon, youtubeIcon, pinterestIcon, snapchatIcon, redditIcon, tumblrIcon, tiktokIcon,
  buttonClassName, titleClassName
}) => {
  return (
    <Container className={styles.socialIconsContainer}>
      {facebook && (
        <SocialMediaIconButton
          href={facebook}
          src={facebookIcon || "/icons/facebook_c.png"}
          alt="Facebook"
          title="Facebook"
          buttonClassName={buttonClassName}
          titleClassName={titleClassName}
        />
      )}
      {twitter && (
        <SocialMediaIconButton
          href={twitter}
          src={twitterIcon || "/icons/twitter_c.png"}
          alt="X"
          title="X"
          buttonClassName={buttonClassName}
          titleClassName={titleClassName}
        />
      )}
      {instagram && (
        <SocialMediaIconButton
          href={instagram}
          src={instagramIcon || "/icons/instagram_c.png"}
          alt="Instagram"
          title="Instagram"
          buttonClassName={buttonClassName}
          titleClassName={titleClassName}
        />
      )}
      {linkedin && (
        <SocialMediaIconButton
          href={linkedin}
          src={linkedinIcon || "/icons/linkedin_c.png"}
          alt="LinkedIn"
          title="LinkedIn"
          buttonClassName={buttonClassName}
          titleClassName={titleClassName}
        />
      )}
      {youtube && (
        <SocialMediaIconButton
          href={youtube}
          src={youtubeIcon || "/icons/youtube_c.png"}
          alt="YouTube"
          title="YouTube"
          buttonClassName={buttonClassName}
          titleClassName={titleClassName}
        />
      )}
      {pinterest && (
        <SocialMediaIconButton
          href={pinterest}
          src={pinterestIcon || "/icons/pinterest_c.png"}
          alt="Pinterest"
          title="Pinterest"
          buttonClassName={buttonClassName}
          titleClassName={titleClassName}
        />
      )}
      {snapchat && (
        <SocialMediaIconButton
          href={snapchat}
          src={snapchatIcon || "/icons/snapchat_c.png"}
          alt="Snapchat"
          title="Snapchat"
          buttonClassName={buttonClassName}
          titleClassName={titleClassName}
        />
      )}
      {reddit && (
        <SocialMediaIconButton
          href={reddit}
          src={redditIcon || "/icons/reddit_c.png"}
          alt="Reddit"
          title="Reddit"
          buttonClassName={buttonClassName}
          titleClassName={titleClassName}
        />
      )}
      {tumblr && (
        <SocialMediaIconButton
          href={tumblr}
          src={tumblrIcon || "/icons/tumblr_c.png"}
          alt="Tumblr"
          title="Tumblr"
          buttonClassName={buttonClassName}
          titleClassName={titleClassName}
        />
      )}
      {tiktok && (
        <SocialMediaIconButton
          href={tiktok}
          src={tiktokIcon || "/icons/tiktok_c.png"}
          alt="TikTok"
          title="TikTok"
          buttonClassName={buttonClassName}
          titleClassName={titleClassName}
        />
      )}
    </Container>
  );
};

export default SocialMediaIconsButton;
