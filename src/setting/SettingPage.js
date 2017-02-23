/**
 * Created by Jsceoz on 2017/2/23.
 */
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import SubSideBar from '../components/SubSideBar';
import ProfilePage from './ProfilePage';
import ChangePassWordPage from './ChangePasswordPage';


class SettingPage extends React.Component {
    render() {
        return (
            <main className="page-wrapper">
                <SubSideBar
                    headline="个人设置"
                >
                    <a href="#/setting/profile" className="sub-side-bar-menu-item">
                        个人信息
                    </a>
                    <a href="#/setting/change-password" className="sub-side-bar-menu-item">
                        修改密码
                    </a>
                </SubSideBar>
                <div className="page-content">
                    <Router history={hashHistory}>
                        <Route path="/setting/profile" component={ProfilePage}/>
                        <Route path="/setting/change-password" component={ChangePassWordPage}/>
                    </Router>
                </div>
            </main>
        )
    }
}

export default SettingPage;