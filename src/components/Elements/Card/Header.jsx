import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { inisial, name, email } = props;
  return (
    <Link
      to={`${name == "Anonymous" ? "/profil/undefined" : `/profil/${name}`}`}
    >
      <h3 className="p-4 pb-0 font-semibold leading-none tracking-tight cursor-pointer group">
        <div className="flex items-start gap-4">
          <span className="relative flex w-10 h-10 overflow-hidden rounded-md shrink-0">
            <span className="flex items-center justify-center w-full h-full text-white bg-black rounded-md">
              {inisial}
            </span>
          </span>
          <div className="space-y-1">
            <h2 className="group-hover:underline">{name}</h2>
            <p className="text-foreground/60 group-hover:underline">{email}</p>
          </div>
        </div>
      </h3>
    </Link>
  );
};

export default Header;
