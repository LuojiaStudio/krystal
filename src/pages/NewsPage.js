/**
 * Created by Jsceoz on 2017/2/11.
 */
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import CreateNewsPage from './NewsPanel';
import PendingNewsPage from './PendingNewsPage';
import PublishedNewsPage from './PublishedNewsPage';
import SubSideBar from '../components/SubSideBar';

class NewsPage extends React.Component {
    render() {
        return (
            <main className="news-page">
                <SubSideBar
                    headline="新闻管理"
                />
                <div className="page-content">
                    <Router history={hashHistory}>
                        <Route path="/news/published-news-page" component={PublishedNewsPage}/>
                        <Route path="/news/pending-news-page" component={PendingNewsPage}/>
                        <Route path="/news/create-news-page" component={CreateNewsPage}/>
                        <Route path="/news/edit-news/:id" component={CreateNewsPage}/>
                    </Router>
                </div>
            </main>
        )
    }
}

export default NewsPage;