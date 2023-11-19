type SvgProps = {
  fill?: string;
  size?: number;
};

function CorrectIcon({ fill, size }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="m10.6 13.8-2.15-2.15a.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275.948.948 0 0 0-.275.7c0 .283.092.517.275.7L9.9 15.9c.2.2.433.3.7.3.267 0 .5-.1.7-.3l5.65-5.65a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275L10.6 13.8ZM12 22a9.738 9.738 0 0 1-3.9-.788 10.099 10.099 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.099 10.099 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0 1 12 2c1.383 0 2.683.263 3.9.788a10.098 10.098 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0 1 22 12a9.738 9.738 0 0 1-.788 3.9 10.098 10.098 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0 1 12 22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

CorrectIcon.defaultProps = {
  fill: "black",
  size: 24,
};

export default CorrectIcon;
