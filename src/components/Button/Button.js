import css from './Button.module.css'

// export const Button = ({ handleLoad }) => {
//     return (
//         <button className={css.button} type="submit" onClick={handleLoad}>Load More</button>
//     )
// }

import React from 'react';

export const Button = ({ onClick }) => (
  <button type="button" className={css.button} onClick={onClick}>
    Load more
  </button>
);

