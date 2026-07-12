import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiMysql, SiNodedotjs, SiExpress } from "react-icons/si";

const skills = [
  { name: "Java", icon: FaJava },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "SQL", icon: SiMysql },
  { name: "MongoDB", icon: FaDatabase },
  { name: "Git", icon: FaGitAlt },
];

function Skills() {
  return (
    <section id="skills" className="skills">

      <h1>Skills</h1>

      <div className="grid">

        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div key={skill.name} className="card">
              <Icon className="skillIcon" aria-hidden="true" />
              <span>{skill.name}</span>
            </div>
          );
        })}


      </div>

    </section>
  );
}

export default Skills;
