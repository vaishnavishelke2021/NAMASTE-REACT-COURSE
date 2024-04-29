import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom/client';
import "./App.css";
// import Body from "./Components/Body";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

function App() {
  const [userName, setUserName] = useState(null);

  // authentication
  useEffect(() => {
    const data = {
      name: "Vaishnavi",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: "User" }}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: userName }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
