import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        working: true
    };
  }
     handleClick = () => {
    this.setState({ working : !this.state.working })
     };

  render() {
    const className = this.state.working ? 'App-logo-spinning' : 'App-logo';
    return (
      <div className="App">
        <header className={className}>
          <img src={logo} className="App-logo" alt="logo" />
             <h1 className="App-title">Not Working</h1>
                  </header>
                  <button onClick={this.handleClick} >Click me</button>
        </div>  
    );
    }
}

export default App;
