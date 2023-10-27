type SvgProps = {
  fill?: string;
  size?: number;
};

function RightDriveIcon({ fill, size }: SvgProps) {
  return (
    <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="a" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
        <path fill="#D9D9D9" d="M0 .5h24v24H0z" />
      </mask>
      <g mask="url(#a)" fill={fill}>
        <path d="M14 22V7.825L12.4 9.4 11 8l4-4 4 4-1.4 1.4L16 7.825V10c0 1.067.22 2.046.663 2.938a10.41 10.41 0 0 0 1.6 2.374c.624.692 1.279 1.288 1.962 1.788s1.275.892 1.775 1.175l-1.45 1.45a18.661 18.661 0 0 1-2.575-1.888A13.472 13.472 0 0 1 16 15.7V22h-2Z" />
        <path opacity=".6" d="M9 4v14.175l1.6-1.575L12 18l-4 4-4-4 1.4-1.4L7 18.175V4h2Z" />
      </g>
    </svg>
  );
}

RightDriveIcon.defaultProps = {
  fill: "black",
  size: 24,
};

export default RightDriveIcon;
