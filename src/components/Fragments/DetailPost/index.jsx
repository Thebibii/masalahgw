import React from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import { useDetailPost } from "../../../features/post/useDetailPost";
import InputComment from "./InputComment";
import Comment from "./Comment/Comment";

const DetailPost = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useDetailPost({ id });

  return (
    <div className="px-8 pb-10 mt-4">
      {isLoading || isError ? (
        <>
          <div className="animate-pulse w-full h-24 rounded-md bg-[#F1F5F9]"></div>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-8 h-8 rounded-md animate-pulse bg-[#0F172A]/10"></div>
            <div className="h-8 rounded-md animate-pulse bg-[#0F172A]/10 grow"></div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-start gap-2 mt-4">
              <div className="w-10 h-10 rounded-md animate-pulse bg-[#0F172A]/10"></div>
              <div className="h-24 rounded-md animate-pulse bg-[#0F172A]/10 grow"></div>
            </div>
          </div>
        </>
      ) : null}

      {data && data?.data && (
        <>
          <Post />
          <InputComment />
          <Comment response={data?.data.comment} />
        </>
      )}
    </div>
  );
};

export default DetailPost;
