/**
 * Created by Jsceoz on 2017/2/10.
 */
import React from 'react';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="login-page">
                <header className="login-header">
                    <div className="login-header-logo">
                        武汉大学学生会系统协同办公平台
                    </div>
                    <div className="login-header-action-wrapper">
                        <a href="#">帮助</a>
                    </div>
                </header>
                <main className="login-content-container">
                    <div className="login-content">

                    </div>
                    <div className="login-card">
                        <div className="login-card-header">
                            <a href="">登录</a>
                            <a href="">新用户</a>
                        </div>
                        <input type="text" className="login-input" placeholder="支持学号/姓名/邮箱登录"/>
                        <input type="text" className="login-input" placeholder="办公系统密码"/>
                        <a href="#" className="login-btn">登录</a>
                        <div className="login-card-bottom-action">
                            <a href="#">忘记密码</a> | <a href="#">意见反馈</a>
                        </div>
                    </div>
                </main>
                <footer>
                    © 2017 武汉大学学生会
                </footer>
            </div>
        )
    }
}

export default LoginPage;