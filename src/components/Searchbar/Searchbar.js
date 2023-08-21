import css from "./Searchbar.module.css"

export const Searchbar = ({value, onSubmit}) => {
    return (
        <header className={css.searchbar}>
            <form className={css.searchForm}>
                <button type="submit" className={css.button} onClick={onSubmit}>
                    <span className={css.buttonLabel}>Search</span>
                </button>

                <input
                    value={value}
                    className={css.input}
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
}