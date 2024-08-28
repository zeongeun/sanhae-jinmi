import { Header } from "@/components/header";
import { Previous } from "@/components/header/components";
import Image from "next/image";
import CardImg from "@/assets/images/image1.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import TabButton from "@/components/tabButton_test/TabButton";

const detailInfo = [
  { icon: <FaMapMarkerAlt />, text: "https://anotherkitchenmokpo.modoo.at" },
  { icon: <FaMapMarkerAlt />, text: "061-287-9085" },
  { icon: <FaMapMarkerAlt />, text: "연중무휴" },
  { icon: <FaMapMarkerAlt />, text: "11:30 ~ 22:00 / 21:00 라스트오더" },
];

export default function Detail() {
  return (
    <>
      <Header>
        <Previous />
      </Header>
      {/* detail headline */}
      <div className="flex flex-col">
        <div className="relative w-full h-[210px] overflow-hidden">
          <Image
            src={CardImg}
            alt="title"
            priority={true}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-3 text-sm px-5 py-6">
          <span className="border border-[#DFE3E6] bg-[#F1F3F5] px-[6px] py-[3px] rounded">
            음식점
          </span>
          <div>
            <p className="font-bold text-xl mb-[12px]">커피창고로</p>
            <p>전라남도 목포시 평화로 51</p>
          </div>
          <div>4.5 (123) / 리뷰 150</div>
        </div>
      </div>
      {/* divider */}
      <div className="bg-[#F8F9FD] w-full h-[14px]" />
      {/* detail info */}
      <div>
        <div>
          <button>홈</button>
          <button>소개</button>
          <button>리뷰</button>
        </div>
        <ul className="flex flex-col gap-4 px-5 py-6">
          {detailInfo.map((list, index) => (
            <li key={index} className="flex items-center gap-3">
              {list.icon}
              <p>{list.text}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* divider */}
      <div className="bg-[#F8F9FD] w-full h-[14px]" />
    </>
  );
}
