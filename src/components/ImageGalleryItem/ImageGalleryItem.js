import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={webformatURL}
        alt="foto"
        onClick={() => onClick(largeImageURL)}
        className={css.imageGalleryItemImage}
      />
    </li>
  );
}

