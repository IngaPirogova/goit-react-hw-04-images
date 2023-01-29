import React from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
render() {
  return createPortal(
          <div className={css.overlay} onClick={this.handleBackDropClick}>
            <div className={css.modal}>
              <img src={this.props.largeImageURL} alt="" />
            </div>
          </div>,
          modalRoot
        );
      }
    }


Modal.propTypes = {
  onClose: PropTypes.func,
 
};









// const modalRoot = document.querySelector('#modal-root');

// export class Modal extends React.Component {
//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackDropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   render() {
//     const { largeImageURL, tag } = this.props;

//     return createPortal(
//       <div className={css.overlay} onClick={this.handleBackDropClick}>
//         <div className={css.modal}>
//           <img src={largeImageURL} alt={tag} />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   largeImageURL: PropTypes.string,
//   tag: PropTypes.string,
// };
