import React from "react";
import "./Projects.css";
import image from "../assets/Image.jpeg";
import mob from "../assets/mobimg.png";
import ohbooks from "../assets/webimages/Oh-Books.png"
import portfolio from "../assets/webimages/portfolio.png"
// Sample data for web and mobile apps (replace with your actual data)
const webAppsData = [
  
  {
    title: "Azure Auth Component",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "web-app-1.jpg",
    link: "https://example.com/web-app-1",
  },
  {
    title: "Oh Books",
    description:"Oh Books is a web application to search for any book details based on genre and with multiple authentication methods, it is built using ReactJS, Firebase and Google Books API.",
    image: ohbooks,
    link: "https://github.com/HarshaVoleti/ohbooks",
  },
  {
    title: "My Portfolio",
    description: "Description of Web App 1",
    image: portfolio,
    link: portfolio,
  },
  {
    title: "Web App 1",
    description: "Description of Web App 1",
    image: "web-app-1.jpg",
    link: "https://example.com/web-app-1",
  },
  {
    title: "Web App 1",
    description: "Description of Web App 1",
    image: "web-app-1.jpg",
    link: "https://example.com/web-app-1",
  },
  {
    title: "Web App 1",
    description: "Description of Web App 1",
    image: "web-app-1.jpg",
    link: "https://example.com/web-app-1",
  },
  {
    title: "Web App 1",
    description: "Description of Web App 1",
    image: "web-app-1.jpg",
    link: "https://example.com/web-app-1",
  },

  // Add more web apps
];

const mobileAppsData = [
  {
    title: "Mobile App 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "mobile-app-1.jpg",
    link: "https://example.com/mobile-app-1",
  },
  //
  {
    title: "Mobile App 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "mobile-app-1.jpg",
    link: "https://example.com/mobile-app-1",
  },
  {
    title: "Mobile App 1",
    description: "Description of Mobile App 1",
    image: "mobile-app-1.jpg",
    link: "https://example.com/mobile-app-1",
  },
  //
  {
    title: "Mobile App 1",
    description: "Description of Mobile App 1",
    image: "mobile-app-1.jpg",
    link: "https://example.com/mobile-app-1",
  },
  //
  {
    title: "Mobile App 1",
    description: "Description of Mobile App 1",
    image: "mobile-app-1.jpg",
    link: "https://example.com/mobile-app-1",
  },
  //
  {
    title: "Mobile App 1",
    description: "Description of Mobile App 1",
    image: "mobile-app-1.jpg",
    link: "https://example.com/mobile-app-1",
  },
  //
  // Add more mobile apps
];

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="title">My Projects</h2>
      <div className="web">
        <h3 className="subtitle">Web Apps</h3>
        <div className="scrollable-list">
          {webAppsData.map((app, index) => (
            <div key={index} className="web-card">
              <img src={app.image} alt={app.title} className="web-img" />
              <div className="webdata">
                <h4 className="ptitle">{app.title + index}</h4>
                <p className="wdesc">{app.description}</p>
                <a href={app.link} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mobile">
        <h3>Mobile Apps</h3>
        <div className="scrollable-list">
          {mobileAppsData.map((app, index) => (
            <div key={index} className="mob-card">
              <div className="mobdata">
                <h4 className="ptitle">{app.title + index}</h4>
                <p className="mdesc">{app.description}</p>
                <p className="mtech">Tech Stacks : flutter , dart, Firebase</p>
                <a href={app.link} target="_blank" rel="noopener noreferrer">
                  View on Mobile
                </a>
              </div>
              <img src={mob} alt={app.title} className="mobimg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
