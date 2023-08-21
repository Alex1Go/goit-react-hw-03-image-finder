import css from './ImageGalleryItem.module.css'

export const ImageGalerry = ({webformatURL}) => {
    return (
        <li className={css.imageGalleryItem}>
            <img src={webformatURL } alt='foto'/>
       </li>
    )
}