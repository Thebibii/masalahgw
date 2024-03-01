import { create } from "zustand";

export const useModal = create((set) => ({
  modalCreate: false,
  openModalCreate: () => set({ modalCreate: true }),
  closeModalCreate: () => set({ modalCreate: false }),
  modalDelete: false,
  closeModalDelete: () => set({ modalDelete: false }),
  openModalDelete: () => set({ modalDelete: true }),
  modalDeleteCmt: false,
  closeModalDeleteCmt: () => set({ modalDeleteCmt: false }),
  openModalDeleteCmt: () => set({ modalDeleteCmt: true }),
  modalEditCmt: false,
  openModalEditCmt: () => set({ modalEditCmt: true }),
  closeModalEditCmt: () => set({ modalEditCmt: false }),
}));
