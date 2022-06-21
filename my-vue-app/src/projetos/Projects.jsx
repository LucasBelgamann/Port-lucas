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
          <div>
            <a href="https://spoti-tunes.vercel.app/" target="blanck"><i class="fa-solid fa-folder-open"></i></a>
            <h5>SpotiTunes</h5>
          </div>
          <div>
            <i class="fa-solid fa-folder-open"></i>
          </div>
          <div>
            <i class="fa-solid fa-folder-open"></i>
          </div>
          <div>
            <i class="fa-solid fa-folder-open"></i>
          </div>
          <div>
            <i class="fa-solid fa-folder-open"></i>
          </div>
          <div>
            <i class="fa-solid fa-folder-open"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
