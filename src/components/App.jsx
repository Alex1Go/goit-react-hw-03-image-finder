import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGalerry } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"
import {fetchImages} from 'api'

export class App extends Component () {
  state = {
    images: [],
    querry: '',
    page: 1,
  }

  // changeQuerry = newQuerry => {
  //   this.setState({
  //     querry: newQuerry,
  //     page: 1,
  //     images: [],
  //   });
  // }
  
// async  componentDidUpdate(prevprops, prevState) {
//     if (prevState.querry !== this.state.querry || prevState.page !== this.state.page) {
    
//     }
//     fetchImages ()
// }

  render() {
    return (
      <div>
        <Searchbar onSubmit={ } />
        <ImageGalerry />
        <Button />
      </div>
    )
  };
};
