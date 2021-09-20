import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import PostDetail from "./components/PostDetail/PostDetail";
import { ThemeContext } from "./contexts/ThemeContext";
import "./App.css";

export default function App() {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={`App ${darkMode ? "bg-dark" : ""}`}>
      <NavBar />
      <div className='container'>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path='/posts/:postId' exact>
            <PostDetail />
          </Route>
        </Switch>
      </div>
    </div>
  );
}


