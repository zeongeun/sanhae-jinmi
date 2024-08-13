"use client";

import useBottomSheetStore from "@/stores/bottomSheetStore";
import { BottomSheet as BaseBottomSheet } from "react-spring-bottom-sheet";

import "react-spring-bottom-sheet/dist/style.css";

export default function BottomSheet() {
  const { open, setOpen } = useBottomSheetStore();

  function onDismiss() {
    setOpen(false);
  }

  return (
    <BaseBottomSheet
      open={open}
      onDismiss={onDismiss}
      snapPoints={({ minHeight }) => minHeight}
    >
      <div>
        <p>
          Using onDismiss lets users close the sheet by swiping it down, tapping
          on the backdrop or by hitting on their keyboard.
        </p>
        <button onClick={onDismiss} className="w-full">
          Dismiss
        </button>
      </div>
    </BaseBottomSheet>
  );
}
