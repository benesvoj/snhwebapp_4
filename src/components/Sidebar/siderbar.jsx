import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCogs,
    faList,
    faUsers,
    faTrophy
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { propTypes } from 'react-bootstrap/esm/Image';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-position dropdown">
                <FontAwesomeIcon icon={faTrophy} />
                <span>Soutěže</span>
                <div className="dropdown-content">
                    <span className="submenu-title">Soutěže</span>
                    <Link to="/overview-leagues">Přehled</Link>
                    <a href="/">Celostatni souteze</a>
                    <div className="dropdown-content-sub">
                        <a href="/">1.liga muzi</a>
                        <a href="/">1.liga zeny</a>
                        <a href="/">2.liga muzi</a>
                        <a href="/">MCR</a>
                        <a href="/">PCR</a>
                    </div>
                    <a href="/">Oblasti</a>
                    <div className="dropdown-content-sub">
                        <a href="/">Jihomoravská</a>
                        <a href="/">Severomoravská</a>
                        <a href="/">Středočeská</a>
                        <a href="/">Severočeská</a>
                        <a href="/">Východočeská</a>
                        <a href="/">Západočeská</a>
                    </div>
                    <a href="/">Turnaje</a>
                </div>
            </div>
            <div className="sidebar-position dropdown">
                <FontAwesomeIcon icon={faList} />
                <span>Oddíly</span>
                <div className="dropdown-content">
                    <span className="submenu-title">Oddíly</span>
                    <Link to="/clubs">Přehled</Link>
                    {/* <a href="/overview-teams">Přehled</a> */}
                    <a href="/">Zalozit novy oddil</a>
                    <a href="/">Oblasti</a>
                </div>
            </div>
            <div className="sidebar-position dropdown">
                <FontAwesomeIcon icon={faUsers} />
                <span>Členové</span>
                <div className="dropdown-content">
                    <span className="submenu-title">Členové</span>
                    <Link to="/overview-members">Přehled</Link>
                    <a href="/">Zalozit noveho clena</a>
                </div>
            </div>

            <div className="sidebar-position dropdown">
                <FontAwesomeIcon icon={faCogs} />
                <span>Position 4</span>
            </div>

        </div>
    )

}

export default Sidebar;