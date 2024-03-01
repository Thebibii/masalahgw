import React, { forwardRef } from "react";
import Input from "./Input";

const InputForm = forwardRef((props, ref) => {
  const {
    name,
    placeholder,
    type,
    classname,
    value,
    onChange = () => {},
    onFocus = () => {},
  } = props;
  return (
    <Input
      name={name}
      placeholder={placeholder}
      type={type}
      ref={ref}
      classname={classname}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
});

export default InputForm;
