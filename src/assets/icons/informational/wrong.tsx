type SvgProps = {
  fill?: string;
  size?: number;
};

function WrongIcon({ fill, size }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="m12 13.414 2.121 2.122c.2.2.436.3.707.3.272 0 .507-.1.708-.3.2-.2.3-.436.3-.708 0-.27-.1-.506-.3-.707L13.414 12l2.122-2.121c.2-.2.3-.436.3-.707 0-.271-.1-.507-.3-.708-.2-.2-.436-.3-.707-.3-.272 0-.507.1-.708.3L12 10.586 9.879 8.464c-.2-.2-.436-.3-.707-.3-.271 0-.507.1-.707.3-.2.2-.301.437-.301.708 0 .27.1.506.3.707L10.587 12l-2.121 2.121c-.2.2-.301.436-.301.707 0 .272.1.507.3.708.2.2.437.3.708.3.27 0 .506-.1.707-.3L12 13.414Zm7.071 5.657a9.737 9.737 0 0 1-3.315 2.2c-1.231.49-2.483.735-3.756.735-1.273 0-2.525-.245-3.756-.734a9.737 9.737 0 0 1-3.315-2.2 9.738 9.738 0 0 1-2.2-3.315A10.098 10.098 0 0 1 1.993 12c0-1.273.245-2.525.734-3.757A9.737 9.737 0 0 1 4.93 4.93a9.738 9.738 0 0 1 3.315-2.2A10.099 10.099 0 0 1 12 1.993c1.273 0 2.525.245 3.757.734a9.738 9.738 0 0 1 3.314 2.2 9.737 9.737 0 0 1 2.201 3.315c.49 1.232.734 2.484.734 3.757 0 1.273-.245 2.525-.734 3.757a9.738 9.738 0 0 1-2.2 3.314Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

WrongIcon.defaultProps = {
  fill: "black",
  size: 24,
};

export default WrongIcon;