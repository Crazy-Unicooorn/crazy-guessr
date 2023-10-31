import { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .magnifier-img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    box-shadow: var(--elevation-5);

    loading: lazy;
    decoding: async;
  }
`;

const Magnifier = styled.div`
  width: 400px;
  height: 400px;
  max-width: calc(100vw / 2);
  max-height: calc(100vh / 2);
  border: 2px solid #fff;
`;

interface MagnifierProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

function ImageMagnifier({ src, alt, style }: MagnifierProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = ((e.touches[0].clientX - left) / width) * 100;
    const y = ((e.touches[0].clientY - top) / height) * 100;
    setPosition({ x, y });
    setCursorPosition({ x: e.touches[0].clientX - left, y: e.touches[0].clientY - top });
  };

  return (
    <Container
      onMouseDown={() => setShowMagnifier(true)}
      onTouchStart={() => setShowMagnifier(true)}
      onMouseUp={() => setShowMagnifier(false)}
      onTouchEnd={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={() => setShowMagnifier(false)}
      style={{
        cursor: showMagnifier ? "none" : "zoom-in",
      }}
    >
      <img className="magnifier-img" src={src} alt={alt} style={style} />
      <div
        style={{
          position: "absolute",
          left: cursorPosition.x - 200,
          top: cursorPosition.y - 200,
          pointerEvents: "none",
          display: showMagnifier ? "block" : "none",
        }}
      >
        <Magnifier
          style={{ ...style, backgroundImage: `url(${src})`, backgroundPosition: `${position.x}% ${position.y}%` }}
        />
      </div>
    </Container>
  );
}

ImageMagnifier.defaultProps = {
  style: {},
};

export default ImageMagnifier;
