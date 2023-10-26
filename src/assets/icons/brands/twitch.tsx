type SvgProps = {
  // fill: string;
  size?: number;
};

function TwitchIcon({ size }: SvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M20.9199 11.1429L17.4799 14.5714H14.0399L11.0299 17.5714V14.5714H7.15991V1.71429H20.9199V11.1429Z"
        fill="white"
      />
      <path
        d="M6.3 0L2 4.28571V19.7143H7.16V24L11.46 19.7143H14.9L22.64 12V0H6.3ZM20.92 11.1429L17.48 14.5714H14.04L11.03 17.5714V14.5714H7.16V1.71429H20.92V11.1429Z"
        fill="#9146FF"
      />
      <path d="M18.3401 4.71429H16.6201V9.85715H18.3401V4.71429Z" fill="#9146FF" />
      <path d="M13.6099 4.71429H11.8899V9.85715H13.6099V4.71429Z" fill="#9146FF" />
    </svg>
  );
}

TwitchIcon.defaultProps = {
  // fill: "black",
  size: 24,
};

export default TwitchIcon;
