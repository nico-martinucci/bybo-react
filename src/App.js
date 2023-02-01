import './App.css';
import userContext from "./userContext";
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

/** Renders application */

function App() {
  const [user, setUser] = useState({
    data: null,
    isLoading: true
  });
  const [token, setToken] = useState(getTokenFromLocalStorage);

  /** Set token to local storage */

  function setTokenToLocalStorage(token) {
    localStorage.setItem("token", token);
  }

  /** Get token from local storage */

  function getTokenFromLocalStorage() {
    return localStorage.getItem("token");
  }

  /** Remove token from local storage */

  function removeTokenFromLocalStorage() {
    localStorage.removeItem("token");
  }

  /** Fetches user information */

  async function fetchUserDataFromAPI() {
    const payload = decode(token);
    const { username } = payload;

    JoblyApi.token = token;
    const currentUser = await JoblyApi.getCurrentUser(username);
    setUser({
      data: currentUser,
      isLoading: false
    });
  }

  // Every time the token changes trigger our use effect

  useEffect(function fetchAndSetUserInfo() {
    async function fetchUser() {

      if (token) {
        fetchUserDataFromAPI();
      } else {
        setUser({
          data: null,
          isLoading: false
        });
      }
    }
    fetchUser();
  }, [token]);





  return (



  );
}

export default App;
