import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import LoginPage from './login/LoginPage';
import MainPage from './pages/MainPage';
import './App.css';

window.the_url = 'http://127.0.0.1:8000/';

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
