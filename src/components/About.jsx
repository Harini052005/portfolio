import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaAward } from "react-icons/fa";

const educationList = [
  {
    degree: "Master of Computer Applications (MCA)",
    type: "Full-time",
    period: "Sep 2025 – May 2027",
    status: "Pursuing",
    institution: "PSNA College of Engineering and Technology, Dindigul",
    affiliation: "Affiliated to Anna University, Chennai",
    scoreType: "CGPA",
    score: "9.06",
  },
  {
    degree: "Bachelor of Computer Science (B.Sc CS)",
    type: "Full-time",
    period: "July 2022 – May 2025",
    status: "Completed",
    institution: "M. V. Muthiah Government Arts College for Women, Dindigul",
    affiliation: "Affiliated to Mother Teresa University, Kodaikanal",
    scoreType: "CGPA",
    score: "8.224",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    type: "Full-time",
    period: "2022",
    status: "Completed",
    institution: "Annamaliar Mills Girls’ Higher Secondary School, Dindigul",
    affiliation: "State Board of Tamil Nadu",
    scoreType: "Percentage",
    score: "82.84%",
  },
  {
    degree: "Secondary School Certificate (SSLC)",
    type: "Full-time",
    period: "2020",
    status: "Completed",
    institution: "Annamaliar Mills Girls’ Higher Secondary School, Dindigul",
    affiliation: "State Board of Tamil Nadu",
    scoreType: "Percentage",
    score: "80.6%",
  },
];

function About() {
  return (
    <section id="about" className="about">
      <h1>About Me</h1>

      <p className="aboutBio">
        Hello, I am Harini. I believe great software is built by understanding
        problems before writing code. As a Computer Science postgraduate, I enjoy
        building applications that are scalable, maintainable, and focused on creating
        meaningful user experiences.
        <br /><br />
        My learning journey revolves around software engineering principles,
        backend development, and modern web technologies. Every project I build is an
        opportunity to improve my problem-solving skills, system thinking, and code quality.
        Continuously sharpening engineering skills through real-world projects and algorithmic
        problem solving.
      </p>

      <div className="educationSection">
        <div className="educationHeader">
          <FaGraduationCap className="eduHeaderIcon" aria-hidden="true" />
          <h2>Education & Academic Milestones</h2>
        </div>

        <div className="timelineContainer">
          <div className="timelineTrack" aria-hidden="true" />

          {educationList.map((item, index) => (
            <div key={item.degree} className={`timelineItem ${index % 2 === 0 ? "timelineLeft" : "timelineRight"}`}>
              <div className="timelineNode" aria-hidden="true">
                <FaGraduationCap />
              </div>

              <div className="timelineCard">
                <div className="timelineCardHeader">
                  <span className="timelinePeriod">
                    <FaCalendarAlt aria-hidden="true" />
                    {item.period}
                  </span>
                  {item.status === "Pursuing" ? (
                    <span className="timelineBadge pursuingBadge">Pursuing</span>
                  ) : (
                    <span className="timelineBadge completedBadge">Full-time</span>
                  )}
                </div>

                <h3 className="timelineDegree">{item.degree}</h3>

                <div className="timelineInstitution">
                  <FaUniversity className="institutionIcon" aria-hidden="true" />
                  <div>
                    <strong>{item.institution}</strong>
                    <span className="affiliationText">{item.affiliation}</span>
                  </div>
                </div>

                <div className="timelineScore">
                  <FaAward className="scoreIcon" aria-hidden="true" />
                  <span>{item.scoreType}: <strong>{item.score}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;