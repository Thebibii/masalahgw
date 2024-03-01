import React from "react";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const AuthLayouts = (props) => {
  const { title, desc, type, children } = props;
  return (
    <div className={`flex items-center justify-center min-h-screen `}>
      <div className="w-full max-w-xs">
        <h1 className="font-semibold leading-none tracking-tight lg:text-xl">
          {title}
        </h1>
        <p className="mb-6 font-medium text-slate-500">{desc}</p>
        {children}
        <div className="mt-5 border-t border-t-slate-300">
          {type === "login" && (
            <Link to="/register" className="w-full">
              <Button classname="border justify-center w-full mt-4 border-slate-200 bg-transparent shadow-sm hover:bg-[#e1e1e1] hover:text-accent-foreground">
                Belum Punya Akun?
              </Button>
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="w-full">
              <Button classname="border w-full justify-center border-slate-200 mt-4 bg-transparent shadow-sm hover:bg-[#e1e1e1] hover:text-accent-foreground">
                Udah ada akun sih aslinya 😆
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
