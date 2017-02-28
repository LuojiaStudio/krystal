/**
 * Created by Jsceoz on 2017/2/10.
 */
import React from 'react';
import SnackBar from '../components/SnackBar';
import { Layout, Form, Icon, Input, Button, Checkbox } from 'antd';
const { Header, Footer, Content } = Layout;
const FormItem = Form.Item;

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login_token: '',
            password: '',
            open: false,
            message: '',
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
            open: true,
            message: "登录中"
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
                self.setState({
                    message: "用户名或密码错误"
                });
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
                    <span className="login-header-logo">
                        武汉大学学生会办公自动化系统
                    </span>
                    <span className="login-header-action-wrapper">
                        <a href="#">帮助</a>
                    </span>
                </header>
                <main className="login-content-container">
                    <Form className="login-form">
                        <FormItem>
                            <Input addonBefore={<Icon type="user" />} placeholder="学号/用户名/邮箱" />
                        </FormItem>
                        <FormItem>
                            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="办公系统密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </main>
                <footer className="login-footer">
                    © 2017 武汉大学学生会
                </footer>
                <SnackBar
                    open={this.state.open}
                    message={this.state.message}
                />

            </div>
        )
    }
}

export default LoginPage;