/**
 * Created by Jsceoz on 2017/2/26.
 */
import React from 'react';

export default class SnackBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open === true) {
            document.getElementById("snackbar").className = "snackbar-open";
            if (this.props.autoHiddenTime) {
                let self = this;
                setTimeout('document.getElementById("snackbar").className = "snackbar-close"', this.props.autoHiddenTime)
            }
        }
        if (nextProps.open === false && this.props.open === true) {
            document.getElementById("snackbar").className = "snackbar-close"
        }
    }

    render() {
        return (
            <aside className="snackbar" id="snackbar">
                <span className="snackbar-content">
                    {this.props.message}
                </span>
            </aside>
        )
    }
}