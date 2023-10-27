type SvgProps = {
  fill?: string;
  size?: number;
};

function TrekkerIcon({ fill, size }: SvgProps) {
  return (
    <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="a" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
        <path fill="#D9D9D9" d="M0 .5h24v24H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="m7 23.5 3.075-15.55c.1-.483.325-.846.675-1.088.35-.241.717-.362 1.1-.362.383 0 .738.083 1.063.25.325.167.587.417.787.75l1 1.6c.3.483.688.92 1.163 1.313.474.391 1.02.679 1.637.862V9.5H19v14h-1.5V13.35a7.842 7.842 0 0 1-2.225-.875A6.924 6.924 0 0 1 13.5 11l-.6 3 2.1 2v7.5h-2v-6l-2.1-2-1.8 8H7Zm.425-9.875-2.125-.4a.928.928 0 0 1-.625-.412c-.15-.226-.2-.48-.15-.763l.75-3.925c.1-.533.383-.954.85-1.263a1.97 1.97 0 0 1 1.5-.312l1.15.225-1.35 6.85ZM13.5 6c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 11.5 4c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 13.5 2c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413s-.196 1.02-.588 1.412A1.926 1.926 0 0 1 13.5 6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

TrekkerIcon.defaultProps = {
  fill: "black",
  size: 24,
};

export default TrekkerIcon;
