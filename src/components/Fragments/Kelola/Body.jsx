import React, { Fragment, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { useAppStore } from "../../../stores/app-store";
import CardPost from "../../Elements/Card";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import Dropdown from "./Dropdown";
import { useDropdown } from "../../../stores/dropdown-store";
import { useFetchPostUserLogin } from "../../../features/post/user/useFetchPostUserLogin";
import { useModal } from "../../../stores/modal";

const Body = () => {
  const status = useDropdown((state) => state.statusKelola);
  const [getId, setGetId] = useState(null);
  const [getContent, setGetContent] = useState(null);
  const [modalEditCmt, openModalEditCmt, modalDelete, openModalDelete] =
    useModal(
      useShallow((state) => [
        state.modalEditCmt,
        state.openModalEditCmt,
        state.modalDelete,
        state.openModalDelete,
      ])
    );
  const { data, isLoading } = useFetchPostUserLogin();
  const getFilteredPost = () => {
    return data?.filter((post) => {
      if (status === "Public") return post?.user != null;
      if (status === "Anonymous") return post?.anonymous != null;

      return post;
    });
  };

  const handleFooterClick = (id, content) => {
    setGetId(id);
    setGetContent(content);
    openModalEditCmt();
  };

  const handleFooterDelete = (id) => {
    setGetId(id);
    openModalDelete();
  };

  return (
    <div className="relative pb-10 mt-8">
      <Dropdown />
      <div className="my-4" />

      {isLoading && (
        <div className="w-full h-24 rounded-md animate-pulse bg-[#0F172A]/10"></div>
      )}

      {!isLoading && data?.length == 0 && (
        <p className="py-2 px-4 bg-[#F1F5F9] rounded-md w-max">
          Orang ini belom pernah posting apapun
        </p>
      )}
      {!isLoading && data?.length > 0 && (
        <div className="space-y-2">
          {getFilteredPost()?.map((item) => (
            <Fragment key={item.id}>
              <CardPost>
                <CardPost.Header
                  inisial={
                    item.user
                      ? item.user.name.charAt(0)
                      : item.anonymous?.name?.charAt(0)
                  }
                  name={item.user ? item.user.name : "Anonymous"}
                  email={item.user ? item.user.email : item.anonymous?.name}
                />
                <CardPost.Body
                  created_at={item.created_at}
                  content={item.content}
                />
                <CardPost.Footer
                  count={item.comments_count}
                  type="kelola"
                  onClick={() => handleFooterClick(item.id, item.content)}
                  onClickDelete={() => handleFooterDelete(item.id)}
                />
              </CardPost>
            </Fragment>
          ))}
          {modalEditCmt && <ModalEdit id={getId} content={getContent} />}
          {modalDelete && <ModalDelete id={getId} />}
        </div>
      )}
    </div>
  );
};

export default Body;
