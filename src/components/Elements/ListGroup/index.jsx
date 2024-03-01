import React from "react";
import Button from "../Button";

const ListGroup = (props) => {
  const { children } = props;
  return <ul className="mt-2 space-y-2">{children}</ul>;
};

export default ListGroup;
