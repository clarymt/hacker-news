import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Results from './components/Results/Results';
import Searches from './components/Searches/Searches';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="container">
    <div className='row'>
      <div className='col'> <Results /> </div>
      <div className='col'> <Searches /> </div>
    </div>
    </div>
    </div>
  );
}

export default App;
