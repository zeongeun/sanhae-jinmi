"use client";

import { IoIosArrowDown } from "react-icons/io";
import useBottomSheetStore from "@/stores/bottomSheetStore";

const TabButton = () => {
  const { setOpen } = useBottomSheetStore();

  return (
    <button
      onClick={() => setOpen(true)}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 items-center"
    >
      <span>목포시</span>
      <IoIosArrowDown />
    </button>
  );
};

export default TabButton;
