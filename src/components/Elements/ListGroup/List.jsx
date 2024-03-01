import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const List = (props) => {
  const { children, to } = props;
  return (
    <li>
      <Link to={to}>
        <Button classname="w-full px-4 py-2 space-x-2 bg-white hover:bg-accent">
          {children}
        </Button>
      </Link>
    </li>
  );
};

export default List;
