import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCogs,
  faList,
  faUsers,
  faTrophy
} from "@fortawesome/free-solid-svg-icons";

import './App.css';
import Navigation from './components/Navigation/navigation'
// import Sidebar from './components/Sidebar/siderbar'
// import Content from './components/Content/content'


// library.add(fas)

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <div className="page">
        <Navigation />
        <div className="content">

        </div>

        <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
          <div className="trigger" onClick={handleTrigger}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>

          <div className="sidebar-position dropdown">
            <FontAwesomeIcon icon={faTrophy} />
            <span>Soutěže</span>
            <div className="dropdown-content">
              <span className="submenu-title">Soutěže</span>
              <a tabindex="-1" href="/">Celostatni souteze</a>
              <div className="dropdown-content-sub">
                <a href="/">1.liga muzi</a>
                <a href="/">1.liga zeny</a>
                <a href="/">2.liga muzi</a>
                <a href="/">MCR</a>
                <a href="/">PCR</a>
              </div>
              <a tabindex="-1" href="/">Oblasti</a>
              <div className="dropdown-content-sub">
                <a href="/">Jihomoravska</a>
                <a href="/">Moravskoslezska</a>
                <a href="/">Plzenska</a>
                <a href="/">Stredoceska</a>
                <a href="/">Severoceska</a>
                <a href="/">Vychodoceska</a>
              </div>
              <a href="/">Turnaje</a>
            </div>
          </div>
          <div className="sidebar-position dropdown">
            <FontAwesomeIcon icon={faList} />
            <span>Oddíly</span>
            <div className="dropdown-content">
              <span className="submenu-title">Oddíly</span>
              <a href="/teamslist">Prehled</a>
              <a href="/">Zalozit novy oddil</a>
              <a href="/">Oblasti</a>
            </div>
          </div>
          <div className="sidebar-position dropdown">
            <FontAwesomeIcon icon={faUsers} />
            <span>Členové</span>
            <div className="dropdown-content">
              <span className="submenu-title">Členové</span>
              <a href="/">Prehled</a>
              <a href="/">Zalozit noveho clena</a>
            </div>
          </div>

          <div className="sidebar-position dropdown">
            <FontAwesomeIcon icon={faCogs} />
            <span>Position 4</span>
          </div>
        </div>
      </div>
    </div>


    // <div className="app-container">
    //   <Navigation />
    //   <div className="main-container">
    //     <div className="siderbar-container">
    //     <Sidebar />
    //     </div>
    //     <div className="layout-content">
    //       <Content />
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
