import "../styles/experience.css";


const experience = [
  {
    role: "Senior VR/XR Developer",
    company: "Quanta Designs India Pvt. Ltd.",
    period: "Jan 2022 - Present",
    description:
      "Leading the development of VR, AR, and XR applications using Unity and Unreal Engine. Working closely with Japanese clients, designers, QA teams to deliver high-quality immersive experiences across multiple platforms.",
  },
  {
    role: "VR/AR Developer",
    company: "Quanta Designs India Pvt. Ltd.",
    period: "Jun 2018 - Dec 2021",
    description:
      "Developed architectural visualization, product configurators, industrial training simulators, and WebVR experiences while improving application performance and user experience for standalone and desktop VR devices.",
  },
  {
    role: "Unity Developer",
    company: "Quanta Designs India Pvt. Ltd.",
    period: "Jun 2015 - May 2018",
    description:
      "Built interactive 3D, VR, and AR applications using Unity and C#. Implemented new features, resolved production issues, and supported projects from development through deployment.",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience section">

      <div className="section-header">
        <span>MY JOURNEY</span>
        <h2>Experience</h2>
      </div>

      <div className="timeline">
        {experience.map((job, index) => (
          <div className="timeline-card" key={index}>
            <span className="period">{job.period}</span>

            <h3>{job.role}</h3>

            <h4>{job.company}</h4>

            <p>{job.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Experience;