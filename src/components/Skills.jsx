import "../styles/skills.css";

const skillCategories = [
  {
    title: "Game Engines",
    skills: ["Unity", "Unreal Engine"],
  },
  {
    title: "XR Technologies",
    skills: [
      "OpenXR",
      "XR Interaction Toolkit",
      "AR Foundation",
      "Meta XR All-in-One SDK",
      "Pico SDK",
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      "C#",
      "C",
      "C++",
      "JavaScript",
      "HTML",
    ],
  },
  {
    title: "Target Platforms",
    skills: [
      "Meta Quest",
      "SteamVR",
      "PICO",
      "HTC Vive",
      "Windows",
      "Android",
      "WebGL",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Visual Studio",
      "Visual Studio Code",
    ],
    },
    {
    title: "360° VR & Web Visualization",
    skills: [
      "Shapespark",
      "krpano",
      "Everpano",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section">

      <div className="section-header">
        <span>TECHNICAL SKILLS</span>
        <h2>Technologies & Tools</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span className="skill-chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;