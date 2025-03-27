import { MenuTagEnum } from "@/utils/enums/menuTag";

interface MenuOptionInterface {
    id: string;
    title: string;
    description: string;
    tag?: MenuTagEnum;
    price: number;
}

export type { MenuOptionInterface };
