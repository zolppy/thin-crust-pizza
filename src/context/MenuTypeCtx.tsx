"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { MenuTypeEnum } from "@/utils/enums/menuType";

interface IMenuTypeCtx {
  selectedMenuType: MenuTypeEnum;
  changeMenuType: (type: MenuTypeEnum) => void;
}

const MenuTypeCtx = createContext<IMenuTypeCtx | undefined>(undefined);

const MenuTypeProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMenuType, setSelectedMenuType] = useState<MenuTypeEnum>(
    MenuTypeEnum.Pizza
  );

  const changeMenuType = (type: MenuTypeEnum) => {
    setSelectedMenuType(type);
  };

  return (
    <MenuTypeCtx.Provider value={{ selectedMenuType, changeMenuType }}>
      {children}
    </MenuTypeCtx.Provider>
  );
};

const useMenuType = (): IMenuTypeCtx => {
  const context = useContext<IMenuTypeCtx | undefined>(MenuTypeCtx);
  if (!context) {
    throw new Error("useMenuType must be used inside a MenuTypeProvider");
  }
  return context;
};

export { MenuTypeProvider, useMenuType };
