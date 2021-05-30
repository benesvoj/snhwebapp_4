import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ContentHeader extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const path = this.props.location.pathname.slice(1);
        return (
            <div className="content-header">
                <h2 className="content-header-title">{path}</h2>
                <button type="button" className="btn btn-primary btn-sm btn-content-header">Vytvor neco</button>
            </div>
        );
    }
}

export default withRouter(ContentHeader);