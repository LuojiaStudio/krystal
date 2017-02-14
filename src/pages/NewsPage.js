/**
 * Created by Jsceoz on 2017/2/11.
 */
import React from 'react';
import CreateNews from './CreateNewsPage';
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
                    <PublishedNewsPage/>
                </div>
            </main>
        )
    }
}

export default NewsPage;