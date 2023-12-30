const Circle = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 610 591"
      fill="none"
      {...props}
    >
      <path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M305 589.837C472.895 589.837 609 458.021 609 295.418C609 132.816 472.895 1 305 1C137.105 1 1 132.816 1 295.418C1 458.021 137.105 589.837 305 589.837Z"
        stroke="#C4D0FB"
      />
    </svg>
  );
};

export const Circle2 = (props) => {
  return (
    <svg
      viewBox="0 0 481 481"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.1"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.5 379C316.991 379 379 316.991 379 240.5C379 164.009 316.991 102 240.5 102C164.009 102 102 164.009 102 240.5C102 316.991 164.009 379 240.5 379Z"
        fill="#C4D0FB"
      />
      <path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.5 480C372.772 480 480 372.772 480 240.5C480 108.228 372.772 1 240.5 1C108.228 1 1 108.228 1 240.5C1 372.772 108.228 480 240.5 480Z"
        stroke="#C4D0FB"
      />
    </svg>
  );
};

export const Circle3 = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 140"
      fill="none"
      {...props}
    >
      <circle cx="69.9999" cy="70" r="30.3774" fill="#50AAF2" />
      <circle cx="70.0002" cy="70" r="51.0094" stroke="#50AAF2" />
      <circle cx="70" cy="70" r="69.5" stroke="#50AAF2" stroke-opacity="0.23" />
    </svg>
  );
};

export const MiniCircle = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      fill="none"
      {...props}
    >
      <path
        opacity="0.1"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z"
        fill="#C4D0FB"
      />
    </svg>
  );
};

export default Circle;
