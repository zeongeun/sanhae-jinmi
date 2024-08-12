import { HTMLAttributes } from "react";

type HeaderProps = { children: React.ReactNode } & HTMLAttributes<HTMLElement>;

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="relative px-5 flex items-center justify-between h-[60px] text-[17px] font-semibold">
      {children}
    </header>
  );
};

export default Header;
