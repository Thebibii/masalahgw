import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const {
    type = "text",
    placeholder,
    name,
    classname,
    value,
    onChange = () => {},
    onFocus = () => {},
  } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={name}
      name={name}
      className={`flex w-full px-3 py-1 text-sm transition-colors bg-transparent border rounded-md shadow-sm h-9 border-input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:cursor-not-allowed disabled:opacity-50 ${classname}`}
      ref={ref}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
    />
  );
});

export default Input;
