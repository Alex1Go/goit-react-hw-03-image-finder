import { Component } from "react"
import css from './Modal.module.css'

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;

    return (
      <div className={css.overlay} onClick={this.props.onClose}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

