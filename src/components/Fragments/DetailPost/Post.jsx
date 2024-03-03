import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../Elements/Button";
import { useQueryClient } from "@tanstack/react-query";
import CardPost from "../../Elements/Card";
import { useCreatedAt } from "../../../hooks/useCreatedAt";

const Post = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["detailPost.post", id]);
  return (
    /*  <div className="border shadow rounded-xl bg-card text-card-foreground">
      <a href="/profil/undefined">
        <h3 className="p-4 pb-0 font-semibold leading-none tracking-tight group false">
          <div className="flex items-start gap-4">
            <span className="relative flex w-10 h-10 overflow-hidden rounded-md shrink-0">
              <span className="flex items-center justify-center w-full h-full rounded-md bg-[#F1F5F9]">
               
              </span>
            </span>
            <div className="space-y-1">
              <h2 className="false">
                
              </h2>
              <p className="text-foreground/60 false">
                
              </p>
            </div>
          </div>
        </h3>
      </a>
      <div className="p-4 pt-2">
        <div>
          <small className="text-sm text-foreground/60">
            Dibuat saat 1 hari yang lalu
          </small>
        </div>
        <p className="mt-1 break-all"></p>
      </div>
      <div className="flex flex-col items-start p-0 pb-2">
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-[#E2E8F0] h-[1px] w-full mb-2"
        ></div>
        <div className="px-4 py-2 space-x-2">
          <Link to={`/masalah/${post?.data.id}`}>
            <button className="inline-flex items-center justify-center px-4 py-2 space-x-2 text-sm font-medium transition-colors bg-transparent border rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input hover:bg-accent hover:text-accent-foreground h-9">
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
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
              </svg>
              <span>{post?.data.comments_count}</span>
            </button>
          </Link>
          <Button classname="inline-flex items-center justify-center text-sm font-medium transition-colors bg-transparent border border-black rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9">
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
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
            </svg>
          </Button>
          <button className="inline-flex items-center justify-center text-sm font-medium transition-colors rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructiveForeground hover:bg-destructive/90 h-9 w-9">
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
          </button>
        </div>
      </div>
    </div> */
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
