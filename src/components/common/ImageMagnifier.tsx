import { useCallback, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { useGesture } from "@use-gesture/react";
import { isMobile } from "react-device-detect";
import Button from "./Button";
import CloseIcon from "../../assets/icons/actions/close";

const Container = styled.div`
  position: relative;
  // width: 100%;
  height: 100%;

  .magnifier-img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    box-shadow: var(--elevation-5);
  }
`;

interface MagnifierProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;

  @media (min-height: 360px) {
    top: calc(var(--header-height) / 2);
  }
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 97%;
  height: calc(97% - var(--header-height));

  z-index: 9999;

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1rem);
  border-radius: 0.5rem;
  border: 2px solid #999;

  overflow: hidden;
`;

function ImageMagnifier({ src, alt, style }: MagnifierProps) {
  const [showModal, setShowModal] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  useGesture(
    {
      onDrag: ({ event, offset: [dx, dy], dragging }) => {
        event.preventDefault();
        event.stopPropagation();
        if (imgRef.current) {
          imgRef.current.style.transform = `translate(${position.x + dx}px, ${position.y + dy}px) scale(2)`;
          if (dragging) {
            imgRef.current.style.cursor = "grabbing";
          } else {
            imgRef.current.style.cursor = "grab";
          }
        }
      },
    },
    {
      target: imgRef,
      eventOptions: { passive: false },
    }
  );

  const onClose = useCallback(() => {
    setShowModal(false);
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") {
        if (!showModal) return;
        onClose();
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyDown);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, onClose]); // Dependency array ensures effect runs only if onClose changes

  return (
    <Container
      onMouseDown={() => !isMobile && setShowModal(true)}
      style={{
        cursor: showModal ? "default" : "zoom-in",
      }}
    >
      <img className="magnifier-img" src={src} alt={alt} style={style} loading="lazy" decoding="async" />

      {showModal && (
        <ModalContainer>
          <Modal style={style}>
            <img
              ref={imgRef}
              src={src}
              alt={alt}
              style={{
                ...style,
                maxWidth: "100%",
                maxHeight: "100%",
                cursor: "zoom-in",
              }}
              loading="lazy"
              decoding="async"
            />
            <Button
              onClick={onClose}
              text=""
              hasIconLeft
              iconLeft={<CloseIcon size={24} fill="var(--purple-300)" />}
              bgcolor="var(--pastel-black)"
              boop={{
                rotation: 180,
                scale: 0.72,
                timing: 500,
                springConfig: { tension: 100, friction: 5 },
              }}
              title="Close"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
              }}
            />
          </Modal>
        </ModalContainer>
      )}
    </Container>
  );
}

ImageMagnifier.defaultProps = {
  style: {},
};

export default ImageMagnifier;
