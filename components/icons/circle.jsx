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

export const TimeUpCircle = ({ size, props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || ""}
      height={size || ""}
      viewBox="0 0 270 270"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_d_592_11188)">
        <circle
          cx="129"
          cy="131"
          r="105.662"
          fill="url(#paint0_linear_592_11188)"
        />
        <path
          opacity="0.1"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M129.334 191.719C163.498 191.719 191.194 164.023 191.194 129.859C191.194 95.6954 163.498 68 129.334 68C95.1705 68 67.4751 95.6954 67.4751 129.859C67.4751 164.023 95.1705 191.719 129.334 191.719Z"
          fill="white"
        />
        <path
          opacity="0.2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M130 238C189.094 238 237 190.094 237 131C237 71.9055 189.094 24 130 24C70.9055 24 23 71.9055 23 131C23 190.094 70.9055 238 130 238Z"
          stroke="white"
        />
        <path
          opacity="0.2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M130 249C195.17 249 248 196.17 248 131C248 65.8304 195.17 13 130 13C64.8304 13 12 65.8304 12 131C12 196.17 64.8304 249 130 249Z"
          stroke="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_592_11188"
          x="0.5"
          y="0.5"
          width="269"
          height="269"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5" dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_592_11188"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_592_11188"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_592_11188"
          x1="23.3374"
          y1="131"
          x2="234.662"
          y2="131"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF6F71" />
          <stop offset="1" stop-color="#EA4949" />
        </linearGradient>
      </defs>
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
