type SvgProps = {
  // fill?: string;
  size?: number;
};

function GeoGuessrIcon({ size }: SvgProps) {
  return (
    <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0c4.979 0 8.999 4.029 8.999 8.998 0 0 .27 4.487-7.605 12.847a1.918 1.918 0 0 1-2.79 0C2.73 13.485 3 8.998 3 8.998 3.001 4.028 7.021 0 12 0Z"
        fill="#CC302E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2c3.873 0 7 3.133 7 6.999 0 0 .233 3.89-7 11.108C4.765 12.889 5 8.999 5 8.999A6.994 6.994 0 0 1 12 2Zm-1.836 5.164a1.837 1.837 0 0 0 3.674 0A1.835 1.835 0 0 0 12 5.328a1.834 1.834 0 0 0-1.836 1.836Z"
        fill="#fff"
      />
    </svg>
  );
}

GeoGuessrIcon.defaultProps = {
  // fill: "black",
  size: 24,
};

export default GeoGuessrIcon;
