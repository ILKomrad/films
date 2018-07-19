import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderContainer from './containers/HeaderContainer';
import FilmsContainer from './containers/FilmsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <HeaderContainer />
          <FilmsContainer />
        </div>
      </div>
    );
  }
}

export default App;
