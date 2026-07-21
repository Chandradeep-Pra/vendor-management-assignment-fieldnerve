import { create } from "zustand";

type UIStore = {
  sideBarOpen: boolean;
  toggleSidebar: () => void;
};

export const useUIStore = create<UIStore>((set) => ({
  sideBarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ sideBarOpen: !state.sideBarOpen })),
}));