type SvgProps = {
  fill?: string;
  size?: number;
};

function ArrowRight({ fill, size }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M16.15 13H5a.967.967 0 0 1-.713-.287A.968.968 0 0 1 4 12c0-.283.096-.52.287-.713A.967.967 0 0 1 5 11h11.15L13.3 8.15a.916.916 0 0 1-.288-.7c.009-.267.105-.5.288-.7.2-.2.438-.304.712-.313a.93.93 0 0 1 .713.288L19.3 11.3c.1.1.17.208.212.325.042.117.063.242.063.375s-.02.258-.063.375a.877.877 0 0 1-.212.325l-4.575 4.575a.93.93 0 0 1-.713.288 1.02 1.02 0 0 1-.712-.313c-.183-.2-.28-.433-.288-.7a.916.916 0 0 1 .288-.7L16.15 13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

ArrowRight.defaultProps = {
  fill: "black",
  size: 24,
};

export default ArrowRight;
