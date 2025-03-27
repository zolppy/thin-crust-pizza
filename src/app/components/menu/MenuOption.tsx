import MenuTag from "@/app/components/menu/MenuTag";
import { MenuTagEnum } from "@/utils/enums/menuTag";
import type { MenuOptionInterface } from "@/utils/types/menuOption";
import { formatMoney } from "@/utils/functions/formatters";

const MenuOption = ({
    title,
    description,
    tag,
    price,
}: Omit<MenuOptionInterface, "id">) => {
    const tagBgColor = tag === MenuTagEnum.Hot ? "#f44336" : "#ccc";
    const tagTextColor = tag === MenuTagEnum.Hot ? "#fff" : "#000";

    return (
        <div className="text-4xl py-10 flex flex-col gap-y-8">
            <div className="flex justify-between">
                <div className="flex gap-x-2 items-center">
                    <h3 className="text-black font-bold">{title}</h3>
                    {tag && (
                        <MenuTag bgColor={tagBgColor} textColor={tagTextColor}>
                            {tag}
                        </MenuTag>
                    )}
                </div>
                <span className="bg-[#616161] text-white rounded-[4px] p-2">
                    {formatMoney(price)}
                </span>
            </div>
            <span className="text-[#757575]">{description}</span>
        </div>
    );
};

MenuOption.displayName = "MenuOption";

export default MenuOption;
