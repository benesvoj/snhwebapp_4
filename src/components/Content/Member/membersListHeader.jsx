import React from "react";


function MembersListHeader(){
        return (
            <div className="content-header">
                <h2 className="content-header-title">Přehled členů</h2>
                <button type="button" className="btn btn-primary btn-sm btn-content-header">Nový člen</button>
            </div>
        );
}

export default MembersListHeader;