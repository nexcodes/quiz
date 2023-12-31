import React from "react";

const Cross = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <path
        d="M17.3917 3.54538L11.9378 8.99988L17.3917 14.4541C18.203 15.2657 18.203 16.5803 17.3917 17.3918C16.9864 17.7972 16.455 18 15.9238 18C15.3917 18 14.8603 17.7975 14.4552 17.3918L9.00011 11.937L3.54539 17.3918C3.1401 17.7971 2.60862 17.9999 2.07699 17.9999C1.54551 17.9999 1.01439 17.7974 0.608746 17.3918C-0.202502 16.5806 -0.202502 15.2659 0.608746 14.4541L6.06253 8.99982L0.608435 3.54538C-0.202812 2.73413 -0.202812 1.41921 0.608435 0.607969C1.41953 -0.202656 2.73368 -0.202656 3.54508 0.607969L9.00006 6.06247L14.4546 0.607969C15.2662 -0.202656 16.5805 -0.202656 17.3914 0.607969C18.203 1.41921 18.203 2.73413 17.3917 3.54538Z"
        fill="#454545"
      />
    </svg>
  );
};

export default Cross;