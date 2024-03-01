import { create } from "zustand";

export const useDropdown = create((set) => ({
  statusNotif: "Belum Dibaca",
  updateStatusNotif: (status) => set({ statusNotif: status }),
  statusKelola: "Semua",
  updateStatusKelola: (status) => set({ statusKelola: status }),

  dropEditKomen: null,
  updateEditKomen: (id) => set({ dropEditKomen: id }),
  closeEditKomen: () => set({ dropEditKomen: null }),
}));
