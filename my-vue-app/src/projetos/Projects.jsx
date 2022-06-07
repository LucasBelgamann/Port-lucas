import React from "react";
import './Projects.css';

class Projetos extends React.Component {
  render() {
    return (
      <section>
        <div className="projetos" id="meus-projetos">
          <div className="gambis"></div>
          <h1>Projetos</h1>
          <div className="projetos-lista">
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
            <div>
              <i class="fa-solid fa-folder-open"></i>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projetos;
