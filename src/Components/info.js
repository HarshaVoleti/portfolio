import React from "react";
import image from "../assets/Image.jpeg";
import "./InfoPart.css";

const InfoPart = () => {
  return (
    <div className="info-part">
      <div className="text">
        <p className="hello">Hello there!</p>
        <p className="name">I'm HARSHA VOLETI</p>
        <p className="des">Mobile Application Developer</p>
      </div>
      <div className="image">
        <img src={image} alt="Info" />
      </div>
    </div>
  );
};

export default InfoPart;
