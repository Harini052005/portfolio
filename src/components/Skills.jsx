

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Java",
  "Python",
  "MongoDB",
  "Git"
];

function Skills() {
  return (
    <section id="skills" className="skills">

      <h1>Skills</h1>

      <div className="grid">

        {skills.map((skill,index)=>(
          <div key={index} className="card">

            {skill}

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;