import { Component } from "react";
import css from "./Searchbar.module.css"

// export class Searchbar extends Component() {
//     state = {
//         querry: ''
//     };

//     handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.querry);
//   };

//     render() {
//         return (
//         <header className={css.searchbar}>
//             <form className={css.searchForm} onSubmit={this.handleSubmit}>
//                 <button type="submit" className={css.button} >
//                     <span className={css.buttonLabel}>Search</span>
//                 </button>

//                 <input
//                     value={this.querry}
//                     className={css.input}
//                     type="text"
//                     autocomplete="off"
//                     autofocus
//                     placeholder="Search images and photos"
//                 />
//             </form>
//         </header>
//     )};
// }


export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.searchForm}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

