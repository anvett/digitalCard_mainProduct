import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";
import EducationAndCertifications from "@/components/EducationAndCertification/EducationAndCertification";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import QRCodeComponent from "@/components/QrCodeComponent/QrCodeComponent";
import CustomNavbar from "@/components/Navbar/Navbar";
import ContactIconsButton from "@/components/ContactIconsButton/contactIconsButton";
import SocialMediaIconsButton from "@/components/SocialMediaIconsButton/socialMediaIconsButton";
import styles from "../../styles/variants/variant3.module.scss";

export default function DiegoLarrea() {
  const items = [
    {
      title: "Mgr. Ciencias de la Educación mención en Gestión Educativa",
      institution: "Universidad Guayaquil",
      year: "2021",
      description:
        "Graduado en la Universidad Ecotec con el título de Mgr. En Ciencias de la Educación",
      logo: "/images/education/politecnica_salesiana_logo.jpg",
    },
  ];

  const images = [
    {
      thumbnail: "/images/users/diego_larrea/sistemas_automatizacion.png",
      full: "/images/users/diego_larrea/sistemas_automatizacion.png",
      description: "Sistemas de Automatización",
      alt: "Sistemas de Automatización",
      experience: [
        "Desarrollo de sistemas robóticos avanzados para la automatización industrial.",
        "Implementación de soluciones de automatización en diversas industrias.",
        "Mejora continua de procesos mediante tecnología de vanguardia.",
      ],
    },
    {
      thumbnail: "/images/users/diego_larrea/energia_renovable.png",
      full: "/images/users/diego_larrea/energia_renovable.png",
      description: "Energía Renovable",
      alt: "Energía Renovable",
      experience: [
        "Diseño e implementación de sistemas de energía solar y eólica.",
        "Optimización de la eficiencia energética en proyectos sostenibles.",
        "Contribución a proyectos de energía limpia a gran escala.",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Andrés Veintimilla</title>
        <meta name="description" content="Andrés Veintimilla Digital Card" />
        <link rel="icon" href="/icons/sharedimage.ico" />

        {/* Open Graph */}
        <meta property="og:url" content="https://aveintimillacard.anvetcorp.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business digital card Andrés Veintimilla" />
        <meta property="og:description" content="Tarjeta de negocios digital" />
        <meta
          property="og:image"
          content="https://aveintimillacard.anvetcorp.com/images/sharedimage.jpeg"
        />
      </Head>
      <Layout>
        <Container fluid className={styles.mainContainer}>
          {/* Section personal info, image profile, contact and social networks */}

          <section id="profile">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Image Profile Row */}
              <Row className={styles.profileImgRow}>
                <Col xs={12} className={styles.profileImgCol}>
                  <ProfileImage
                    src="/images/users/eva_doe.jpg"
                    alt="Eva Doe"
                    size={250}
                    profileImageContainerClassName={styles.profileImage}
                  />
                </Col>
              </Row>

              <Row className={styles.personalInfoRow}>
                <Col xs={12} className={styles.personalInfoCol}>
                  <PersonalInfo
                    name="EVA DOE"
                    title="ARCHITECT & DESIGNER"
                    //description="Licenciada en Ciencias de la Educación mención en Gestión Educativa"
                    containerClassName={styles.personalInfoContainer}
                    nameClassName={styles.personalInfoName}
                    titleClassName={styles.personalInfoTitle}
                    descriptionClassName={styles.personalInfoDescription}
                  />
                </Col>
              </Row>

              <ContactIconsButton
                phone="+1234567890"
                phoneIcon="/icons/yellow_c/call_yc.png"
                phoneTitle="Llámame"
                email="correo@example.com"
                emailIcon="/icons/white/email_w.jpeg"
                emailTitle="Email"
                whatsapp="+1234567890"
                whatsappIcon="/icons/black/whatsapp_b.png"
                whatsappTitle="WhatsApp"
                // telegram="usernameTelegram"
                // telegramIcon="/icons/white/telegram-icon.png"
                // telegramTitle="Telegram"
                // location="MiUbicacion"
                // locationIcon="/icons/white/location-icon.png"
                // locationTitle="Ubicación"
                containerContactButton={styles.contactIconsContainer}
                colClassName={styles.contactIconsCol}
                buttonClassName={styles.contactButton}
                titleClassName={styles.contactButtonTitle}
              />

              <SocialMediaIconsButton
                facebook="https://www.facebook.com/carlosivan.veintimillatinoco.9"
                facebookIcon="/icons/black/facebook_b.png"
                twitter="https://www.twitter.com/usertwitter"
                twitterIcon="/icons/black/xtwitter_b.png"
                instagram="https://www.instagram.com/userinstagram"
                instagramIcon="/icons/black/instagram_b.png"
                //linkedin="https://www.linkedin.com/userlinkedin"
                //linkedinIcon="/icons/black/linkedin_b.png"
                //  youtube="https://www.youtube.com/useryoutube"
                //  youtubeIcon="/icons/black/youtube_b.png"
                //pinterest="https://www.pinterest.com/userpinterest"
                //pinterestIcon="/icons/black/pinterest_b.png"
                //   snapchat="https://www.snapchat.com/usersnapchat"
                //   snapchatIcon="/icons/black/snapchat_b.png"
                //   reddit="https://www.reddit.com/userreddit"
                //   redditIcon="/icons/black/reddit_b.png"
                //   tumblr="https://www.tumblr.com/usertumblr"
                //   tumblrIcon="/icons/black/tumblr_b.png"
                //  tiktok="https://www.tiktok.com/usertiktok"
                //  tiktokIcon="/icons/black/tiktok_b.png"
                buttonClassName={styles.socialMediaButton}
                titleClassName={styles.socialMediaTitle}
              />
            </motion.div>
          </section>
          <section className={styles.imageSection}>
            <Image
              src="/images/users/diego_larrea/hero.jpg"
              alt="Mantenimiento industrial"
              width={500}
              height={300}
              layout="responsive"
              className={styles.backgroundImage}
            />
          </section>

          {/* Componente de educación y certificaciones */}

          <Row>
            <Col className={styles.educationSection}>
              <section id="education">
                <div className={styles.educationText}>
                  <h2 className={styles.educationTitle}>Educación y Certificaciones</h2>
                  <span className={styles.educationInstructions}>
                    Haz clic en el logo para ver la información
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.educationInfo}>
                    <EducationAndCertifications
                      items={items}
                      itemClassName={styles.educationItem}
                      logoClassName={styles.educationLogo}
                      titleClassName={styles.educationItemTitle}
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de experiencia laboral */}

          <Row>
            <Col className={styles.imageGallery}>
              <div className={styles.imageGalleryText}>
                <h2 className={styles.imageGalleryTitle}>Experiencia laboral</h2>
                <span className={styles.imageGalleryInstructions}>
                  Haz clic en la imagen para ver la información
                </span>
              </div>

              <ImageGallery
                images={images}
                imageDescriptionClassName={styles.imageDescription}
                thumbnailClassName={styles.thumbnail}
                modalDescriptionClassName={styles.modalDescription}
              />
            </Col>
          </Row>

          {/* Componente de información de pago */}

          <Row>
            <Col className={styles.paymentSection}>
              <section id="payment" className={styles.paymentInfo}>
                <div className={styles.paymentText}>
                  <h2 className={styles.paymentTitle}>Información de Pago</h2>
                  <span className={styles.paymentInstructions}>
                    Haz clic en el logo para acceder a los datos de la cuenta
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.bankInfo}>
                    <PaymentInfo
                      bankName="Banco Pichincha"
                      accountNumber="123456789"
                      identification="123456"
                      email="contacto@bancoxyz.com"
                      bankLogo="/images/banksLogos/bancoPichincha.png"
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de video player */}

          <Row>
            <Col className={styles.videoPlayer}>
              <VideoPlayer videoUrl="/video/users/diego_larrea/mantenimiento_industrial.mp4" />
            </Col>
          </Row>

          {/* Componente de QR Code */}
          <Row>
            <Col className={styles.qrCode}>
              <section>
                <QRCodeComponent
                  qrCodeImageUrl="/images/users/diego_larrea/logo.png"
                  altText="QR Code"
                />
              </section>
              <p className={styles.scanText}>Escanea tu código</p>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
