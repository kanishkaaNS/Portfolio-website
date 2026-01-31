import { useEffect } from "react";
import "./ClickSpark.css";

function ClickSpark({
  sparkCount = 10,
  color = "rgba(255,255,255,0.85)",
  duration = 360
}) {
  useEffect(() => {
    // 🚫 Disable on touch devices (mobile/tablet)
    if ("ontouchstart" in window) return;

    function handleClick(e) {
      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement("span");
        spark.className = "click-spark";

        const angle =
          (2 * Math.PI * i) / sparkCount +
          (Math.random() - 0.5) * 0.35;

        const distance = 14 + Math.random() * 8;

        spark.style.left = `${e.clientX}px`;
        spark.style.top = `${e.clientY}px`;
        spark.style.setProperty("--angle", angle);
        spark.style.setProperty("--distance", `${distance}px`);
        spark.style.background = color;

        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), duration);
      }
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [sparkCount, color, duration]);

  return null;
}

export default ClickSpark;
