/**
 * Created by Jsceoz on 2017/2/11.
 */
import React from 'react';

class SideBar extends React.Component {
    render() {
        return (
            <div className="side-bar">
                <div className="side-logo-wrapper">
                    iWHUSU
                </div>
                <h4 className="side-subhead">工作</h4>
                <div className="side-menu-item">
                    <i className="fa fa-cube"></i>应用
                </div>
                <div className="side-menu-item">
                    <i className="fa fa-calendar" aria-hidden="true"></i>日历
                </div>
                <div className="side-menu-item">
                    <i className="fa fa-envelope"></i>邮件
                </div>
                <div className="side-menu-item">
                    <i className="fa fa-comments"></i>聊天
                </div>
                <div className="side-menu-item">
                    <i className="fa fa-file"></i>文件
                </div>
                <div className="side-menu-item">
                    <i className="fa fa-user"></i>联系人
                </div>
                <div className="side-menu-item">
                    <i className="fa fa-sticky-note"></i>备忘录
                </div>
                <h4 className="side-subhead">设置</h4>
                <div className="side-menu-item">
                    <i className="fa fa-cog"></i>个人设置
                </div>
                <div className="side-menu-item">
                    <i className="fa fa-sign-out"></i>退出登录
                </div>
            </div>
        )
    }
}

export default SideBar;