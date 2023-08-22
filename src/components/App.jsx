import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import { Modal } from "./Modal/Modal"
// import { Loader } from "./Loader/Loader"

// import  {fetchImages}  from 'api'

// export class App extends Component () {
//   state = {
//     images: [],
//     query: '',
//     page: 1,
//   }

//   // changeQuerry = newQuerry => {
//   //   this.setState({
//   //     querry: newQuerry,
//   //     page: 1,
//   //     images: [],
//   //   });
//   // }
  
// // async  componentDidUpdate(prevprops, prevState) {
// //     if (prevState.querry !== this.state.querry || prevState.page !== this.state.page) {
    
// //     }
// //     fetchImages ()
// // }
// //  componentDidUpdate(prevProps, prevState){
// //   if(this.state.page !== prevState.page || this.state.query!== prevState.query ){
// //     this.fetchImages()
// //   }
// // } 

  
//   // render() {
//   //   return (
//   //     <div>
//   //       <Searchbar onSubmit={this.handleSubmit}/>
//   //       <ImageGalerry />
//   //       <Button />
//   //     </div>
//   //   )
//   // };
// };

import axios from 'axios';


const API_KEY = '38225262-d1745fccc0f8e035d7be8e954';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    showModal: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;

    if (query.trim() === '') {
      return;
    }

    this.setState({ loading: true });

    axios
      .get(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
      )
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => console.error('Error fetching images:', error))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleImageClick = modalImage => {
    this.setState({ showModal: true, modalImage });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, modalImage: '' });
  };

  render() {
    const { images, loading, showModal, modalImage } = this.state;

    return (
      <div >
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {loading  }
        {showModal && (
          <Modal largeImageURL={modalImage} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

