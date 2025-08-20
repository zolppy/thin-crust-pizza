import { MenuTypeEnum } from "@/utils/enums/menuType";
import type { MenuOptionInterface } from "@/utils/types/menuOption";

interface MenuInterface {
  id: string;
  type: MenuTypeEnum;
  options: MenuOptionInterface[];
}

export type { MenuInterface };
