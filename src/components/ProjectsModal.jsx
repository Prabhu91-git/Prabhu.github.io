import { useEffect, useState } from "react";
import "../styles/projectmodal.css";

function ProjectModal({ project, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>{project.title}</h2>
        <p className="modal-tech">
          {project.tech}
        </p>
        {project.confidential && (

          <div className="nda-container">

            <div className="nda-icon">
              🔒
            </div>

            <h3>Enterprise Project</h3>

            <p className="nda-overview">
              {project.overview}
            </p>

            <h4>Key Contributions</h4>

            <ul className="nda-list">
              {project.responsibilities.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>

            <div className="nda-note">
              Media unavailable due to client confidentiality.
            </div>

          </div>

        )}

        {/* VIDEO */}
        {!project.confidential && project.type === "video" && (
          <video controls autoPlay className="modal-video">
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* IMAGE GALLERY */}
        {!project.confidential && project.type === "gallery" && (
          <>
            <div className="gallery-container">
              <button
                className="gallery-btn"
                onClick={prevImage}
              >
                ❮
              </button>

              <img
                src={project.images[currentImage]}
                alt=""
                className="gallery-image"
              />

              <button
                className="gallery-btn"
                onClick={nextImage}
              >
                ❯
              </button>
            </div>

            <div className="gallery-dots">
              {project.images.map((_, index) => (
                <span
                  key={index}
                  className={
                    index === currentImage
                      ? "dot active"
                      : "dot"
                  }
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </>
        )}

        {/* 360 TOUR */}
        {!project.confidential && project.type === "tour" && (
          <iframe
            src={project.url}
            title={project.title}
            className="tour-frame"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}

export default ProjectModal;