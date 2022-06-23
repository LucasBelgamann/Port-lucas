import React from "react";
import "./Certific.css";

class Certific extends React.Component {
  render() {
    return (
      <div className="certificados" id="certific">
        <div className="gambis"></div>
        <h1>Certificates</h1>
        <div className="o-pai">
        <div className="certificate">
          <a
            href="https://www.credential.net/a74ee6f1-a797-4fbf-8a5e-4f32b0ea2ed1"
            target="blank"
          >
            <img
              src="https://avatars.githubusercontent.com/u/51808343?s=280&v=4"
              alt="trybe"
            />
          </a>
          <h3>Fundaments</h3>
        </div>
        </div>
      </div>
    );
  }
}

export default Certific;
