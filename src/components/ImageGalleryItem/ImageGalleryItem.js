import css from './ImageGalleryItem.module.css'

export const ImageGalerryItem = ({webformatURL}) => {
    return (
        <li className={css.imageGalleryItem}>
            <img src={webformatURL} alt='foto'/>
       </li>
    )
}