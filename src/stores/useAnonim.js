import { create } from "zustand";

export const useAnonim = create((set) => ({
  isAnonymous: false,
  setIsAnonymous: () => set((state) => ({ isAnonymous: !state.isAnonymous })),
  unSetIsAnonymous: () => set({ isAnonymous: false }),
}));
