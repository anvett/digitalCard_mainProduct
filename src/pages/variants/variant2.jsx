import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
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
import styles from "../../styles/variants/variant2.module.scss";
import SocialMediaIconsButton from "@/components/SocialMediaIconsButton/socialMediaIconsButton";
import Footer from "@/components/Footer/Footer";

export default function Veriant2() {
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
    {
      thumbnail: "/images/users/diego_larrea/maquinas_industriales.png",
      full: "/images/users/diego_larrea/maquinas_industriales.png",
      description: "Maquinaria Industrial",
      alt: "Maquinaria Industrial",
      experience: [
        "Mantenimiento preventivo y correctivo de maquinaria pesada.",
        "Diagnóstico y reparación de equipos industriales complejos.",
        "Garantizar el cumplimiento de normas de seguridad y rendimiento.",
      ],
    },
    {
      thumbnail: "/images/users/diego_larrea/estructuras.png",
      full: "/images/users/diego_larrea/estructuras.png",
      description: "Sistemas en Edificaciones",
      alt: "Sistemas en Edificaciones",
      experience: [
        "Coordinación de sistemas integrados en edificios modernos (HVAC, eléctricos, de plomería).",
        "Implementación de tecnologías para el control y monitoreo de sistemas edilicios.",
        "Enfoque en la eficiencia, seguridad y confort en proyectos de construcción.",
      ],
    },
  ];

  return (
    <Layout>
      <CustomNavbar
        logoSrc="/images/users/diego_larrea/logo.png"
        logoClassName={styles.navbarLogo}
        navClassName={styles.nav}
        navLinkClassName={styles.navLink}
      />
      <Container fluid className={styles.mainContainer}>
        <Row className={styles.mainRow}>
          {/* Columna con imagen de perfil, informacón general, redes sociales e imagen informativa */}
          <Col xs={12} className={styles.infoCol}>
            <section id="profile">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <ProfileImage
                  src="/images/users/cecilia_cano/profile.jpg"
                  alt="Ing. Diego Larrea"
                  size={250}
                  profileImageContainerClassName={styles.profileImageContainer}
                />
              </motion.div>
            </section>
            <section>
              <PersonalInfo
                name="Mgrs. Cecilia Cano"
                title="Directora de la Unidad de Educativa"
                description="Licenciada en Ciencias de la Educación mención en Gestión Educativa"
                containerClassName={styles.personalInfoContainer}
                nameClassName={styles.personalInfoName}
                titleClassName={styles.personalInfoTitle}
                descriptionClassName={styles.personalInfoDescription}
              />
            </section>
            <section className={styles.socialMediaSection}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <SocialMediaIconsButton
                  facebook="https://www.facebook.com/carlosivan.veintimillatinoco.9"
                  facebookIcon="/icons/purple_l/facebook_l.png"
                  twitter="https://www.twitter.com/usertwitter"
                  twitterIcon="/icons/purple_l/xtwitter_l.png"
                  instagram="https://www.instagram.com/userinstagram"
                  instagramIcon="/icons/purple_l/instagram_l.png"
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

                <section>
                  <ContactIconsButton
                    phone="+1234567890"
                    phoneIcon="/icons/purple_l/call_l.png"
                    phoneTitle="Llámame"
                    email="correo@example.com"
                    emailIcon="/icons/purple_l/email_l.png"
                    emailTitle="Email"
                    whatsapp="+1234567890"
                    whatsappIcon="/icons/purple_l/whatsapp_l.png"
                    whatsappTitle="WhatsApp"
                    telegram="usernameTelegram"
                    telegramIcon="/icons/purple_l/telegram_l.png"
                    telegramTitle="Telegram"
                    // location="MiUbicacion"
                    // locationIcon="/icons/white/location-icon.png"
                    // locationTitle="Ubicación"
                    containerContactButton={styles.contactIconsContainer}
                    colClassName={styles.contactIconsCol}
                    buttonClassName={styles.contactButton}
                    titleClassName={styles.contactButtonTitle}
                    iconClassName={styles.contactButtonIcon}
                  />
                </section>
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
          </Col>
        </Row>

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

        {/* Componente de footer */}
        <Row>
          <Col className={styles.footer}>
            <Footer
              footerClassName={styles.footerClassName}
              containerFooterClassName={styles.containerFooterClassName}
              textFooterClassName={styles.textFooterClassName}
              linkFooterClassName={styles.linkFooterClassName}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
