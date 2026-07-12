import { FaLaptopCode, FaLightbulb, FaChartLine } from "react-icons/fa";

const items = [
  {
    title: "Building Digital Experiences",
    description:
      "I create responsive, user-focused web applications with clean code, intuitive interfaces, and scalable solutions. From designing modern frontends to developing reliable backend systems, I enjoy transforming ideas into impactful digital products.",
    icon: FaLaptopCode,
  },
  {
    title: "What I Bring to the Table",
    description:
      "I combine problem-solving, modern web technologies, and attention to detail to build fast, responsive, and maintainable applications that deliver a seamless user experience.",
    icon: FaLightbulb,
  },
  {
    title: "Turning Ideas into Reality",
    description:
      "As a passionate software developer, I enjoy transforming ideas into real-world web applications through clean code, thoughtful design, and continuous learning. Every project helps me grow as a developer and create better user experiences.",
    icon: FaChartLine,
  },
];

function WhatIDo() {
  return (
    <section id="whatido" className="whatIDo">
      <h1>What I Do</h1>

      <div className="whatGrid">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="whatCard">
              <Icon className="whatIcon" aria-hidden="true" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhatIDo;
