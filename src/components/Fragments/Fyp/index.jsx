import React, { Fragment, useState } from "react";
import CardPost from "../../Elements/Card";
import TopBar from "../TopBar";
import { useEffect } from "react";
import { useAppStore } from "../../../stores/app-store";
import { useNavigate } from "react-router-dom";
import ModalDelete from "./ModalDelete";
import { useFetchPost } from "../../../features/post/useFetchPost";
import { useModal } from "../../../stores/modal";
import Cookies from "js-cookie";

const Fyp = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const openModalDelete = useModal((state) => state.openModalDelete);

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token]);

  const { data, isLoading } = useFetchPost(token);

  const [getId, setGetId] = useState(null);

  const handleDelete = (id) => {
    setGetId(id);
    openModalDelete();
  };

  return (
    <Fragment>
      <TopBar />
      <div className="w-full px-8 pt-4 pb-10">
        {isLoading && (
          <div className="w-full h-24 rounded-md animate-pulse bg-black/10"></div>
        )}
        <div className="space-y-2">
          {!isLoading &&
            data?.data.map((item) => (
              <Fragment key={item.id}>
                <ModalDelete id={getId} />
                <CardPost>
                  <CardPost.Header
                    inisial={
                      item.user
                        ? item.user.name.charAt(0)
                        : item.anonymous.name.charAt(0)
                    }
                    name={item.user ? item.user.name : "Anonymous"}
                    email={item.user ? item.user.email : item.anonymous.name}
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
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Fyp;
