import React, { useState } from "react";
import { useAppStore } from "../../../../stores/app-store";
import Button from "../../../Elements/Button";
import { useCreatedAt } from "../../../../hooks/useCreatedAt";
import ModalEdit from "./ModalEdit";
import { useModal } from "../../../../stores/modal";
import { useShallow } from "zustand/react/shallow";
import { useDropdown } from "../../../../stores/dropdown-store";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ReplySvg from "../../../../assets/icons/reply";
import ModalDelete from "./ModalDelete";

const Comment = ({ response }) => {
  const user = useAppStore((state) => state.user);
  const [getId, setGetId] = useState(null);
  const [getContent, setGetContent] = useState(null);
  const [modalEditCmt, openModalEditCmt, closeModalEditCmt] = useModal(
    useShallow((state) => [
      state.modalEditCmt,
      state.openModalEditCmt,
      state.closeModalEditCmt,
    ])
  );
  const [modalDeleteCmt, openModalDeleteCmt, closeModalDeleteCmt] = useModal(
    useShallow((state) => [
      state.modalDeleteCmt,
      state.openModalDeleteCmt,
      state.closeModalDeleteCmt,
    ])
  );
  const [isDrop, updateIsDrop] = useDropdown(
    useShallow((state) => [state.dropEditKomen, state.updateEditKomen])
  );

  const handleDropDown = (id, content) => {
    setGetId(id);
    setGetContent(content);
    updateIsDrop(id);
  };

  return (
    <div className="mt-4 space-y-2">
      {response &&
        response?.map((item) => (
          <div key={item.id} className="flex items-start gap-2 ">
            <span className="relative flex w-10 h-10 overflow-hidden rounded-md shrink-0">
              <img
                className="w-full h-full aspect-square"
                src="https://uploadthing.com/f/8a53e953-8f4b-40a2-a449-7469504f4fc1-kcgrut.png"
              />
            </span>

            <div className="px-3 py-2 bg-white border rounded-md grow">
              <div className="flex items-start justify-between w-full">
                <div>
                  <Link to="/profil/adicss">
                    <div
                      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground ${
                        user?.id == item.user.id
                          ? "bg-[#0F172A] text-[#F8FAFC]"
                          : "text-black"
                      }`}
                    >
                      {item.user.name}
                    </div>
                  </Link>
                  <p className="mt-1 text-xs text-foreground/60">
                    {useCreatedAt(item.created_at)}
                  </p>
                </div>
                {user?.id == item.user.id && (
                  <div className="relative">
                    <Button
                      classname="gap-2 px-3 text-xs border relative border-[#E2E8F0] shadow-sm"
                      onClick={() => handleDropDown(item.id, item.content)}
                    >
                      <ReplySvg />
                    </Button>
                    {isDrop == item.id && (
                      <div
                        className={`absolute top-0 right-12 z-10 flex-col min-w-[130px] ${
                          isDrop == item.id ? "flex" : "hidden"
                        } px-1 py-1 bg-white divide-gray-100 rounded-lg shadow  border border-[#F1F5F9]`}
                      >
                        <div className="flex flex-col">
                          <Button
                            classname="w-full px-2 hover:bg-secondary"
                            onClick={() => openModalEditCmt()}
                          >
                            Edit Komen
                          </Button>
                          <Button
                            classname="w-full px-2 hover:bg-destructive"
                            onClick={() => openModalDeleteCmt()}
                          >
                            Hapus Komen
                          </Button>
                        </div>
                        {<ModalEdit id={getId} content={getContent} />}
                        {<ModalDelete id={getId} />}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <p className="mt-2 break-all">{item.content}</p>
            </div>
          </div>
        ))}
      <Toaster />
    </div>
  );
};

export default Comment;
