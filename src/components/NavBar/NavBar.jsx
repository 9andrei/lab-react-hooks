import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function NavBar() {
  const { toggleTheme, darkMode } = useContext(ThemeContext)

  return (
    <div>
      <nav className={`navbar ${darkMode ? "navbar-secodnary bg-secondary bg-gradient" : "navbar-light bg-light"}`}>
        <div className="container">
          <span className="navbar-brand mb-0 h1">React-Hooks</span>
          <button className='btn btn-dark' onClick={toggleTheme}>Dark Mode: {darkMode ? "On" : "Off"}</button>
        </div>
      </nav>
    </div>
  );
}
