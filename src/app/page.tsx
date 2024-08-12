import "react-spring-bottom-sheet/dist/style.css";

import { Header } from "@/components/layout/header";
import LogoImg from "@/components/layout/header/components/LogoImg";
import Example from "@/components/common/bottomSheet/BottomSheet";

export default function Home() {
  return (
    <>
      <Header>
        <LogoImg />
      </Header>
      <Example />
    </>
  );
}
