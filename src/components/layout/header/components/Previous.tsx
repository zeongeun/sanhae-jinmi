"use client";

import { useRouter } from "next/navigation";

import { IoIosArrowBack } from "react-icons/io";

const Previous = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="text-[21px]">
      <IoIosArrowBack />
    </button>
  );
};

export default Previous;
