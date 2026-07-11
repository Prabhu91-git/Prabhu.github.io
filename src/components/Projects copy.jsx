import "../styles/projects.css";

const projects = [
  {
    title: "Residential Walkthrough",
    image: "/images/projects/residential.jpg",
    tech: "Unreal Engine • SteamVR",
    description:
      "An interactive architectural walkthrough that enables users to explore residential spaces with realistic lighting, materials, and smooth navigation in a fully immersive VR environment.",
    confidential: false,
  },

  {
    title: "Car Configurator",
    image: "/images/projects/car-configurator.jpg",
    tech: "Unity • C#",
    description:
      "Developed a real-time vehicle configurator allowing users to customize colors, materials, and visual options while maintaining high rendering performance.",
    confidential: false,
  },

  {
    title: "Office Virtual Tour",
    image: "/images/projects/office-tour.JPG",
    tech: "Everpano • WebVR",
    description:
      "Created a browser-based 360° virtual office experience featuring hotspot navigation and interactive information points for remote client presentations.",
    confidential: false,
  },

  {
    title: "Industrial Training Simulator",
    image: "/images/projects/placeholder.png",
    tech: "Unity • OpenXR",
    description:
      "Designed an enterprise VR training solution focused on equipment operation and workplace safety using immersive, scenario-based learning.",
    confidential: true,
  },

  {
    title: "Forklift Training Simulator",
    image: "/images/projects/placeholder.png",
    tech: "Unity • XR Interaction Toolkit",
    description:
      "Developed a standalone VR forklift simulator with realistic controls and training scenarios. Project visuals are unavailable due to client confidentiality.",
    confidential: true,
  },

  {
    title: "Sofa AR",
    image: "/images/projects/placeholder.png",
    tech: "Unity • Vuforia",
    description:
      "Built a marker-based AR application that enables users to visualize furniture placement within real-world environments before purchase.",
    confidential: false,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects section">

      <div className="section-header">
        <span>MY WORK</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p className="tech">{project.tech}</p>

              <p>{project.description}</p>

              {project.confidential && (
                <span className="nda">
                  🔒 Confidential Enterprise Project
                </span>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;