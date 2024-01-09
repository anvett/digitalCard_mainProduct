import React, { useState } from 'react';
import { Modal, Row, Col, Image } from 'react-bootstrap';
import styles from './ImageGallery.module.scss'; 

const ImageGallery = ({ images, imageDescriptionClassName, thumbnailClassName, modalDescriptionClassName }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedAlt, setSelectedAlt] = useState("");
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (image, description, alt, experience) => {
    setSelectedImage(image);
    setSelectedDescription(description);
    setSelectedAlt(alt);
    setSelectedExperience(experience);
    setShowModal(true);
  };

  return (
    <>
      <Row className={styles.gallery}>
        {images.map((image, index) => (
          <Col xs={6} sm={4} md={3} key={index} className={`${styles.thumbnail} ${thumbnailClassName}`}>
            <Image 
            src={image.thumbnail}  
            onClick={() => openModal(image.full, image.description, image.alt, image.experience)} 
            thumbnail
            alt={image.alt}
            />
            <span className={`${styles.imageDescription} ${imageDescriptionClassName}`}>{image.description}</span>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>
          <Image src={selectedImage} fluid alt={selectedAlt} />
          <p className={`${styles.modalDescription} ${modalDescriptionClassName}`}>{selectedDescription}</p>
          {selectedExperience && (
            <ul>
              {selectedExperience.map((exp, idx) => (
                <li key={idx}>{exp}</li>
              ))}
            </ul>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageGallery;
