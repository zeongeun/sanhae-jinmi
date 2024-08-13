import { create } from "zustand";

type BottomSheetState = {
  open: boolean;
  setOpen: (state: boolean) => void;
};

const useBottomSheetStore = create<BottomSheetState>((set) => ({
  open: false,

  setOpen: (state) => set({ open: state }),
}));

export default useBottomSheetStore;
