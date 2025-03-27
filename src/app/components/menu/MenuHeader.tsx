"use client";

import { CSSProperties } from "react";
import { menu } from "@/utils/mocks/menu";
import { MenuTypeEnum } from "@/utils/enums/menuType";
import { useMenuType } from "@/context/MenuTypeCtx";

interface IMenuTypes {
    id: string;
    type: MenuTypeEnum;
}

const MenuHeader = () => {
    const { selectedMenuType, changeMenuType } = useMenuType();
    const menuTypes: IMenuTypes[] = menu.flatMap(
        ({ id, type }: IMenuTypes) => ({
            id: id,
            type: type,
        })
    );

    return (
        <ul className="flex border border-[#616161] bg-black text-4xl">
            {menuTypes.map(({ id, type }: IMenuTypes) => (
                <li
                    key={id}
                    style={
                        {
                            "--bg-color":
                                selectedMenuType === type ? "#f44336" : "#000",
                        } as CSSProperties
                    }
                    onClick={() => changeMenuType(type)}
                    className="bg-[var(--bg-color)] text-center py-3 flex-1 lg:hover:cursor-pointer lg:hover:bg-[#f44336]"
                >
                    {type}
                </li>
            ))}
        </ul>
    );
};

MenuHeader.displayName = "MenuHeader";

export default MenuHeader;
