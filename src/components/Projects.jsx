import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Eatique - Restaurant Experience Platform",
    desc: "A responsive restaurant website featuring an elegant user interface, intuitive navigation, interactive menus, and a modern dining experience optimized for all devices.",
    githubUrl: "https://github.com/Harini052005/Cognifyz_Technologies_Intern/tree/main/Task7",
    liveDemoUrl: "https://eatique-frontend-webpage-60039823984.development.catalystserverless.in/app/index.html",
  },
  {
    title: "Smart Hostel Management System",
    desc: "A full-stack Smart Hostel Management System built using MERN Stack to streamline hostel operations such as issue reporting, announcements, lost & found tracking, and role-based access for students, wardens, and admins.",
    githubUrl: "https://github.com/Harini052005/Smart-Hostel-Management-System",
  },
  {
    title: "TransitOps - Smart Transport Mangement System",
    desc: "A full-stack transport operations system for managing vehicles, drivers, trips, maintenance, expenses, and role-based analytics in one secure dashboard.",
    githubUrl: "https://github.com/Ranjitha04-S/TransitOps",
  },
  {
    title: "PhonePe Backend Clone",
    desc: "A backend-driven digital payments platform that simulates core fintech workflows, emphasizing scalable architecture, secure transaction processing, and efficient API design.",
    githubUrl: "https://github.com/Harini052005/PhonePe-Backend-Clone",
  },
  {
    title: "QR Code Generator",
    desc: "A lightweight web application that instantly generates customizable QR codes from user input with a clean, responsive, and user-friendly interface.",
    githubUrl: "https://github.com/Harini052005/QR-Code-Generator",
  },
  {
    title: "NewsHub",
    desc: "A dynamic news platform that delivers real-time headlines across multiple categories by integrating external news services into a responsive user experience.",
    githubUrl: "https://github.com/Harini052005/NewsHub",
  },
  {
    title: "Globe Trotter - Travel Booking Platform",
    desc: "A travel booking application designed to simplify trip planning through destination discovery, booking workflows, and an intuitive user experience.",
    githubUrl: "https://github.com/Harini052005/Globe-Trotter",
  },
  {
    title: "Dice Duel",
    desc: "An interactive browser-based game featuring dynamic gameplay, randomized outcomes, and responsive user interactions built with modern web technologies.",
    githubUrl: "https://github.com/Harini052005/Dice-Duel",
  },
  {
    title: "NutriMind - Health & Nutrition Platform",
    desc: "A wellness-focused web application that promotes healthier lifestyle choices through an intuitive interface for nutrition awareness and health tracking.",
    githubUrl: "https://github.com/Harini052005/NutriMind",
  },
  {
    title: "FinTech Analytics Dashboard",
    desc: "A modern financial dashboard featuring interactive data visualization, responsive layouts, and a professional user interface designed for monitoring business insights.",
    githubUrl: "https://github.com/Harini052005/FinTech-Analytics-Dashboard",
    liveDemoUrl: "https://fintech-dashboard-111.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>

      <div className="projectGrid">
        {projects.map((project) => (
          <div key={project.title} className="projectCard">
            <h2>{project.title}</h2>
            <p>{project.desc}</p>

            <div className="projectActions">
              <a
                className="projectLink"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </a>

              {project.liveDemoUrl && (
                <a
                  className="projectLink secondaryProjectLink"
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt aria-hidden="true" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
