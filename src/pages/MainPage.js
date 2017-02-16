/**
 * Created by Jsceoz on 2017/2/11.
 */
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import NewsPage from './NewsPage';

class MainPage extends React.Component {
    render() {
        return (
            <div className="main-page">
                <SideBar/>
                <main className="main-wrapper">
                    <TopBar/>
                    <Router history={hashHistory}>
                        <Route path="/news" component={NewsPage}/>
                    </Router>
                </main>
            </div>
        )
    }
}

export default MainPage;