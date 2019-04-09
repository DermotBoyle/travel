import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travels from './Travels.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
          </header>
          <Travels
          country="Country: USA!"
          destination="Destination: New York"
          distance= "Distance: 650km"
          image="https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <Travels
          country="Country: Brazil"
          destination="Destination: Rio de Janiero"
          distance= "Distance: 1200km"
          image="https://images.pexels.com/photos/1959068/pexels-photo-1959068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
    );
  }
}

export default App;
