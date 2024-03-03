import React from "react";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import CardPost from "../../Elements/Card";

const Post = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["detailPost.post", id]);
  return (
    <CardPost>
      <CardPost.Header
        inisial={
          post?.data.user
            ? post?.data.user.name.charAt(0)
            : post?.data.anonymous.name.charAt(0)
        }
        name={post?.data.user ? post?.data.user.name : "Anonymous"}
        email={
          post?.data.user ? post?.data.user.email : post?.data.anonymous.name
        }
      />
      <CardPost.Body
        created_at={post?.data.created_at}
        content={post?.data.content}
      />
      <CardPost.Footer
        count={post?.data.comments_count}
        link={post?.data.id}
        type="index"
      />
    </CardPost>
  );
};

export default Post;
