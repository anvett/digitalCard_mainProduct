import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ContactIcons from "@/components/ContactIcons/ContactIcons";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";
import EducationAndCertifications from "@/components/EducationAndCertification/EducationAndCertification";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import QRCodeComponent from "@/components/QrCodeComponent/QrCodeComponent";
import styles from "../../styles/variants/variant1.module.scss";
import Footer from "@/components/Footer/Footer";
import CustomNavbar from "@/components/Navbar/Navbar";

export default function DiegoLarrea() {
  const items = [
    {
      title: "Ingeniero Electromecánico",
      institution: "Universidad Politécnica Salesiana",
      year: "2018",
      description:
        "Graduado en la Universidad Politécnica Salesiana, con el título de Ingeniero Electromecánico, con conocimientos en el área de automatización y control de procesos industriales, diseño, programación y puesta en marcha de sistemas de control, así como también en el diseño y desarrollo de proyectos de automatización industrial.",
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
        <CustomNavbar
          logoSrc="/images/users/diego_larrea/logo.png"
          logoClassName={styles.navbarLogo}
          navClassName={styles.nav}
          navLinkClassName={styles.navLink}
        />
        <Container fluid className={styles.mainContainer}>
          <Row className={styles.mainRow}>
            <Col xs={12} className={styles.infoCol}>
              <section id="profile">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <ProfileImage
                    src="/images/users/diego_larrea/profile.png"
                    alt="Ing. Diego Larrea"
                    size={250}
                    profileImageContainerClassName={styles.profileImageContainer}
                  />
                </motion.div>
              </section>
              <section>
                <PersonalInfo
                  name="Ing. Diego Larrea"
                  title="Ingeniero Electro Mecánico"
                  description="Ingeniero Electromecánico con más de 3 años de experiencia en el sector industrial, especializado en el área de automatización y control de procesos industriales. Conocimientos en diseño, programación y puesta en marcha de sistemas de control, diseño y desarrollo de proyectos, mantenimiento industrial"
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
                  <SocialMediaIcons
                    facebook="https://www.facebook.com/carlosivan.veintimillatinoco.9"
                    facebookIcon="/icons/white/facebook_w.png"
                    twitter="https://www.twitter.com/usertwitter"
                    twitterIcon="/icons/white/twitterx_w.png"
                    instagram="https://www.instagram.com/userinstagram"
                    instagramIcon="/icons/white/instagram_w.png"
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
                  />
                  {/* Columna con información de contacto */}

                  <section>
                    <ContactIcons
                      phone="+593992870801"
                      phoneIcon="/icons/black/call.png"
                      email="razor_deg@hotmail.com"
                      emailIcon="/icons/white/email_w.jpeg"
                      whatsapp="+593992870801"
                      whatsappIcon="/icons/white/whatsapp_w.png"
                      // telegram="+593992870801"
                      // telegramIcon="/icons/black/telegram.png"
                      // location="Mi dirección"
                      // locationIcon="/icons/black/location.png"
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
            <Col className={styles.footerCol}>
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
    </>
  );
}
