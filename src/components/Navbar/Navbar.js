import React, {Component} from 'react';
import axios from 'axios';

export default class Navbar extends Component {
  state = {
    search: '',
  }
//Generates API search
  handleChange = event => {
    this.setState({ search: event.target.value });
  }
//Changes new search 
  handleSubmit = event => {
    event.preventDefault();

    const newSearch = {
      search: this.state.search
    };
//Call to API with User Input
    axios.get('https://hn.algolia.com/api/v1/search?query='+ newSearch.search )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Hacker News</a>
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search Articles" onChange={this.handleChange}></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}
}