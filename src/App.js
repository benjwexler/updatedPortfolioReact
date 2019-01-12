import React, { Component } from 'react';
import Homepage from './Homepage/Homepage.js';
import './Homepage/Homepage.css';
import './Homepage/HoverHomepage.css';
import './Homepage/MediaQueriesHomepage.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Homepage/>
      </div>
    );
  }
}

export default App;
