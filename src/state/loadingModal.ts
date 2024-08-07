import { create } from "zustand";
type itLaoidng = {
  loading: boolean;
  setLoadng: (loading: boolean) => void;
};
const loadingModal = create<itLaoidng>((set) => ({
  loading: true,
  setLoadng: () => set((state) => ({ loading: state.loading })),
}));

export default loadingModal;
