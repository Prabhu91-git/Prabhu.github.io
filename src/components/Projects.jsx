import { useState } from "react";
import "../styles/projects.css";
import ProjectModal from "./ProjectsModal.jsx";

const base = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Residential Walkthrough",
    image: "${base}images/projects/residential.jpg",
    tech: "Unreal Engine • SteamVR",
    description:
      "An interactive architectural walkthrough that enables users to explore residential spaces with realistic lighting, materials, and smooth navigation in a fully immersive VR environment.",

    confidential: false,

    type: "video",
    video: "${base}videos/Residential_VR_demo.webm",
  },

  {
    title: "Car Configurator",
    image: "${base}images/projects/car-configurator.jpg",
    tech: "Unreal Engine • Blueprint",
    description:
      "Developed a real-time vehicle configurator allowing users to customize colors, materials, and visual options while maintaining high rendering performance.",

    confidential: false,

    type: "gallery",

    images: [
      "${base}images/gallery/car1.png",
      "${base}images/gallery/car2.png",
      "${base}images/gallery/car3.png",
      "${base}images/gallery/car4.png",
    ],
  },

  {
    title: "Office Virtual Tour",
    image: "${base}images/projects/office-tour.JPG",
    tech: "Everpano • WebVR",
    description:
      "Created a browser-based 360° virtual office experience featuring hotspot navigation and interactive information points for remote client presentations.",

    confidential: false,

    type: "tour",

    // Replace this with your real 360 URL
    url: "${base}tours/UE4_Office_Interior_360/index.html",
  },

{
  title: "Industrial Training Simulator",
  image: "${base}images/projects/placeholder.png",
  tech: "Unity • OpenXR",

  confidential: true,

  overview:
    "This enterprise VR training solution was developed for oil plant operations, training users to follow the correct valve operation sequence to ensure safe oil transfer to storage tanks. Trainees use VR controllers to operate the control valves, while world-space UI provides step-by-step instructions and visual guidance. Incorrect valve sequencing can lead to operational issues. Due to a client Non-Disclosure Agreement (NDA), project media cannot be publicly shared.",

  responsibilities: [
    "VR Interaction System",
    "Equipment Simulation",
    "Interactive Training Workflow",
    "User Interface Development",
    "Performance Optimization",
  ],
},

{
  title: "Forklift Training Simulator",
  image: "${base}images/projects/placeholder.png",
  tech: "Unity • XR Interaction Toolkit",

  confidential: true,

  overview:
    "Developed a standalone VR forklift training simulator for enterprise warehouse operations, enabling trainees to practice safe forklift operation and identify workplace hazards in a realistic environment. Instructors have full control over the training experience to guide users through various operational scenarios. Due to a client Non-Disclosure Agreement (NDA), project media cannot be publicly shared.",

  responsibilities: [
    "Forklift Physics",
    "VR Interaction Mechanics",
    "Training Scenarios",
    "Safety Evaluation",
    "Performance Optimization",
  ],
},

  {
    title: "Sofa AR",
    image: "${base}images/projects/Sofa_ar.png",
    tech: "Unity • Vuforia",
    description:
      "Built a marker-based AR application that enables users to visualize furniture placement within real-world environments",

    confidential: false,
    
    type: "video",
    video: "${base}videos/SofaAR.webm",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects section">

      <div className="section-header">
        <span>MY WORK</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => {
              if (
                project.type === "video" ||
                project.type === "gallery" ||
                project.type === "tour" ||
                project.confidential
              ) {
                setSelectedProject(project);
              }
            }}
            style={{
              cursor:
                project.type === "video" ||
                project.type === "gallery" ||
                project.type === "tour"
                  ? "pointer"
                  : "default",
            }}
          >
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

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
}

export default Projects;