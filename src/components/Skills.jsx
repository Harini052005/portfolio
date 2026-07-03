import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Java", icon: FaJava },
  { name: "Python", icon: FaPython },
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
