type SvgProps = {
  fill?: string;
  size?: number;
};

function HeartIcon({ fill, size }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M11.986 21.593c-.318 0-.634-.058-.946-.174a2.427 2.427 0 0 1-.842-.534l-1.753-1.603a61.824 61.824 0 0 1-4.774-4.82C2.237 12.837 1.52 11.015 1.52 8.995c0-1.708.567-3.134 1.702-4.278C4.356 3.572 5.778 3 7.486 3a6.195 6.195 0 0 1 4.5 1.916A6.194 6.194 0 0 1 16.486 3c1.711 0 3.14.572 4.288 1.717 1.147 1.144 1.72 2.57 1.72 4.278 0 2.02-.72 3.847-2.16 5.48a58.649 58.649 0 0 1-4.832 4.846l-1.714 1.578a2.33 2.33 0 0 1-.85.527 2.855 2.855 0 0 1-.952.168Zm-1.05-13.928c-.426-.627-.921-1.12-1.485-1.477-.565-.359-1.218-.538-1.961-.538-.949 0-1.74.317-2.372.95-.632.634-.948 1.432-.948 2.395 0 .848.3 1.75.903 2.704.603.955 1.323 1.881 2.162 2.779a37.552 37.552 0 0 0 2.59 2.52c.887.784 1.607 1.429 2.16 1.935.558-.517 1.282-1.167 2.174-1.949a37.662 37.662 0 0 0 2.6-2.519 19.152 19.152 0 0 0 2.175-2.764c.607-.947.91-1.85.91-2.706 0-.963-.319-1.76-.957-2.394-.639-.634-1.437-.95-2.394-.95-.75 0-1.405.178-1.965.537-.56.358-1.052.85-1.48 1.477a1.283 1.283 0 0 1-.469.439 1.25 1.25 0 0 1-.593.146 1.22 1.22 0 0 1-.588-.146 1.269 1.269 0 0 1-.461-.439Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

HeartIcon.defaultProps = {
  fill: "black",
  size: 24,
};

export default HeartIcon;
