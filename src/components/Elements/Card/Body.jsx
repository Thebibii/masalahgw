import React from "react";
import { useCreatedAt } from "../../../hooks/useCreatedAt";
const Body = (props) => {
  const { content, created_at } = props;
  return (
    <div className="p-4 pt-2">
      <div>
        <small className="text-sm text-gray-600/60">
          {useCreatedAt(created_at)}
        </small>
        <p className="mt-1 break-all">{content}</p>
      </div>
    </div>
  );
};

export default Body;
