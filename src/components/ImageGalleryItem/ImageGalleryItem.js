import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  }

  modalToggle = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, onClick } = this.props;


    return (
      <li className={css.imageGalleryItem}>
        <img
          src={webformatURL}
          alt="foto"
          onClick={this.modalToggle} 
          className={css.imageGalleryItemImage}
        />
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.modalToggle}
        >
          <div className={css.overlay}>
            <div className={css.modal}>
              <img onClick={() => onClick(largeImageURL)} src={largeImageURL} alt="foto" />
            </div>
          </div>
        </Modal>
      </li>
    );
  }
}
