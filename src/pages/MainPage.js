/**
 * Created by Jsceoz on 2017/2/11.
 */
import React from 'react';
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
                    <NewsPage/>
                </main>
            </div>
        )
    }
}

export default MainPage;