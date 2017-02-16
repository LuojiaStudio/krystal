import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={hashHistory}>
          <Route path="/login" component={LoginPage}/>
          <Route path="/" component={MainPage}/>
        </Router>
      </div>
    );
  }
}

export default App;
