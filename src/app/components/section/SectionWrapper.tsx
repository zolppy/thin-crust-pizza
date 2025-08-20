import { ReactNode } from "react";

const SectionWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-w-[320px] max-w-[964px] mx-auto text-2xl flex flex-col gap-y-6">
      {children}
    </div>
  );
};

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
