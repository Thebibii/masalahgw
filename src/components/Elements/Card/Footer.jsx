import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import { CommentSvg } from "../../../assets/icons/comment";
import { ShareSvg } from "../../../assets/icons/share";
import { DeleteSvg } from "../../../assets/icons/delete";
import { EditSvg } from "../../../assets/icons/edit";
import { useQueryClient } from "@tanstack/react-query";
import ReportSvg from "../../../assets/icons/report";

const Footer = (props) => {
  const {
    count,
    link,
    type,
    onClick = () => {},
    onClickDelete = () => {},
  } = props;
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["userLogin.user"]);
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
            {user?.data.role == "common" && (
              <Button classname="justify-center space-x-2 shadow-sm bg-destructive text-destructiveForeground w-9 hover:bg-destructive/80">
                <ReportSvg />
              </Button>
            )}

            {user?.data.role == "admin" && (
              <Button
                onClick={onClickDelete}
                classname="justify-center space-x-2 shadow-sm bg-destructive text-destructiveForeground w-9 hover:bg-destructive/80"
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
