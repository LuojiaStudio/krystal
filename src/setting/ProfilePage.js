/**
 * Created by Jsceoz on 2017/2/23.
 */
import React from 'react';

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <main className="profile-page">
                <h2 className="main-page-headline">个人设置</h2>
                <form>
                    <div className="form-item">
                        <label htmlFor="">姓名：</label>
                        <span>王雷</span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">学号：</label>
                        <span>2014301500228</span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">所属部门：</label>
                        <span>武汉大学学生会新闻宣传部</span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">职务：</label>
                        <span>部委</span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">生日：</label>
                        <span><time dateTime="1996-11-16">1996-11-16</time></span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">院系：</label>
                        <span>计算机学院</span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">专业：</label>
                        <span>计算机科学与技术</span>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">Email：</label>
                        <input type="email" name="email"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">手机号码：</label>
                        <input type="tel" name="tel"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">微信：</label>
                        <input type="text" name="wechat"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">QQ：</label>
                        <input type="text" name="qq"/>
                    </div>
                    <div className="form-item">
                        <input type="submit" value="保存"/>
                    </div>
                </form>
            </main>
        )
    }
}