import React from "react";
import ClubsListHeader from "./clubsListHeader";
import ClubsListBody from "./clubsListBody";

function ClubsOverview(){
    return(
        <div>
            <ClubsListHeader />
            <ClubsListBody />
        </div>        
    );
}

export default ClubsOverview;