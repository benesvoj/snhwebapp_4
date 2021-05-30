import React from "react";

import {Route, Switch} from "react-router-dom"

import Zone2cl from "./zone2cl"
import Zone1cl from "./zone1cl"

import ClubsOverview from "./Club/clubsOverview";
import MembersOverview from "./Member/membersOverview";
import LeaguesOverview from "./League/leaguesOverview"

function ContentBody() {
    return (
        <div className="content-container">
            <Switch>
                <Route path="/overview-teams"><ClubsOverview /></Route>
                <Route path="/overview-members"><MembersOverview /></Route>
                <Route path="/overview-leagues"><LeaguesOverview /></Route>
                <Route path="/">
                <Zone1cl />
                <div className="row align-items-md-stretch">
                    <Zone2cl />
                    <Zone2cl />
                </div>
                </Route>
            </Switch>
        </div>
    );
}

export default ContentBody;