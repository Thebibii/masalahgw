import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import CardPost from "../../Elements/Card";
import { useDetailUser } from "../../../features/user/useDetailUser";

const Profil = () => {
  const { name } = useParams();
  const { data } = useDetailUser({ name });
  return (
    <>
      <div className="w-full px-8 pt-10 pb-4 text-right bg-black">
        <h3 className="text-white">Halo Bre 👋</h3>
      </div>
      <div className="px-8">
        <div className="flex flex-col gap-4">
          <span className="relative flex shrink-0 overflow-hidden w-16 h-16 cursor-pointer -translate-y-[50%] rounded border shadow-md">
            <span className="flex items-center justify-center w-full h-full rounded bg-muted" />
          </span>
          <div className="-translate-y-[50%]">
            {data?.user ? (
              <>
                <h4 className="text-lg font-bold">{data?.user.name}</h4>
                <p className="font-bold text-foreground/60">
                  {data?.user.name}
                </p>
              </>
            ) : (
              <>
                <div className="w-full h-10 rounded-md animate-pulse bg-primary" />
                <div className="w-24 h-8 mt-2 rounded-md animate-pulse bg-muted" />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="px-8">
        <div className="flex items-center justify-end gap-4">
          <div className="h-px grow bg-primary" />
          <p className="font-bold">
            Bio <span className="text-red-600">Gw</span>
          </p>
        </div>
        {data?.user ? (
          <p className="text-sm text-foreground w-[80%]">
            {data?.user.bio ?? "Orang ini ga ada bio"}
          </p>
        ) : (
          <div className="w-24 h-8 rounded animate-pulse bg-muted" />
        )}
      </div>
      <div className="px-8 mt-8">
        <div className="flex gap-4">
          <p className="font-bold">
            Jejak Digital <span className="text-red-600">Gw</span>
          </p>
          <div className="py-2 translate-y-[50%] grow bg-transparent rounded-tr-md border-t border-r border-t-primary border-r-primary" />
        </div>
        <div className="py-4 pb-10 pr-4 space-y-2 bg-transparent border-r border-r-primary">
          {data?.post ? (
            data?.post?.map((item) => (
              <Fragment key={item.id}>
                <CardPost>
                  <CardPost.Header
                    inisial={data?.user.name.charAt(0)}
                    name={data?.user.name}
                    email={data?.user.name}
                  />
                  <CardPost.Body
                    created_at={item.created_at}
                    content={item.content}
                  />
                  <CardPost.Footer
                    count={item.comments_count}
                    link={item.id}
                    type="index"
                    onClickDelete={() => handleDelete(item.id)}
                  />
                </CardPost>
              </Fragment>
            ))
          ) : (
            <p className="px-4 py-2 rounded-md bg-secondary w-max">
              User ini males posting
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Profil;
