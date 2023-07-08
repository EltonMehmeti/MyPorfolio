import "./about.css";
import Me from "../../img/me1.png";
import Me2 from "../../img/mePng.png";
import { SiHtml5 } from "react-icons/si";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me2} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          My name is Elton Mehmeti and I'm a web developer. I've been
          programming since I was 15 years old, and I enjoy using my skills to
          create different stuff. In my free time, I like developing projects,
          so I can test and improve my skills.
        </p>
        <p className="a-desc">
          These are the technologies I work with:
          <div class="about_skills">
            <ul>
              <li>{SiHtml5} HTML / CSS</li>
              <li> JavaScript</li>
              <li> JAVA / Spring Boot</li>
              <li>React Js</li>
              <li>Node Js</li>
              <li>Tailwind CSS</li>
              <li> PHP / MySQL</li>
              <li> WP Advanced</li>
            </ul>
          </div>
        </p>
      </div>
    </div>
  );
};

export default About;
