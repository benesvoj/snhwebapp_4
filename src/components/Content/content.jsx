import React from 'react'

import ContentHeader from "./contentHeader"
import ContentBody from "./contentBody"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function Content() {
    return (
        <div className="layout-content">
            <div className="layout-wrapper">
            {/* <Router>
                <ContentHeader />
            </Router> */}
                <ContentBody />
            </div>
        </div>
    )
}

export default Content;