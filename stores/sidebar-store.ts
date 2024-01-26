import { create } from "zustand";

export interface SidebarStore {
  isMinimal: boolean
  isOpen: boolean;
  handleOpenOrClose: () => void;
  handleClose: () => void;
  handleChangeSideBar: ()=>void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  isMinimal: false,
  handleOpenOrClose: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
  handleClose: () => set((state) => ({ ...state, isOpen: false })),
  handleChangeSideBar: () => set((state) => ({ isMinimal: !state.isMinimal })),
}));
