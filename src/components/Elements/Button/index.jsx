import React from "react";

const Button = (props) => {
  const {
    children,
    classname,
    onClick = () => {},
    type = "button",
    disabled = false,
  } = props;
  return (
    <button
      className={`inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 ${classname}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
