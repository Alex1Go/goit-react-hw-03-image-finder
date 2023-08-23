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




//   // changeQuerry = newQuerry => {
//   //   this.setState({
//   //     querry: newQuerry,
//   //     page: 1,
//   //     images: [],
//   //   });
//   // }
  



