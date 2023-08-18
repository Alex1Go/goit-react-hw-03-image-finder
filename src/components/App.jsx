import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGalerry } from "./ImageGallery/ImageGallery"
import { Button } from "./Button/Button"

export class App extends Component() {
  state = {
    images: [],
    querry: '',
  }


  render() {
    return (
      <div>
        <Searchbar />
        <ImageGalerry />
        <Button/>
    </div>
  )};
};
