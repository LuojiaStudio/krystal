/**
 * Created by Jsceoz on 2017/2/14.
 */
import React from 'react';

class SubSideBar extends React.Component {
    render() {
        return (
            <div className="sub-side-bar">
                <h3 className="sub-side-headline">{this.props.headline}</h3>
                <a href="#" className="sub-side-bar-menu-item">
                    已发表文章
                </a>
                <a href="#" className="sub-side-bar-menu-item">
                    待审核文章
                </a>
                <a href="#" className="sub-side-bar-menu-item">
                    新建文章
                </a>
            </div>
        )
    }
}

export default SubSideBar;