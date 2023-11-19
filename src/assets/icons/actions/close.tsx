type SvgProps = {
  fill?: string;
  size?: number;
};

function CloseIcon({ fill, size }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="m12 13.4 4.9 4.9a.948.948 0 0 0 .7.275.948.948 0 0 0 .7-.275.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7L13.4 12l4.9-4.9a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275L12 10.6 7.1 5.7a.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275.948.948 0 0 0-.275.7c0 .283.091.517.275.7l4.9 4.9-4.9 4.9a.948.948 0 0 0-.275.7c0 .283.091.517.275.7a.948.948 0 0 0 .7.275.948.948 0 0 0 .7-.275l4.9-4.9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

CloseIcon.defaultProps = {
  fill: "black",
  size: 24,
};

export default CloseIcon;
