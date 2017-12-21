import React, { Component } from 'react';
import gif from './img/giphy-charleston.gif';
import './App.css';
import Steps from './components/Steps';
import CreateStep from './components/CreateStep';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>Charleston steps</h1>
        </header>

        <h2>
          <span role="img" aria-label="Shoes">👞👞👞</span> Embark with us on a magical journey into charleston... <span role="img" aria-label="Shoes">👞👞👞</span>
        </h2>

        <p>
          <img src={gif} alt="loading..." />
        </p>

        <Steps />

        <CreateStep/>

      </div>
    );
  }
}

export default App;