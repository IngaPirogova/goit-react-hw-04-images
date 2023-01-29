import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ pictures, openModal }) => {
  return (
    <ul 
    className={css.imageGalleryList}
    >
      {pictures.map(({ webformatURL, largeImageURL }, index) => {
        return (
          <ImageGalleryItem
            key={index}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}           
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,  
  openModal: PropTypes.func.isRequired,
};
