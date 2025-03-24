
import { useState, useEffect } from "react";

const destinations = [
  "United States",
  "France",
  "Italy",
  "Japan",
  "Thailand",
  "Switzerland",
];

export const useDestinationSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
        setIsAnimating(false);
      }, 200); // Animation duration
    }, 3000); // Total duration between transitions
    
    return () => clearInterval(intervalId);
  }, []);

  return {
    currentDestination: destinations[currentIndex],
    isAnimating,
  };
};
