import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useAppStore } from "../../../stores/app-store";
import { CommentSvg } from "../../../assets/icons/comment";
import { ShareSvg } from "../../../assets/icons/share";
import { DeleteSvg } from "../../../assets/icons/delete";
import { EditSvg } from "../../../assets/icons/edit";

const Footer = (props) => {
  const {
    count,
    link,
    type,
    onClick = () => {},
    onClickDelete = () => {},
  } = props;
  const user = useAppStore((state) => state.user);
  return (
    <div className="flex flex-col items-start p-0 pb-2">
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-[#E2E8F0] h-[1px] w-full mb-2"
      />

      <div className="px-4 py-2 space-x-2">
        {type == "index" && (
          <>
            <Link to={`/masalah/${link}`}>
              <Button classname="px-4 py-2 space-x-2 border border-gray-300 hover:bg-gray-100">
                <CommentSvg />
                <span>{count}</span>
              </Button>
            </Link>
            <Button classname="justify-center space-x-2 border border-gray-300 shadow-sm w-9 hover:bg-gray-100">
              <ShareSvg />
            </Button>
            {user.role == "common" && (
              <Button classname="justify-center space-x-2 border border-gray-300 shadow-sm w-9 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 aspect-square"
                >
                  <path d="m3 11 18-5v12L3 14v-3z"></path>
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                </svg>
              </Button>
            )}

            {user.role == "admin" && (
              <Button
                onClick={onClickDelete}
                classname="justify-center space-x-2 border border-gray-300 shadow-sm w-9 hover:bg-gray-100"
              >
                <DeleteSvg />
              </Button>
            )}
          </>
        )}

        {type == "kelola" && (
          <>
            <Button
              type="button"
              onClick={onClick}
              classname="justify-center space-x-2 border border-gray-300 shadow-sm w-9 hover:bg-gray-100"
            >
              <EditSvg />
            </Button>
            <Button
              onClick={onClickDelete}
              classname="justify-center space-x-2 border border-gray-300 shadow-sm w-9 hover:bg-gray-100"
            >
              <DeleteSvg />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Footer;
