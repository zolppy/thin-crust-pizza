import { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-[64px] text-white text-center">{children}</h2>;
};

SectionTitle.displayName = "SectionTitle";

export default SectionTitle;
