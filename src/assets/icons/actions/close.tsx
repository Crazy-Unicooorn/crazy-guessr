type SvgProps = {
  fill: string;
  size: number;
};

function CloseIcon({ fill, size }: SvgProps) {
  const style = {
    WebkitMask: "url(#a)",
    mask: "url(#a)",
  };

  return (
    <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="a" style={style} maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
        <path fill="#D9D9D9" d="M0 0h24v24H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="m12 13.4 4.9 4.9a.948.948 0 0 0 .7.275.948.948 0 0 0 .7-.275.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7L13.4 12l4.9-4.9a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275L12 10.6 7.1 5.7a.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275.948.948 0 0 0-.275.7c0 .283.091.517.275.7l4.9 4.9-4.9 4.9a.948.948 0 0 0-.275.7c0 .283.091.517.275.7a.948.948 0 0 0 .7.275.948.948 0 0 0 .7-.275l4.9-4.9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloseIcon;
