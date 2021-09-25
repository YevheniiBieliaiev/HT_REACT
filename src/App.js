import React, { useState } from "react";
import "./css/App.scss";
import AppPublicNav from "./components/UI/app-nav/AppNav";
import AppRouter from "./components/AppRouter";
import { UserAuthContext } from "./components/context/UserAuthContext";
import { BrowserRouter } from "react-router-dom";


function App() {
  const [isUserLogin, setIsUserLogin] = useState(false);
console.log(isUserLogin)
  return (
    <UserAuthContext.Provider value={{ isUserLogin, setIsUserLogin }}>
      <BrowserRouter>
        <AppPublicNav />
        <AppRouter />
      </BrowserRouter>
    </UserAuthContext.Provider>
  );
}

export default App;
