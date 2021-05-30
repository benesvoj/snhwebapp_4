import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Navigation from './components/Navigation/navigation';
import Sidebar from './components/Sidebar/siderbar'
import Content from './components/Content/content';

export default function App() {
  return (
    <div className="app-container">
      <div className="page">
        <Navigation />
        <div className="main-container">
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  );
};
