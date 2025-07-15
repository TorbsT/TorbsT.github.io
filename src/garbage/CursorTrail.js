import { useEffect } from "react";

const size = "3vh";
const CursorTrail = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const trail = document.createElement("div");
      trail.style.position = "fixed";
      trail.style.top = `${e.clientY}px`;
      trail.style.left = `${e.clientX}px`;
      trail.style.width = size;
      trail.style.height = size;
      trail.style.borderRadius = "50%";
      trail.style.backgroundColor = "cyan";
      trail.style.pointerEvents = "none";
      trail.style.zIndex = 9999;
      trail.style.opacity = 0.8;
      trail.style.transition = "opacity 0.5s ease-out";

      document.body.appendChild(trail);

      requestAnimationFrame(() => {
        trail.style.opacity = "0";
      });

      setTimeout(() => {
        trail.remove();
      }, 500);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default CursorTrail;
