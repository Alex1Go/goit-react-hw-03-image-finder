import css from './Loader.module.css'
// import LoaderSpinner from 'react-loader-spinner';

// export const Loader = () => (
//   <div >
//     <LoaderSpinner type="ThreeDots" color="#00BFFF" height={80} width={80} />
//   </div>
// );

import { TailSpin } from  'react-loader-spinner'

export const Loader = () => {
    return (
        <div className={css.loader}>
            <TailSpin
                type="TailSpin"
                height={80}
                width={80}
                color="#4fa94d"
                // ariaLabel={tail - spin - loading}
                radius={1}
                // wrapperStyle={{}}
                // wrapperClass=""
                // visible={true}
            />
        </div>
    );
}
