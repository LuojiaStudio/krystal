import React, { Component } from 'react';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage/>
      </div>
    );
  }
}

export default App;
