import { ReactNode } from "react";

const SeeMenuBtn = ({ children }: { children: ReactNode }) => {
    return (
        <button className="text-4xl bg-black self-center w-fit text-white p-4 whitespace-nowrap active:bg-[#ccc] active:text-black lg:hover:bg-[#ccc] lg:hover:text-black lg:hover:cursor-pointer">
            {children}
        </button>
    );
};

SeeMenuBtn.displayName = "SeeMenuBtn";

export default SeeMenuBtn;
