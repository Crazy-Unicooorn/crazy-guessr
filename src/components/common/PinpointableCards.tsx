/* eslint-disable react-refresh/only-export-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { Card } from "./TipsBuilder";

export interface CityData {
  cityName: string;
  top: number;
  left: number;
}

interface MapProps {
  map: string;
  country: string;
}

function Map({ map, country }: MapProps) {
  return (
    <img
      src={map}
      alt={`Map of ${country}`}
      style={{
        height: "100%",
        maxWidth: "100%",
        // aspectRatio: "1/1",
        // objectFit: "contain",
        borderRadius: "0.5rem",
        display: "block",
        userSelect: "none",
      }}
    />
  );
}

function Pin({ top, left, color, style }: { top: string; left: string; color: string; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        ...style,
        position: "absolute",
        top: `${top}`,
        left: `${left}`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="1rem"
        height="1rem"
        style={{
          position: "absolute",
          top: "-0.5rem",
          left: "-0.5rem",
          lineHeight: "0",
        }}
      >
        <defs>
          <radialGradient id="Answer" cx="0.5" cy="0.5" r="0.5" fx="0.25" fy="0.25">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#DD3333" />
            <stop offset="75%" stopColor="#990000" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          <radialGradient id="Guess" cx="0.5" cy="0.5" r="0.5" fx="0.25" fy="0.25">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FFAA00" />
            <stop offset="75%" stopColor="#CC5500" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
        </defs>
        <circle r="6" cx="9" cy="9" fill={color} />
      </svg>
    </div>
  );
}

Pin.defaultProps = {
  style: {},
};

function Front({ map, city }: { map: string; city: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    let x: number;
    let y: number;

    if ("touches" in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    setTop(y);
    setLeft(x);
    setIsVisible(true);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.25rem",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        onClick={handleClick}
        onTouchStart={handleClick}
        style={{
          position: "relative",
          minHeight: "0",
          maxHeight: "100%",
          maxWidth: "100%",
          aspectRatio: "1/1",
          objectFit: "contain",
          cursor: "crosshair",
        }}
      >
        <Pin
          top={`${top}px`}
          left={`${left}px`}
          color="url(#Guess)"
          style={{ visibility: isVisible ? "visible" : "hidden" }}
        />
        <Map map={map} country="France" />
      </div>
      <span style={{ minHeight: "0" }}>
        Where is <mark style={{ padding: "0 0.25rem", borderRadius: "0.25rem" }}>{city}</mark>?
      </span>
    </div>
  );
}

function Back({ top, left, map }: { top: number; left: number; map: string }) {
  return (
    <div
      style={{
        position: "relative",
        maxHeight: "100%",
        maxWidth: "100%",
        aspectRatio: "1/1",
        objectFit: "contain",
      }}
    >
      <Pin top={`${top}%`} left={`${left}%`} color="url(#Answer)" />
      <Map map={map} country="France" />
    </div>
  );
}

function generatePinpointableCards(data: CityData[], map: string) {
  const cards: Card[] = [];

  data.forEach((d) => {
    cards.push({
      front: <Front map={map} city={d.cityName} />,
      back: <Back top={d.top} left={d.left} map={map} />,
    });
  });
  return cards;
}

export default generatePinpointableCards;
