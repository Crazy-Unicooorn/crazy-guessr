import React from "react";
import { useSpring } from "react-spring";

function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 200,
  springConfig = {
    tension: 300,
    friction: 10,
  },
  size = "24px",
}) {
  // const prefersReducedMotion = usePrefersReducedMotion();

  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    display: "inline-block",
    width: `${size}`,
    height: `${size}`,
    backfaceVisibility: "hidden",
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: springConfig,
  });
  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);

  // const applicableStyle = prefersReducedMotion ? {} : style;

  return [style, trigger];
}

export default useBoop;
