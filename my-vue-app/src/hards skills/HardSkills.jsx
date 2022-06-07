import React from "react";
import './HardSkills.css';
import octopusRtl from './octopusRtl.png';

class Hard extends React.Component {
  render() {
    return (
      <section>
        <div className="hards" id="hards-skills">
            <div className="espaco"></div>
          <div>
            <h1>Hard-Skills</h1>
          </div>
          <div className="hards-container">
            <div className="react">
              <i class="fa-brands fa-react"></i>
              <h4>React</h4>
            </div>
            <div className="js"> 
              <i class="fa-brands fa-js-square"></i>
              <h4>Java Script</h4>
            </div>
            <div className="html">
              <i class="fa-brands fa-html5"></i>
              <h4>HTML</h4>
            </div>
            <div className="css">
              <i class="fa-brands fa-css3-alt"></i>
              <h4>CSS</h4>
            </div>
            <div className="git-hub">
              <i class="fa-brands fa-github"></i>
              <h4>Git Hub</h4>
            </div>
            <div className="node">
            <i class="fa-brands fa-node"></i>
              <h4>Node</h4>
            </div>
            <div className="rtl">
                <img src={ octopusRtl } alt='RTL'></img>
                <h4>RTL</h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hard;
