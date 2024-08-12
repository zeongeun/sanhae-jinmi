import { Header } from "@/components/layout/header";
import { Previous } from "@/components/layout/header/components";

export default function Detail() {
  return (
    <>
      <Header>
        <Previous />
      </Header>
      <div className="px-5">Detail Page</div>
    </>
  );
}
