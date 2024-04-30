import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import {Provider} from 'react-redux';
import appStore from "./utils/appStore";

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
    <Provider store={appStore} >
    <UserContext.Provider value={{ loggedInUser: userName, setUserName  }}>
      <div className="app">
          <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider> 
  );
}

export default App;
