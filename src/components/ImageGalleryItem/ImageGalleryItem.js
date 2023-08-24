import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

// const customStyles = {
//   content: {
//     // zIndex: 1500,
//     // top: '50%',
//     // left: '50%',
//     // right: 'auto',
//     // bottom: 'auto',
//     // marginRight: '-50%',
//     // transform: 'translate(-50%, -50%)',
//   },
// };
export class ImageGalleryItem extends Component {
      state = {
        isModalOpen: false,
    }
  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
   const { webformatURL, largeImageURL, onClick } = this.props;

    return (
    <li className={css.imageGalleryItem}  >
      <img 
        src={webformatURL}
          alt="foto"
          onClick={this.openModal}
        // onClick={() => onClick(largeImageURL)}
        className={css.imageGalleryItemImage}
        />
        <Modal
        isOpen={this.state.isModalOpen}
        onRequestClose={this.closeModal}
        // style={customStyles}
      >
          {/* <button onClick={this.closeModal}>close</button> */}
          <div className={css.overlay} onClick={this.closeModal}>
            <div className={css.modal} >
             <img onClick={() => onClick(largeImageURL)} src={largeImageURL} alt="foto" />
            </div>
          </div>
      </Modal>
      </li>
  )};
}

