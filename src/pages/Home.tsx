import { useState, useEffect } from "react";
import "../styles/home.css";
import Logo from "../components/Logo";
import Photo from "../assets/personalphoto.png";
import Icons from "../components/Icons";
import Projects from "../components/Projects";
import projectData from "../ProjectData.json";
import Contact from "../components/Contact";
import Button from "../components/Button";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [language, setLanguage] = useState<string | null>("TypeScript"); 

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);
  }, []);

  const handleLanguage = (choise: string) => {
    setLanguage(choise); 
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setShowMobile(true);
      } else {
        setShowMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="flex-row">
        <span className="logo">
          <Logo darkMode={darkMode}/>
        </span>
        <nav className="flex-row desktop-only">
          <ul className="flex-row">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">My Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      
      <section id="about" className={showMobile? "flex-column container" : "flex-row container"}>
        <div className="personal-photo">
          <img src={Photo} alt="Personal" />
        </div>
        <div className="text flex-column">
          <div className="titles">
            <h1>Luis Gustavo Grando Finger</h1>
            <h2>Web and desktop developer</h2>
          </div>
          <div className="languages flex-column">
            <h2>React</h2>
            <h2>TypeScript</h2>
            <h2>JAVA</h2>
            <h2>HTML</h2>
            <h2>CSS</h2>
          </div>
          <span className="icons">
            <Icons darkMode={darkMode}/>
          </span>
        </div>
      </section>
     
      <section id="myProjects" className="flex-column container">
        <div className="titles">
          <h1>My Projects</h1>
        </div>
        <div className="projectChoise flex-row">
          <Button text="TypeScript" onClick={handleLanguage} />
          <Button text="JAVA" onClick={handleLanguage} />
        </div>
        <div className={showMobile?"flex-column":"flex-row"}>
          {projectData
            .filter((project) => language === null || project.languages.includes(language))
            .map((project) => (
              <Projects
                key={project.id}
                id={project.id}
                image={darkMode?project.darkImage:project.image}
                title={project.title}
                subtitle={project.subtitle}
                languages={project.languages}
                acessUrl={project.acessUrl}
                gitUrl={project.gitUrl}
                darkMode={darkMode}
              />
            ))
          }
        </div>
        <section id="contact" className="flex-column">
          <h1>Contact Me</h1>
          <span className="contact-icons">
            <Contact darkMode={darkMode}/>
          </span>
        </section>
      </section>
    </>
  );
}
