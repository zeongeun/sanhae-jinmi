import Image from "next/image";
import logoImg from "@/assets/images/logo.svg";
import Link from "next/link";

const LogoImg = () => {
  return (
    <Link href="/">
      <Image src={logoImg} alt="" />
    </Link>
  );
};

export default LogoImg;
