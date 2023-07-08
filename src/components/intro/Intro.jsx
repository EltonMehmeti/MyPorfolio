import React from "react";
import "./intro.css";
import Background from "../../img/bg.jpg";
import Cv from "../../img/Resume-EltonMehmeti-TIPP.pdf";

const Intro = () => {
  return (
    <div className="i" id="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Elton Mehmeti </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
            </div>
          </div>

          <div className="i-desc">
            A creative thinker, adepted in web development and working with
            various data structures.
          </div>
          <div id="hero_btn_container">
            <a href={Cv} class="hero_btn">
              Resume
            </a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
          <img src={Background} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
