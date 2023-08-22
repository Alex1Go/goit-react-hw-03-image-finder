import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css'


// export const ImageGalerry = ({items}) => {
//     return (
//         <ul className={css.imageGallery}>
//             {items.map(item => (
//                 <ImageGalerryItem/>
//             ))}
//        </ul>
//     )
// }


export const ImageGallery = ({ images, onImageClick }) => (
  <ul className={css.imageGallery}>
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        webformatURL={image.webformatURL}
        largeImageURL={image.largeImageURL}
        onClick={onImageClick}
      />
    ))}
  </ul>
);
