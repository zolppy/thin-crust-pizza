import { ReactNode } from "react";

const MenuList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="bg-white px-4 divide-y divide-neutral-200">{children}</ul>
  );
};

MenuList.displayName = "MenuList";

export default MenuList;
