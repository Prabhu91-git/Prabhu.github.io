import { useState } from "react";
import "../styles/visualization.css";
import VisualizationModal from "./VisualizationModal";

const base = import.meta.env.BASE_URL;

const visualizations = [
  {
    title: "Modern Living Room",
    image: `${base}images/renders/IImg_1.jpg`,
    tech: "Unreal Engine 5",
    description:
      "A photorealistic visualization showcasing a clean, functional, and contemporary living space.",
  },
  {
    title: "Luxury Interior",
    image: `${base}images/renders/IImg_2.jpg`,
    tech: "Unreal Engine 5",
    description:
      "A high-end interior render highlighting premium materials, lighting, and modern design elements.",
  },
  {
    title: "Japanese Style Interior",
    image: `${base}images/renders/IImg_3.jpg`,
    tech: "Unreal Engine 5",
    description:
      "A realistic visualization featuring traditional Japanese architecture with warm wooden finishes.",
  },
  {
    title: "Luxury Villa Interior",
    image: `${base}images/renders/Img_1.jpg`,
    tech: "Unreal Engine 5",
    description:
      "A high-quality visualization of a bright, sophisticated living area.",
  },
  {
    title: "Elegant Classic Living Room",
    image: `${base}images/renders/Img_2.jpg`,
    tech: "Unreal Engine 5",
    description:
      "A photorealistic render blending traditional design elements with contemporary comfort.",
  },
  {
    title: "Minimalist Contemporary Interior",
    image: `${base}images/renders/Img_3.jpg`,
    tech: "Unreal Engine 5",
    description:
      "A modern interior render showcasing seamless spatial flow and minimalist aesthetics.",
  },
  {
    title: "Bright Open-Plan Living Room",
    image: `${base}images/renders/Img_4.jpg`,
    tech: "Unreal Engine 5",
    description:
      "A bright and inviting render emphasizing natural light and spaciousness.",
  },
  {
    title: "Japanese-Style Entrance Hall",
    image: `${base}images/renders/Img_7.jpg`,
    tech: "Unreal Engine 5",
    description:
      "A minimalist reception render featuring warm wood tones and soft lighting.",
  },
  {
    title: "Executive Workspace",
    image: `${base}images/renders/Img_8.jpg`,
    tech: "Unreal Engine 5",
    description:
      "A premium office visualization with elegant finishes.",
  },
  {
    title: "Modern Conference Room",
    image: `${base}images/renders/Img_9.jpg`,
    tech: "Unreal Engine 5",
    description:
      "A clean and sophisticated meeting room visualization.",
  },
];

export default function VisualizationShowcase() {
  const [selectedRender, setSelectedRender] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

const openCarousel = (index) => {
  setCurrentIndex(index);
  setSelectedRender(visualizations[index]);
};

  return (
    <section id="visualization" className="visualization section">

      <div className="section-header">
        <span>VISUALIZATION</span>
        <h2>ArchViz Showcase</h2>
        <p className="gallery-subtitle">
         Explore a collection of architectural visualizations.
        </p>
      </div>

      <div className="gallery-grid">
        {visualizations.map((render, index) => (
          <div
            key={index}
            className="gallery-card"
            onClick={() => openCarousel(index)}   
          >
            <img src={render.image} alt={render.title} />

            <div className="gallery-overlay">
              <div className="overlay-content">
                <h3>{render.title}</h3>
                <p>{render.tech}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedRender && (
      <VisualizationModal

        renders={visualizations}

        currentIndex={currentIndex}

        setCurrentIndex={setCurrentIndex}

        onClose={() => setSelectedRender(null)}
        
      />
      )}
    </section>
  );
}