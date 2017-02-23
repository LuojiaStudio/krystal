/**
 * Created by Jsceoz on 2017/2/11.
 */
import React from 'react';

class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }

    handleLogout() {
        localStorage.clear();
        window.location = "#/login"
    }

    render() {
        return (
            <aside className="side-bar">
                <div className="side-logo-wrapper">
                    WHUSU OA
                </div>
                <nav>
                    <h4 className="side-subhead">工作</h4>
                    <a href="#/app" className="side-menu-item">
                        <i className="fa fa-cube"/>应用
                    </a>
                    <a href="#/" className="side-menu-item ban">
                        <i className="fa fa-calendar"/>日历（开发中）
                    </a>
                    <a href="#/" className="side-menu-item ban">
                        <i className="fa fa-comments"/>交流（开发中）
                    </a>
                    <a href="#/" className="side-menu-item ban">
                        <i className="fa fa-file"/>文件（开发中）
                    </a>
                    <a href="#/" className="side-menu-item ban">
                        <i className="fa fa-user"/>联系人（开发中）
                    </a>
                    <a href="#/" className="side-menu-item ban">
                        <i className="fa fa-sticky-note"/>备忘录（开发中）
                    </a>
                    <h4 className="side-subhead">设置</h4>
                    <a href="#/setting" className="side-menu-item">
                        <i className="fa fa-cog"/>个人设置
                    </a>
                    <a className="side-menu-item" onClick={this.handleLogout}>
                        <i className="fa fa-sign-out"/>退出登录
                    </a>
                </nav>
            </aside>
        )
    }
}

export default SideBar;