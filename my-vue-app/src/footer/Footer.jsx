import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <nav id="contact">
          <div className="insta">
            <a href="http://www.instagram.com/lucasbelgamann" target="black">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="linked">
            <a
              href="https://www.linkedin.com/in/lucas-gabriel-belgamann-2b0497174"
              target="black"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="github">
            <a href="https://github.com/LucasBelgamann" target="black">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Footer;
