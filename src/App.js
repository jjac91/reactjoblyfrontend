import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";
import NavBar from "./NavBar";
import UserContext from "./CountContext";
import JoblyApi from "./api";
import useLocalStorage from "./hooks";
import jwt from "jsonwebtoken";

function App() {
  const [token, setToken] = useLocalStorage("token");
  const [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState([]);

  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getUser(username);
          setCurrentUser(currentUser);
          setApplicationIds([...currentUser.applications]);
        } catch (error) {
          console.error(error);
          setCurrentUser(null);
        }
      }
    }
    getCurrentUser();
  }, [token]);

  async function registerUser(user) {
    let token = await JoblyApi.registerUser(user);
    setToken(token);
    setCurrentUser({ username: user.username });
  }

  async function loginUser(loginInfo) {
    let token = await JoblyApi.loginUser(loginInfo);
    setToken(token);
    setCurrentUser({ username: loginInfo.username });
  }

  function logOutUser() {
    setToken(null);
    setCurrentUser(null);
  }

  function checkApplied(id) {
    return applicationIds.includes(id);
  }

  function applyToJob(id) {
    if (checkApplied(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds([...applicationIds, id]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{ currentUser, setCurrentUser, applyToJob, checkApplied }}
        >
          <NavBar logOutUser={logOutUser} />
          <Routes registerUser={registerUser} loginUser={loginUser} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
