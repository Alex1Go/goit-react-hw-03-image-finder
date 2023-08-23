import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import { fetchImages } from "api"

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page || this.state.query!== prevState.query ) {
      fetchImages();
    }
  }

  handleSearchSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  handleLoadMore = () => {
    fetchImages();
  };

  render() {
    const { images } = this.state;
    
    return (
      <div >
        <Searchbar onSubmit={this.handleSearchSubmit}/>
        <ImageGallery images={images}  />
        <Button onClick={this.handleLoadMore} />
      </div>
    );
  }
}

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

