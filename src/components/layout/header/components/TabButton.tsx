import { IoIosArrowDown } from "react-icons/io";

const TabButton = () => {
  return (
    <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 items-center">
      <span>목포시</span>
      <IoIosArrowDown />
    </button>
  );
};

export default TabButton;
