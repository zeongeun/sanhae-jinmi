"use client";

import { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

import "react-spring-bottom-sheet/dist/style.css";

export default function Example() {
  const [open, setOpen] = useState(false);

  // Ensure it animates in when loaded
  useEffect(() => {
    setOpen(true);
  }, []);

  function onDismiss() {
    setOpen(false);
  }
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet
        open={open}
        onDismiss={onDismiss}
        snapPoints={({ minHeight }) => minHeight}
      >
        <div>
          <p>
            Using onDismiss lets users close the sheet by swiping it down,
            tapping on the backdrop or by hitting on their keyboard.
          </p>
          <button onClick={onDismiss} className="w-full">
            Dismiss
          </button>
        </div>
      </BottomSheet>
    </>
  );
}
