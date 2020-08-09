import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Results from './components/Results/Results';
import Searches from './components/Searches/Searches';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    results: null
  }
  getSearch = (e) => {
    e.preventDefault();
    const search = e.target.elements.usersearch.value
    if (search) {
    axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`)
    .then((res) => {
      const results = res.data.hits[0].author;
      this.setState({ results });
      console.log(results);
    })
  } else return;
}
  render() {
    return (
      <div className="App">
        <Navbar getSearch={this.getSearch} />
        { this.state.results ? <p>Results: { this.state.results }</p> : <p>Please submit a search.</p> }
        <div className="container"></div>
        <div className='row'>
          <div className='col'> <Results /> </div>
          <div className='col'> <Searches /> </div>
        </div>
      </div>
    );
  }
};

export default App;
