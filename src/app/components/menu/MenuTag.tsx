import { CSSProperties, ReactNode } from "react";

interface IMenuTag {
  children: ReactNode;
  bgColor: string;
  textColor: string;
}

const MenuTag = ({ children, bgColor, textColor }: IMenuTag) => {
  return (
    <span
      style={
        {
          "--bg-color": bgColor,
          "--text-color": textColor,
        } as CSSProperties
      }
      className="bg-[var(--bg-color)] text-[var(--text-color)] p-2"
    >
      {children}
    </span>
  );
};

MenuTag.displayName = "MenuTag";

export default MenuTag;
