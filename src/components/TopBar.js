/**
 * Created by Jsceoz on 2017/2/11.
 */
import React from 'react';

class TopBar extends React.Component {
    render() {
        return (
            <header className="top-bar">
                <a href="#" className="top-bar-btn">
                    帮助
                </a>
                <div className="top-bar-user-info">
                    <div className="user-logo">
                        <img src={this.props.avatar} alt={this.props.username}/>
                    </div>
                    <h4 className="top-bar-user-name">{this.props.username}</h4>
                </div>
            </header>
        )
    }
}

export default TopBar;