import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext, {AuthContextProvider} from "./contexts/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const isUserLoggedIn = localStorage.getItem("isLoggedIn");
  //   if (isUserLoggedIn) {
  //     setIsLoggedIn(true);
  //   }
  // }, []); //call only once when this component render

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", true);
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // localStorage.removeItem("isLoggedIn");
  // };

  return (
    // <AuthContextProvider>
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login onLogin={ctx.onLogin} />}
        {ctx.isLoggedIn && <Home onLogout={ctx.onLogout} />}
      </main>
    </>
    // </AuthContextProvider>
  );
}

export default App;
