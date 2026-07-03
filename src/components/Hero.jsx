import { Typewriter } from "react-simple-typewriter";
// @ts-ignore
import resumePdf from "../assets/Harini-Resume.pdf";
// @ts-ignore
import profileImage from "../assets/profile.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="left">
        <h3>Hello, welcome to my portfolio</h3>

        <h1>
          I'm <span>Harini</span>
        </h1>

        <h2>
          <Typewriter
            words={[
              "Junior Software Engineer",
              "FullStack Developer",
              "Frontend Developer",
              "React Developer",
              "Java Programmer",
              "Problem Solver",
            ]}
            loop={0}
            cursor
          />
        </h2>

        <p>
        Turning ideas into reliable software through thoughtful design, clean code, and continuous learning.
        </p>

        <div className="heroActions">
          <a
            className="resumeBtn"
            href={resumePdf}
            download="Harini-Resume.pdf"
          >
            Download Resume
          </a>

          <a className="secondaryBtn" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className="right">
        <img className="profileImage" src={profileImage} alt="Harini profile" />
      </div>
    </section>
  );
}

export default Hero;
