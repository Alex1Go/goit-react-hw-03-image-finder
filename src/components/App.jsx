import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGalerry } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"


export class App extends Component () {
  state = {
    images: [],
    querry: '',
    page: 1,
  }

  changeQuerry = newQuerry => {
    this.setState({
      querry: newQuerry,
      page: 1,
      images: [],
    });
  }
  
// async  componentDidUpdate(prevprops, prevState) {
//     if (prevState.querry !== this.state.querry || prevState.page !== this.state.page) {
    
//     }
//     fetchImages ()
// }
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.querry);
  }; 
  
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGalerry />
        <Button />
      </div>
    )
  };
};
