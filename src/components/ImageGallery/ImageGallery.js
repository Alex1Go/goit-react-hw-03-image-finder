import { ImageGalerryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css'


export const ImageGalerry = ({items}) => {
    return (
        <ul className={css.imageGallery}>
            {items.map(item => (
                <ImageGalerryItem/>
            ))}
       </ul>
    )
}