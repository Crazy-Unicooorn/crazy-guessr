type SvgProps = {
  fill?: string;
  size?: number;
};

function LeftDriveIcon({ fill, size }: SvgProps) {
  return (
    <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill={fill}>
        <path d="M8 22v-6.3c-.55.75-1.208 1.463-1.975 2.137a18.66 18.66 0 0 1-2.575 1.888L2 18.275c.5-.283 1.092-.675 1.775-1.175.683-.5 1.337-1.096 1.962-1.788a10.41 10.41 0 0 0 1.6-2.374C7.78 12.046 8 11.066 8 10V7.825L6.4 9.4 5 8l4-4 4 4-1.4 1.4L10 7.825V22H8Z" />
        <path opacity=".6" d="M15 4v14.175L13.4 16.6 12 18l4 4 4-4-1.4-1.4-1.6 1.575V4h-2Z" />
      </g>
    </svg>
  );
}

LeftDriveIcon.defaultProps = {
  fill: "black",
  size: 24,
};

export default LeftDriveIcon;
