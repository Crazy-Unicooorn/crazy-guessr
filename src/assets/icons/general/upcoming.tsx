type SvgProps = {
  fill?: string;
  size?: number;
};

function UpcomingIcon({ fill, size }: SvgProps) {
  return (
    <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M5 8.5h14v-2H5v2Zm0 14c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 20.5v-14c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 5 4.5h1v-2h2v2h8v-2h2v2h1c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v5.675a6.922 6.922 0 0 0-2-.6V10.5H5v10h6.3c.117.367.254.717.412 1.05.159.333.346.65.563.95H5Zm13 1c-1.383 0-2.563-.488-3.537-1.462C13.488 21.062 13 19.883 13 18.5s.488-2.563 1.463-3.537c.975-.975 2.154-1.463 3.537-1.463s2.563.488 3.538 1.463C22.512 15.938 23 17.117 23 18.5s-.488 2.563-1.462 3.538c-.976.974-2.155 1.462-3.538 1.462Zm1.675-2.625.7-.7L18.5 18.3v-2.8h-1v3.2l2.175 2.175Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

UpcomingIcon.defaultProps = {
  fill: "black",
  size: 24,
};

export default UpcomingIcon;
