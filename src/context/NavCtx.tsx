"use client";

import { createContext, ReactNode, RefObject, useContext, useRef } from "react";
import { NavItemEnum } from "@/utils/enums/navItem";

interface INavCtx {
    homeRef: RefObject<HTMLElement | undefined>;
    menuRef: RefObject<HTMLElement | undefined>;
    aboutRef: RefObject<HTMLElement | undefined>;
    contactRef: RefObject<HTMLElement | undefined>;
    scrollTo: (to: NavItemEnum) => void;
}

const NavCtx = createContext<INavCtx | undefined>(undefined);

const NavProvider = ({ children }: { children: ReactNode }) => {
    const homeRef = useRef<HTMLElement | undefined>(undefined);
    const menuRef = useRef<HTMLElement | undefined>(undefined);
    const aboutRef = useRef<HTMLElement | undefined>(undefined);
    const contactRef = useRef<HTMLElement | undefined>(undefined);

    const scrollTo = (to: NavItemEnum) => {
        const settings: ScrollIntoViewOptions = { behavior: "smooth" };

        switch (to) {
            case NavItemEnum.Home:
                window.scroll({ behavior: "smooth", top: 0 });
                break;
            case NavItemEnum.Menu:
                menuRef.current?.scrollIntoView(settings);
                break;
            case NavItemEnum.About:
                aboutRef.current?.scrollIntoView(settings);
                break;
            case NavItemEnum.Contact:
                contactRef.current?.scrollIntoView(settings);
        }
    };

    return (
        <NavCtx.Provider
            value={{ homeRef, menuRef, aboutRef, contactRef, scrollTo }}
        >
            {children}
        </NavCtx.Provider>
    );
};

const useNav = (): INavCtx => {
    const context = useContext<INavCtx | undefined>(NavCtx);
    if (!context) {
        throw new Error("useNav must be used inside a NavProvider");
    }
    return context;
};

export { NavProvider, useNav };
