type SvgProps = {
  fill?: string;
  size?: number;
};

function ArrowLeft({ fill, size }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M7.425 13h11.15c.284 0 .521-.096.713-.287a.968.968 0 0 0 .287-.713.968.968 0 0 0-.287-.713.968.968 0 0 0-.713-.287H7.425l2.85-2.85c.2-.2.296-.433.288-.7a1.055 1.055 0 0 0-.288-.7 1.02 1.02 0 0 0-.712-.313.93.93 0 0 0-.713.288L4.275 11.3c-.1.1-.17.208-.212.325A1.107 1.107 0 0 0 4 12c0 .133.021.258.063.375a.877.877 0 0 0 .212.325l4.575 4.575c.2.2.438.296.713.288a1.02 1.02 0 0 0 .712-.313c.184-.2.28-.433.288-.7a.916.916 0 0 0-.288-.7L7.425 13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

ArrowLeft.defaultProps = {
  fill: "black",
  size: 24,
};

export default ArrowLeft;
