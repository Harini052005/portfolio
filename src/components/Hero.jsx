import { Typewriter } from "react-simple-typewriter";
import resumePdf from "../assets/HARINI_RESUME.pdf";
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
          Passionate about creating beautiful and responsive web applications.
        </p>

        <div className="heroActions">
          <a
            className="resumeBtn"
            href={resumePdf}
            download="HARINI_RESUME.pdf"
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
