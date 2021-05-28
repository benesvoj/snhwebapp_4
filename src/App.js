import React from "react"

import './App.css';
import Navigation from './components/Navigation/navigation'
import Sidebar from './components/Sidebar/siderbar'
import Content from './components/Content/content'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fas)

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <div className="main-container">
        <div className="siderbar-container">
        <Sidebar />
        </div>
        <div className="layout-content">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
