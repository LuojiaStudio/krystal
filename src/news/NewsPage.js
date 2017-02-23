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
            <main className="page-wrapper">
                <SubSideBar
                    headline="新闻管理"
                >
                    <a href="#/news/published-news" className="sub-side-bar-menu-item">
                        已发表文章
                    </a>
                    <a href="#/news/pending-news" className="sub-side-bar-menu-item">
                        待审核文章
                    </a>
                    <a href="#/news/create-news" className="sub-side-bar-menu-item">
                        新建文章
                    </a>
                </SubSideBar>
                <div className="page-content">
                    <Router history={hashHistory}>
                        <Route path="/news/published-news" component={PublishedNewsPage}/>
                        <Route path="/news/pending-news" component={PendingNewsPage}/>
                        <Route path="/news/create-news" component={CreateNewsPage}/>
                        <Route path="/news/edit-news/:id" component={CreateNewsPage}/>
                    </Router>
                </div>
            </main>
        )
    }
}

export default NewsPage;