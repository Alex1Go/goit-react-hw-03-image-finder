import css from './Button.module.css'

export const Button = ({ handleLoad }) => {
    return (
        <button className={css.button} type="submit" onClick={handleLoad}></button>
    )
}