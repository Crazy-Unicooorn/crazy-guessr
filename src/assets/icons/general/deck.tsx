type SvgProps = {
  fill?: string;
  size?: number;
};

function DeckIcon({ fill, size }: SvgProps) {
  const style = {
    WebkitMask: "url(#a)",
    mask: "url(#a)",
  };

  return (
    <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="a" style={style} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
        <path fill="#D9D9D9" d="M0 .004h24v24H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="m3.975 19.804-.85-.35a1.763 1.763 0 0 1-1.038-1.125 2.106 2.106 0 0 1 .088-1.575l1.8-3.9v6.95Zm4 2.2c-.55 0-1.02-.196-1.413-.587a1.926 1.926 0 0 1-.587-1.413v-6l2.65 7.35c.05.117.1.23.15.338.05.108.117.212.2.312h-1Zm5.15-.1c-.533.2-1.05.175-1.55-.075s-.85-.641-1.05-1.175l-4.45-12.2a1.959 1.959 0 0 1 .05-1.562 1.891 1.891 0 0 1 1.15-1.038l7.55-2.75c.533-.2 1.05-.175 1.55.075s.85.642 1.05 1.175l4.45 12.2c.2.534.183 1.055-.05 1.563a1.89 1.89 0 0 1-1.15 1.037l-7.55 2.75Zm-2.15-11.9c.283 0 .52-.095.713-.287a.968.968 0 0 0 .287-.713.968.968 0 0 0-.287-.712.968.968 0 0 0-.713-.288.967.967 0 0 0-.713.288.967.967 0 0 0-.287.712c0 .284.096.521.287.713.192.192.43.287.713.287Zm1.45 10 7.55-2.75-4.45-12.25-7.55 2.75 4.45 12.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

DeckIcon.defaultProps = {
  fill: "black",
  size: 24,
};

export default DeckIcon;
