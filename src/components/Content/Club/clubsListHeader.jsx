import React, { Component } from "react";


function ClubsListHeader(){
        return (
            <div className="content-header">
                <h2 className="content-header-title">Přehled oddílů</h2>
                <button type="button" className="btn btn-primary btn-sm btn-content-header">Nový oddíl</button>
            </div>
        );
}

export default ClubsListHeader;