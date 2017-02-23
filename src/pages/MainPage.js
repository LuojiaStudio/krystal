/**
 * Created by Jsceoz on 2017/2/11.
 */
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import NewsPage from '../news/NewsPage';
import FeedPage from '../feed/FeedPage';
import AppPage from '../application/ApplicationPage';
import SettingPage from '../setting/SettingPage';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            avatar: ''
        }
    }

    componentWillMount() {
        this.checkToken();
        this.getUserProfile()
    }

    checkToken() {
        if (!(localStorage.token || window.location == "#/login" || window.location == "#/login/")) {
            window.location = "#/login"
        }
    }

    getUserProfile() {
        let self = this;
        fetch("http://127.0.0.1:8000/user/profile/", {
            method: 'GET',
            headers: {
                Authorization: 'Token ' + localStorage.token
            }
        }).then(function (response) {
            response.json().then(function (data) {
                self.setState({
                    username: data.username,
                    avatar: data.avatar
                })
            })
        })
    }

    render() {
        return (
            <div className="main-page">
                <SideBar/>
                <main className="main-wrapper">
                    <TopBar username={this.state.username} avatar={this.state.avatar}/>
                    <Router history={hashHistory}>
                        <Route path="/" component={FeedPage}/>
                        <Route path="/app" component={AppPage}/>
                        <Route path="/news" component={NewsPage}/>
                        <Route path="/setting" component={SettingPage}/>
                    </Router>
                </main>
            </div>
        )
    }
}

export default MainPage;