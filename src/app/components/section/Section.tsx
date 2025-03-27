import { ReactNode, RefObject } from "react";

interface ISection {
    children: ReactNode;
    bgColor: string;
    ref: RefObject<HTMLElement | undefined>;
}

const Section = ({ children, bgColor, ref }: ISection) => {
    return (
        <section
            ref={ref as RefObject<HTMLElement>}
            style={
                {
                    "--bg-color": bgColor,
                } as React.CSSProperties
            }
            className="bg-[var(--bg-color)] py-[86px] px-4 flex flex-col gap-y-16"
        >
            {children}
        </section>
    );
};

Section.displayName = "Section";

export default Section;
