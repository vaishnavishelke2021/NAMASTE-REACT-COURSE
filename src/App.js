import React from 'react';
// import ReactDOM from 'react-dom/client';
import "./App.css";
// import Body from "./Components/Body";
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
