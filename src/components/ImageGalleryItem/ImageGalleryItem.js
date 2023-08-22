import css from './ImageGalleryItem.module.css'

// export const ImageGalerryItem = ({webformatURL}) => {
//     return (
//         <li className={css.imageGalleryItem}>
//             <img src={webformatURL} alt='foto'/>
//        </li>
//     )
// }

export const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => (
  <li className={css.imageGalleryItem}>
    <img
      src={webformatURL}
      alt=""
      onClick={() => onClick(largeImageURL)}
      className={css.imageGalleryItemImage}
    />
  </li>
);

