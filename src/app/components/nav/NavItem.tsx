import { ReactNode } from "react";
import { NavItemEnum } from "@/utils/enums/navItem";
import { useNav } from "@/context/NavCtx";

interface INavItem {
  children: ReactNode;
  to: NavItemEnum;
}

const NavItem = ({ children, to }: INavItem) => {
  const { scrollTo } = useNav();

  return (
    <li
      onClick={() => scrollTo(to)}
      className="uppercase text-white text-2xl py-2 px-4 active:bg-[#ccc] active:text-black lg:hover:bg-[#ccc] lg:hover:text-black lg:hover:cursor-pointer"
    >
      {children}
    </li>
  );
};

NavItem.displayName = "NavItem";

export default NavItem;
