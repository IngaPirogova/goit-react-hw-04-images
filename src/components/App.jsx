import { useState, useEffect } from 'react';
import { api } from 'service/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import toast, { Toaster } from 'react-hot-toast';
import { animateScroll } from 'react-scroll';

export function App() {
  const [searchName, setSearchName] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [isVisibleBtn, setIsVisibleBtn] = useState(false);

  const handleFormSubmit = searchName => {
    setSearchName(searchName);
    setPage(1);
    setPictures([]);
    setStatus('idle');
    setIsVisibleBtn(false);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    scrollOnMoreButton();
  };

  const scrollOnMoreButton = () => {
    animateScroll.scrollToBottom({
      duration: 1000,
      delay: 10,
      smooth: 'linear',
    });
  };

  const openModal = largeImageURL => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!searchName) {
      return;
    }

    async function getImages() {
      setStatus('pending');

      const response = await api.fetchResponce(searchName, page);
      console.log(response);

      if (response.hits <= 0) {
        toast.error(`Not found "${searchName}"`);
        return;
      } else {
        toast.success(`By "${searchName}" found "${response.total}" images`);
      }

      setPictures(prevPictures => [...prevPictures, ...response.hits]);

      setPictures(response.hits);
      setIsVisibleBtn(true);
      setStatus('resolved');

      return;
    }
    getImages();
  }, [searchName, page]);

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />

      {pictures.length > 0 && (
        <ImageGallery pictures={pictures} openModal={openModal} />
      )}

      {status === 'pending' && <Loader />}

      {status === 'resolved' && isVisibleBtn && <Button loadMore={loadMore} />}

      {showModal ? (
        <Modal largeImageURL={largeImageURL} onClose={closeModal} />
      ) : null}

      <Toaster autoClose={2000} />
    </div>
  );
}

// useEffect(() => {

//   async function getImages() {
//     if (!searchName) {
//       return;
//     }

//     if (prevSearchName => prevSearchName !== searchName) {
//       setStatus('pending');
//       const response = await api.fetchResponce(searchName, page);
//       console.log(response);

//       if (response.hits <= 0) {
//         toast.error(`Not found "${searchName}"`);
//         return;
//       } else {
//         toast.success(`By "${searchName}" found "${response.total}" images`);
//       }

//       setPictures(response.hits);
//       setIsVisibleBtn(true);
//       setStatus('resolved');
//       return;
//     }

//     if (prevPage => prevPage !== page) {
//       setStatus('pending');
//       const response = await api.fetchResponce(searchName, page);
//       setPictures(prevPictures => [...prevPictures, ...response.hits]);
//       setStatus('resolved');
//     }
//     return;
//   }
//   getImages();
// }, [searchName, page]);
