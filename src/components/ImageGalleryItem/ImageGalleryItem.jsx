import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  openModal,
  alt,
}) => {
  return (
    <li className={css.galleryItem} onClick={() => openModal(largeImageURL)}>
      <img className={css.galleryItem_image} src={webformatURL} alt={alt} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  alt: PropTypes.string,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
