/**
 * Created by Jsceoz on 2017/2/14.
 */
import React from 'react';

class SubSideBar extends React.Component {
    render() {
        return (
            <aside className="sub-side-bar">
                <h3 className="sub-side-headline">{this.props.headline}</h3>
                <nav>
                    {this.props.children}
                </nav>
            </aside>
        )
    }
}

export default SubSideBar;