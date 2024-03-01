import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const CardPost = (props) => {
  const { children } = props;
  return (
    <div className="border shadow rounded-xl bg-card text-card-foreground">
      {children}
    </div>
  );
};

CardPost.Header = Header;
CardPost.Body = Body;
CardPost.Footer = Footer;
export default CardPost;
