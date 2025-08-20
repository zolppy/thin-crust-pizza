import { ReactNode } from "react";

const Menu = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[964px] mx-auto w-full min-w-[320px]">{children}</div>
  );
};

Menu.displayName = "Menu";

export default Menu;
