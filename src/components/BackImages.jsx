import React from "react";
import DayImg from "../images/bg-desktop-light.jpg"
import NightImg from "../images/bg-desktop-dark.jpg"
import TodoFunctions from "../TodoFunctions"
import { useContext } from "react";

function BackImages() {
    const { theme } = useContext(TodoFunctions);
  let background;

  theme === "day" ? (background = DayImg) : (background = NightImg);

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return <div className="hero-img" style={backgroundStyle}></div>;
}


export default BackImages