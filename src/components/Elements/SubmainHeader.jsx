import React, { Fragment } from "react";

const SubmainHeader = (props) => {
  const { title, description } = props;
  return (
    <Fragment>
      <h2 className="mt-4 text-lg font-bold">{title}</h2>
      <p className="text-foreground/60">{description}</p>
    </Fragment>
  );
};

export default SubmainHeader;
