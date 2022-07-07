// import React, { useState } from "react";
import "./Projects.css";

function Projetos() {
  // const [active, setActive] = useState("description");

  // const handleDesc = () => {
  //   active === "description"
  //     ? setActive("description description_active")
  //     : setActive("description");
  // };

  return (
    <section>
      <div className="projetos" id="meus-projetos">
        <div className="gambis"></div>
        <h1>Projects</h1>
        <div className="projetos-lista">
          <div className="projects">
            <a href="https://spoti-tunes.vercel.app/" target="blanck"><i class="fa-solid fa-folder-open"></i></a>
            <h3>SpotiTunes</h3>
          </div>
          <div className="projects">
            <a href="https://triunfo-three.vercel.app/" target="blanck"><i class="fa-solid fa-folder-open"></i></a>
            <h3>Card Triunfo</h3>
          </div>
          <div className="projects">
            <a href="https://project-trivia-three.vercel.app/feedback" target="blanck"><i class="fa-solid fa-folder-open"></i></a>
            <h3>Game Trivia</h3>
          </div>
          <div className="projects">
            <i class="fa-solid fa-folder-open"></i>
          </div>
          <div className="projects">
            <i class="fa-solid fa-folder-open"></i>
          </div>
          <div className="projects">
            <i class="fa-solid fa-folder-open"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
