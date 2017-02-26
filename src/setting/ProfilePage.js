/**
 * Created by Jsceoz on 2017/2/23.
 */
import React from 'react';

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            name: '',
            student_number: '',
            email: '',
            tel: '',
            avatar: '',
            birthday: '',
            qq: '',
            wechat: '',
            job_title: '',
            school: ''
        };

        this.getUserProfile = this.getUserProfile.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.PutUserProfile = this.PutUserProfile.bind(this)
    }

    componentDidMount() {
        this.getUserProfile();
    }

    getUserProfile() {
        let self = this;
        fetch(window.api_url + "user/profile/", {
            method: 'GET',
            headers: {
                Authorization: 'Token ' + localStorage.token
            }
        }).then(function (response) {
            response.json().then(function (data) {
                self.setState({
                    username: data.username,
                    name: data.name,
                    student_number: data.student_number,
                    email: data.email,
                    tel: data.tel,
                    avatar: data.avatar,
                    wechat: data.wechat,
                    qq: data.qq,
                    birthday: data.birthday,
                    job_title: data.job_title,
                    school: data.school
                })
            })
        })
    }
    
    PutUserProfile() {
        let self = this;

        fetch(window.api_url + "user/profile/", {
            method: 'PUT',
            headers: {
                'Authorization': 'Token ' + localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(self.state)
        }).then(function (response) {
            if (response.status === 202) {
                alert('保存成功')
            }
        })
    }

    handleInputChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <main className="profile-page">
                <h2 className="main-page-headline">个人信息</h2>
                <form>
                    <div className="form-item">
                        <label htmlFor="">姓名：</label>
                        <span>{this.state.name}</span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">学号：</label>
                        <span>{this.state.student_number}</span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">职务：</label>
                        <span>{this.state.job_title}</span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">生日：</label>
                        <span><time dateTime={this.state.birthday}>{this.state.birthday}</time></span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">院系：</label>
                        <span>{this.state.school}</span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">Email：</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">手机号码：</label>
                        <input type="tel" name="tel" value={this.state.tel} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">微信：</label>
                        <input type="text" name="wechat" value={this.state.wechat} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">QQ：</label>
                        <input type="text" name="qq" value={this.state.qq} onChange={this.handleInputChange}/>
                    </div>
                </form>
                <button onClick={this.PutUserProfile}>保存</button>
            </main>
        )
    }
}