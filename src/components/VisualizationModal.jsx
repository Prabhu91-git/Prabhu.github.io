import { useEffect } from "react";
import "../styles/visualizationmodal.css";

function VisualizationModal({
  renders,
  currentIndex,
  setCurrentIndex,
  onClose,
}) {
  const render = renders[currentIndex];

  const next = () => {
    setCurrentIndex((prev) =>
      prev === renders.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? renders.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="viz-overlay" onClick={onClose}>

      <div
        className="viz-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="viz-close"
          onClick={onClose}
        >
          ✕
        </button>

        <button
          className="viz-arrow left"
          onClick={prev}
        >
          ❮
        </button>

        <img
          src={render.image}
          alt={render.title}
          className="viz-image"
        />

        <button
          className="viz-arrow right"
          onClick={next}
        >
          ❯
        </button>

        <div className="viz-info">

          <h2>{render.title}</h2>

          <p className="viz-tech">
            {render.tech}
          </p>

          <p className="viz-description">
            {render.description}
          </p>

          <div className="viz-counter">
            {currentIndex + 1} / {renders.length}
          </div>

        </div>

      </div>

    </div>
  );
}

export default VisualizationModal;