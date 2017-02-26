/**
 * Created by Jsceoz on 2017/2/10.
 */
import React from 'react';
import SnackBar from '../components/SnackBar';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login_token: '',
            password: '',
            open: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.login = this.login.bind(this)
    }

    login() {
        let payload = {
            login_token: this.state.login_token,
            password: this.state.password
        };
        let self = this;
        self.setState({
            open: true
        });
        fetch(window.api_url + "user/login/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(function (response) {
            console.log(response);
            if (response.status != 202) {
                return
            }
            else {
                response.json().then(function (data) {
                    console.log(data);
                    localStorage.token = data.token;
                    window.location = "#/"
                })
            }
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="login-page">
                <header className="login-header">
                    <div className="login-header-logo">
                        武汉大学学生会办公自动化系统
                    </div>
                    <div className="login-header-action-wrapper">
                        <a href="#">帮助</a>
                    </div>
                </header>
                <main className="login-content-container">
                    <div className="login-content">

                    </div>
                    <div className="login-card">
                        <input
                            name="login_token"
                            type="text"
                            className="login-input"
                            placeholder="支持学号/姓名/邮箱登录"
                            onChange={this.handleInputChange}
                        />
                        <input
                            name="password"
                            type="password"
                            className="login-input"
                            placeholder="办公系统密码"
                            onChange={this.handleInputChange}
                        />
                        <a
                            className="login-btn"
                            onClick={this.login}
                        >登录</a>
                    </div>
                </main>
                <footer>
                    © 2017 武汉大学学生会
                </footer>
                <button onClick={() => this.setState({open: !this.state.open})}>开</button>
                <SnackBar
                    open={this.state.open}
                    autoHiddenTime={1000}
                    message={"登录中"}
                />

            </div>
        )
    }
}

export default LoginPage;