/**
 * Created by Jsceoz on 2017/2/23.
 */
import React from 'react';

export default class ChangePasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_notice: false,
            is_checked: false,
            new_pwd:''
        };
        this.checkIsEqual = this.checkIsEqual.bind(this);
        this.changePassword = this.changePassword.bind(this)
    }

    checkIsEqual() {
        let pwd_1 = document.getElementById("new_pwd").value;
        let pwd_2 = document.getElementById("new_pwd_repeat").value;
        this.setState({
            show_notice: true,
            is_checked: pwd_1 === pwd_2,
            new_pwd: pwd_1
        })
    }

    changePassword() {
        let self = this;
        fetch(window.api_url + "user/change_pwd/", {
            method: "POST",
            headers: {
                'Authorization': 'Token ' + localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({new_pwd: self.state.new_pwd})
        }).then(function (response) {
            console.log(response)
        })
    }

    render() {
        return (
            <main className="change-password-page">
                <h2 className="main-page-headline">修改密码</h2>
                <form name="change_pwd">
                    <div className="form-item">
                        <label htmlFor="">新密码</label>
                        <input id="new_pwd" type="password" name="new_password"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">确认新密码</label>
                        <input id="new_pwd_repeat" type="password" name="check_new_password" onChange={this.checkIsEqual}/>
                    </div>
                    {this.state.show_notice && !this.state.is_checked ? <span>不相等</span> : ''}
                </form>
                <div className="form-item">
                    <button onClick={this.changePassword}>保存</button>
                </div>
            </main>
        )
    }
}
