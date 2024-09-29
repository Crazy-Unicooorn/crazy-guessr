import React, { useEffect, useState } from "react";
import "./BlurRecall.css"; // Importing CSS for the blinking effect

interface RecallProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react/function-component-definition
const Recall: React.FC<RecallProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBlurred, setIsBlurred] = useState(true);
  const [isBlinking, setIsBlinking] = useState(true);

  // Handler to set the hover state
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Effect to handle the one-minute timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(false);
      setIsBlinking(false); // Stop blinking when revealed
    }, 60000); // 60 seconds

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  // Effect to determine if the text should be blurred
  useEffect(() => {
    if (isHovered) {
      setIsBlurred(false);
      setIsBlinking(false); // Stop blinking when hovered
    } else {
      setIsBlurred(true);
      setIsBlinking(true); // Start blinking again if not hovered
    }
  }, [isHovered]);

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={isBlinking ? "blinking" : ""}
      style={{
        filter: isBlurred ? "blur(8px)" : "none",
        transition: "filter 0.3s ease",
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
};

export default Recall;
