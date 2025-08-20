import { ReactNode } from "react";

const NavList = ({ children }: { children: ReactNode }) => {
  return <ul className="flex">{children}</ul>;
};

NavList.displayName = "NavList";

export default NavList;
