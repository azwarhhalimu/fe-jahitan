import { create } from "zustand";
type itMenuOpen = {
  menuOpen: boolean;
  setMenuOpen: () => void;
};
const menuOpen = create<itMenuOpen>((set) => ({
  menuOpen: false,
  setMenuOpen: () => set((state) => ({ menuOpen: !state.menuOpen && true })),
}));

export default menuOpen;
