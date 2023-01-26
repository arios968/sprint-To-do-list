import React from "react";
import SunIcon from "../images/icon-sun.svg"
import MoonIcon from "../images/icon-moon.svg"
import TodoFunctions from "../TodoFunctions"
import { useContext } from "react";

function Header() {
  const { theme, changeTheme } = useContext(TodoFunctions);
  let src;

  theme === "day" ? (src = MoonIcon) : (src = SunIcon);

  return (
    <div className="header-area">
      <h1>TODO</h1>
      <button onClick={changeTheme}>
        <img src={src} alt="theme-icon" />
      </button>
    </div>
  );
}

export default Header;