import Image from "next/image";
import CardImg from "@/assets/images/image1.jpg";

export default function ContentPreviewCard() {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative w-[100px] h-[130px] rounded overflow-hidden">
        <Image
          src={CardImg}
          alt="title"
          priority={true}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-3 text-sm">
        <span className="border border-[#DFE3E6] bg-[#F1F3F5] px-[6px] py-[3px] rounded">
          음식점
        </span>
        <div>
          <p className="font-semibold text-lg mb-[6px]">커피창고로</p>
          <p>전라남도 목포시 평화로 51</p>
        </div>
        <div>4.5 (123) / 리뷰 150</div>
      </div>
    </div>
  );
}
