import React from "react";
import "./TechStacks.css";
import flutter from "../assets/flutter.png";
import dart from "../assets/Dart.png";
import firebase from "../assets/firebase.png";
import html from "../assets/html.png";
import css from "../assets/CSS.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import bootstrap from "../assets/bootstrap.png";
import git from "../assets/git.png";
import githublight from "../assets/githublight.png";
import githubdark from "../assets/githubdark.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import vscode from "../assets/vscode.png";
import node from "../assets/node.png";
import mysql from "../assets/mysql.png";
import swift from "../assets/swift.png"
import xcode from "../assets/xcode.png";
import as from "../assets/as.png";
import figma from "../assets/figma.png";
import xd from "../assets/xd.png";

const skillsData = [
  { title: "Flutter", logoUrl: flutter },
  { title: "Dart", logoUrl: dart },
  { title: "Firebase", logoUrl: firebase },
  { title: "HTML", logoUrl: html },
  { title: "CSS", logoUrl: css },
  { title: "Python", logoUrl: python },
  { title: "Bootstrap", logoUrl: bootstrap },
  { title: "git", logoUrl: git },
  { title: "NodeJS", logoUrl: node },
  { title: "JavaScript", logoUrl: js },
  { title: "React", logoUrl: react },
  { title: "Swift UI", logoUrl: swift },
  { title: "Github", logoUrl: githublight },
  { title: "VS Code", logoUrl: vscode },
  { title: "Xcode", logoUrl: xcode },
  { title: "Android Studio", logoUrl: as },
  { title: "Figma", logoUrl: figma },
 
  { title: "Adobe XD", logoUrl: xd },

  // Add more skills
];

const TechStacks = () => {
  return (
    <div className="skills">
      <p className="title">My Tech Stack</p>
      <ul className="skill-list">
        {skillsData.map((skill, index) => (
          <li key={index} className="skill-item">
            <img src={skill.logoUrl} alt={skill.title} className="skill-logo" />
            <p className="skill-title">{skill.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStacks;
