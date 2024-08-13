import { Header } from "@/components/layout/header";
import Card from "./_components/Card";
import { IoIosArrowDown } from "react-icons/io";
import { Previous, TabButton } from "@/components/layout/header/components";
import BottomSheet from "@/components/common/bottomSheet/BottomSheet";

const array = [1, 2, 3, 4, 5];
const contentType = [
  {
    rnum: 1,
    type: "전체",
  },
  {
    rnum: 2,
    typeId: "12",
    type: "관광지",
  },
  {
    rnum: 3,
    typeId: "14",
    type: "문화시설",
  },
  {
    rnum: 4,
    typeId: "15",
    type: "축제공연행사",
  },
  {
    rnum: 5,
    typeId: "25",
    type: "여행코스",
  },
  {
    rnum: 6,
    typeId: "28",
    type: "레포츠",
  },
  {
    rnum: 7,
    typeId: "32",
    type: "숙박",
  },
  {
    rnum: 8,
    typeId: "38",
    type: "쇼핑",
  },
  {
    rnum: 9,
    typeId: "39",
    type: "음식점",
  },
];

export default function Location() {
  return (
    <>
      <Header>
        <Previous />
        <TabButton />
      </Header>
      <div className="px-5">
        <div className="flex gap-2 py-4">
          {contentType
            .filter((v) => v.rnum < 4)
            .map((e) => (
              <button
                key={e.rnum}
                className="text-[#525865] border border-[#ECEEF0] text-sm font-normal py-[8px] px-[15px] rounded-full"
              >
                {e.type}
              </button>
            ))}
          <button className="bg-[#ECF2FA] border border-[#DEE5EF] rounded-full p-[11px]">
            <IoIosArrowDown />
          </button>
        </div>
        <div className="py-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {array.map((e) => (
            <Card key={e} />
          ))}
        </div>
      </div>
      <BottomSheet />
    </>
  );
}
